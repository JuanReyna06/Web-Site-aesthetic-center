
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Centro de Estética Facial | Tratamientos Faciales y Corporales",
  description: "Centro de estética en Córdoba especializado en limpieza facial, peeling, dermapen y tratamientos personalizados para el cuidado de la piel. Atención profesional y resultados visibles."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
