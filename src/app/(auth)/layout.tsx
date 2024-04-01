import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth page",
  description: "This is a AuthPage",
};

export default function RootLayout({children,}: 
  {
    children: React.ReactNode
  }) {
    return ( 
      <html lang="en">
      <head></head>
        <body className={`${inter.className}`}>
          {children}
        </body>
      </html>     
    )
  }