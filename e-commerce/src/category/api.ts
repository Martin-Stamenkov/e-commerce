import { commerce } from "config";

export const getCategories = async () => await commerce.categories.list()