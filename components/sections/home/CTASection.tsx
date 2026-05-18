"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

export function CTASection() {
	return (
		<section
			style={{
				...sectionPad,
				position: "relative",
				textAlign: "center",
				overflow: "hidden",
			}}
		>
			{/* Immagine di sfondo */}
			<Image
				src="/images/construction-plans-architectural-project.jpg"
				alt=""
				fill
				className="object-cover"
				priority={false}
			/>
			{/* Overlay scuro */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: "rgba(5, 15, 35, 0.72)",
				}}
			/>
			{/* Contenuto */}
			<div style={{ position: "relative", zIndex: 1 }}>
				<ScrollReveal variant="fadeUp" delay={0}>
					<h2
						style={{
							fontSize: "var(--text-4xl)",
							fontWeight: 500,
							color: "#ffffff",
							lineHeight: 1.15,
							marginBottom: "var(--space-6)",
							fontFamily: "var(--font-display)",
							maxWidth: 640,
							marginInline: "auto",
						}}
					>
						Raccontaci il tuo progetto
					</h2>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.1}>
					<p
						style={{
							fontSize: "var(--text-md)",
							color: "rgba(255,255,255,0.7)",
							maxWidth: 560,
							marginInline: "auto",
							lineHeight: 1.7,
							marginBottom: "var(--space-10)",
						}}
					>
						Che tu stia pensando a un piccolo restyling o a una ristrutturazione
						completa, il primo passo è una conversazione. Preventivi senza
						impegno.
					</p>
				</ScrollReveal>

				{/* Link tutti i progetti */}
				<div
					style={{ marginTop: 32, display: "flex", justifyContent: "center" }}
				>
					<SplitLinkButton
						href="/contatti"
						label="Richiedi una consulenza"
						delay={0.45}
					/>
				</div>
			</div>
		</section>
	);
}
