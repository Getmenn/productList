
import { $api } from '../../config/api/api';
import { IProductRest } from '../../types/product';
import { IResponse } from '../../types/response';

export const getProductsRest = async () => {
    try {
        const response: IResponse<IProductRest> = await $api.get('/rests');
        localStorage.removeItem('errorRest')

        return response.data;
    } catch (error) {
        console.log(error);
        localStorage.setItem('errorRest', 'true')
    } 
};
