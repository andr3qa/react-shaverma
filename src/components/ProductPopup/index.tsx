import { Button } from '@/components';
import s from './styles.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCart } from '@/store/slices/cartSlice';

export const ProductPopup: React.FC = () => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

  const popInfo = useAppSelector((state) => state.productPopup);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      setCart({
        id: popInfo.id,
        imageUrl: popInfo.imageUrl,
        title: popInfo.title,
        type: popInfo[activeType],
        size: popInfo[activeSize],
        price: popInfo[activeSize],
        count: 1,
      })
    );
  };

  return (
    <div className={s.product}>
      <img className={s.product__image} src={imageUrl} alt="Шаверма" />
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
        </Button>
      </div>
    </div>
  );
};
