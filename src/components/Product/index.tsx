import { Button } from '@/components';
import s from './styles.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCart } from '@/store/slices/cartSlice';

type ProductProps = {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: string[];
  price: number[];
};

export const Product: React.FC<ProductProps> = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
}) => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItemId = cartItems.filter((item) => item.id === id);
  const cartItemCount = cartItemId.reduce((sum, item) => sum + item.count, 0);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      setCart({
        id,
        imageUrl,
        title,
        type: types[activeType],
        size: sizes[activeSize],
        price: price[activeSize],
        count: 1,
      })
    );
  };

  return (
    <div className={s.product}>
      <img className={s.product__image} src={imageUrl} />
      <h4 className={s.product__title}>{title}</h4>
      <div className={s.product__selector}>
        <div className={s.product__types}>
          {types.map((type, i) => (
            <Button
              onClick={() => setActiveType(i)}
              key={type}
              variant={
                activeType === i ? 'productSelect_active' : 'productSelect'
              }
            >
              {type}
            </Button>
          ))}
        </div>
        <div className={s.product__types}>
          {sizes.map((size, i) => (
            <Button
              onClick={() => setActiveSize(i)}
              key={size}
              variant={
                activeSize === i ? 'productSelect_active' : 'productSelect'
              }
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div className={s.product__bottom}>
        <div className={s.product__price}>{price[activeSize]} ₽</div>
        <Button onClick={handleAddToCart}>
          <span className={s.button__txt}>Добавить</span>
          {cartItemCount > 0 && (
            <span className={s.product__count}>{cartItemCount}</span>
          )}
        </Button>
      </div>
    </div>
  );
};
