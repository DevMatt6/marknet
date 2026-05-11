import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import { NavbarThemeProvider } from "@/providers/NavbarThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransition } from "@/components/ui/PageTransition";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-manrope",
	display: "swap",
});

export const metadata: Metadata = {
	title:
		"Ristrutturazione Ambienti con Architetto Dedicato | Progetti e Servizi V",
	description:
		"Ristrutturazione di ambienti residenziali, commerciali e strutture ricettive. Un architetto al tuo fianco — dalla prima idea alla consegna delle chiavi.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="it" suppressHydrationWarning>
			<body
				className={manrope.variable}
				style={{ fontFamily: "var(--font-manrope), sans-serif" }}
			>
				<ThemeProvider>
					<LenisProvider>
						<NavbarThemeProvider>
							<Navbar />
							<CustomCursor />
							<PageTransition>{children}</PageTransition>
							<Footer />
						</NavbarThemeProvider>
					</LenisProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
