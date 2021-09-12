const tipoTributo = {
    numeroCat: "05",
    titulo: "Códigos de tipos de tributos y otros conceptos",
    nombreCat: "Codigo de tributos",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { id: "1000", descripcion: "IGV Impuesto General a las Ventas", nombre: "IGV", categoria: "S", codigo: "VAT" },
        { id: "1016", descripcion: "Impuesto a la Venta Arroz Pilado", nombre: "IVAP", categoria: "S", codigo: "VAT" },
        { id: "2000", descripcion: "ISC Impuesto Selectivo al Consumo", nombre: "ISC", categoria: "S", codigo: "EXC" },
        {
            id: "7152",
            descripcion: "Impuesto al Consumo de las bolsas de plástico",
            nombre: "ICBPER",
            categoria: "S",
            codigo: "OTH",
        },
        { id: "9995", descripcion: "Exportación", nombre: "EXP", categoria: "G", codigo: "FRE" },
        { id: "9996", descripcion: "Gratuito", nombre: "GRA", categoria: "Z", codigo: "FRE" },
        { id: "9997", descripcion: "Exonerado", nombre: "EXO", categoria: "E", codigo: "VAT" },
        { id: "9998", descripcion: "Inafecto", nombre: "INA", categoria: "O", codigo: "FRE" },
        { id: "9999", descripcion: "Otros tributos", nombre: "OTROS", categoria: "S", codigo: "OTH" },
    ],
    IGV: "1000",
    IVAP: "1016",
    ISC: "2000",
    ICBPER: "7152",
    EXP: "9995",
    GRA: "9996",
    EXO: "9997",
    INA: "9998",
    OTROS: "9999",
};

module.exports = tipoTributo;
