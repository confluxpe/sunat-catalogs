const conceptoTributario = {
    numeroCat: "55",
    titulo: "Códigos de Identificación del Concepto Tributario",
    nombreCat: "Propiedad del item",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "7000", descripcion: "Gastos Art. 37 Renta:  Número de Placa" },
        { codigo: "7001", descripcion: "Créditos Hipotecarios: Tipo de préstamo" },
        { codigo: "7002", descripcion: "Créditos Hipotecarios: Indicador de Primera Vivienda" },
        { codigo: "7003", descripcion: "Créditos Hipotecarios: Partida Registral" },
        { codigo: "7004", descripcion: "Créditos Hipotecarios: Número de contrato" },
        { codigo: "7005", descripcion: "Créditos Hipotecarios: Fecha de otorgamiento del crédito" },
        { codigo: "7006", descripcion: "Créditos Hipotecarios: Dirección del predio - Códigos de ubigeo" },
        { codigo: "7007", descripcion: "Créditos Hipotecarios: Dirección del predio - Dirección completa" },
        { codigo: "7008", descripcion: "Créditos Hipotecarios: Dirección del predio - Urbanización" },
        { codigo: "7009", descripcion: "Créditos Hipotecarios: Dirección del predio - Provincia" },
        { codigo: "7010", descripcion: "Créditos Hipotecarios: Dirección del predio - Distrito" },
        { codigo: "7011", descripcion: "Créditos Hipotecarios: Dirección del predio - Departamento" },
    ],
};

module.exports = conceptoTributario;
