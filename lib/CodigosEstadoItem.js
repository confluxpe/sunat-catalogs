const estadoItem = {
    numeroCat: "10",
    titulo: "Códigos de estado del ítem (resumen diario)",
    nombreCat: "Códigos de Estado del Ítem",
    agenciaCat: "PE:SUNAT",
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "1", descripcion: "Adicionar" },
        { codigo: "2", descripcion: "Modificar" },
        { codigo: "3", descripcion: "Anulado" },
    ],
};

module.exports = estadoItem;
