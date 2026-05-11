import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

const SECTORS = [
	{
		label: "Residenziale",
		text: "Appartamenti, ville, loft. Trasformiamo lo spazio in cui vivi in un luogo che rispecchia chi sei — con soluzioni funzionali e materiali di qualità.",
		image: "/images/cozy-interior-design-with-orange-armchair-decor.jpg",
	},
	{
		label: "Commerciale",
		text: "Uffici, showroom, negozi. Progettiamo ambienti di lavoro e vendita che comunicano professionalità e mettono il cliente al centro.",
		image:
			"/images/neoclassical-style-interior-design-with-decor-furnishings.jpg",
	},
	{
		label: "Strutture Ricettive",
		text: "Hotel, B&B, case vacanza. Creiamo spazi capaci di offrire un'esperienza memorabile agli ospiti, rispettando i vincoli normativi del settore.",
		image: "/images/pillow-bed-luxury-hotel-room.jpg",
	},
];

export function ProductsSection() {
	return (
		<section style={{ ...sectionPad, background: "var(--background)" }}>
			<ScrollReveal variant="fadeUp" delay={0}>
				<p
					style={{
						fontSize: "var(--text-sm)",
						color: "var(--accent)",
						fontWeight: 600,
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						marginBottom: "var(--space-4)",
					}}
				>
					Progetti su misura
				</p>
			</ScrollReveal>

			<ScrollReveal variant="fadeUp" delay={0.1}>
				<h2
					style={{
						fontSize: "var(--text-4xl)",
						fontWeight: 500,
						color: "var(--foreground)",
						lineHeight: 1.15,
						marginBottom: "clamp(40px, 6vw, 80px)",
						fontFamily: "var(--font-display)",
						maxWidth: 850,
					}}
				>
					Dall'arredo su misura agli ambienti commerciali progettiamo ogni
					spazio con cura.
				</h2>
			</ScrollReveal>

			<div
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
					gap: "var(--space-6)",
				}}
			>
				{SECTORS.map((card, i) => (
					<ScrollReveal key={card.label} variant="fadeUp" delay={0.1 + i * 0.1}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "var(--space-4)",
							}}
						>
							<div
								className="group relative"
								style={{
									height: 600,
									marginBottom: "var(--space-2)",
									borderRadius: 20,
									overflow: "hidden",
								}}
							>
								<Image
									src={card.image}
									alt={card.label}
									fill
									className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							</div>

							<h3
								style={{
									fontSize: "var(--text-xl)",
									fontWeight: 500,
									color: "var(--foreground)",
									fontFamily: "var(--font-display)",
								}}
							>
								{card.label}
							</h3>

							<p
								style={{
									fontSize: "var(--text-base)",
									color: "var(--foreground)",
									lineHeight: 1.7,
								}}
							>
								{card.text}
							</p>
						</div>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
