const tipoUnidadMedida = {
    numeroCat: "03",
    titulo: "Códigos de Tipo de Unidad de Medida Comercial",
    nombreCat: 'Tipo de Unidad de Medida"',
    find: function (cod) {
        return this.datos.find(function (item) {
            if (item.codigo === cod) {
                return item;
            }
        });
    },
    datos: [
        { codigo: "NIU", descripcion: "Unidad" },
        { codigo: "ZZ", descripcion: "Servicio" },
        { codigo: "MTR", descripcion: "Metro" },
        { codigo: "CEN", descripcion: "Ciento" },
        { codigo: "DZN", descripcion: "Docena" },
        { codigo: "KGM", descripcion: "Kilos" },
        { codigo: "GLL", descripcion: "Galones" },
        { codigo: "TNE", descripcion: "Tonelada" },
        { codigo: "BO", descripcion: "Botellas" },
        { codigo: "LTR", descripcion: "Litro" },
        { codigo: "MTK", descripcion: "Metro Cuadrado" },
        { codigo: "PR", descripcion: "Par" },
        { codigo: "SET", descripcion: "Juego" },
        { codigo: "BG", descripcion: "Bolsa" },
        { codigo: "PK", descripcion: "Paquete" },
        { codigo: "BX", descripcion: "Caja" },
        { codigo: "4A", descripcion: "Bobinas" },
        { codigo: "BE", descripcion: "Fardo" },
        { codigo: "BJ", descripcion: "Balde" },
        { codigo: "BLL", descripcion: "Barriles" },
        { codigo: "CA", descripcion: "Latas" },
        { codigo: "CJ", descripcion: "Conos" },
        { codigo: "CMQ", descripcion: "Centimetro Cuadrado" },
        { codigo: "CMK", descripcion: "Centimetro Cúbico" },
        { codigo: "CMT", descripcion: "Centimetro Lineal" },
        { codigo: "CT", descripcion: "Cartones" },
        { codigo: "CY", descripcion: "Cilindro" },
        { codigo: "DR", descripcion: "Tambor" },
        { codigo: "FOT", descripcion: "Pies" },
        { codigo: "FTK", descripcion: "Pies Cuadrados" },
        { codigo: "FTQ", descripcion: "Pies Cúbicos" },
        { codigo: "GLI", descripcion: "Galón Ingles" },
        { codigo: "GLL", descripcion: "US Galon" },
        { codigo: "GRM", descripcion: "Gramo" },
        { codigo: "GRO", descripcion: "Gruesa" },
        { codigo: "HLT", descripcion: "Hectolitro" },
        { codigo: "INH", descripcion: "Pulgadas" },
        // { codigo: 'KIT', descripcion: 'KIT' }, //Removido por SUNAT
        { codigo: "DZP", descripcion: "Docena por 10**6" },
        { codigo: "KWH", descripcion: "Kilovatio Hora" },
        { codigo: "LBR", descripcion: "Libras" },
        { codigo: "LEF", descripcion: "Hoja" },
        { codigo: "LTN", descripcion: "Tonelada Larga" },
        { codigo: "LTR", descripcion: "Litro" },
        { codigo: "MGM", descripcion: "Miligramo" },
        // { codigo: 'MLL', descripcion: 'Millares' }, Se retira porque SUNAT ya no la soporta
        { codigo: "MLT", descripcion: "Mililitro" },
        { codigo: "MMK", descripcion: "Milimetro Cuadrado" },
        { codigo: "MMQ", descripcion: "Milimetro Cúbico" },
        { codigo: "MMT", descripcion: "Milimetro" },
        { codigo: "MTK", descripcion: "Metro Cuadrado" },
        { codigo: "MTQ", descripcion: "Metro Cúbico" },
        { codigo: "MTR", descripcion: "Metro" },
        { codigo: "RO", descripcion: "Rollo" },
    ],
};

module.exports = tipoUnidadMedida;
