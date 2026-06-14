import { cookies, headers } from "next/headers";
import { defaultLocale, isValidLocale, type Locale } from "./config";

const COOKIE_NAME = "marksnet-locale";

export async function detectLocale(): Promise<Locale> {
	const cookieStore = await cookies();
	const cookieLocale = cookieStore.get(COOKIE_NAME)?.value;

	if (cookieLocale && isValidLocale(cookieLocale)) {
		return cookieLocale;
	}

	const headerStore = await headers();
	const acceptLanguage = headerStore.get("accept-language") ?? "";
	const preferred = acceptLanguage
		.split(",")
		.map((entry) => entry.trim().split(";")[0]?.toLowerCase())
		.find((value) => value && (value.startsWith("it") || value.startsWith("en")));

	if (preferred?.startsWith("en")) {
		return "en";
	}

	return defaultLocale;
}

export { COOKIE_NAME };
