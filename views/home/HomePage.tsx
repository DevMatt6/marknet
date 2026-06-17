import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import LogosSection from "@/components/sections/home/LogosSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ShowreelSection from "@/components/sections/home/ShowreelSection";
import HomeCTASection from "@/components/sections/home/HomeCTASection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import RecruitingCTASection from "@/components/sections/home/RecruitingCTASection";

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ShowreelSection />
				<IntroSection />
				<ServicesSection />
				<HowItWorksSection />
				<LogosSection />
				<HomeCTASection />
				<RecruitingCTASection />
			</main>
			<Footer />
		</>
	);
}
