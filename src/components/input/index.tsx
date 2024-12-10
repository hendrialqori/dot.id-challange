import { ComponentPropsWithoutRef, forwardRef } from "react"
import style from "./input.module.scss"

type Refs = HTMLInputElement
type Props = ComponentPropsWithoutRef<"input">

const Input = forwardRef<Refs, Props>(({ ...rest }, ref) => (
    <input className={style.input} ref={ref} {...rest} />

))

Input.displayName = "Input"

export default Input