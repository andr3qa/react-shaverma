import { LinkBack } from '@/components';
import s from './styles.module.scss';

export const EmptyPage: React.FC = () => {
  return (
    <div className={s.emptyPage}>
      <h2>
        К сожалению, мы не нашли вам шаверму
        <span className={s.emptyPage__icon}>😕</span>
      </h2>
      <p>
        Мы пытаемя все исправить.
        <br />А пока попробуйте перейти на главную
      </p>
      <LinkBack />
    </div>
  );
};
