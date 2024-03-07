import { ObjectId } from "mongodb";

export interface IProduct {
  _id: ObjectId;
  author: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: [string];
  createdAt: Date;
  updatedAt: Date;
}
