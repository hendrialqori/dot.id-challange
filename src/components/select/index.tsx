import { ComponentPropsWithoutRef, forwardRef } from "react"
import style from "./select.module.scss"

type Refs = HTMLSelectElement
type Props = ComponentPropsWithoutRef<"select">

const Select = forwardRef<Refs, Props>(({ ...rest }, ref) => (
    <select className={style.select} ref={ref} {...rest} />
))

Select.displayName = "Select"

export default Select