"use client"

import { IProduct, IProductFinal} from "@/shared/api/types/product"
import { TableCell, TableRow, TextField } from "@mui/material"
import { ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";

interface IProps {
    product: IProduct;
    actualRest: number;
    accountRest: number;
    handleFact: (e: ChangeEvent<HTMLInputElement>, product: IProduct) => void
}

type Inputs = {
    fact: number
}

export const ProductItem = ({product, actualRest, accountRest, handleFact}: IProps) => {
    const {register} = useForm<Inputs>({
        defaultValues: {
            fact: actualRest,
        }
    })

    useEffect(() => { // сохранение данных для файла с разностью остатков
        const finalRest = localStorage.getItem('finalRest')
        if (finalRest) {
            const withoutItem = JSON.parse(finalRest).filter((el: IProductFinal) => el.productId !== product.id)
            localStorage.setItem('finalRest', 
                JSON.stringify([...withoutItem, 
                    {productId: product.id, vendorCode: product.vendorCode, different: actualRest - accountRest}
                ])
            )
        } else{
            localStorage.setItem('finalRest', 
                JSON.stringify([{productId: product.id, vendorCode: product.vendorCode, different: actualRest - accountRest}])
            )
        }
    },[accountRest, actualRest])

    return (
        <TableRow
            key={product.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {product.name}
            </TableCell>
            <TableCell align="right">{product.vendorCode}</TableCell>
            <TableCell align="right">{accountRest}</TableCell>
            <TableCell align="right">
                <TextField
                    label="Фактический остаток"
                    type="number"
                    variant="standard"
                    {...register("fact", { // валидация без типа number, работает слабо
                        valueAsNumber: true, // библиотека react-hook-form в данном случае лишняя
                        validate: (value) => value > 0,
                    })}
                    value={actualRest}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFact(e, product)}
                />
                </TableCell>
        </TableRow>
    )
}