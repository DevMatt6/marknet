import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import LogosSection from "@/components/sections/home/LogosSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ShowreelSection from "@/components/sections/home/ShowreelSection";
import HomeCTASection from "@/components/sections/home/HomeCTASection";

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ShowreelSection />
				<IntroSection />
				<ServicesSection />
				<LogosSection />
				<HomeCTASection />
			</main>
			<Footer />
		</>
	);
}
