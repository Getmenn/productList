export interface IProduct  {
    id: string,
    name: string,
    vendorCode: string,
    barCode: string | null,
    description: string | null,
    purchasePrice: number,
    sellingPrice: number,
    promoPrice: number,
    excise: boolean,
    hidden: boolean,
    productGroupId: productGroup | null,
    vat: {
        id: string,
        name: string,
        rate: number
    },
    productType: {
        id: string,
        name: productTypes,
    } ,
    unit: string ,
    markingType: {
        id: string,
        name: string,
    } | null,
    rests: {
        actualBalance: number | null, // Фактический остаток
        accountBalance: number, // Учетный остаток
        difference: number | null,
    }
}

export type productTypes = "Ноутбуки" | "Смартфоны" | "Бытовая техника" | "Книги" | "Фотоаппараты"
export type productGroup = "appliances" | "books" | "electronics"

export interface IProductRest{
    productId: string;
    productCount: number;
}

export interface IProductFinal{
    productId: string;
    vendorCode: string;
    different: number;
}
