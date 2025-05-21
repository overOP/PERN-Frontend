import { create } from "zustand";

// Create Zustand store
export const useCart = create((set) => ({
  cartItem: [], // Array to store items in cart
  cartCount: 0, // Total quantity of items in cart

  // Add item to cart
  addToCart: (item) =>
    set((state) => {
      const index = state.cartItem.findIndex((i) => i.id === item.id);
      let updatedCart;

      if (index !== -1) {
        // If item already exists, increase quantity
        updatedCart = [...state.cartItem];
        updatedCart[index].quantity += 1;
      } else {
        // If item is new, add with quantity 1
        updatedCart = [...state.cartItem, { ...item, quantity: 1 }];
      }

      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Remove item completely from cart
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cartItem.filter((item) => item.id !== id);
      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Increase quantity of a specific item
  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Decrease quantity of a specific item
  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cartItem
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity reaches 0

      return {
        cartItem: updatedCart,
        cartCount: updatedCart.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }),

  // Clear all items in cart
  clearCart: () => set({ cartItem: [], cartCount: 0 }),
}));








// import { create } from 'zustand';

// const useCartStore = create((set) => ({
//   cartCount: 0,
//   cart: [],

//   addToCart: (item) =>
//     set((state) => {
//       // Check if item already exists in the cart
//       const index = state.cart.findIndex((i) => i.id === item.id);

//       if (index !== -1) {
//         // If exists, increase quantity instead of adding duplicate
//         const newCart = [...state.cart];
//         newCart[index].quantity += 1;
//         return { cart: newCart };
//       }

//       // If new, add item with quantity 1
//       return { cart: [...state.cart, { ...item, quantity: 1 }]  };
//     }),

//   removeFromCart: (id) =>
//     set((state) => ({
//       // Remove item completely by filtering it out
//       cart: state.cart.filter((item) => item.id !== id),
//     })),

//   increaseQuantity: (id) =>
//     set((state) => ({
//       // Increase quantity of specific item by 1
//       cart: state.cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),

//   decreaseQuantity: (id) =>
//     set((state) => ({
//       // Decrease quantity by 1; remove if quantity reaches 0
//       cart: state.cart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0),
//     })),

//   clearCart: () => set({ cart: [] }),
// }));

// export default useCartStore;


// import { create } from 'zustand';

// const useCartStore = create((set) => ({
//   cart: [],
//   addToCart: (item) =>
//     set((state) => {
//       const exists = state.cart.find((i) => i.id === item.id);
//       if (exists) return state; // no duplicates
//       return { cart: [...state.cart, item] };
//     }),
//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),
//   clearCart: () => set({ cart: [] }),
// }));

// export default useCartStore;
