import { commerce } from "config";

export const getProductById = async (id: string) => await commerce.products.retrieve(id)