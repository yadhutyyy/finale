import { useSiteContext } from "@/context/SiteContext";

export function useWishlist() {
    const { wishlist, toggleWishlist, isInWishlist, wishlistCount } = useSiteContext();
    return { wishlist, toggleWishlist, isInWishlist, wishlistCount };
}

export default useWishlist;
