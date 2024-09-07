import Informes from "../../assets/informes.jpg"
import ButtonNew from "../buttonNew/buttonNew"
import styles from "./Info.module.css"

export default function Info(){
    return (
        <div className={styles.contenedorInformes}>
            <div>
                <img src={Informes} alt="info" />

            </div>
            <div>
                <h2>Informacion inportante</h2>
                <p>En esta pagina podras hacer los informes de los pacientes </p>
                <ButtonNew text="Crear Informe"/>
            </div>
        </div>
    )
}