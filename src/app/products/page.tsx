import { Products } from '@/page/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Продукты',
    description: 'Продукты',
}
  

export default function ProductsPage() {
    return <Products />
}