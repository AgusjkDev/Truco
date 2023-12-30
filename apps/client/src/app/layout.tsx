import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Truco",
    description: "La plataforma definitiva para jugar al Truco Argentino.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
