import style from "./list.module.scss"

interface Props {
    children: React.ReactNode;
}

export default function CourierListCard({ children }: Props) {

    if (!children) {
        return <p className={style.message}>Tidak ada data</p>
    }

    return (
        <ul className={style.list}>
            {children}
        </ul>

    )
}