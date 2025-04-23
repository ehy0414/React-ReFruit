// src/context/WishlistContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const userId = localStorage.getItem("userId") || 1;

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await api.get(`/wishlist?userId=${userId}`);
        setWishlist(res.data);
      } catch (err) {
        console.error("Error loading wishlist", err);
      }
    };

    fetchWishlist();
  }, [userId]);

  const addToWishlist = async (product) => {
    const newItem = {
      id: Date.now().toString(),
      userId,
      productId: product.id,
      title: product.title,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice,
      productImage: product.image
    };
    const res = await api.post("/wishlist", newItem);
    setWishlist((prev) => [...prev, res.data]);
  };

  const removeFromWishlist = async (wishlistId) => {
    await api.delete(`/wishlist/${wishlistId}`);
    setWishlist((prev) => prev.filter((item) => item.id !== wishlistId));
  };

  const isWishlisted = (productId) => {
    return wishlist.some((item) => item.productId === productId);
  };

  const getWishlistId = (productId) => {
    const item = wishlist.find((item) => item.productId === productId);
    return item?.id || null;
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted, getWishlistId }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
