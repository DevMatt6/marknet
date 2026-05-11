"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

interface PageTransitionProps {
	children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
	const pathname = usePathname();

	return (
		<>
			<AnimatePresence mode="wait">
				<motion.div
					key={pathname + "-curtain"}
					initial={{ y: "0%" }}
					animate={{
						y: ["0%", "0%", "-100%"],
					}}
					transition={{
						duration: 0.4,
						ease: EASE,
						times: [0, 0.45, 1],
					}}
					style={{
						position: "fixed",
						inset: 0,
						zIndex: 9999,
						background: "var(--accent)",
						pointerEvents: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* Logo al centro — sempre visibile durante la sosta */}
					<div style={{ filter: "brightness(0) invert(1)" }}>
						<Logo variant="light" />
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Contenuto pagina */}
			<motion.div
				key={pathname}
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {},
					visible: {
						transition: {
							delayChildren: 0.7,
							staggerChildren: 0.08,
						},
					},
				}}
			>
				{children}
			</motion.div>
		</>
	);
}
