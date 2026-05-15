"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	Sparkles,
	type LucideIcon,
	Activity,
	BarChart3,
	Building2,
	ClipboardList,
	FileText,
	HardHat,
	Home,
	Hotel,
	Lightbulb,
	PenTool,
	ShieldCheck,
	SwatchBook,
	TextSearch,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

/* ─── Lucide icon resolver ─────────────────────────────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
	Activity,
	ArrowRight,
	BarChart3,
	Building2,
	CheckCircle2,
	ClipboardList,
	FileText,
	HardHat,
	Home,
	Hotel,
	Lightbulb,
	PenTool,
	ShieldCheck,
	Sparkles,
	SwatchBook,
	TextSearch,
};

function DynamicIcon({ name, size = 28 }: { name: string; size?: number }) {
	const Icon = ICON_MAP[name] ?? Sparkles;
	return <Icon size={size} strokeWidth={1.5} />;
}

/* ─── Types ────────────────────────────────────────────────────── */
export interface SectorPageProps {
	sector: {
		slug: "residenziale" | "commerciale" | "ricettivo";
		name: string;
		/** Etichetta eyebrow es. "Settore Residenziale" */
		label: string;
	};
	heroTagline: string;
	/** Immagine hero — passata da ogni page.tsx */
	heroImage: string;
	description: string[];
	descriptionTitle?: string;
	/** Percorso immagine custom; default → /images/sectors/{slug}-detail.jpg */
	descriptionImage?: string;
	services: Array<{
		title: string;
		description: string;
		icon: string;
	}>;
	process?: Array<{
		title: string;
		description: string;
		icon: string;
	}>;
	projects?: Array<{
		slug: string;
		title: string;
		location: string;
		year: string;
		image: string;
	}>;
}

/* ─── Section styles ───────────────────────────────────────────── */
const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px,10vw,140px)",
	paddingInline: "clamp(24px,5vw,80px)",
};

/* ════════════════════════════════════════════════════════════════ */
/*  1. HERO                                                         */
/* ════════════════════════════════════════════════════════════════ */
function SectorHero({
	sector,
	heroTagline,
	heroImage,
}: Pick<SectorPageProps, "sector" | "heroTagline" | "heroImage">) {
	const imgRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	return (
		<section
			style={{
				paddingBlock: "clamp(120px, 10vw, 140px)",
				paddingInline: "clamp(24px, 5vw, 80px)",
				paddingBottom: 0,
				background: "var(--surface-2)",
			}}
		>
			<div
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
					gap: "clamp(32px, 5vw, 80px)",
					alignItems: "center",
					paddingBottom: "clamp(40px, 6vw, 80px)",
				}}
			>
				{/* Sinistra: eyebrow + heading */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<ScrollReveal variant="fadeUp" delay={0}>
						<p
							style={{
								fontSize: "var(--text-sm)",
								color: "var(--accent)",
								fontWeight: 600,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								marginBottom: "var(--space-6)",
							}}
						>
							{sector.label}
						</p>
					</ScrollReveal>
					<ScrollReveal variant="fadeUp" delay={0.1}>
						<h1
							style={{
								fontSize: "var(--text-4xl)",
								fontWeight: 500,
								color: "var(--foreground)",
								lineHeight: 1.1,
								fontFamily: "var(--font-display)",
								maxWidth: 495,
								margin: 0,
							}}
						>
							{sector.name}
						</h1>
					</ScrollReveal>
				</div>

				{/* Destra: tagline + link */}
				<div style={{ display: "flex", flexDirection: "column" }}>
					<ScrollReveal variant="fadeUp" delay={0.3}>
						<p
							style={{
								marginTop: 32,
								marginBottom: 0,
								fontSize: "var(--text-base)",
								color: "var(--foreground)",
								lineHeight: 1.75,
							}}
						>
							{heroTagline}
						</p>
					</ScrollReveal>
					<div style={{ marginTop: 32 }}>
						<SplitLinkButton
							href="/contatti"
							label="Consulenza gratuita"
							delay={0.45}
						/>
					</div>
				</div>
			</div>

			{/* Immagine full-bleed con parallax */}
			<div
				ref={imgRef}
				style={{
					marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
					lineHeight: 0,
					overflow: "hidden",
					height: "clamp(260px, 40vw, 600px)",
				}}
			>
				<motion.img
					src={heroImage}
					alt={sector.name}
					width={1920}
					height={800}
					loading="lazy"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
						scale,
						transformOrigin: "center center",
					}}
				/>
			</div>
		</section>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  2. DESCRIPTION                                                  */
