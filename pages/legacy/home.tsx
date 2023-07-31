import { ProductsInterface } from "@/interfaces";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function Home({ products }: { products: ProductsInterface[] }) {
  return (
    <section className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map(({ uuid, name, price, image }) => (
        <Link
          href={`/legacy/products/${uuid}/${slugify(name)}`}
          className="rounded border border-b-4 p-3 transition hover:bg-neutral-200"
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

// Real time requests. e.g: Auth and Dashboards.
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/products`);
  const { products } = await response.json();
  return {
    props: {
      products,
    },
  };
}
