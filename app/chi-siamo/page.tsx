import type { Metadata } from "next";
import HeroChiSiamo from "./_HeroChiSiamo";
import { ValoriList } from "./_ValoriList";
import { MapContact } from "./_MapContact";

/* ─── Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
	title: "Chi Siamo — Progetti e Servizi V",
	description:
		"Uno studio di architettura e interior design a Roma. Progettiamo spazi residenziali, commerciali e ricettivi con metodo e cura.",
};

/* ════════════════════════════════════════════════════════════════ */
/*  PAGE                                                            */
/* ════════════════════════════════════════════════════════════════ */
export default function ChiSiamoPage() {
	return (
		<>
			<HeroChiSiamo />
			<ValoriList />
			<MapContact />
		</>
	);
}
