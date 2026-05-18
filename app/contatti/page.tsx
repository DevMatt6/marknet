import type { Metadata } from "next";
import { HeroContatti } from "./_HeroContatti";
import { ContactForm } from "./_ContactForm";

export const metadata: Metadata = {
	title: "Contatti — Progetti e Servizi V",
	description:
		"Contatta il nostro studio di architettura a Roma. Ristrutturazioni residenziali, commerciali e ricettive. Rispondiamo entro 24 ore.",
};

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

export default function ContattiPage() {
	return (
		<>
			<HeroContatti />
			<section style={{ ...sectionPad, background: "var(--background)" }}>
				<ContactForm />
			</section>
		</>
	);
}
