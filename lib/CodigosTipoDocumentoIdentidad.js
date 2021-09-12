const tipoDocumentoIdentidad = {
    numeroCat: "06",
    titulo: "Códigos de tipo de documento de Identidad",
    nombreCat: "Documento de identidad",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "0", descripcion: "DOC.TRIB.NO.DOM.SIN.RUC" },
        { codigo: "1", descripcion: "Documento Nacional de Identidad" },
        { codigo: "4", descripcion: "Carnet de extranjería" },
        { codigo: "6", descripcion: "Registro Unico de Contributentes" },
        { codigo: "7", descripcion: "Pasaporte" },
        { codigo: "A", descripcion: "Cédula Diplomática de identidad" },
        { codigo: "B", descripcion: "DOC.IDENT.PAIS.RESIDENCIA-NO.D" },
        { codigo: "C", descripcion: "TIN – Doc Trib PP.NN" },
        { codigo: "D", descripcion: "IN – Doc Trib PP. JJ" },
        { codigo: "E", descripcion: "TAM - Tarjeta Andina de Migración" },
    ],
};

module.exports = tipoDocumentoIdentidad;
