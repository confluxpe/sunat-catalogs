const tipoResumen = {
    numeroCat: "00",
    titulo: "Códigos de tipo de resumen",
    nombreCat: "Tipo de Resumen",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "RA", descripcion: "Comunicación de Baja" },
        { codigo: "RC", descripcion: "Resumen Diario" },
        { codigo: "RR", descripcion: "Resumen de Reversión" },
    ],
};

module.exports = tipoResumen;
