"use client"
import { HeaderBanner } from "@/components/header-banner"
import { JoinAnimation } from "@/components/join-animation"
import { ImageCarousel } from "@/components/image-carousel"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeaderBanner />
      <JoinAnimation />
      <ImageCarousel />
      <Footer />
    </main>
  )
}
