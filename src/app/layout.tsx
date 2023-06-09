import Providers from "./components/Providers";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

// const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });
const poppins = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "LoveChat",
  description: "love chat, real time messaging, chat, love to chat, next js chat app, redis chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
