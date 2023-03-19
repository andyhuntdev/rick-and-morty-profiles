import { ReactNode } from "react"

export type IChildren = {
    children?: ReactNode;
}

export type IPagination = {
    totalPages: number,
    currentPage: number,
    siblingCount?: number,
    onChange: (page: number) => void,
}