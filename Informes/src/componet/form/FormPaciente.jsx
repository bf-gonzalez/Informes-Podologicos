import React, { useState } from "react";
import ButtonNew from "../buttonNew/buttonNew";
import styles from "./FormPaciente.module.css";
import InformeCreado from "../informeCreado/InformeCreado";

export default function FormPaciente() {
    const inicialEstados = {
        titulo: "Historia Clínica - Podología",
        fechaPrimeraAtencion: "",
        nombre: "",
        diagnostico: "",
        tratamiento1: "",
        tratamiento2: "",
        tratamiento3: "",
        recomendaciones: "",
    };

    // Estados
    const [form, setForm] = useState(inicialEstados);
    const [errores, setErrors] = useState({});
    const [tratamientosVisibles, setTratamientosVisibles] = useState(1);
    const [pdfGenerado, setPdfGenerado] = useState(false);

    // Validación de datos
    const validateForm = (form) => {
        const errores = {};
        if (!form.titulo) errores.titulo = "Ingresar un título";
        if (!form.fechaPrimeraAtencion) errores.fechaPrimeraAtencion = "Ingresar fecha de primera atención";
        if (!form.nombre) errores.nombre = "Ingresar nombre del paciente";
        if (!form.diagnostico) errores.diagnostico = "Ingresar el diagnóstico presuntivo";
        if (!form.tratamiento1) errores.tratamiento1 = "Ingresar el tratamiento";
        if (tratamientosVisibles >= 2 && !form.tratamiento2) errores.tratamiento2 = "Ingresar el tratamiento";
        if (tratamientosVisibles >= 3 && !form.tratamiento3) errores.tratamiento3 = "Ingresar el tratamiento";
        if (!form.recomendaciones) errores.recomendaciones = "Ingresar la recomendación al paciente";
        return errores;
    };

    // Handlers
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        setErrors(validateForm({ ...form, [name]: value }));
    };

    const handleAddTratamiento = () => {
        if (tratamientosVisibles < 3) {
            setTratamientosVisibles(tratamientosVisibles + 1);
        }
    };

    const handleRemoveTratamiento = () => {
        if (tratamientosVisibles > 1) {
            setForm({
                ...form,
                [`tratamiento${tratamientosVisibles}`]: "",
            });
            setTratamientosVisibles(tratamientosVisibles - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm(form);
        if (Object.keys(formErrors).length === 0) {
            setPdfGenerado(true); // Mostrar mensaje de éxito y ocultar formulario
        } else {
            setErrors(formErrors);
        }
    };

    const handleNuevoFormulario = () => {
        setForm(inicialEstados); // Limpiar los campos
        setTratamientosVisibles(1); // Reiniciar la cantidad de tratamientos visibles
        setPdfGenerado(false); // Volver a mostrar el formulario
        setErrors({}); // Limpiar los errores
    };

    // Definir los campos del formulario
    const formData = [
        { label: "Título", name: "titulo", type: "text" },
        { label: "Fecha de Primera Atención", name: "fechaPrimeraAtencion", type: "date" },
        { label: "Nombre del Paciente", name: "nombre", type: "text" },
        { label: "Diagnóstico", name: "diagnostico", type: "text" },
        { label: "Tratamiento 1", name: "tratamiento1", type: "text" },
        { label: "Tratamiento 2", name: "tratamiento2", type: "text", visible: tratamientosVisibles >= 2 },
        { label: "Tratamiento 3", name: "tratamiento3", type: "text", visible: tratamientosVisibles >= 3 },
    ];

    return (
        <div className={styles.container}>
            {!pdfGenerado ? (
                <>
                    <h2>Nuevo Informe</h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        {formData.map(({ label, name, type, visible }) => (
                            (visible !== false) && (
                                <div key={name} className={styles.formGroup}>
                                    <label htmlFor={name}>{label}</label>
                                    <input
                                        id={name}
                                        name={name}
                                        type={type}
                                        value={form[name]}
                                        placeholder={`Ingresar ${label.toLowerCase()}`}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                    {errores[name] && (
                                        <span className={styles.error}>{errores[name]}</span>
                                    )}
                                </div>
                            )
                        ))}
                        <div className={styles.buttonContainer}>
                            {tratamientosVisibles < 3 && (
                                <button
                                    type="button"
                                    onClick={handleAddTratamiento}
                                    className={styles.addButton}
                                >
                                    Agregar Tratamiento
                                </button>
                            )}
                            {tratamientosVisibles > 1 && (
                                <button
                                    type="button"
                                    onClick={handleRemoveTratamiento}
                                    className={styles.removeButton}
                                >
                                    Borrar Tratamiento
                                </button>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="recomendaciones">Recomendaciones</label>
                            <input
                                id="recomendaciones"
                                name="recomendaciones"
                                type="text"
                                value={form.recomendaciones}
                                placeholder="Ingresar recomendaciones"
                                onChange={handleChange}
                                className={styles.inputField}
                            />
                            {errores.recomendaciones && (
                                <span className={styles.error}>{errores.recomendaciones}</span>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <ButtonNew type="submit" text="Crear Informe" />
                        </div>
                    </form>
                </>
            ) : (
                <InformeCreado form={form} onNuevoFormulario={handleNuevoFormulario} />
            )}
        </div>
    );
}