import HeroServizi from "@/components/sections/servizi/HeroServizi";
import { ServiziIntro } from "@/components/sections/servizi/ServiziIntro";
import { ServiziList } from "@/components/sections/servizi/ServiziList";
import SettoriSection from "@/components/sections/servizi/SettoriSection";
import { CTASection } from "@/components/sections/home/CTASection";

export default async function ServicesPage() {
	return (
		<>
			<HeroServizi />
			<ServiziIntro />
			<ServiziList />
			<SettoriSection />
			<CTASection />
		</>
	);
}
