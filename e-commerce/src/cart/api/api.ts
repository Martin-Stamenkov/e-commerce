import { commerce } from "config";

export const getCart = async () => await commerce.cart.retrieve();
export const refreshCart = async () => await commerce.cart.refresh();
export const updateCartQuantity = async (productId: string, quantity: number) => await commerce.cart.update(productId, { quantity });
export const removeItemFromCart = async (productId: string) => await commerce.cart.remove(productId);
export const addItemToCart = async (productId: string, quantity?: number | undefined, variantData?: string | object | undefined) =>
 await commerce.cart.add(productId, quantity, variantData);