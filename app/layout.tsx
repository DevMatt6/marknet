import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import { LocaleProvider } from "@/providers/LocaleProvider";
import { detectLocale } from "@/i18n/server";

// Display + Body font — Plus Jakarta Sans variable
const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	axes: ["wght"],
	variable: "--font-plus-jakarta-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Marknet — Servizi professionali",
	description: "Servizi professionali per il tuo business",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const locale = await detectLocale();

	return (
		<html
			lang={locale}
			className={`${plusJakartaSans.variable}`}
			suppressHydrationWarning
		>
			<body>
				<LenisProvider>
					<ThemeProvider>
						<LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
					</ThemeProvider>
				</LenisProvider>
			</body>
		</html>
	);
}
