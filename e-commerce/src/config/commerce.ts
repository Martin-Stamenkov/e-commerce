import Commerce from '@chec/commerce.js';

const key = process.env.REACT_APP_CHEC_PUBLIC_KEY as string
export const commerce = new Commerce(key, true);
