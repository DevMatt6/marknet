import { defaultLocale, isValidLocale, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

export function resolveLocale(value?: string): Locale {
	if (value && isValidLocale(value)) {
		return value;
	}

	return defaultLocale;
}

export function getMessages(locale?: string) {
	const resolvedLocale = resolveLocale(locale);

	return {
		locale: resolvedLocale,
		dictionary: getDictionary(resolvedLocale),
	};
}
