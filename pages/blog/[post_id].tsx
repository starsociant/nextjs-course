export default function Post({ product }: any) {
  return <div>{product.name}</div>;
}

export async function getStaticPaths() {
  return { paths: ["/blog/new-post"], fallback: false };
}

export async function getStaticProps() {
  // Fetch Product API.
  return {
    props: {
      product: {
        name: "Product Name",
      },
    },
  };
}
