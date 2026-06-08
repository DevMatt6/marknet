"use client";

import Logo from "@/components/common/Logo";
import { navConfig } from "@/config/site";
import { ThemeToggle } from "@/providers/ThemeProvider";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import Link from "next/link";

export default function Navbar({
	onOpenDrawer,
}: {
	onOpenDrawer?: () => void;
}) {
	const isMobile = useMobile();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-90 backdrop-blur-sm border-b border-border">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<Logo className="h-8 w-auto" priority />
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navConfig.navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="font-body text-sm text-foreground hover:text-accent transition-colors"
							>
								{item.label}
							</a>
						))}
					</nav>

					{/* Right side: Theme toggle + Mobile menu */}
					<div className="flex items-center space-x-4">
						<ThemeToggle className="hidden md:flex" />

						{/* Mobile menu button */}
						{isMobile && (
							<button
								onClick={onOpenDrawer}
								className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
								aria-label="Open menu"
							>
								<Menu size={24} />
							</button>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
