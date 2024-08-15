import Navigation from "@/components/common/navigation";
import { Inter } from "next/font/google";

// Package Styles
import 'rsuite/dist/rsuite-no-reset.min.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Global Style
import "./globals.css";

import Footer from "@/components/common/footer";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import { CustomProvider, Loader } from 'rsuite';
import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "react-hot-toast";
import AuthenticateSessionProvider from "@/components/AuthenticateSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leezo - Online shopping in bangladesh.",
};

export default function RootLayout({ children }) {
  const CustomLoader = () =>
    <NextTopLoader
      color="#FFEE00"
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #FFEE00,0 0 5px #FFEE00"
    />;
  return (
    <html lang="en">
      <head>
      </head>

      <body className={inter.className}>

        <Suspense>
          <main>

            <CustomProvider>

              <AuthenticateSessionProvider>
                <QueryProvider>

                  <CustomLoader />
                  <Toaster />
                  <Navigation />
                  {children}
                  <Footer />

                </QueryProvider>
              </AuthenticateSessionProvider>
            </CustomProvider>

          </main>

        </Suspense>
      </body>

    </html>
  );
}