import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { IWishlist } from "@/interfaces/interface";

type NewWishList = Omit<IWishlist, "_id" | "detailProduct">;

class WishlistModel {
  static collection() {
    return getCollection("Wishlists");
  }
  static async addWishlist(productId: string, userId: string) {
    const newWishList: NewWishList = {
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.collection().insertOne(newWishList);

    return { message: "Success add wishlist" };
  }

  static async getWishlist(userId: string) {
    // agg lama
    // const agg = [
    //   {
    //     $match: {
    //       userId: new ObjectId(String(userId)),
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: "Books",
    //       localField: "productId",
    //       foreignField: "_id",
    //       as: "detailProduct",
    //     },
    //   },
    //   {
    //     $unwind: {
    //       path: "$detailProduct",
    //       preserveNullAndEmptyArrays: true,
    //     },
    //   },
    // ];

    // agg baru

    const agg = [
      {
        $match: {
          userId: new ObjectId("65e7f27f402da6bc1e708e7a"),
        },
      },
      {
        $group: {
          _id: "$productId",
          list: {
            $addToSet: "$$ROOT",
          },
        },
      },
      {
        $lookup: {
          from: "Books",
          localField: "_id",
          foreignField: "_id",
          as: "detailProduct",
        },
      },
      {
        $unwind: {
          path: "$detailProduct",
          preserveNullAndEmptyArrays: true,
        },
      },
    ];

    const wishlist = await this.collection().aggregate(agg).toArray();

    return wishlist;
  }

  static async getTotalWishlist(userId: string) {
    const agg = [
      {
        $match: {
          userId: new ObjectId(String(userId)),
        },
      },
    ];
    const wishlist = await this.collection().aggregate(agg).toArray();

    return wishlist.length;
  }

  static async delete(productId: string) {
    await this.collection().deleteMany({
      productId: new ObjectId(String(productId)),
    });

    return { message: "Success to delete wishlist" };
  }

  static async deleteOne(wishlistId: string) {
    await this.collection().deleteOne({
      _id: new ObjectId(String(wishlistId)),
    });

    return { message: "Success to delete one wishlist" };
  }
}

export default WishlistModel;
