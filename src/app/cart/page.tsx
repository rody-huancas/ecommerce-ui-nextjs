"use client";

import { CartItemsType } from "@/types";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "Carrito de compras",
  },
  {
    id: 2,
    title: "Dirección de envío",
  },
  {
    id: 3,
    title: "Método de pago",
  },
];

// TEMPORARY
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Tu Carrito de Compras</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              activeStep === step.id ? "border-gray-400" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                activeStep === step.id ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                activeStep === step.id ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* PASOS Y DETALLES */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* PASOS */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          1
        </div>
        {/* DETALLES */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Detalles de la compra</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-500">Descuento(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-500">Costos de envío</p>
              <p className="font-medium">$ 10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-800">Total</p>
              <p className="font-semibold">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
              onClick={() => router.push("/cart?step=2", { scroll: false })}
            >
              Continuar <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
