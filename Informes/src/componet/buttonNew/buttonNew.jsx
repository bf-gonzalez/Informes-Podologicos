import styles from "./ButtonNew.module.css"

export default function ButtonNew({ text }){
    return (
        <div>
            <button className={styles.boton}>{text}</button>
        </div>
    )
}