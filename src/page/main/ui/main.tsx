"use client"

import { Button, Snackbar } from "@mui/material";
import s from "./main.module.scss";
import { getProducts } from "@/shared/api/services/products/getProducts";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const Main = () => {
    const [signal, setSignal] = useState<boolean>(true)
    const [snackbar, setSnackbar] = useState<boolean>(false)
    const router = useRouter()

    const checkSignal = async () => {
        const list = await getProducts()
        setSignal(list ? true : false)
    }

    useEffect(() => {
        checkSignal()
    },[])

    const handleClick = () => {
        signal
            ? router.push('/products')
            : setSnackbar(true)
    }

    return (
        <div className={s.main}>
            <div>
                {signal 
                    ? <h1>json-server <span className={s.green}>работает!</span></h1>
                    : <h1>json-server <span className={s.red}>не запущен!</span></h1>
                }
            </div>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                Перейти к продуктам
            </Button>
            <Snackbar
                open={snackbar}
                autoHideDuration={5000}
                onClose={() => setSnackbar(false)}
                message="Запустите json-server"
            />
        </div>
    )
}