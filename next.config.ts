import { Restaurant } from "@prisma/client";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  }
};

export default nextConfig; export interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, 'name', 'coverImageUrl'>;
}

