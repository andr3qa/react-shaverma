import { Button } from '@/components';
import s from './styles.module.scss';
import { useState } from 'react';

type ProductProps = {
  imageUrl: string;
  title: string;
  types: string[];
  sizes: string[];
  price: number[];
};

export const Product: React.FC<ProductProps> = ({
  imageUrl,
  title,
  types,
  sizes,
  price,
}) => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

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
        <Button>
          <span className={s.button__txt}>Добавить</span>
          <span className={s.product__count}>2</span>
        </Button>
      </div>
    </div>
  );
};
