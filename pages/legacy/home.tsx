import { ProductsInterface } from "@/interfaces";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {products.map(({ uuid, name, price, image }) => (
        <Link
          href={`/legacy/products/${uuid}/${slugify(name)}`}
          className="border border-b-4 rounded p-3 hover:bg-neutral-200 transition"
          key={uuid}
        >
          <h4 className={`text-xl font-medium`}>{name}</h4>
          <p className="text-lg text-[#D50000]">US$ {price}</p>
          <Image src={image} alt={name} width={256} height={256} />
        </Link>
      ))}
    </section>
  );
}

export const getStaticProps: GetStaticProps<{
  products: ProductsInterface[];
}> = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const { products } = await response.json();
  return { props: { products } };
};
