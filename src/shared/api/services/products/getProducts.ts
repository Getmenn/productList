
import { $api } from '../../config/api/api';
import { IProduct } from '../../types/product';
import { IResponse } from '../../types/response';

export const getProducts = async () => {
    try {
        const response: IResponse<IProduct> = await $api.get('/products'); 
        localStorage.removeItem('errorProducts')

        return response.data;
    } catch (error) {
        console.log(error);
        localStorage.setItem('errorProducts', 'true')
    }
};
