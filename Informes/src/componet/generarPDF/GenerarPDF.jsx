import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: "Helvetica",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#ff0055",
      marginBottom: 20,
      textAlign: "center",
    },
    section: {
      marginBottom: 20,
      padding: 10,
      borderBottom: "1px solid #d3d3d3",
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4f6d7a",  // Color pastel azul
      marginBottom: 10,
    },
    sectionContent: {
      fontSize: 14,
      color: "#333",
      lineHeight: 1.5,
      marginBottom: 10,  // Añadido margen inferior para separar los textos
    },
    list: {
      marginLeft: 20,
      marginTop: 10,
    },
    listItem: {
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: "#ff0055",
      display: "inline-block",
      marginRight: 5,
      verticalAlign: "middle",
    },
  });

  const MyDocument = ({ formData }) => (
    <Document>
      <Page style={styles.page}>
         
          
          <Text style={styles.title}>{formData.titulo}</Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Fecha de primera atención:</Text>
            <Text style={styles.sectionContent}>{formData.fechaPrimeraAtencion}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nombre:</Text>
            <Text style={styles.sectionContent}>{formData.nombre}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Diagnóstico presuntivo:</Text>
            <Text style={styles.sectionContent}>{formData.diagnostico}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tratamiento:</Text>
            <Text style={styles.sectionContent}>{formData.tratamiento1}</Text>
            {formData.tratamiento2 && (
            <Text style={styles.sectionContent}>{formData.tratamiento2}</Text>
            )}
            {formData.tratamiento3 && (
            <Text style={styles.sectionContent}>{formData.tratamiento3}</Text>
            )}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recomendaciones generales:</Text>
            <Text style={styles.sectionTitle}>{formData.recomendaciones}</Text>
            
          </View>
          
        
      </Page>
    </Document>
  );
export default MyDocument;