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

const servicesData = [
	{
		title: "Content Creation",
		badges: ["Video", "Audio", "Social"],
		description:
			"Creazione di contenuti multimediali professionali per tutti i tuoi canali.",
	},
	{
		title: "Brand Strategy",
		badges: [
			"Branding",
			"CX Design",
			"User Research",
			"Visual Design",
			"UX/UI Design",
			"Content Design",
			"Motion Design",
			"Product Design",
		],

		description:
			"Progettazione di esperienze digitali e identità visive memorabili.",
	},
	{
		title: "Marketing",
		badges: ["Strategy", "Digital", "Analytics"],
		description:
			"Strategie di marketing digitali per crescere il tuo business.",
	},
	{
		title: "Event",
		badges: ["Live", "Streaming", "Production"],
		description:
			"Organizzazione e produzione di eventi professionali e corporate.",
	},
];

export default function ServicesSection() {
	return (
		<section className="relative py-48 overflow-hidden y">
			{/* Background */}
			<div className="absolute inset-0 bg-bg-primary" />

			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				{/* Titolo */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
					className="mb-8"
				>
					<h2 className="font-display text-4xl uppercase leading-tight text-text-primary">
						MArksnet
					</h2>
				</motion.div>

				{/* Carosello */}
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
						<CarouselContent className="-ml-2">
							{servicesData.map((service, index) => (
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
												<div className="px-4 gap-2 flex flex-wrap ">
													{service.badges.map((badge, badgeIndex) => (
														<Badge key={badgeIndex} variant="secondary">
															{badge}
														</Badge>
													))}
												</div>
											</div>
											<CardFooter className="pt-4 gap-2">
												<ButtonDemo
													text="Scopri più"
													variant="secondary"
													size="lg"
												/>
											</CardFooter>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
