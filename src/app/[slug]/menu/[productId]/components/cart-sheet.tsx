import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../context/page";

const CartSheet = () => {
    const { isOpen, toggleCart, products } = useContext(CartContext);
    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                {products.map(product => (
                    <h1 key={product.id}>{product.name} - {product.quantity}</h1>
                ))}
            </SheetContent>
        </Sheet>
    );
}

export default CartSheet;