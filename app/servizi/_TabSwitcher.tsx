"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TABS = [
	{
		id: "residenziale",
		link: "/servizi/residenziale",
		label: "Residenziale",
		image: "/images/colorful-pastel-minimal-interior-design.jpg",
		title: "Soluzioni per il residenziale",
		description:
			"Progettiamo e realizziamo impianti su misura per abitazioni private e condomini, garantendo comfort, efficienza energetica e massima affidabilità in ogni ambiente domestico.",
		features: [
			"Progettazione personalizzata per ogni tipologia abitativa",
			"Impianti ad alta efficienza energetica e basso impatto ambientale",
			"Assistenza e manutenzione continuativa post-intervento",
		],
	},
	{
		id: "commerciale",
		link: "/servizi/commerciale",
		label: "Commerciale",
		image: "/images/modern-minimalist-office.jpg",
		title: "Soluzioni per il commerciale",
		description:
			"Offriamo servizi integrati per uffici, negozi, centri commerciali e spazi direzionali, con soluzioni scalabili che ottimizzano i consumi e garantiscono la continuità operativa.",
		features: [
			"Sistemi integrati per edifici commerciali e direzionali",
			"Ottimizzazione dei consumi e riduzione dei costi operativi",
			"Conformità alle normative di settore e certificazioni energetiche",
		],
	},
	{
		id: "ricettivo",
		link: "/servizi/ricettivo",
		label: "Ricettivo",
		image: "/images/luxury-classic-modern-bedroom-suite-hotel.jpg",
		title: "Soluzioni per il ricettivo",
		description:
			"Supportiamo hotel, resort e strutture ricettive con impianti tecnologici all'avanguardia, pensati per elevare l'esperienza degli ospiti e semplificare la gestione delle strutture.",
		features: [
			"Impianti dedicati a hotel, B&B e strutture turistiche",
			"Automazione e controllo centralizzato degli ambienti",
			"Interventi rapidi con minimo impatto sull'operatività",
		],
	},
] as const;

export function TabSwitcher() {
	const [active, setActive] = useState<string>(TABS[0].id);
	const current = TABS.find((t) => t.id === active)!;

	return (
		<>
			<style>{`
				@media (min-width: 768px) {
					.tab-content-grid { grid-template-columns: 45fr 55fr !important; }
				}
			`}</style>
			<section
				style={{
					paddingBlock: "clamp(80px,10vw,200px)",
					paddingInline: "clamp(24px,5vw,80px)",
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
							justifyContent: "center",
							display: "flex",
						}}
					>
						Settori
					</p>
				</ScrollReveal>
				{/* Titolo centrato */}
				<ScrollReveal variant="fadeUp" delay={0.1}>
					<h2
						style={{
							textAlign: "center",
							fontSize: "var(--text-4xl)",
							fontWeight: 500,
							color: "var(--foreground)",
							fontFamily: "var(--font-display)",
							lineHeight: 1.1,
							marginBottom: "clamp(20px,5vw,40px)",
						}}
					>
						Settori in cui operiamo
					</h2>
				</ScrollReveal>

				{/* Tab bar */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 0,
						marginBottom: "clamp(40px,5vw,64px)",
					}}
				>
					<ScrollReveal variant="fadeUp" delay={0.2}>
						{TABS.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActive(tab.id)}
								style={{
									background:
										active === tab.id ? "var(--accent)" : "var(--surface-2)",
									border: "none",
									padding: "12px 24px",
									fontSize: "var(--text-sm)",
									fontWeight: active === tab.id ? 600 : 500,
									color:
										active === tab.id ? "white" : "var(--muted-foreground)",
									cursor: "pointer",
									marginBottom: -1,
									transition: "color 200ms, background-color 200ms",
								}}
							>
								{tab.label}
							</button>
						))}
					</ScrollReveal>
				</div>

				{/* Tab content grid */}
				<div
					className="tab-content-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(32px,5vw,64px)",
						alignItems: "center",
					}}
				>
					{/* LEFT — image */}
					<div
						style={{
							aspectRatio: "4/3",
							overflow: "hidden",
							position: "relative",
							borderRadius: 16,
						}}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id}
								initial={{ opacity: 0, scale: 1.04 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 1.04 }}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
									inset: 0,
								}}
							>
								{current.image ? (
									// eslint-disable-next-line @next/next/no-img-element
									<img
										src={current.image}
										alt={current.title}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											display: "block",
										}}
										onError={(e) => {
											(e.currentTarget as HTMLImageElement).style.display =
												"none";
											const placeholder = e.currentTarget
												.nextSibling as HTMLElement | null;
											if (placeholder) placeholder.style.display = "block";
										}}
									/>
								) : null}
								<div
									style={{
										display: current.image ? "none" : "block",
										width: "100%",
										height: "100%",
										background:
											"linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 50%, white) 100%)",
									}}
								/>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* RIGHT — text */}
					<AnimatePresence mode="wait">
						<motion.div
							key={active}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
						>
							<h3
								style={{
									margin: 0,
									fontSize: "var(--text-2xl)",
									fontWeight: 500,
									color: "var(--primary)",
								}}
							>
								{current.title}
							</h3>
							<p
								style={{
									marginTop: 16,
									fontSize: "var(--text-base)",
									color: "var(--muted-foreground)",
									lineHeight: 1.75,
									maxWidth: 640,
								}}
							>
								{current.description}
							</p>
							<ul
								style={{
									marginTop: 24,
									paddingLeft: 0,
									listStyle: "none",
									display: "flex",
									flexDirection: "column",
									gap: 12,
								}}
							>
								{current.features.map((feat) => (
									<li
										key={feat}
										style={{
											display: "flex",
											alignItems: "center",
											gap: 12,
											fontSize: "var(--text-md)",
											color: "var(--primary)",
										}}
									>
										<span
											style={{
												width: 6,
												height: 6,
												background: "var(--accent)",
												flexShrink: 0,
												borderRadius: "50%",
											}}
										/>
										{feat}
									</li>
								))}
							</ul>
							<div style={{ marginTop: 60 }}>
								<SplitLinkButton href={current.link} label="Scopri i servizi" />
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</section>
		</>
	);
}
