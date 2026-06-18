import { useSiteContext } from "@/context/SiteContext";

export function useCart() {
    const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, removeItemCompletely, clearCart, cartSubtotal, cartCount } = useSiteContext();
    return { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, removeItemCompletely, clearCart, cartSubtotal, cartCount };
}

export default useCart;
