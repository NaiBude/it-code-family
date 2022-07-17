import { ReactNode } from 'react';

export interface AvtarCardType {
  content: string;
  onClick: () => void;
  icon: ReactNode;
}

export interface AvtarCardListType {
  key: number;
  children: AvtarCardType[];
}
