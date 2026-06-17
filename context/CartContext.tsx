"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export interface CartItem {
    id: string;
    name: string;
    nameAr: string;
    price: number; // in OMR
    quantity: number;
    image: string;
    category: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string) => void;
    removeItemCompletely: (id: string) => void;
    clearCart: () => void;
    cartCount: number;
    cartSubtotal: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                try {
                    setCart(JSON.parse(savedCart));
                } catch (e) {
                    console.error("Error loading cart", e);
                }
            }
            setIsLoaded(true);
        }
    }, []);

    // Persist cart
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (newItem: Omit<CartItem, "quantity">) => {
        setCart((prevCart) => {
            const exists = prevCart.find((item) => item.id === newItem.id);
            if (exists) {
                toast.success(`${newItem.name} quantity increased!`);
                return prevCart.map((item) =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            toast.success(`${newItem.name} added to cart!`);
            return [...prevCart, { ...newItem, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => {
            const item = prevCart.find((i) => i.id === id);
            if (!item) return prevCart;
            if (item.quantity === 1) {
                toast.success(`${item.name} removed from cart`);
                return prevCart.filter((i) => i.id !== id);
            }
            return prevCart.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            );
        });
    };

    const removeItemCompletely = (id: string) => {
        setCart((prevCart) => {
            const item = prevCart.find((i) => i.id === id);
            if (item) {
                toast.success(`${item.name} removed from cart`);
            }
            return prevCart.filter((i) => i.id !== id);
        });
    };

    const clearCart = () => {
        setCart([]);
        toast.success("Cart cleared");
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            removeItemCompletely,
            clearCart,
            cartCount,
            cartSubtotal,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
