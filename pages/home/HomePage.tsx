"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import LogosSection from "@/components/sections/home/LogosSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ShowreelSection from "@/components/sections/home/ShowreelSection";

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<IntroSection />
				<ShowreelSection />
				<LogosSection />
				<ServicesSection />
			</main>
			<Footer />
		</>
	);
}
