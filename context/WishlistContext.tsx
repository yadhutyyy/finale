"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { CartItem } from "./CartContext";

type WishlistItem = Omit<CartItem, "quantity">;

interface WishlistContextType {
    wishlist: WishlistItem[];
    toggleWishlist: (item: WishlistItem) => void;
    isInWishlist: (id: string) => boolean;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load wishlist on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedWishlist = localStorage.getItem("wishlist");
            if (savedWishlist) {
                try {
                    setWishlist(JSON.parse(savedWishlist));
                } catch (e) {
                    console.error("Error loading wishlist", e);
                }
            }
            setIsLoaded(true);
        }
    }, []);

    // Persist wishlist
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }
    }, [wishlist, isLoaded]);

    const toggleWishlist = (item: WishlistItem) => {
        setWishlist((prevWishlist) => {
            const exists = prevWishlist.some((i) => i.id === item.id);
            if (exists) {
                toast.success(`${item.name} removed from wishlist`);
                return prevWishlist.filter((i) => i.id !== item.id);
            }
            toast.success(`${item.name} added to wishlist!`);
            return [...prevWishlist, item];
        });
    };

    const isInWishlist = (id: string) => {
        return wishlist.some((item) => item.id === id);
    };

    const wishlistCount = wishlist.length;

    return (
        <WishlistContext.Provider value={{
            wishlist,
            toggleWishlist,
            isInWishlist,
            wishlistCount
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
