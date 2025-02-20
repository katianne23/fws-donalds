import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../context/page";

interface CartSheetProps {

}
const CartSheet = () => {
    const { isOpen, toggleCart } = useContext(CartContext);
    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default CartSheet;