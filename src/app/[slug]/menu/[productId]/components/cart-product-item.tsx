import Image from "next/image";
import { CartContext, CartProduct } from "../../context/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct;
}
const CartProductItem = ({ product }: CartItemProps) => {
    const { decreaseCartProductQuantity } = useContext(CartContext);
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
                    <Image src={product.imageUrl} alt={product.name} fill />
                </div>
                <div className="space-y-1">
                    <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
                    <div className="flex products-center gap-1">
                        <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                        <div className="flex items-center gap-1  text-center">
                            <Button className="w-7 h-7 rounded-lg" variant="outline"
                                onClick={() => decreaseCartProductQuantity(product.id)}>
                                <ChevronLeftIcon />
                            </Button>
                            <p className="w-7 text-xs">{product.quantity}</p>
                            <Button className="w-7 h-7 rounded-lg" variant="destructive">
                                <ChevronRightIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Button className="h-7 w-7 rounded-lg" variant="outline">
                <TrashIcon />
            </Button>
        </div>
    );
}

export default CartProductItem;