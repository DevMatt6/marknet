import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

const sectionPad: React.CSSProperties = {
	paddingInline: "clamp(24px,5vw,80px)",
};

export function MapContact() {
	return (
		<>
			<style>{`
        @media (min-width: 1024px) {
          .map-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
			<section
				style={{
					...sectionPad,
					paddingBlock: "clamp(80px,10vw,140px)",
					background: "var(--background)",
				}}
			>
				<div
					className="map-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(48px,6vw,80px)",
						alignItems: "center",
					}}
				>
					{/* Sinistra — testo */}
					<div>
						<ScrollReveal variant="fadeIn" delay={0}>
							<p
								style={{
									margin: 0,
									textTransform: "uppercase",
									fontSize: "var(--text-md)",
									letterSpacing: "0.1em",
									color: "var(--accent)",
									fontWeight: 600,
								}}
							>
								Dove siamo
							</p>
						</ScrollReveal>

						<SplitText
							text="Vieni a trovarci"
							tag="h2"
							stagger={0.04}
							delay={0.1}
							style={{
								marginTop: 16,
								fontSize: "var(--text-3xl)",
								fontWeight: 500,
								color: "var(--foreground)",
							}}
						/>

						<ScrollReveal variant="fadeUp" delay={0.3}>
							<div
								style={{
									marginTop: 32,
									display: "flex",
									flexDirection: "column",
									gap: 12,
								}}
							>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-base)",
										color: "var(--foreground)",
										lineHeight: 1.6,
									}}
								>
									Via Ludovico Micara, 41 - 00165 Roma RM
								</p>
								<a
									href="tel:+393475183978"
									style={{
										color: "var(--primary)",
										fontSize: "var(--text-base)",
										textDecoration: "none",
										fontWeight: 600,
									}}
								>
									+39 347 518 3978
								</a>
								<a
									href="mailto:info@progettiserviziv.it"
									style={{
										color: "var(--primary)",
										fontSize: "var(--text-base)",
										textDecoration: "none",
										fontWeight: 600,
									}}
								>
									info@progettiserviziv.it
								</a>
							</div>
						</ScrollReveal>

						<div style={{ marginTop: 32 }}>
							<SplitLinkButton
								href="/contatti"
								label="Contatta un consulente"
								delay={0.45}
							/>
						</div>
					</div>

					{/* Destra — Google Maps */}
					<ScrollReveal variant="fadeIn" delay={0.2}>
						<div
							style={{ aspectRatio: "4/3", width: "100%", overflow: "hidden" }}
						>
							<iframe
								src="https://maps.google.com/maps?q=Via+Ludovico+Micara,41,00165+Roma&t=&z=16&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0, display: "block" }}
								loading="lazy"
								allowFullScreen
								referrerPolicy="no-referrer-when-downgrade"
								title="Sede Progetti e Servizi V — Via Ludovico Micara 41, Roma"
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}

export default MapContact;
