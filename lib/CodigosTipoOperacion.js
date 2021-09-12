const tipoOperacion = {
    numeroCat: "51",
    titulo: "Códigos de tipo de operación",
    nombreCat: "Tipo de Operacion",
    agenciaCat: "PE:SUNAT",
    datos: [
        { codigo: "0101", descripcion: "Venta interna" },
        { codigo: "0112", descripcion: "Venta Interna - Sustenta Gastos Deducibles Persona Natural" },
        { codigo: "0113", descripcion: "Venta Interna - NRUS" },
        { codigo: "0200", descripcion: "Exportación de Bienes" },
        {
            codigo: "0201",
            descripcion: "Exportación de Servicios - Prestación servicios realizados íntegramente en el país",
        },
        {
            codigo: "0202",
            descripcion: "Exportación de Servicios - Prestación de servicios de hospedaje No Domiciliado",
        },
        { codigo: "0203", descripcion: "Exportación de Servicios - Transporte de navieras" },
        {
            codigo: "0204",
            descripcion: "Exportación de Servicios - Servicios  a naves y aeronaves de bandera extranjera",
        },
        { codigo: "0205", descripcion: "Exportación de Servicios - Servicios que conformen un Paquete Turístico" },
        { codigo: "0206", descripcion: "Exportación de Servicios - Servicios complementarios al transporte de carga" },
        {
            codigo: "0207",
            descripcion:
                "Exportación de Servicios - Suministro de energía eléctrica a favor de sujetos domiciliados en ZED",
        },
        {
            codigo: "0208",
            descripcion: "Exportación de Servicios - Prestación servicios realizados parcialmente en el extranjero",
        },
        { codigo: "0301", descripcion: "Operaciones con Carta de porte aéreo (emitidas en el ámbito nacional)" },
        { codigo: "0302", descripcion: "Operaciones de Transporte ferroviario de pasajeros" },
        { codigo: "0303", descripcion: "Operaciones de Pago de regalía petrolera" },
        { codigo: "0401", descripcion: "Ventas no domiciliados que no califican como exportación" },
        { codigo: "1001", descripcion: "Operación Sujeta a Detracción" },
        { codigo: "1002", descripcion: "Operación Sujeta a Detracción - Recursos Hidrobiológicos" },
        { codigo: "1003", descripcion: "Operación Sujeta a Detracción - Servicios de Transporte Pasajeros" },
        { codigo: "1004", descripcion: "Operación Sujeta a Detracción - Servicios de Transporte Carga" },
        { codigo: "2001", descripcion: "Operación Sujeta a Percepción" },
    ],
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
};

module.exports = tipoOperacion;
