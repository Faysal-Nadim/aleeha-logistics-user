"use client";
import Drawer from "@components/Drawer";
import Nossr from "@components/nossr";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Suspense } from "react";
import LoadingLandingPage from "./loading";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.75"
        />
        <meta
          name="description"
          content="Get ready to win with AleehaLogistics's Monthly Draw. Option to score fantastic prizes. Join now for your shot at some great rewards."
        />
        <link rel="icon" href="./icon.svg" sizes="any" />
        <title>AleehaLogistics Monthly Draw - Win Great Prizes</title>
        <Script
          defer
          id="G-41FB2GZZX5"
          src="https://www.googletagmanager.com/gtag/js?id=G-41FB2GZZX5"
          onError={(err) => {
            console.error("Error", err);
          }}
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-41FB2GZZX5");
          }}
        />

        <Script
          defer
          id="AW-11280973564"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11280973564"
          onError={(err) => {
            console.error("Error", err);
          }}
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "AW-11280973564");
          }}
        />
      </head>
      <body className="main">
        {" "}
        <Suspense fallback={<LoadingLandingPage />}>
          <Nossr>
            <Provider store={store}>
              <Drawer>{children}</Drawer>
            </Provider>
          </Nossr>
        </Suspense>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
