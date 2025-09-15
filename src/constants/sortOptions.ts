import type { SortState } from '@/store/slices/sortSlice';

export const sortOptions: SortState[] = [
  { name: 'популярные', sortProperty: 'rating', order: 'desc' },
  { name: 'непопулярные', sortProperty: 'rating', order: 'asc' },
  { name: 'дорогие', sortProperty: 'price', order: 'desc' },
  { name: 'дешёвые', sortProperty: 'price', order: 'asc' },
  { name: 'алфавиту А - Я', sortProperty: 'title', order: 'desc' },
  { name: 'алфавиту Я - А', sortProperty: 'title', order: 'asc' },
];
