import Logo from "../../assets/Logo sin fondo.png"
import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.navbarContenedor}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.botones}>
                <span>Inicio</span>
                <span>Nuevo Informe</span>
            </div>
            

        </div>
    )
}