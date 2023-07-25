import Link from "next/link";

async function fetchData() {
  const response = await fetch("http://localhost:3000/api/products");
  return response.json();
}

// Server
export default async function ProductPage() {
  const { products } = await fetchData();
  console.log(products);

  if (!products.length) {
    return <div>Not Found</div>;
  }

  return (
    <section>
      <ul>
        {products.map((products) => (
          <li key={products.uuid}>
            <Link href={`/products/${products.uuid}`}>
              {products.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
