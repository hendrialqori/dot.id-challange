import { CgSpinner } from "react-icons/cg";
import style from "./loading.module.scss"

interface Props {
    title?: string;
}

export default function Loading({ title = "Loading..." }: Props) {
    return (
        <div className={style.loading}>
            <CgSpinner />
            <p>{title}</p>
        </div>
    )
}