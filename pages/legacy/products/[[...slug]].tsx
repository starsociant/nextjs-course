import { ProductsInterface } from "@/interfaces";
import slugify from "slugify";
import Image from "next/image";

export default function ProductPage({ product }: { product: any }) {
  if (!product) {
    return <div>Not Found</div>;
  }
  const { name, image, description, price } = product;
  return (
    <section>
      <h1>{name}</h1>
      <br />
      <p>{description}</p>
      <br />
      <Image src={image} alt={name} width={256} height={256} />
      <br />
      <span>{price}</span>
    </section>
  );
}

export async function getStaticPaths() {
  // [slug]
  // /products/uuid

  // [...slug]
  // /products/uuid
  // /products/uuid/name
  // /products/uuid/name/sku

  // [[slug]]
  // /products
  // /products/uuid

  // [[...slug]]
  // /products
  // /products/uuid
  // /products/uuid/name
  // /products/uuid/name/sku

  const response = await fetch(`http://localhost:3000/api/products`);
  const { products } = await response.json();
  const paths = (products as ProductsInterface[]).map(({ uuid, name }) => {
    return {
      params: {
        slug: [uuid, slugify(name)],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const [uuid] = slug;
  const response = await fetch(`http://localhost:3000/api/products/${uuid}`);
  const { product } = await response.json();
  return { props: { product } };
}
