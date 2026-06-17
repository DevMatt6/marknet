"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
	Card,
	CardHeader,
	CardTitle,
	CardFooter,
	CardDescription,
} from "@/components/ui/card";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import { useMessages } from "@/providers/LocaleProvider";

const defaultServiceImageSrc =
	"/images/services/man-filming-with-professional-camera.jpg";
const marketingImageSrc = "/images/services/marketing.jpg";

export default function ServicesSection() {
	const { services } = useMessages();

	return (
		<section className="relative overflow-hidden py-24">
			<div className="absolute inset-0 bg-surface" />

			<div className="relative z-10 mx-auto max-w-full px-4 sm:px-6 lg:px-8">
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
							<h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary">
								{services.title}
							</h2>
							<div className="flex items-center gap-2">
								<CarouselPrevious className="static translate-y-0" />
								<CarouselNext className="static translate-y-0" />
							</div>
						</div>

						<CarouselContent className="-ml-2">
							{services.items.map((service, index) => {
								const normalizedTitle = service.title.trim().toLowerCase();
								const imageSrc = normalizedTitle.includes("marketing")
									? marketingImageSrc
									: defaultServiceImageSrc;

								return (
									<CarouselItem key={index} className="pl-2 md:basis-1/3">
										<div className="p-2">
											<Card
												size="flush"
												className="group/card flex h-[620px] flex-col rounded-none bg-transparent shadow-none transition-transform duration-500 ease-out hover:scale-[1.02]"
											>
												<div className="relative h-full w-full overflow-hidden rounded-xl bg-muted">
													<Image
														src={imageSrc}
														alt={service.title}
														fill
														className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
														sizes="(max-width: 768px) 100vw, 33vw"
														unoptimized
													/>

													<div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_28%,rgba(0,0,0,0.38)_52%,rgba(0,0,0,0.14)_72%,rgba(0,0,0,0)_100%)] p-6">
														<div className="w-full">
															<CardHeader className="px-0 pt-0 pb-8">
																<CardTitle className="text-xl font-bold text-white">
																	{service.title}
																</CardTitle>
															</CardHeader>
															<CardFooter className="px-0 pt-0 pb-0">
																<div className="inline-flex w-fit">
																	<ButtonDemo
																		text={service.buttonText}
																		variant="secondary"
																		size="sm"
																	/>
																</div>
															</CardFooter>
														</div>
													</div>
												</div>
											</Card>
										</div>
									</CarouselItem>
								);
							})}
						</CarouselContent>
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
