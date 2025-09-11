import { Link } from 'react-router';
import s from './styles.module.scss';

export const LinkBack: React.FC = () => {
  return (
    <Link to="/" className={s.linkBack}>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13L1 6.93015L6.86175 1"
          stroke="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Вернуться назад</span>
    </Link>
  );
};
