import { Main } from '@/page/main/ui/main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Главная',
}

export default function Home() {
  return <Main />
}
