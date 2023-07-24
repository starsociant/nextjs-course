export default function ProductPage({ params }: { params: { id: any } }) {
  return <div>Product Page - {params.id}</div>;
}