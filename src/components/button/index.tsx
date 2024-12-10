import { ComponentPropsWithoutRef, forwardRef } from "react"
import { CgSpinner } from "react-icons/cg";
import style from "./button.module.scss"

type Refs = HTMLButtonElement
type Props = ComponentPropsWithoutRef<"button"> & {
    isLoading?: boolean;
}

const Button = forwardRef<Refs, Props>(({isLoading, children,...rest}, ref) => (
    <button ref={ref} className={style.button} {...rest}>
        {isLoading && <CgSpinner data-show={isLoading} />}
        <span>{children}</span>
    </button>
))

Button.displayName = "Button"

export default Button