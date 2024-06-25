import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "../assets/globals.css"

const space = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cogxen",
  description:
    "Explore an extensive repository of publicly accessible personal notebooks on machine learning engineering, data science analytics, artificial intelligence, and more.",
}

/** Component */
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${space.className} w-screen h-screen bg-slate-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
