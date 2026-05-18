"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileDrawer } from "@/components/navigation/MobileDrawer";
import { ThemeToggle } from "@/providers/ThemeProvider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { Menu, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useNavbarTheme } from "@/providers/NavbarThemeProvider";

export function Navbar() {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [demoBg, setDemoBg] = useState(false);
	const { navbarTheme } = useNavbarTheme();
	const lightContent = navbarTheme === "light-on-dark" && !scrolled;

	useMotionValueEvent(scrollY, "change", (val) => {
		setScrolled(val > 50);
	});

	const prodottiItem = siteConfig.nav.find(
		(item) =>
			"children" in item &&
			Array.isArray(item.children) &&
			item.children.length > 0,
	);

	return (
		<>
			<motion.header
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 50,
					height: 72,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 clamp(24px, 5vw, 80px)",
					background: scrolled ? "var(--background)" : "transparent",
					transition: "background 300ms ease, border-color 300ms ease",
					borderBottom: scrolled
						? "1px solid var(--border)"
						: "1px solid rgba(255,255,255,0.15)",
				}}
			>
				{/* Left — logo */}
				<Link href="/">
					<Logo
						variant={lightContent ? "light" : "dark"}
						width={140}
						height={40}
					/>
				</Link>

				{/* Centre — desktop nav */}
				<nav
					className={cn("hidden md:flex")}
					style={{
						position: "absolute",
						left: "50%",
						transform: "translateX(-50%)",
						alignItems: "center",
						gap: 0,
					}}
				>
					{siteConfig.nav.map((item) => {
						const hasChildren =
							"children" in item &&
							Array.isArray(item.children) &&
							item.children.length > 0;

						if (hasChildren) {
							return (
								<div
									key={item.href}
									style={{ position: "relative" }}
									onMouseEnter={() => setMenuOpen(true)}
									onMouseLeave={() => setMenuOpen(false)}
								>
									<button
										style={{
											padding: "8px 16px",
											fontSize: "var(--text-md)",
											color: lightContent ? "#ffffff" : "var(--color-text)",
											background: "none",
											border: "none",
											cursor: "pointer",
											fontFamily: "inherit",
											fontWeight: 500,
											opacity: menuOpen ? 0.7 : 1,
											transition: "opacity 200ms",
											display: "flex",
											alignItems: "center",
										}}
									>
										{item.label}
										<ChevronDown
											size={14}
											style={{
												marginLeft: 4,
												transition: "transform 200ms",
												transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
											}}
										/>
									</button>
									<MegaMenu
										isOpen={menuOpen}
										items={(item as NavItem).children ?? []}
									/>
								</div>
							);
						}

						return (
							<Link
								key={item.href}
								href={item.href}
								style={{
									padding: "8px 16px",
									fontSize: "var(--text-md)",
									fontWeight: 500,
									color: lightContent ? "#ffffff" : "var(--color-text)",
									textDecoration: "none",
									opacity: 1,
									transition: "opacity 200ms",
								}}
								onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
								onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				{/* Right — actions */}
				<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
					<ThemeToggle iconColor={lightContent ? "#ffffff" : undefined} />

					{/* Demo CTA — hidden on mobile */}
					<Link
						href="/contatti"
						className={cn("hidden md:inline-flex")}
						style={{
							padding: "8px 16px",
							background: demoBg ? "var(--primary)" : "var(--accent)",
							color: demoBg
								? "var(--accent-foreground)"
								: "var(--primary-foreground)",
							fontSize: "var(--text-sm)",
							fontWeight: 500,
							textDecoration: "none",
							border: "none",
							cursor: "pointer",
							transition: "background 500ms, color 500ms",
							alignItems: "center",
							justifyContent: "center",
						}}
						onMouseEnter={() => setDemoBg(true)}
						onMouseLeave={() => setDemoBg(false)}
					>
						Richiedi una consulenza
					</Link>
					{/* Hamburger — mobile only */}
					<button
						className={cn("flex md:hidden")}
						aria-label="Apri menu"
						onClick={() => setDrawerOpen(true)}
						style={{
							background: "none",
							border: "none",
							cursor: "pointer",
							padding: 0,
							color: lightContent ? "#ffffff" : "var(--foreground)",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Menu size={22} />
					</button>
				</div>
			</motion.header>

			<MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
		</>
	);
}
