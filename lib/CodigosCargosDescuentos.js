const cargosDescuentos = {
    numeroCat: "53",
    titulo: "Códigos de caros o descuentos",
    nombreCat: "Cargo/descuento",
    agenciaCat: "PE:SUNAT",
    datos: [
        {
            codigo: "00",
            descripcion: "Descuentos que afectan la base imponible del IGV/IVAP",
            indicador: false,
            nivel: "item",
        },
        {
            codigo: "01",
            descripcion: "Descuentos que no afectan la base imponible del IGV/IVAP",
            indicador: false,
            nivel: "item",
        },
        {
            codigo: "02",
            descripcion: "Descuentos globales que afectan la base imponible del IGV/IVAP",
            indicador: false,
            nivel: "global",
        },
        {
            codigo: "03",
            descripcion: "Descuentos globales que no afectan la base imponible del IGV/IVAP",
            indicador: false,
            nivel: "global",
        },
        {
            codigo: "47",
            descripcion: "Cargos que afectan la base imponible del IGV/IVAP",
            indicador: true,
            nivel: "item",
        },
        {
            codigo: "48",
            descripcion: "Cargos que no afectan la base imponible del IGV/IVAP",
            indicador: true,
            nivel: "item",
        },
        {
            codigo: "49",
            descripcion: "Cargos globales que afectan la base imponible del IGV/IVAP",
            indicador: true,
            nivel: "global",
        },
        {
            codigo: "50",
            descripcion: "Cargos globales que no afectan la base imponible del IGV/IVAP",
            indicador: true,
            nivel: "global",
        },
    ],
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
};

module.exports = cargosDescuentos;
