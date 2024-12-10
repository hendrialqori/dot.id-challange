import Form from "./_module/form"
import Title from "./_module/title"
import style from "./page.module.scss"

export default function Home() {
  return (
    <main className={style.main}>
      <Title />
      <Form />
    </main>
  )
}
