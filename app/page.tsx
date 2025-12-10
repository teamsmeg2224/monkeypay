import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import PopupModal from "@/components/PopupModal";
import BrandTicker from "@/components/BrandTicker";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MainBanner />
      <PopupModal />
      <BrandTicker />
      <Features />
      <Process />
      <Reviews />
      <FAQ />
      <Footer />
      <FloatingButton />
    </main>
  );
}
