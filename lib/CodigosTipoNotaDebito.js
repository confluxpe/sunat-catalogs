const tipoNotaDebito = {
    numeroCat: "10",
    titulo: "Códigos de tipo de nota de débito electrónica",
    nombreCat: "Tipo de nota debito",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Intereses por mora" },
        { codigo: "02", descripcion: "Aumento en el valor" },
        { codigo: "03", descripcion: "Penalidades/ otros conceptos" },
        { codigo: "11", descripcion: "Ajustes de operaciones de exportación" },
        { codigo: "12", descripcion: "Ajustes afectos al IVAP" },
    ],
};

module.exports = tipoNotaDebito;
