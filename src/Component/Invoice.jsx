import React, { useRef } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useReactToPrint } from "react-to-print";

const InvoicePage = () => {
  const invoice = {
    courseId: "12345",
    courseName: "Introduction to React",
    coursePrice: "99.99",
    purchaseDate: "2024-07-03",
    userId: "67890",
    userName: "John Doe",
    userAddress: "1234 Elm Street, Springfield, IL, 62704",
  };

  const InvoiceDocument = () => (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header}>Invoice</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>Field</Text>
            <Text style={styles.tableCellHeader}>Details</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Course ID</Text>
            <Text style={styles.tableCell}>{invoice.courseId}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Course Name</Text>
            <Text style={styles.tableCell}>{invoice.courseName}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Course Price</Text>
            <Text style={styles.tableCell}>${invoice.coursePrice}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Purchase Date</Text>
            <Text style={styles.tableCell}>{invoice.purchaseDate}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>User ID</Text>
            <Text style={styles.tableCell}>{invoice.userId}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>User Name</Text>
            <Text style={styles.tableCell}>{invoice.userName}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>User Address</Text>
            <Text style={styles.tableCell}>{invoice.userAddress}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <h1>Invoice Page</h1>
      <button type="button" onClick={handlePrint}>
        Print Invoice
      </button>
      <div style={{ display: "none" }}>
        <PDFViewer ref={componentRef}>
          <InvoiceDocument />
        </PDFViewer>
      </div>
      <div ref={componentRef} style={{ display: "none" }}>
        <InvoiceDocument />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    margin: "auto",
    marginTop: 5,
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    flexGrow: 1,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    padding: 5,
    fontSize: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    flexGrow: 1,
  },
});

export default InvoicePage;
