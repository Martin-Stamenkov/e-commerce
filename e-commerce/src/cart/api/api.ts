import { commerce } from "config";

export const getCart = async () => await commerce.cart.retrieve()
export const addItemToCart = async (productId: string, quantity?: number | undefined, variantData?: string | object | undefined) =>
 await commerce.cart.add(productId, quantity, variantData)