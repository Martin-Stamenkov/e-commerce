import { CheckoutCapture } from "@chec/commerce.js/types/checkout-capture";
import { commerce } from "config";

export const generateToken = async (id: string) => await commerce.checkout.generateToken(id, { type: "cart" });
export const captureCheckout = async (id: string, newOrder: CheckoutCapture) => await commerce.checkout.capture(id, newOrder);
