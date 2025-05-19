import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      // Check if item already exists in the cart
      const index = state.cart.findIndex((i) => i.id === item.id);

      if (index !== -1) {
        // If exists, increase quantity instead of adding duplicate
        const newCart = [...state.cart];
        newCart[index].quantity += 1;
        return { cart: newCart };
      }

      // If new, add item with quantity 1
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      // Remove item completely by filtering it out
      cart: state.cart.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      // Increase quantity of specific item by 1
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      // Decrease quantity by 1; remove if quantity reaches 0
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;


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
