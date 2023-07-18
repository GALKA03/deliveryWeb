import Link from "next/link"
import s from "./button.module.css"
const Button = ({ text, url }) => {
    return (
         <Link href={url}>
            <button className={s.container}>{text}</button>
        </Link>
    )
}
export default Button