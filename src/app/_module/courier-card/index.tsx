import { Cost } from "#/@types"
import style from "./card.module.scss"

interface Props extends Cost {
    helper?: string
}

function toRupiah(value: number) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value)
}

export default function CourierCard({ service, description, cost }: Props) {
    const headers = {
        service: service,
        description: description
    }

    return (
        <li className={style.card}>
            <div className={style.header}>
                {Object.entries(headers).map(([key, value], i) => (
                    <p key={i}> {key} : {value}</p>
                ))}
            </div>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Harga</th>
                        <th>Estimasi (hari)</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {cost.map((data, i) => (
                        <tr key={i}>
                            <td>{toRupiah(Number(data.value))}</td>
                            <td>{data.etd}</td>
                            <td>{data.note || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </li>
    )
}