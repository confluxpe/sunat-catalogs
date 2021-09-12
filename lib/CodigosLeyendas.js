const leyendas = {
    numeroCat: "52",
    titulo: "Códigos de leyendas",
    nombreCat: "Códigos de Leyendas",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "1000", descripcion: "Monto en Letras" },
        { codigo: "1002", descripcion: "TRANSFERENCIA GRATUITA DE UN BIEN Y/O SERVICIO PRESTADO GRATUITAMENTE" },
        { codigo: "2000", descripcion: "COMPROBANTE DE PERCEPCIÓN" },
        {
            codigo: "2001",
            descripcion: "BIENES TRANSFERIDOS EN LA AMAZONÍA REGIÓN SELVA PARA SER CONSUMIDOS EN LA MISMA",
        },
        {
            codigo: "2002",
            descripcion: "SERVICIOS PRESTADOS EN LA AMAZONÍA  REGIÓN SELVA PARA SER CONSUMIDOS EN LA MISMA",
        },
        { codigo: "2003", descripcion: "CONTRATOS DE CONSTRUCCIÓN EJECUTADOS  EN LA AMAZONÍA REGIÓN SELVA" },
        { codigo: "2004", descripcion: "Agencia de Viaje - Paquete turístico" },
        { codigo: "2005", descripcion: "Venta realizada por emisor itinerante" },
        { codigo: "2006", descripcion: "Operación sujeta a detracción" },
        { codigo: "2007", descripcion: "Operación sujeta al IVAP" },
        {
            codigo: "2008",
            descripcion: "VENTA EXONERADA DEL IGV-ISC-IPM. PROHIBIDA LA VENTA FUERA DE LA ZONA COMERCIAL DE TACNA",
        },
        { codigo: "2009", descripcion: "PRIMERA VENTA DE MERCANCÍA IDENTIFICABLE ENTRE USUARIOS DE LA ZONA COMERCIAL" },
        { codigo: "2010", descripcion: "Restitucion Simplificado de Derechos Arancelarios" },
    ],
};

module.exports = leyendas;
