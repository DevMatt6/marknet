"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

const CARD_WIDTH = 420;
const GAP = 24;

export function ProjectSection() {
	const projects = siteConfig.projects;
	const total = projects.length;

	const [current, setCurrent] = useState(0);
	const x = useMotionValue(0);
	const dragStartX = useRef(0);

	const goTo = useCallback(
		(index: number) => {
			const next = Math.max(0, Math.min(index, total - 1));
			setCurrent(next);
			animate(x, -(next * (CARD_WIDTH + GAP)), {
				type: "spring",
				stiffness: 300,
				damping: 35,
			});
		},
		[x, total],
	);

	const handleDragEnd = useCallback(() => {
		const delta = x.get() - dragStartX.current;
		if (delta < -60) goTo(current + 1);
		else if (delta > 60) goTo(current - 1);
		else goTo(current);
	}, [x, current, goTo]);

	return (
		<section
			style={{
				...sectionPad,
				background: "var(--surface-2)",
				overflow: "visible",
			}}
		>
			{/* Header */}
			<ScrollReveal variant="fadeUp" delay={0}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						marginBottom: "clamp(32px, 5vw, 56px)",
						flexWrap: "wrap",
						gap: "var(--space-4)",
					}}
				>
					<div>
						<p
							style={{
								fontSize: "var(--text-sm)",
								color: "var(--accent)",
								fontWeight: 600,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								marginBottom: "var(--space-3)",
							}}
						>
							I nostri lavori
						</p>
						<h2
							style={{
								fontSize: "var(--text-4xl)",
								fontWeight: 500,
								color: "var(--foreground)",
								lineHeight: 1.15,
								fontFamily: "var(--font-display)",
							}}
						>
							Alcuni dei nostri progetti
						</h2>
					</div>

					{/* Frecce */}
					<div style={{ display: "flex", gap: "var(--space-3)" }}>
						<button
							onClick={() => goTo(current - 1)}
							disabled={current === 0}
							aria-label="Progetto precedente"
							style={{
								width: 48,
								height: 48,
								borderRadius: 50,
								background: "var(--background)",
								color: "var(--primary)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: current === 0 ? "not-allowed" : "pointer",
								opacity: current === 0 ? 0.5 : 1,
								transition: "opacity 200ms",
							}}
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={() => goTo(current + 1)}
							disabled={current === total - 1}
							aria-label="Progetto successivo"
							style={{
								width: 48,
								height: 48,
								borderRadius: 50,
								background: "var(--background)",
								color: "var(--primary)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: current === total - 1 ? "not-allowed" : "pointer",
								opacity: current === total - 1 ? 0.3 : 1,
								transition: "opacity 200ms",
							}}
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</ScrollReveal>

			{/* Carosello drag */}
			<div style={{ overflow: "hidden", cursor: "grab" }}>
				<motion.div
					style={{
						x,
						display: "flex",
						gap: GAP,
						width: "max-content",
					}}
					drag="x"
					dragConstraints={{
						left: -((total - 1) * (CARD_WIDTH + GAP)),
						right: 0,
					}}
					dragElastic={0.08}
					onDragStart={() => {
						dragStartX.current = x.get();
					}}
					onDragEnd={handleDragEnd}
					whileDrag={{ cursor: "grabbing" }}
				>
					{projects.map((project, i) => (
						<motion.div
							key={project.slug}
							style={{
								width: CARD_WIDTH,
								flexShrink: 0,
								background: "var(--background)",
								overflow: "hidden",
								userSelect: "none",
							}}
							transition={{ duration: 0.3 }}
						>
							{/* Immagine placeholder */}
							<div
								style={{
									height: 280,
									background: "var(--surface-2)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<p
									style={{
										color: "var(--foreground)",
										opacity: 0.2,
										fontSize: "var(--text-xs)",
									}}
								>
									{project.title}
								</p>
							</div>

							{/* Info */}
							<div style={{ padding: "var(--space-6)" }}>
								<p
									style={{
										fontSize: "var(--text-xs)",
										color: "var(--accent)",
										fontWeight: 600,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										marginBottom: "var(--space-2)",
									}}
								>
									{project.category}
								</p>
								<p
									style={{
										fontSize: "var(--text-xl)",
										fontWeight: 600,
										color: "var(--foreground)",
										fontFamily: "var(--font-display)",
										marginBottom: "var(--space-2)",
									}}
								>
									{project.title}
								</p>
								<p
									style={{
										fontSize: "var(--text-sm)",
										color: "var(--foreground)",
										opacity: 0.5,
									}}
								>
									{project.location} · {project.year}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Link tutti i progetti */}
			<div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
				<SplitLinkButton
					href="/progetti"
					label="Vedi tutti i progetti"
					delay={0.45}
				/>
			</div>
		</section>
	);
}
