const tipoValorVenta = {
    numeroCat: "11",
    titulo: "Códigos de tipo de valor de venta (Resumen diario de boletas y notas)",
    nombreCat: "Códigos de Tipo de Valor de Venta",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Gravado" },
        { codigo: "02", descripcion: "Exonerado" },
        { codigo: "03", descripcion: "Inafecto" },
        { codigo: "04", descripcion: "Exportación" },
        { codigo: "05", descripcion: "Gratuitas" },
    ],
};

module.exports = tipoValorVenta;
