import type { Metadata } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LenisProvider } from "@/providers/LenisProvider";

// Display font — headings
const anton = Anton({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-anton",
	display: "swap",
});

// Body font — paragraphs, UI text
const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
	variable: "--font-dm-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Marksnet — Servizi professionali",
	description: "Servizi professionali per il tuo business",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="it"
			className={`${anton.variable} ${dmSans.variable}`}
			suppressHydrationWarning
		>
			<body>
				<LenisProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</LenisProvider>
			</body>
		</html>
	);
}
