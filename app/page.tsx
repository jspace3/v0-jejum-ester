"use client"
import { HeaderBanner } from "@/components/header-banner"
import { ImageCarousel } from "@/components/image-carousel"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeaderBanner />
      <ImageCarousel />
      <Footer />
    </main>
  )
}
