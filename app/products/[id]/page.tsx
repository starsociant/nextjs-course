import Image from "next/image";
import products from "../../../data/products.json";

async function fetchData(id: string) {
  return products.find((product: any) => {
    return product.uuid === id;
  });
}

// Server
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchData(params.id);

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

export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/products");
  const { products } = await response.json();
  return products.map(({ uuid }) => ({ id: uuid }));
}
