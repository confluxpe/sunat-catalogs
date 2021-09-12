const TipoTributo = require("./CodigosTipoTributo");

const tipoAfectacionIgv = {
    numeroCat: "07",
    titulo: "Códigos de tipo de afectación del IGV",
    nombreCat: "Afectacion del IGV",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "10", descripcion: "Gravado - Operación Onerosa", onerosa: TipoTributo.IGV },
        { codigo: "11", descripcion: "Gravado - Retiro por premio", noOnerosa: TipoTributo.GRA },
        { codigo: "12", descripcion: "Gravado - Retiro por donación", noOnerosa: TipoTributo.GRA },
        { codigo: "13", descripcion: "Gravado - Retiro ", noOnerosa: TipoTributo.GRA },
        { codigo: "14", descripcion: "Gravado - Retiro por publicidad", noOnerosa: TipoTributo.GRA },
        { codigo: "15", descripcion: "Gravado - Bonificaciones", noOnerosa: TipoTributo.GRA },
        { codigo: "16", descripcion: "Gravado - Retiro por entrega a trabajadores", noOnerosa: TipoTributo.GRA },
        { codigo: "17", descripcion: "Gravado - IVAP", onerosa: TipoTributo.IVAP, noOnerosa: TipoTributo.GRA },
        { codigo: "20", descripcion: "Exonerado - Operación Onerosa", onerosa: TipoTributo.EXO },
        { codigo: "21", descripcion: "Exonerado - Transferencia gratuita", onerosa: TipoTributo.GRA },
        { codigo: "30", descripcion: "Inafecto - Operación Onerosa", onerosa: TipoTributo.INA },
        { codigo: "31", descripcion: "Inafecto - Retiro por Bonificación", onerosa: TipoTributo.GRA },
        { codigo: "32", descripcion: "Inafecto - Retiro", onerosa: TipoTributo.GRA },
        { codigo: "33", descripcion: "Inafecto - Retiro por Muestras Médicas", onerosa: TipoTributo.GRA },
        { codigo: "34", descripcion: "Inafecto - Retiro por Convenio Colectivo", onerosa: TipoTributo.GRA },
        { codigo: "35", descripcion: "Inafecto - Retiro por premio", onerosa: TipoTributo.GRA },
        { codigo: "36", descripcion: "Inafecto - Retiro por publicidad", onerosa: TipoTributo.GRA },
        { codigo: "37", descripcion: "Inafecto - Transferencia gratuita", onerosa: TipoTributo.GRA },
        {
            codigo: "40",
            descripcion: "Exportación de Bienes o Servicios",
            onerosa: TipoTributo.EXP,
            noOnerosa: TipoTributo.GRA,
        },
    ],
};

module.exports = tipoAfectacionIgv;
