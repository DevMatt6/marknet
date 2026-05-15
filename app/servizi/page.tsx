import HeroServizi from "@/components/sections/servizi/HeroServizi";
import { ServiziList } from "@/components/sections/servizi/ServiziList";
import { CTASection } from "@/components/sections/home/CTASection";
import { TabSwitcher } from "./_TabSwitcher";

export default async function ServicesPage() {
	return (
		<>
			<HeroServizi />
			<ServiziList />
			<TabSwitcher />
			<CTASection />
		</>
	);
}
