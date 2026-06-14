"use client";

import { Globe } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { useCurrentLocale, useSetLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageOptions: Array<{
	value: Locale;
	label: string;
}> = [
	{ value: "it", label: "IT" },
	{ value: "en", label: "EN" },
];

export default function LanguageSwitch({
	className,
}: {
	className?: string;
}) {
	const locale = useCurrentLocale();
	const setLocale = useSetLocale();
	const activeLanguage =
		languageOptions.find((option) => option.value === locale) ?? languageOptions[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(
					"inline-flex h-10 items-center justify-center rounded-full bg-transparent px-3 text-foreground transition-colors hover:text-accent",
					className,
				)}
				aria-label="Select language"
			>
				<Globe className="size-4" />
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="min-w-24">
				{languageOptions.map((option) => {
					const isActive = option.value === activeLanguage.value;

					return (
						<DropdownMenuItem
							key={option.value}
							onClick={() => setLocale(option.value)}
							className="flex items-center justify-between gap-4"
						>
							<span
								className={cn(
									"text-xs font-medium uppercase tracking-[0.12em]",
									isActive ? "text-foreground" : "text-muted-foreground",
								)}
							>
								{option.label}
							</span>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
