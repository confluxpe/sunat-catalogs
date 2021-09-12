const regimenPercepcion = {
    titulo: "Códigos de regimen de percepciones",
    nombreCat: "Códigos de regimen de percepciones",
    agenciaCat: "PE:SUNAT",
    numeroCat: "22",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "01", descripcion: "Percepción Venta Interna", tasa: 2.0 },
        { codigo: "02", descripcion: "Percepción a la adquisición de combustible", tasa: 1.0 },
        { codigo: "03", descripcion: "Percepción realizada al agente de percepción con tasa especial", tasa: 0.5 },
    ],
};

module.exports = regimenPercepcion;
