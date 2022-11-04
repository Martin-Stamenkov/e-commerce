import { Category } from "@chec/commerce.js/types/category";
import { getCategories } from "api";
import React, { createContext, useMemo, useContext, useEffect, useState } from "react";

interface ICommerceProvider {
  children: React.ReactNode
}

const CommerceContext = createContext<null>(null);

export function CommerceProvider({ children }: ICommerceProvider) {

  const [categories, setCategories] = useState<Category[]>()

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.data);
    }
    fetchCategories()
  }, [])

  const value: any = useMemo(
    () => ({
      categories
    }),
    [categories]
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