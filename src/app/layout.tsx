import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/scss/main.scss";
import AppProvider from "./context";

// Using Next.js font optimization for the Inter font family
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata configuration for SEO and browser tab display
 * This will be applied to all pages unless overridden
 */
export const metadata: Metadata = {
    title: "BACM Portfolio",
    description: "Brandon's Portfolio Website",
};

/**
 * RootLayout Component
 * 
 * This is the main layout wrapper for the entire application.
 * It provides:
 * - HTML structure with proper lang attribute
 * - Font styling via the Inter font
 * - Bootstrap CSS and JS integration
 * - Global context via AppProvider
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">

            <head>
                {/* Bootstrap CSS from CDN */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />            

            </head>

            <body className={inter.className}>

                <AppProvider>
                    {/* Global context is handled here */}
                    {children}
                </AppProvider> 

                {/* Bootstrap JavaScript bundle from CDN */}
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                />

            </body>

        </html>
    );

}