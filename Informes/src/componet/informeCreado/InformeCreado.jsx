import React from "react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from "../generarPDF/GenerarPDF";
import styles from "./InformeCreado.module.css";
import ButtonNew from "../buttonNew/buttonNew";

const InformeCreado = ({ form, onNuevoFormulario }) => {
  return (
    <div className={styles.container}>
      <h2>Informe Creado con Éxito</h2>
      <hr />
      <div className={styles.buttonContainer}>
        <PDFDownloadLink
          document={<MyDocument formData={form} />}
          fileName="informe_paciente.pdf"
        >
          {({ loading }) =>
            loading ? 'Generando PDF...' : (
              <ButtonNew type="button" text="Descargar Informe" />
            )
          }
        </PDFDownloadLink>
        <button
          type="button"
          onClick={onNuevoFormulario}
          className={styles.addButton}
        >
          Crear Nuevo Formulario
        </button>
      </div>
    </div>
  );
};

export default InformeCreado;