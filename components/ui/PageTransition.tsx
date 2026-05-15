"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { useLenis } from "@/providers/LenisProvider";

// Durata totale tenda: 0.9s
// times: [0→0%] slide-in (0–0.35) | pausa (0.35–0.55) | slide-out (0.55–1)
const CURTAIN_DURATION = 0.9;
const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
// Il contenuto inizia a comparire appena la tenda inizia a ritirarsi
const CONTENT_DELAY = CURTAIN_DURATION * 0.3; // ~0.27s

export function PageTransition({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const lenis = useLenis();

	// Riporta lo scroll in cima ad ogni cambio di route
	useEffect(() => {
		lenis?.scrollTo(0, { immediate: true });
	}, [pathname, lenis]);

	return (
		<>
			{/* ── Tenda ────────────────────────────────────────────────── */}
			<AnimatePresence mode="wait">
				<motion.div
					key={pathname + "-curtain"}
					initial={{ y: "0%" }}
					animate={{ y: ["0%", "0%", "-100%"] }}
					transition={{
						duration: CURTAIN_DURATION,
						ease: CURTAIN_EASE,
						times: [0, 0.35, 1],
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
					{/* Logo: fade in durante la sosta, fade out prima della ritirata */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 1, 1, 0] }}
						transition={{
							duration: CURTAIN_DURATION,
							times: [0, 0.25, 0.45, 0.6],
							ease: "easeInOut",
						}}
						style={{ filter: "brightness(0) invert(1)" }}
					>
						<Logo variant="light" />
					</motion.div>
				</motion.div>
			</AnimatePresence>

			{/* ── Contenuto pagina ─────────────────────────────────────── */}
			{/* opacity: 0 durante la tenda → fade-in quando la tenda si ritira */}
			<AnimatePresence mode="wait">
				<motion.div
					key={pathname}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{
						duration: 0.45,
						delay: CONTENT_DELAY,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
