"use client"

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'name', | 'coverImageUrl'>
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
    const router = useRouter();
    const handleBackClick = () => router.back();
    return (
        <div className="relative h-[250px] w-full">
            <Button variant="secondary" size="icon" onClick={handleBackClick} className="cursor-pointer">
                <ChevronLeftIcon className="absolute top-4 left-4 z-50 rounded-full" />
            </Button>
            <Image
                src={restaurant.coverImageUrl}
                alt={restaurant.name} fill className="object-cover" />
            <Button variant="secondary" size="icon" className="cursor-pointer">
                <ScrollTextIcon className="absolute top-4 right-4 z-50 rounded-full" />
            </Button>
        </div>
    );
}

export default RestaurantHeader;