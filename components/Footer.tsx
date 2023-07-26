export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="text-center py-3">{year} | LISTERINE ©</footer>;
}
