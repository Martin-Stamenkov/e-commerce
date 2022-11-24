import { Cart } from "@chec/commerce.js/types/cart";
import { Category } from "@chec/commerce.js/types/category";
import { getCategories } from "api";
import { getCart } from "cart";
import { commerce } from "config";
import React, { createContext, useMemo, useContext, useEffect, useState } from "react";

interface ICommerceProvider {
  children: React.ReactNode
}
interface ICommerceContext {
  categories: Category[],
  cart: Cart | null,
  updateCart: () => Promise<void>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const CommerceContext = createContext<ICommerceContext | null>(null);

export function CommerceProvider({ children }: ICommerceProvider) {

  const [categories, setCategories] = useState<Category[]>([])
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.data);
    }
    fetchCategories()
  }, [])

  console.log(cart)

  useEffect(() => {
    const fetchCart = async () => {
      const response = await getCart();
      setCart(response);
    }
    fetchCart()
  }, [])

  const updateCart = async () => {
    const response = await getCart();
    if (response) {
      setCart(response);
      setLoading(false);
    }
  }

  const value = useMemo(
    () => ({
      categories,
      cart,
      updateCart,
      loading,
      setLoading
    }),
    [cart, categories, loading]
  );
  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
}

export function useCommerce() {
  const commerceContext = useContext(CommerceContext);

  if (!commerceContext) {
    throw new Error('CommerceContext must be in scope when using "useCommerce"');
  }

  return commerceContext;
}