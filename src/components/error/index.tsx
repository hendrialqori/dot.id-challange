import style from "./error.module.scss"

interface Props {
    status: number;
    code: string
    message: string;
}

export default function Error({ status, code, message }: Props) {
    return (
        <div className={style.error}>
            <p>{status}</p>
            <p>[{code}] {message}</p>
        </div>
    )
}