import * as React from "react"
import { _Specialities } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Specialities() {
  return (
    <div className="flex items-center justify-center">
        <Carousel className="w-[90%]">
            <CarouselContent className="-ml-1">
                {_Specialities.map(item => (
                    <CarouselItem key={item.numero} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Button
                                key={item.numero}
                                asChild
                                className="border-slate-200 hover:text-slate-500 hover:bg-slate-100/40  py-6 rounded-md text-slate-500"
                                variant={"outline"}
                            >
                                <Link href="#">{item.nom}</Link>
                            </Button>
                        </div>
                    </CarouselItem>                 
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}


