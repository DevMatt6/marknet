"use client";

import { motion } from "framer-motion";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import { useMessages } from "@/providers/LocaleProvider";

export default function ServicesSection() {
	const { services } = useMessages();

	return (
		<section className="relative py-48 overflow-hidden y">
			<div className="absolute inset-0 bg-bg-primary" />

			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
				>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full"
						orientation="horizontal"
					>
						<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<h2 className="font-display text-3xl uppercase leading-tight text-text-primary">
								{services.title}
							</h2>
							<div className="flex items-center gap-2">
								<CarouselPrevious className="static translate-y-0" />
								<CarouselNext className="static translate-y-0" />
							</div>
						</div>
						<CarouselContent className="-ml-2">
							{services.items.map((service, index) => (
								<CarouselItem key={index} className="pl-2 md:basis-1/3">
									<div className="p-2">
										<Card className="h-[500px] !rounded-4xl !ring-0 !overflow-hidden flex flex-col justify-between">
											<div>
												<CardHeader className="pb-4">
													<CardTitle className="font-regular text-2xl text-foreground">
														{service.title}
													</CardTitle>
												</CardHeader>
												<CardContent className="pb-4">
													<p className="text-foreground font-regular">
														{service.description}
													</p>
												</CardContent>
												<div className="px-4 gap-2 flex flex-wrap">
													{service.badges.map((badge, badgeIndex) => (
														<Badge key={badgeIndex} variant="secondary">
															{badge}
														</Badge>
													))}
												</div>
											</div>
											<CardFooter className="pt-4 gap-2">
												<ButtonDemo
													text={service.buttonText}
													variant="secondary"
													size="lg"
												/>
											</CardFooter>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
