"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Dictionary = ReturnType<typeof getDictionary>;

type LocaleContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	dictionary: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const COOKIE_NAME = "marksnet-locale";

export function LocaleProvider({
	initialLocale,
	children,
}: {
	initialLocale: Locale;
	children: React.ReactNode;
}) {
	const [locale, setLocaleState] = useState<Locale>(initialLocale);

	useEffect(() => {
		document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
		document.documentElement.lang = locale;
	}, [locale]);

	const value = useMemo(
		() => ({
			locale,
			setLocale: (nextLocale: Locale) => {
				if (isValidLocale(nextLocale)) {
					setLocaleState(nextLocale);
				}
			},
			dictionary: getDictionary(locale),
		}),
		[locale],
	);

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
	const context = useContext(LocaleContext);

	if (!context) {
		throw new Error("useLocale must be used within LocaleProvider");
	}

	return context;
}

export function useMessages() {
	return useLocale().dictionary;
}

export function useCurrentLocale() {
	return useLocale().locale;
}

export function useSetLocale() {
	return useLocale().setLocale;
}
