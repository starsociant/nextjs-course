// Client
export default function Post({ product }: any) {
  // window
  // local storage
  return <div>{product.name}</div>;
}

// Server
export async function getStaticPaths() {
  return { paths: ["/blog/new-post"], fallback: false };
}

// Server
export async function getStaticProps() {
  // Fetch Product API.
  return {
    props: {
      product: {
        name: "Post Title",
      },
    },
  };
}
