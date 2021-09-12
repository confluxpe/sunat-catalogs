const tipoPrevioVentaUnitario = {
    numeroCat: "16",
    titulo: "Códigos de tipo de precio de venta unitario",
    nombreCat: "Tipo de Precio",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Precio unitario (incluye el IGV)" },
        { codigo: "02", descripcion: "Valor referencial unitario en operaciones no onerosas (Gratuitas)" },
        { codigo: "03", descripcion: "Tarifas reguladas" },
    ],
};

module.exports = tipoPrevioVentaUnitario;
