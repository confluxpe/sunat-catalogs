const codigosPais = {
    titulo: "Códigos de país",
    nombreCat: "Country",
    idCat: "ISO 3166-1",
    peru: "PE",
    numeroCat: "04",
    agenciaCat: '"United Nations Economic Commission for Europe"',
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        {
            codigo: "PE",
            descripcion: "Perú",
        },
    ],
};

module.exports = codigosPais;
