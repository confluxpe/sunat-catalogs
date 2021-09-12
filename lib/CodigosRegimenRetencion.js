const regimenRetencion = {
    numeroCat: "23",
    titulo: "Códigos de regimen de retenciones",
    nombreCat: "Códigos de regimen de Retenciones",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        {
            codigo: "01",
            descripcion: "Tasa 3%",
            tasa: 3.0,
        },
        {
            codigo: "02",
            descripcion: "Tasa 6%",
            tasa: 6.0,
        },
    ],
};

module.exports = regimenRetencion;
