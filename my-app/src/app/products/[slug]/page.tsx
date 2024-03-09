import AddToCart from "@/components/addToCart";
import Footer from "@/components/footer";
import { NavbarProductsDetail } from "@/components/navbar";

import { IProduct } from "@/interfaces/interface";
const baseUrl = process.env.BASE_URL;

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getDataBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function getDataBySlug(slug: string) {
  const response = await fetch(baseUrl + "products/" + slug);
  const product = (await response.json()) as IProduct;
  return product;
}

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getDataBySlug(params.slug);

  return (
    <>
      <NavbarProductsDetail />
      <div className="mx-10 mt-32 mb-2 min-h-96 flex gap-2">
        {product != null ? (
          <>
            {" "}
            <div className="w-64 h-80 shadow-lg">
              <div
                className="w-full h-full rounded-lg"
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="w-1/2 shadow-lg p-5">
              <p className="text-xl font-base">{product.author}</p>
              <p className="text-2xl font-semibold">
                {`"`}
                {product.name}
                {`"`}
              </p>
              <p className="mt-5 font-semibold">Deskripsi Buku:</p>
              <p className="text-justify">{product.description}</p>
              <p className="mt-5 font-semibold">Excerpt:</p>
              <p className="text-justify">{product.excerpt}</p>
              <p></p>
            </div>
            <AddToCart productId={String(product._id)} />
          </>
        ) : (
          <div>Not Found</div>
        )}
      </div>
      <Footer />
    </>
  );
}
