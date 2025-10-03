import { z } from "zod";

export type ProductType = {
  id              : string | number;
  name            : string;
  shortDescription: string;
  description     : string;
  price           : number;
  sizes           : string[];
  colors          : string[];
  images          : Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity     : number;
  selectedSize : string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "¡El nombre es requerido!"),
  email: z.string().email("¡El email es requerido!").min(1, "¡El email es requerido!"),
  phone: z
    .string()
    .min(7, "¡El número telefónico debe tener entre 7 y 10 dígitos!")
    .max(10, "¡El número telefónico debe tener entre 7 y 10 dígitos!")
    .regex(/^\d+$/, "¡El número telefónico solo debe contener números!"),
  address: z.string().min(1, "¡La dirección es requerida!"),
  city: z.string().min(1, "¡La ciudad es requerida!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "¡El titular de la tarjeta es requerido!"),
  cardNumber: z
    .string()
    .min(16, "¡El número de tarjeta es requerido!")
    .max(16, "¡El número de tarjeta es requerido!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "¡La fecha de expiración debe estar en formato MM/AA!"
    ),
  cvv: z.string().min(3, "¡El CVV es requerido!").max(3, "¡El CVV es requerido!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart       : CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart     : (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart     : () => void;
};
