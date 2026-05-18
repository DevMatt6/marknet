"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SplitLinkButtonProps {
	href: string;
	label: string;
	delay?: number;
	background?: string;
	color?: string;
	small?: boolean;
	labelPadding?: string;
}

export function SplitLinkButton({
	href,
	label,
	delay = 0,
	background,
	color,
	small = false,
	labelPadding,
}: SplitLinkButtonProps) {
	const [arrowHovered, setArrowHovered] = useState(false);

	return (
		<ScrollReveal variant="fadeUp" delay={delay}>
			<motion.div
				style={{ display: "flex" }}
				onHoverStart={() => setArrowHovered(true)}
				onHoverEnd={() => setArrowHovered(false)}
			>
				<Link
					href={href}
					style={{
						display: "inline-flex",
						alignItems: "center",
						backgroundColor: background ?? "var(--accent)",
						color: color ?? "white",
						padding: labelPadding ?? (small ? "8px 16px" : "14px 24px"),
						marginRight: 4,
						fontSize: small ? "var(--text-sm)" : "var(--text-md)",
						fontWeight: 500,
						textDecoration: "none",
						letterSpacing: "0.02em",
					}}
				>
					{label}
				</Link>
				<Link
					href={href}
					style={{
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "var(--accent)",
						color: "var(--accent-foreground)",
						width: small ? 35 : 52,
						cursor: "pointer",
					}}
				>
					<motion.span
						animate={{ rotate: arrowHovered ? 45 : 0 }}
						transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
						style={{ display: "inline-flex" }}
					>
						<ArrowUpRight size={16} />
					</motion.span>
				</Link>
			</motion.div>
		</ScrollReveal>
	);
}
