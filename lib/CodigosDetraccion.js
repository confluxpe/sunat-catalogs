const detraccion = {
	numeroCat: '54',
	titulo: 'Catálogo de códigos de Detracción',
	nombreCat: 'Porcentajes de Detracción"',
	find: function (cod) {
		return this.datos.find(function (item) {
			return item.codigo === cod;
		});
	},
	datos: [
		{ codigo: '001', descripcion: 'Azucar', porcentaje: 10 },
		{ codigo: '003', descripcion: 'Alcohol etílico', porcentaje: 10 },
		{ codigo: '004', descripcion: 'Recursos hidrobiológicos', porcentaje: 4 },
		{ codigo: '005', descripcion: 'Maíz amarillo duro', porcentaje: 4 },
		{ codigo: '006', descripcion: 'Algodón', porcentaje: 10 },
		{ codigo: '007', descripcion: 'Caña de azúcar', porcentaje: 10 },
		{ codigo: '008', descripcion: 'Madera', porcentaje: 4 },
		{ codigo: '009', descripcion: 'Arena y piedra', porcentaje: 10 },
		{ codigo: '010', descripcion: 'Residuos, subproductos, desechos, recortes y desperdicios', porcentaje: 15 },
		{ codigo: '011', descripcion: 'Bienes del inciso A) del Apéndice I de la Ley del IGV', porcentaje: 1.5 },
		{ codigo: '012', descripcion: 'Intermediación laboral y tercerización', porcentaje: 12 },
		{ codigo: '013', descripcion: 'Animales vivos', porcentaje: 10 },
		{ codigo: '014', descripcion: 'Carnes y despojos comestibles', porcentaje: 4 },
		{ codigo: '015', descripcion: 'Abonos, cueros y pieles de origen animal', porcentaje: 10 },
		{ codigo: '016', descripcion: 'Aceite de pescado', porcentaje: 10 },
		{
			codigo: '017',
			descripcion: 'Harina, polvo y "pellets" de pescado, crustáceos, moluscos y demás invertebrados acuáticos',
			porcentaje: 4
		},
		{ codigo: '018', descripcion: 'Embarcaciones pesqueras', porcentaje: 10 },
		{ codigo: '019', descripcion: 'Arrendamiento de bienes muebles', porcentaje: 10 },
		{ codigo: '020', descripcion: 'Mantenimiento y reparación de bienes muebles', porcentaje: 12 },
		{ codigo: '021', descripcion: 'Movimiento de carga', porcentaje: 10 },
		{ codigo: '022', descripcion: 'Otros servicios empresariales', porcentaje: 12 },
		{ codigo: '023', descripcion: 'Leche', porcentaje: 4 },
		{ codigo: '024', descripcion: 'Comisión mercantil', porcentaje: 10 },
		{ codigo: '025', descripcion: 'Fabricación de bienes por encargo', porcentaje: 10 },
		{ codigo: '026', descripcion: 'Servicio de transporte de personas', porcentaje: 10 },
		{ codigo: '027', descripcion: 'Servicio de transporte de bienes', porcentaje: 4 },
		{ codigo: '029', descripcion: 'Algodón en rama sin desmontar', porcentaje: 10 },
		{ codigo: '030', descripcion: 'Contratos de construcción', porcentaje: 4 },
		{ codigo: '031', descripcion: 'Oro gravado con el IGV', porcentaje: 10 },
		{ codigo: '032', descripcion: 'Páprika y otros frutos de los géneros capsicum o pimienta', porcentaje: 10 },
		{ codigo: '033', descripcion: 'Espárragos', porcentaje: 10 },
		{ codigo: '034', descripcion: 'Minerales metálicos no auríferos', porcentaje: 10 },
		{ codigo: '035', descripcion: 'Bienes exonerados del IGV', porcentaje: 1.5 },
		{ codigo: '036', descripcion: 'Oro y demás minerales metálicos exonerados del IGV', porcentaje: 10 },
		{ codigo: '037', descripcion: 'Demás servicios gravados con el IGV', porcentaje: 12 },
		{ codigo: '039', descripcion: 'Minerales no metálicos', porcentaje: 10 },
		{ codigo: '040', descripcion: 'Bien inmueble gravado con IGV', porcentaje: 4 }
	]
};

module.exports = detraccion;
