"use client"

import { Button, Tooltip } from '@mui/material';
import s from './header.module.scss';
import createFile from '@/shared/utils/createFile/createFile';

export const Header = () => {

    const handleClick = () => {
        const finalRest = localStorage.getItem('finalRest')
        finalRest && createFile(finalRest)
    }

    return (
        <header className={s.header}>
            <Tooltip title="Генерация файла с разницей количества остатка">
                <Button variant="contained" onClick={handleClick}>Сформировать</Button>
            </Tooltip>
        </header>
    )
}