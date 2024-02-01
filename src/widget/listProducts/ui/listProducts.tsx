"use client"

import { getProducts } from "@/shared/api/services/products/getProducts"
import { IProduct, IProductRest } from "@/shared/api/types/product"
import { CircularProgress, 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    TextField 
} from "@mui/material"
import s from './listProducts.module.scss';
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { useLocalProduct } from "@/shared/hooks/useLocalProduct/useLocalProduct";
import { getProductsRest } from "@/shared/api/services/products/getProductsRest";
import { ProductItem } from "./productItem";

export const ListProducts = () => {
    const [listProducts, setListProducts] = useState<IProduct[]>([])
    const [accountRest, setAccountRest] = useLocalProduct<IProduct>('accountRest') // Учетный остаток
    const [actualRest, setActualRest] = useLocalProduct<IProduct>('actualRest') // Фактический остаток
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    /**
     *  Получение информации о продукта, остатках
     * */
    const getProductsInfo = async () => {
        setLoading(true)
        setError(false)

        const list = await getProducts()
        const rest = await getProductsRest()

        list && setListProducts(list)
        rest && setAccountRest(rest)
        !actualRest && rest?.length && setActualRest(rest) // если actualRest в localStorage не создан, то дублируем Учетный остаток

        const errorRest = localStorage.getItem('errorRest')
        const errorProducts = localStorage.getItem('errorProducts')

        setError(errorRest || errorProducts ? true : false)
        setLoading(false)
    }

    useEffect(() => {
        getProductsInfo()
    },[])

    /**
     * Обработчик для сохранения фактического количества в localStorage
     * с помощью хука useLocalProduct
     * */ 
    const handleFact = (e: ChangeEvent<HTMLInputElement>, product: IProduct) => {
        const actualRestWithout = actualRest.filter((el: IProductRest) => el.productId !== product.id)
        setActualRest([...actualRestWithout, {productId: product.id, productCount: +e.currentTarget.value}])
    }

    /**
     * Учетный остаток
     */
    const getProductCount = (id: string) => {
        return accountRest 
            ? accountRest.find((el: IProductRest) => el.productId === id).productCount || "нет данных"
            : "нет данных"
    }

    /**
     * Фактический остаток
     */
    const getProductActual = (id: string) => {
        return actualRest 
            ? actualRest.find((el: IProductRest) => el.productId === id)?.productCount || ``
            : ``
    }

    return (
        <div className={s.tableWrapper}>
            <Table 
                sx={{ minWidth: 500, bgcolor: 'background.paper' }} 
                aria-label="simple table"
                className={s.table}
            >
                <TableHead>
                    <TableRow>
                        <TableCell align="right" className={s.cellHead}>Название</TableCell>
                        <TableCell align="right" className={s.cellHead}>Код вендора</TableCell>
                        <TableCell align="right" className={s.cellHead}>Учетный остаток</TableCell>
                        <TableCell align="right" className={s.cellHead}>Фактический остаток</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading
                        ? 
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    <CircularProgress className={s.loader} />
                                </TableCell>
                            </TableRow>
                        
                        : !error && listProducts.map((row) => (
                            <ProductItem 
                                key={row.id}
                                product={row}
                                actualRest={getProductActual(row.id)}
                                accountRest={getProductCount(row.id)}
                                handleFact={handleFact}
                            />
                        ))
                    }
                    {error && 
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <h1>
                                    Произошла ошибка загрузки данных
                                </h1>
                            </TableCell>
                        </TableRow>
                    } 
                </TableBody>
            </Table>
        </div>
        
    )
}