const tipoDocumento = {
    numeroCat: "01",
    titulo: "Códigos de tipo de documento",
    nombreCat: "Tipo de Documento",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Factura" },
        { codigo: "03", descripcion: "Boleta de venta" },
        { codigo: "07", descripcion: "Nota de crédito" },
        { codigo: "08", descripcion: "Nota de débito" },
        { codigo: "09", descripcion: "Guía de remisión remitente" },
        { codigo: "20", descripcion: "Comprobante de retención" },
        { codigo: "31", descripcion: "Guía de remisión transportista" },
        { codigo: "40", descripcion: "Comprobante de percepción" },
    ],
};

module.exports = tipoDocumento;
