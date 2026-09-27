import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";
import { FitLogProvider } from "./context/FitLogContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "FitLog - Workout Library",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FitLogProvider>
          <Navbar />

          {children}

          <Footer />
          
          <ToastContainer
          position="top-right"
          autoClose={2500}
          theme="dark"
        />

        <Toaster
       position="top-right"
       toastOptions={{
        duration: 2000,
        }}
        />


        </FitLogProvider>
      </body>
    </html>
  );
}