/* ════════════════════════════════════════════════════════════════ */
function SectorDescription({
	description,
	sector,
	descriptionTitle,
	descriptionImage,
}: Pick<
	SectorPageProps,
	"description" | "sector" | "descriptionTitle" | "descriptionImage"
>) {
	const imageRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

	const imgSrc =
		descriptionImage ?? `/images/sectors/${sector.slug}-detail.jpg`;

	return (
		<>
			<style>{`
        @media (min-width: 1024px) {
          .sec-desc-grid { grid-template-columns: 55fr 45fr !important; }
        }
      `}</style>
			<section style={{ ...sectionPad, background: "var(--surface-2)" }}>
				<div
					className="sec-desc-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(48px,6vw,80px)",
						alignItems: "center",
					}}
				>
					{/* Testo */}
					<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
						<ScrollReveal variant="fadeIn" delay={0}>
							<p
								style={{
									margin: 0,
									textTransform: "uppercase",
									fontSize: "var(--text-xs)",
									letterSpacing: "0.1em",
									color: "white",
									backgroundColor: "var(--accent)",
									display: "inline-block",
									padding: "6px 14px",
								}}
							>
								{sector.label}
							</p>
						</ScrollReveal>

						{descriptionTitle && (
							<ScrollReveal variant="fadeUp" delay={0.05}>
								<h2
									style={{
										margin: 0,
										fontSize: "var(--text-3xl)",
										fontWeight: 500,
										color: "var(--primary)",
										lineHeight: 1.3,
										maxWidth: 700,
									}}
								>
									{descriptionTitle}
								</h2>
							</ScrollReveal>
						)}

						{description.map((para, i) => (
							<ScrollReveal key={i} variant="fadeUp" delay={0.1 + i * 0.12}>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-base)",
										color: "var(--muted-foreground)",
										lineHeight: 1.75,
									}}
								>
									{para}
								</p>
							</ScrollReveal>
						))}
					</div>

					{/* Immagine con parallax */}
					<ScrollReveal variant="fadeIn" delay={0.2}>
						<div
							ref={imageRef}
							style={{ overflow: "hidden", aspectRatio: "4/3" }}
						>
							<motion.div
								style={{
									y,
									width: "100%",
									height: "116%",
									background: `url(${imgSrc}) center/cover no-repeat`,
									marginTop: "-8%",
									backgroundColor: "var(--muted)",
								}}
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  3. SERVICES                                                     */
/* ════════════════════════════════════════════════════════════════ */
function SectorServices({ services }: Pick<SectorPageProps, "services">) {
	return (
		<>
			<style>{`
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
			<section style={{ ...sectionPad, background: "var(--primary)" }}>
				{/* Header */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(min(100%,460px),1fr))",
						gap: "clamp(24px,4vw,64px)",
						alignItems: "flex-end",
						marginBottom: "clamp(40px,6vw,80px)",
					}}
				>
					<div>
						<ScrollReveal variant="fadeIn" delay={0}>
							<p
								style={{
									margin: "0 0 16px",
									textTransform: "uppercase",
									fontSize: "var(--text-xs)",
									letterSpacing: "0.1em",
									color: "var(--accent)",
									fontWeight: 600,
								}}
							>
								Cosa offriamo
							</p>
						</ScrollReveal>
						<ScrollReveal variant="fadeUp" delay={0.05}>
							<SplitText
								text="Servizi dedicati"
								tag="h2"
								stagger={0.03}
								delay={0.1}
								style={{
									fontSize: "var(--text-3xl)",
									fontWeight: 500,
									color: "white",
									margin: 0,
									lineHeight: 1.15,
								}}
							/>
						</ScrollReveal>
					</div>
					<ScrollReveal variant="fadeUp" delay={0.15}>
						<p
							style={{
								margin: 0,
								fontSize: "var(--text-base)",
								color: "rgba(255,255,255,0.65)",
								lineHeight: 1.75,
							}}
						>
							Ogni intervento è studiato sulle specificità del settore, con
							soluzioni su misura che uniscono qualità progettuale e rispetto
							dei tempi.
						</p>
					</ScrollReveal>
				</div>

				{/* Grid */}
				<div
					className="services-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(1px,0.5vw,24px)",
					}}
				>
					{services.map((svc, i) => (
						<ScrollReveal
							key={svc.title}
							variant="fadeUp"
							delay={0.1 + i * 0.08}
						>
							<div
								style={{
									padding: "clamp(24px,3vw,40px)",
									background: "color-mix(in srgb, white 8%, transparent)",
									border: "1.5px solid var(--accent)",
									display: "flex",
									flexDirection: "column",
									gap: 16,
									height: "100%",
								}}
							>
								<span style={{ color: "var(--accent)" }}>
									<DynamicIcon name={svc.icon} />
								</span>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-base)",
										fontWeight: 600,
										color: "white",
									}}
								>
									{svc.title}
								</p>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-sm)",
										color: "rgba(255,255,255,0.55)",
										lineHeight: 1.7,
									}}
								>
									{svc.description}
								</p>
							</div>
						</ScrollReveal>
					))}
				</div>
			</section>
		</>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  4. PROCESS (opzionale)                                          */
/* ════════════════════════════════════════════════════════════════ */
function SectorProcess({
	process,
}: {
	process: NonNullable<SectorPageProps["process"]>;
}) {
	return (
		<>
			<style>{`
        @media (min-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .process-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
			<section style={{ ...sectionPad, background: "var(--background)" }}>
				<ScrollReveal variant="fadeIn" delay={0}>
					<p
						style={{
							margin: "0 0 12px",
							textTransform: "uppercase",
							fontSize: "var(--text-xs)",
							letterSpacing: "0.1em",
							color: "var(--accent)",
							fontWeight: 600,
						}}
					>
						Come lavoriamo
					</p>
				</ScrollReveal>
				<ScrollReveal variant="fadeUp" delay={0.05}>
					<h2
						style={{
							margin: "0 0 clamp(40px,5vw,72px)",
							fontSize: "var(--text-3xl)",
							fontWeight: 500,
							color: "var(--foreground)",
							lineHeight: 1.2,
							maxWidth: 640,
						}}
					>
						Il nostro processo
					</h2>
				</ScrollReveal>

				<div
					className="process-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(32px,4vw,48px)",
					}}
				>
					{process.map((step, i) => (
						<ScrollReveal
							key={step.title}
							variant="fadeUp"
							delay={0.1 + i * 0.08}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: 16,
									paddingTop: 24,
									borderTop: "2px solid var(--border)",
								}}
							>
								<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
									<span
										style={{
											fontSize: "var(--text-xs)",
											fontWeight: 700,
											color: "var(--accent)",
											letterSpacing: "0.1em",
											minWidth: 28,
										}}
									>
										{String(i + 1).padStart(2, "0")}
									</span>
									<span style={{ color: "var(--accent)" }}>
										<DynamicIcon name={step.icon} size={22} />
									</span>
								</div>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-base)",
										fontWeight: 600,
										color: "var(--foreground)",
										lineHeight: 1.4,
									}}
								>
									{step.title}
								</p>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-sm)",
										color: "var(--muted-foreground)",
										lineHeight: 1.7,
									}}
								>
									{step.description}
								</p>
							</div>
						</ScrollReveal>
					))}
				</div>
			</section>
		</>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  5. PROJECTS (opzionale)                                         */
