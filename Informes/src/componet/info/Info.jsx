import { Link } from "react-router-dom"
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
                <p>En esta página podrás generar informes detallados de pacientes. 
                    Completa el formulario con la información requerida, como el título del informe, la fecha de atención, 
                    el nombre del paciente, diagnóstico, tratamientos y recomendaciones generales. Una vez que hayas ingresado toda la información,
                     podrás descargar el informe en formato PDF. Este documento estará diseñado de manera profesional y listo para su impresión o almacenamiento digital. </p>
                <Link to="/Informe">
                    <ButtonNew text="Nuevo Informe"/>
                </Link>
            </div>
        </div>
    )
}