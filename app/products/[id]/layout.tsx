export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />
          {children}
          <br />
          <br />
          <hr />
        </center>
      </body>
    </html>
  );
}
