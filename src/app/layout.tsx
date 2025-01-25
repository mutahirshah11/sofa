import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { CartProvider } from "./components/Provider";
import ClerkProviderWrapper from "./components/clerkProvider"; // Import the wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProviderWrapper>
          <CartProvider>
            {children}
            <Footer />
            <Analytics />
          </CartProvider>
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
