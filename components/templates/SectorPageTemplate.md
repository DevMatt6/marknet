"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
ArrowRight,
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
type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";

/_ ─── Lucide icon resolver ─────────────────────────────────────── _/
const ICON_MAP: Record<string, LucideIcon> = {
ArrowRight,
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

/_ ─── Types ────────────────────────────────────────────────────── _/
export interface SectorPageProps {
sector: {
slug: "residenziale" | "commerciale" | "ricettivo";
name: string;
/** Etichetta eyebrow es. "Settore Residenziale" \*/
label: string;
};
heroTagline: string;
description: string[];
descriptionTitle?: string;
/** Percorso immagine custom; default → /images/sectors/{slug}.jpg \*/
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

/_ ─── Section styles ───────────────────────────────────────────── _/
const sectionPad: React.CSSProperties = {
paddingBlock: "clamp(80px,10vw,140px)",
paddingInline: "clamp(24px,5vw,80px)",
};

/_ ════════════════════════════════════════════════════════════════ _/
/_ 1. HERO _/
/_ ════════════════════════════════════════════════════════════════ _/
function SectorHero({
sector,
heroTagline,
}: Pick<SectorPageProps, "sector" | "heroTagline">) {
return (
<section
style={{
				...sectionPad,
				background: `url(/images/sectors/${sector.slug}.jpg) center/cover no-repeat var(--primary)`,
				position: "relative",
				minHeight: "70vh",
				display: "flex",
				alignItems: "flex-end",
			}} >
{/_ Gradient overlay _/}
<div
style={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
					zIndex: 1,
					pointerEvents: "none",
				}}
/>

    		{/* Content */}
    		<div style={{ position: "relative", zIndex: 2, width: "100%" }}>
    			{/* Eyebrow */}
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

    			{/* H1 */}
    			<SplitText
    				text={sector.name}
    				tag="h1"
    				stagger={0.04}
    				delay={0.1}
    				style={{
    					marginTop: 16,
    					fontSize: "clamp(var(--text-3xl), 6vw, 4rem)",
    					fontWeight: 400,
    					lineHeight: 1,
    					color: "white",
    				}}
    			/>

    			{/* Tagline */}
    			<ScrollReveal variant="fadeUp" delay={0.3}>
    				<p
    					style={{
    						marginTop: 20,
    						fontSize: "var(--text-lg)",
    						color: "rgba(255,255,255,0.8)",
    						maxWidth: 600,
    						lineHeight: 1.6,
    					}}
    				>
    					{heroTagline}
    				</p>
    			</ScrollReveal>

    			{/* CTAs */}
    			<ScrollReveal variant="fadeUp" delay={0.5}>
    				<div
    					style={{
    						display: "flex",
    						gap: 16,
    						marginTop: 32,
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
    						href="/progetti"
    						style={{
    							padding: "14px 40px",
    							border: "1px solid white",
    							color: "white",
    							fontSize: "var(--text-sm)",
    							fontWeight: 600,
    							textDecoration: "none",
    							background: "transparent",
    						}}
    					>
    						Vedi i progetti
    					</MagneticButton>
    				</div>
    			</ScrollReveal>
    		</div>
    	</section>
    );

}

/_ ════════════════════════════════════════════════════════════════ _/
/_ 2. DESCRIPTION _/
/_ ════════════════════════════════════════════════════════════════ _/
function SectorDescription({
description,
sector,
descriptionTitle,
descriptionImage,
}: Pick<
SectorPageProps,
"description" | "sector" | "descriptionTitle" | "descriptionImage"

> ) {

    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
    	target: imageRef,
    	offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    const imgSrc = descriptionImage ?? `/images/sectors/${sector.slug}-detail.jpg`;

    return (
    	<>
    		<style>{`
        @media (min-width: 1024px) {
          .sec-desc-grid { grid-template-columns: 55fr 45fr !important; }
        }
      `}</style>
    		<section style={{ ...sectionPad, background: "white" }}>
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
    						style={{ overflow: "hidden", aspectRatio: "4/5" }}
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

/_ ════════════════════════════════════════════════════════════════ _/
/_ 3. SERVICES _/
/_ ════════════════════════════════════════════════════════════════ _/
function SectorServices({
services,
}: Pick<SectorPageProps, "services">) {
return (
<>
<style>{`         @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
<section style={{ ...sectionPad, background: "var(--primary)" }}>
{/_ Header _/}
<div
style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,460px),1fr))",
						gap: "clamp(24px,4vw,64px)",
						alignItems: "flex-end",
						marginBottom: "clamp(40px,6vw,80px)",
					}} >
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
								}} >
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
							}} >
Ogni intervento è studiato sulle specificità del settore, con
soluzioni su misura che uniscono qualità progettuale e rispetto dei
tempi.
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

/_ ════════════════════════════════════════════════════════════════ _/
/_ 4. PROCESS (opzionale) _/
/_ ════════════════════════════════════════════════════════════════ _/
function SectorProcess({
process,
}: {
process: NonNullable<SectorPageProps["process"]>;
}) {
return (
<>
<style>{`         @media (min-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .process-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
<section style={{ ...sectionPad, background: "var(--background)" }}>
{/_ Header _/}
<ScrollReveal variant="fadeIn" delay={0}>
<p
style={{
							margin: "0 0 12px",
							textTransform: "uppercase",
							fontSize: "var(--text-xs)",
							letterSpacing: "0.1em",
							color: "var(--accent)",
							fontWeight: 600,
						}} >
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
						}} >
Il nostro processo
</h2>
</ScrollReveal>

    			{/* Steps */}
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
    							{/* Numero + icona */}
    							<div
    								style={{
    									display: "flex",
    									alignItems: "center",
    									gap: 12,
    								}}
    							>
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

/_ ════════════════════════════════════════════════════════════════ _/
/_ 5. PROJECTS (opzionale) _/
/_ ════════════════════════════════════════════════════════════════ _/
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
    			{/* Header */}
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

    			{/* Grid */}
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
    								{/* Overlay */}
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

/_ ════════════════════════════════════════════════════════════════ _/
/_ 6. CTA _/
/_ ════════════════════════════════════════════════════════════════ _/
function SectorCTA({ sector }: Pick<SectorPageProps, "sector">) {
return (
<section
style={{
				...sectionPad,
				background: "var(--primary)",
				color: "white",
				textAlign: "center",
				position: "relative",
			}} >
{/_ Gradient overlay _/}
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

    		{/* Content */}
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

/_ ════════════════════════════════════════════════════════════════ _/
/_ ROOT TEMPLATE _/
/_ ════════════════════════════════════════════════════════════════ _/
export function SectorPageTemplate({
sector,
heroTagline,
description,
descriptionTitle,
descriptionImage,
services,
process,
projects,
}: SectorPageProps) {
return (
<>
<SectorHero sector={sector} heroTagline={heroTagline} />
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

/_ ════════════════════════════════════════════════════════════════ _/
/_ ESEMPIO DI UTILIZZO — app/servizi/residenziale/page.tsx _/
/_ ════════════════════════════════════════════════════════════════ _/

/\*
import { SectorPageTemplate } from "@/components/templates/SectorPageTemplate";

export default function ResidenzialePage() {
return (
<SectorPageTemplate
sector={{
        slug: "residenziale",
        name: "Residenziale",
        label: "Settore Residenziale",
      }}
heroTagline="Trasformiamo la tua casa in uno spazio su misura, curandone ogni dettaglio dalla progettazione alla consegna."
descriptionTitle="La tua casa, il tuo stile"
description={[
"Ogni abitazione racconta una storia. Il nostro approccio parte dall'ascolto: capire come vivi, cosa ami e come immagini i tuoi spazi è il primo passo verso un progetto davvero tuo.",
"Dall'appartamento in città alla villa, affianchiamo i nostri clienti con competenza e cura, gestendo ogni fase dei lavori — dai permessi alla direzione cantiere — con totale trasparenza.",
]}
services={[
{
icon: "TextSearch",
title: "Analisi e consulenza iniziale",
description:
"Sopralluogo tecnico, ascolto delle esigenze e definizione degli obiettivi di progetto. Nessun costo per la prima consulenza.",
},
{
icon: "PenTool",
title: "Progettazione architettonica",
description:
"Elaborazione di piante, render 3D e documentazione tecnica completa per visualizzare il risultato finale prima di iniziare i lavori.",
},
{
icon: "SwatchBook",
title: "Selezione materiali e arredi",
description:
"Selezione guidata di materiali, finiture e complementi d'arredo, con accesso ai migliori fornitori del settore.",
},
{
icon: "Lightbulb",
title: "Progetto impianti e illuminazione",
description:
"Studio degli impianti elettrici, idraulici e termici, con particolare attenzione all'efficienza energetica e al comfort.",
},
{
icon: "FileText",
title: "Pratiche burocratiche",
description:
"Gestione completa di permessi, CILA, SCIA e ogni adempimento normativo necessario per procedere in sicurezza.",
},
{
icon: "HardHat",
title: "Direzione lavori e collaudo",
description:
"Coordinamento delle imprese esecutrici, supervisione quotidiana del cantiere e collaudo finale prima della consegna.",
},
]}
process={[
{
icon: "TextSearch",
title: "Sopralluogo e analisi",
description:
"Visitiamo l'immobile, rileviamo lo stato di fatto e ascoltiamo le tue aspettative per costruire insieme il brief di progetto.",
},
{
icon: "PenTool",
title: "Concept e progetto definitivo",
description:
"Sviluppiamo il concept creativo e lo traduciamo in elaborati tecnici condivisi e approvati con il cliente.",
},
{
icon: "FileText",
title: "Iter autorizzativo",
description:
"Predisponiamo e depositiamo tutta la documentazione presso gli enti competenti, gestendo l'iter burocratico dall'inizio alla fine.",
},
{
icon: "HardHat",
title: "Esecuzione e direzione lavori",
description:
"Selezioniamo le migliori imprese, coordiniamo il cantiere e garantiamo il rispetto di tempi, costi e qualità.",
},
{
icon: "CheckCircle2",
title: "Collaudo e consegna",
description:
"Verifichiamo ogni dettaglio prima di consegnarti le chiavi, con tutta la documentazione finale dell'intervento.",
},
]}
projects={[
{
slug: "appartamento-prati",
title: "Appartamento Prati",
location: "Roma, Prati",
year: "2024",
image: "/images/projects/appartamento-prati.jpg",
},
{
slug: "villa-appia-antica",
title: "Villa Appia Antica",
location: "Roma, Appia",
year: "2023",
image: "/images/projects/villa-appia-antica.jpg",
},
]}
/>
);
}
\*/
