import { commerce } from "config";

export const getCategories = async () => await commerce.categories.list()
export const getProductsByCategoryId = async (id: string | undefined) => await commerce.products.list({ slug: [id] })