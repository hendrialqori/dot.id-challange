import style from "./title.module.scss"

export default function Title() {
    return (
        <header className={style.title}>
            <h2>Shipping cost checker</h2>
            <p>Cek harga kirim barang kamu dengan mengisi form dibawah ini!</p>
        </header>
    )
}