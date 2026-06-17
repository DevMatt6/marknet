import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
	className?: string;
	priority?: boolean;
	width?: number;
	height?: number;
};

export default function Logo({
	className,
	priority = false,
	width = 132,
	height = 32,
}: LogoProps) {
	return (
		<Image
			src="/images/marknet-logo.svg"
			alt="Marknet"
			width={width}
			height={height}
			priority={priority}
			className={cn("dark:invert", className)}
		/>
	);
}
