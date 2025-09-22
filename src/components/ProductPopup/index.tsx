import { useEffect, useRef, useState } from 'react';
import s from './styles.module.scss';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router';
import { Button } from '@/components';
import { type ShavermaItem } from '../../store/slices/shavermaSlice';
import { useCartItemCount } from '@/hooks/functions/cartItemCount';
import { useAppDispatch } from '@/hooks';
import { setCart } from '@/store/slices/cartSlice';

export const ProductPopup: React.FC = () => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const [shaverma, setShaverma] = useState<ShavermaItem | null | undefined>();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const popupWindowRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const cartItemCount = useCartItemCount(id);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  useEffect(() => {
    async function getShaverma() {
      const { data } = await axios.get(
        `https://687fc39af1dcae717b6027be.mockapi.io/shaverma/${id}`
      );
      setShaverma(data);
    }

    getShaverma();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        popupWindowRef.current &&
        !event.composedPath().includes(popupWindowRef.current)
      ) {
        navigate('/');
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleAddToCart = () => {
    if (!shaverma) return;

    dispatch(
      setCart({
        id: shaverma.id,
        imageUrl: shaverma.imageUrl,
        title: shaverma.title,
        type: shaverma.types[activeType],
        size: shaverma.sizes[activeSize],
        price: shaverma.price[activeSize],
        count: 1,
      })
    );
  };

  if (!shaverma) return <div>Загрузка...</div>;

  return (
    <div className={s.productPopupWrapper}>
      <div ref={popupWindowRef} className={s.productPopup}>
        <Link to="/" className={s.productPopup__close}>
          <span>×</span>
        </Link>
        <img
          className={s.productPopup__img}
          src={shaverma.imageUrl}
          alt="Шаверма"
        />
        <div className={s.productPopup__info}>
          <h3 className={s.productPopup__title}>{shaverma.title}</h3>
          <p className={s.productPopup__txt}>
            <strong>Состав:</strong> {shaverma.description}
          </p>
          <p className={s.productPopup__txt}>
            <strong>Рэйтинг:</strong> {shaverma.rating}/5
          </p>
          <div className={s.productPopup__lists}>
            <div className={s.productPopup__list}>
              <strong>Тип:</strong>
              {shaverma.types.map((type, i) => (
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
            <div className={s.productPopup__list}>
              <strong>Размер:</strong>
              {shaverma.sizes.map((size, i) => (
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
            <div className={s.productPopup__list}>
              <strong>Вес:</strong>
              {shaverma.weight.map((weight, i) => (
                <Button
                  onClick={() => setActiveSize(i)}
                  key={weight}
                  variant={
                    activeSize === i ? 'productSelect_active' : 'productSelect'
                  }
                >
                  {weight} г.
                </Button>
              ))}
            </div>
            <div className={s.productPopup__list}>
              <strong>Цена:</strong>
              {shaverma.price.map((price, i) => (
                <Button
                  onClick={() => setActiveSize(i)}
                  key={price}
                  variant={
                    activeSize === i ? 'productSelect_active' : 'productSelect'
                  }
                >
                  {price} ₽
                </Button>
              ))}
            </div>
          </div>
          <Button onClick={handleAddToCart} className={s.productPopup__btn}>
            Добавить
            {cartItemCount > 0 && (
              <span className={s.productPopup__count}>{cartItemCount}</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
