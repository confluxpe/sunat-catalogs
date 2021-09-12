const documentosRelacionadosTributarios = {
    numeroCat: "12",
    titulo: "Códigos de documentos relacionados tributarios",
    nombreCat: "Documento Relacionado",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Factura - emitida para corregir error en el RUC" },
        { codigo: "02", descripcion: "Factura - emitida por anticipos" },
        { codigo: "03", descripcion: "Boleta de Venta - emitida por anticipos" },
        { codigo: "04", descripcion: "Ticket de Salida - ENAPU" },
        { codigo: "05", descripcion: "CódigosSCOP" },
        { codigo: "99", descripcion: "Otros" },
    ],
};

module.exports = documentosRelacionadosTributarios;
