import { useAppSelector } from '@/hooks';

export const useCartItemCount = (id: string | undefined) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItemId = cartItems.filter((item) => item.id === id);
  const cartItemCount = cartItemId.reduce((sum, item) => sum + item.count, 0);

  return cartItemCount;
};
