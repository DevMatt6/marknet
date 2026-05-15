"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SETTORI = [
	{
		href: "/servizi/residenziale",
		label: "Residenziale",
		description:
			"Appartamenti, ville, loft. Ristrutturazioni chiavi in mano per ambienti privati: dal progetto alla consegna, con un unico referente e zero pensieri.",
	},
	{
		href: "/servizi/commerciale",
		label: "Commerciale",
		description:
			"Uffici, showroom, negozi, studi professionali. Spazi pensati per esprimere l'identità del tuo brand e accogliere clienti e collaboratori nel migliore dei modi.",
	},
	{
		href: "/servizi/ricettivo",
		label: "Strutture Ricettive",
		description:
			"Hotel, B&B, case vacanza. Progettiamo ambienti capaci di offrire un'esperienza memorabile agli ospiti, nel pieno rispetto delle normative di settore.",
	},
];

export function SettoriSection() {
	return (
		<section
			style={{
				paddingBlock: "clamp(80px, 10vw, 140px)",
				paddingInline: "clamp(24px, 5vw, 80px)",
				background: "var(--background)",
			}}
		>
			{/* Header */}
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
					Settori
				</p>
			</ScrollReveal>

			<ScrollReveal variant="fadeUp" delay={0.1}>
				<h2
					style={{
						fontSize: "var(--text-4xl)",
						fontWeight: 500,
						fontFamily: "var(--font-display)",
						color: "var(--foreground)",
						lineHeight: 1.15,
						marginBottom: "clamp(40px, 6vw, 80px)",
						maxWidth: 700,
					}}
				>
					In quali ambiti operiamo
				</h2>
			</ScrollReveal>

			{/* Cards */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
					gap: "var(--space-6)",
				}}
			>
				{SETTORI.map((settore, i) => (
					<ScrollReveal
						key={settore.href}
						variant="fadeUp"
						delay={0.1 + i * 0.1}
					>
						<Link
							href={settore.href}
							className="settore-card"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								gap: "var(--space-6)",
								padding: "var(--space-8)",
								border: "1px solid oklch(from var(--foreground) l c h / 0.12)",
								textDecoration: "none",
								color: "inherit",
								transition: "background 0.3s ease",
							}}
						>
							<div>
								<h3
									style={{
										fontSize: "var(--text-xl)",
										fontWeight: 700,
										fontFamily: "var(--font-display)",
										color: "var(--foreground)",
										marginBottom: "var(--space-3)",
									}}
								>
									{settore.label}
								</h3>
								<p
									style={{
										fontSize: "var(--text-base)",
										color: "var(--foreground)",
										opacity: 0.6,
										lineHeight: 1.7,
									}}
								>
									{settore.description}
								</p>
							</div>

							<span
								className="settore-arrow"
								style={{
									fontSize: "var(--text-lg)",
									color: "var(--accent)",
									display: "inline-block",
									transition: "transform 0.3s ease",
									alignSelf: "flex-start",
								}}
							>
								→
							</span>
						</Link>
					</ScrollReveal>
				))}
			</div>

			<style>{`
				.settore-card:hover {
					background: color-mix(in oklch, var(--foreground) 4%, var(--background));
				}
				.settore-card:hover .settore-arrow {
					transform: translateX(4px);
				}
			`}</style>
		</section>
	);
}

export default SettoriSection;
