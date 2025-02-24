
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const HomePage = async () => {

  const restaurants = await db.restaurant.findMany();



  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font-semibold">
        Seja Bem-vindo!!
        </h3>
        <p className="opacity-55">
          Escolha o restaurante da sua preferencia!
        </p>
      </div>

      <div className="pt-14 grid grid-cols-2 gap-4">
        {restaurants.map(restaurant => (
          <Link key={restaurant.id} href={`/${restaurant.slug}`}>

            <Card>
              <CardContent className="flex flex-col items-center gap-8  py-8">
                <div className="relative h-[80px] w-[80px]">
                  <Image
                    src={restaurant.avatarImageUrl}
                    alt={restaurant.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2>{restaurant.name}</h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;