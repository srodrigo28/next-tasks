import type { Metadata } from "next";
import "./globals.css";

// import { SessionProvider } from "next-auth/react"
// import { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Treina Dev",
  description: "Agende sua aula ",
};

// export default function RootLayout( {Component, pageProps} : AppProps, { children }: Readonly<{
//   children: React.ReactNode;
// }>) {

export default function RootLayout( { children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* <SessionProvider session={pageProps.session}>
      </SessionProvider> */}
        <body>{children}</body>
    </html>
  );
}
