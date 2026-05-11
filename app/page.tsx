import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { ApplicationsSection } from "@/components/sections/home/ApplicationsSection";
import { SoftwareSection } from "@/components/sections/home/SoftwareSection";
import { ProjectSection } from "@/components/sections/home/ProjectSection";
import { CTASection } from "@/components/sections/home/CTASection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProductsSection />
			<SoftwareSection />
			<ApplicationsSection />
			<ProjectSection />
			<CTASection />
		</>
	);
}
