const tipoSistemaCalculoIsc = {
    numeroCat: "08",
    titulo: "Códigos de tipos de sistema de cálculo del ISC",
    nombreCat: "Calculo del ISC",
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
            descripcion: "Sistema al valor (Apéndice IV, lit. A – T.U.O IGV e ISC)",
        },
        {
            codigo: "02",
            descripcion:
                "Aplicación del Monto Fijo ( Sistema específico, bienes en el apéndice III, Apéndice IV, lit. B – T.U.O IGV e ISC)",
        },
        {
            codigo: "03",
            descripcion: "Sistema de Precios de Venta al Público (Apéndice IV, lit. C – T.U.O IGV e ISC)",
        },
    ],
};

module.exports = tipoSistemaCalculoIsc;
