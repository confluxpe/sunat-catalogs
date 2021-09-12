const tipoMoneda = {
    numeroCat: "02",
    titulo: "Códigos de tipo de monedas",
    nombreCat: "Currency",
    agenciaCat: "United Nations Economic Commission for Europe",
    idCat: "ISO 4217 Alpha",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "PEN", descripcion: "Sol" },
        { codigo: "USD", descripcion: "US Dollar" },
        { codigo: "EUR", descripcion: "Euro" },
    ],
};

module.exports = tipoMoneda;
