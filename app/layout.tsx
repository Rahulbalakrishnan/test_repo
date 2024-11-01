import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";
import React from "react";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>{children}</title>
        </head>
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
