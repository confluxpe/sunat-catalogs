const tipoNotaCredito = {
    numeroCat: "09",
    titulo: "Códigos de tipo de nota de crédito electrónica",
    nombreCat: "Tipo de nota de credito",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Anulación de la operación" },
        { codigo: "02", descripcion: "Anulación por error en el RUC" },
        { codigo: "03", descripcion: "Corrección por error en la descripción" },
        { codigo: "04", descripcion: "Descuento global" },
        { codigo: "05", descripcion: "Descuento por ítem" },
        { codigo: "06", descripcion: "Devolución total" },
        { codigo: "07", descripcion: "Devolución por ítem" },
        { codigo: "08", descripcion: "Bonificación" },
        { codigo: "09", descripcion: "Disminución en el valor" },
        { codigo: "10", descripcion: "Otros Conceptos" },
        { codigo: "11", descripcion: "Ajustes de operaciones de exportación" },
        { codigo: "12", descripcion: "Ajustes afectos al IVAP" },
    ],
};

module.exports = tipoNotaCredito;
