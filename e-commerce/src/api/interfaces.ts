import { Asset } from "@chec/commerce.js/types/asset";
import { Price } from "@chec/commerce.js/types/price";

export interface Category {
    id: string;
    slug?: string;
    name: string;
    description: string;
    products?: number;
    created?: number;
    meta?: any;
    assets: Assets[];
    path?: string;
}
interface Assets {
    id: string;
    url: string;
    filename?: string;
    description?: string;
    updated_at?: number;
    created_at?: number;
}

export interface Product {
    id: string;
    slug?: string;
    name: string;
    description: string;
    image: Asset | null;
    price: Price;
    path?: string;
    active?: boolean;
    categories?: ParentCategory[];
    assets?: any;
    variant_groups?: any[]
}

interface ParentCategory {
    id: string;
    name: string;
    slug: string;
}