/* ════════════════════════════════════════════════════════════════ */
function SectorProjects({
	projects,
	sector,
}: Pick<SectorPageProps, "projects" | "sector">) {
	if (!projects || projects.length === 0) return null;

	return (
		<>
			<style>{`
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1280px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
			<section style={{ ...sectionPad, background: "var(--accent)" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						flexWrap: "wrap",
						gap: 24,
						marginBottom: "clamp(40px,6vw,72px)",
					}}
				>
					<div>
						<ScrollReveal variant="fadeIn" delay={0}>
							<p
								style={{
									margin: "0 0 12px",
									textTransform: "uppercase",
									fontSize: "var(--text-xs)",
									letterSpacing: "0.1em",
									color: "white",
									fontWeight: 600,
									opacity: 0.7,
								}}
							>
								Casi di successo
							</p>
						</ScrollReveal>
						<ScrollReveal variant="fadeUp" delay={0.05}>
							<h2
								style={{
									margin: 0,
									fontSize: "var(--text-3xl)",
									fontWeight: 500,
									color: "white",
									lineHeight: 1.15,
								}}
							>
								Progetti {sector.name.toLowerCase()}
							</h2>
						</ScrollReveal>
					</div>

					<ScrollReveal variant="fadeUp" delay={0.1}>
						<MagneticButton
							as="a"
							href="/progetti"
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: 8,
								padding: "12px 28px",
								border: "1px solid white",
								color: "white",
								fontSize: "var(--text-sm)",
								fontWeight: 600,
								textDecoration: "none",
								background: "transparent",
							}}
						>
							Tutti i progetti
							<ArrowRight size={16} />
						</MagneticButton>
					</ScrollReveal>
				</div>

				<div
					className="projects-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(1px,0.5vw,24px)",
					}}
				>
					{projects.map((project, i) => (
						<ScrollReveal
							key={project.slug}
							variant="fadeUp"
							delay={0.1 + i * 0.1}
						>
							<a
								href={`/progetti/${project.slug}`}
								style={{ textDecoration: "none", display: "block" }}
							>
								<div
									style={{
										position: "relative",
										overflow: "hidden",
										aspectRatio: "4/3",
										background: "var(--primary)",
									}}
								>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={project.image}
										alt={project.title}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											display: "block",
											transition: "transform 0.5s ease",
										}}
										onMouseEnter={(e) => {
											(e.currentTarget as HTMLImageElement).style.transform =
												"scale(1.04)";
										}}
										onMouseLeave={(e) => {
											(e.currentTarget as HTMLImageElement).style.transform =
												"scale(1)";
										}}
									/>
									<div
										style={{
											position: "absolute",
											bottom: 0,
											left: 0,
											right: 0,
											padding: "clamp(16px,2vw,28px)",
											background:
												"linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
										}}
									>
										<p
											style={{
												margin: "0 0 4px",
												fontSize: "var(--text-base)",
												fontWeight: 600,
												color: "white",
											}}
										>
											{project.title}
										</p>
										<p
											style={{
												margin: 0,
												fontSize: "var(--text-xs)",
												color: "rgba(255,255,255,0.65)",
											}}
										>
											{project.location} · {project.year}
										</p>
									</div>
								</div>
							</a>
						</ScrollReveal>
					))}
				</div>
			</section>
		</>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  6. CTA                                                          */
/* ════════════════════════════════════════════════════════════════ */
function SectorCTA({ sector }: Pick<SectorPageProps, "sector">) {
	return (
		<section
			style={{
				...sectionPad,
				background: "var(--primary)",
				color: "white",
				textAlign: "center",
				position: "relative",
			}}
		>
			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: "60%",
					background:
						"linear-gradient(to top, var(--accent) 0%, transparent 100%)",
					zIndex: 1,
					pointerEvents: "none",
				}}
			/>

			<div style={{ position: "relative", zIndex: 2 }}>
				<ScrollReveal variant="fadeUp" delay={0.05}>
					<SplitText
						text={`Parliamo del tuo progetto ${sector.name.toLowerCase()}`}
						tag="h2"
						stagger={0.03}
						delay={0.1}
						style={{
							fontSize: "var(--text-3xl)",
							fontWeight: 400,
							color: "white",
							margin: 0,
							lineHeight: 1.2,
						}}
					/>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.25}>
					<p
						style={{
							marginTop: 16,
							fontSize: "var(--text-base)",
							color: "rgba(255,255,255,0.7)",
							maxWidth: 500,
							marginInline: "auto",
							lineHeight: 1.65,
						}}
					>
						Contattaci per una consulenza gratuita. Ti ascoltiamo e ti
						accompagniamo dalla prima idea fino alla consegna delle chiavi.
					</p>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.4}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: 16,
							marginTop: 40,
							flexWrap: "wrap",
						}}
					>
						<MagneticButton
							as="a"
							href="/contatti"
							style={{
								padding: "14px 40px",
								background: "white",
								color: "var(--primary)",
								fontSize: "var(--text-sm)",
								fontWeight: 600,
								textDecoration: "none",
							}}
						>
							Consulenza gratuita
						</MagneticButton>
						<MagneticButton
							as="a"
							href="/servizi"
							style={{
								padding: "14px 40px",
								border: "1px solid rgba(255,255,255,0.5)",
								color: "white",
								fontSize: "var(--text-sm)",
								fontWeight: 600,
								textDecoration: "none",
								background: "transparent",
							}}
						>
							Tutti i servizi
						</MagneticButton>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  ROOT TEMPLATE                                                   */
/* ════════════════════════════════════════════════════════════════ */
export function SectorPageTemplate({
	sector,
	heroTagline,
	heroImage,
	description,
	descriptionTitle,
	descriptionImage,
	services,
	process,
	projects,
}: SectorPageProps) {
	return (
		<>
			<SectorHero
				sector={sector}
				heroTagline={heroTagline}
				heroImage={heroImage}
			/>
			<SectorDescription
				description={description}
				sector={sector}
				descriptionTitle={descriptionTitle}
				descriptionImage={descriptionImage}
			/>
			<SectorServices services={services} />
			{process && process.length > 0 && <SectorProcess process={process} />}
			<SectorProjects projects={projects} sector={sector} />
			<SectorCTA sector={sector} />
		</>
	);
}
