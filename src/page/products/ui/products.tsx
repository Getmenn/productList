import { ListProducts } from '@/widget/listProducts';
import s from './products.module.scss';
import { Header } from '@/widget/header';

export const Products = () => {
    
    return (
        <div className={s.products}>
            <Header />
            <ListProducts />
        </div>
    )
}
