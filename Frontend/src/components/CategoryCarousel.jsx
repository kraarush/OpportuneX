import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const CategoryCarousel = () => {
  const roles = [
    "Frontend Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Cybersecurity Engineer",
    "Product Manager",
  ];

  return (
    <div className="relative w-full md:max-w-6xl mx-auto my-16 text-xl px-4 py-2">
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            {roles.map((role, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 text-center pl-2 md:pl-4" >
                <Button variant="outline" className="rounded-full">
                  {role}
                </Button>
              </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  )
};

export default CategoryCarousel;