import { Button } from '@/components';
import s from './styles.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks';
import { setCart } from '@/store/slices/cartSlice';
import { Link } from 'react-router';
import { useCartItemCount } from '@/hooks/functions/cartItemCount';

type ProductProps = {
  id: string;
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

  const cartItemCount = useCartItemCount(id);

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
      <Link to={`/shaverma/${id}`}>
        <img className={s.product__image} src={imageUrl} alt="Шаверма" />
      </Link>
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
