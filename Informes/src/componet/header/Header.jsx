import Fondo from "../../assets/fondo.png"
import styles from "./Header.module.css"

export default function Header(){
    return (
        <div>
            <div className={styles.contenHeader}>
                <img src={Fondo} alt="fondo" />
                <h1>Pedia Informes</h1>
            </div>
        </div>
    )
}