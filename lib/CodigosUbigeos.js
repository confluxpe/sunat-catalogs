const ubigeos = {
	titulo: 'Ubigeos con Departamento, Provincia y Distritos',
	nombreCat: 'Códigos Ubigeos',
	find: function (cod) {
		return this.datos.find(function (item) {
			if (item.ubigeo === cod) {
				return item;
			}
		});
	},
	data: [
		{
			ubigeo: '010101',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'CHACHAPOYAS'
		},
		{
			ubigeo: '010102',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'ASUNCION'
		},
		{
			ubigeo: '010103',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'BALSAS'
		},
		{
			ubigeo: '010104',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'CHETO'
		},
		{
			ubigeo: '010105',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'CHILIQUIN'
		},
		{
			ubigeo: '010106',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'CHUQUIBAMBA'
		},
		{
			ubigeo: '010107',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'GRANADA'
		},
		{
			ubigeo: '010108',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'HUANCAS'
		},
		{
			ubigeo: '010109',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'LA JALCA'
		},
		{
			ubigeo: '010110',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'LEIMEBAMBA'
		},
		{
			ubigeo: '010111',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'LEVANTO'
		},
		{
			ubigeo: '010112',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'MAGDALENA'
		},
		{
			ubigeo: '010113',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'MARISCAL CASTILLA'
		},
		{
			ubigeo: '010114',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'MOLINOPAMPA'
		},
		{
			ubigeo: '010115',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'MONTEVIDEO'
		},
		{
			ubigeo: '010116',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'OLLEROS'
		},
		{
			ubigeo: '010117',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'QUINJALCA'
		},
		{
			ubigeo: '010118',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'SAN FRANCISCO DE DAGUAS'
		},
		{
			ubigeo: '010119',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'SAN ISIDRO DE MAINO'
		},
		{
			ubigeo: '010120',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'SOLOCO'
		},
		{
			ubigeo: '010121',
			departamento: 'AMAZONAS',
			provincia: 'CHACHAPOYAS',
			distrito: 'SONCHE'
		},
		{
			ubigeo: '010201',
			departamento: 'AMAZONAS',
			provincia: 'BAGUA',
			distrito: 'BAGUA'
		},
		{
			ubigeo: '010202',
			departamento: 'AMAZONAS',
			provincia: 'BAGUA',
			distrito: 'ARAMANGO'
		},
		{
			ubigeo: '010203',
			departamento: 'AMAZONAS',
			provincia: 'BAGUA',
			distrito: 'COPALLIN'
		},
		{
			ubigeo: '010204',
			departamento: 'AMAZONAS',
			provincia: 'BAGUA',
			distrito: 'EL PARCO'
		},
		{
			ubigeo: '010205',
			departamento: 'AMAZONAS',
			provincia: 'BAGUA',
			distrito: 'IMAZA'
		},
		{
			ubigeo: '010206',
			departamento: 'AMAZONAS',
			provincia: 'BAGUA',
			distrito: 'LA PECA'
		},
		{
			ubigeo: '010301',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'JUMBILLA'
		},
		{
			ubigeo: '010302',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'CHISQUILLA'
		},
		{
			ubigeo: '010303',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'CHURUJA'
		},
		{
			ubigeo: '010304',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'COROSHA'
		},
		{
			ubigeo: '010305',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'CUISPES'
		},
		{
			ubigeo: '010306',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'FLORIDA'
		},
		{
			ubigeo: '010307',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'JAZAN'
		},
		{
			ubigeo: '010308',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'RECTA'
		},
		{
			ubigeo: '010309',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'SAN CARLOS'
		},
		{
			ubigeo: '010310',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'SHIPASBAMBA'
		},
		{
			ubigeo: '010311',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'VALERA'
		},
		{
			ubigeo: '010312',
			departamento: 'AMAZONAS',
			provincia: 'BONGARA',
			distrito: 'YAMBRASBAMBA'
		},
		{
			ubigeo: '010401',
			departamento: 'AMAZONAS',
			provincia: 'CONDORCANQUI',
			distrito: 'NIEVA'
		},
		{
			ubigeo: '010402',
			departamento: 'AMAZONAS',
			provincia: 'CONDORCANQUI',
			distrito: 'EL CENEPA'
		},
		{
			ubigeo: '010403',
			departamento: 'AMAZONAS',
			provincia: 'CONDORCANQUI',
			distrito: 'RIO SANTIAGO'
		},
		{
			ubigeo: '010501',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'LAMUD'
		},
		{
			ubigeo: '010502',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'CAMPORREDONDO'
		},
		{
			ubigeo: '010503',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'COCABAMBA'
		},
		{
			ubigeo: '010504',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'COLCAMAR'
		},
		{
			ubigeo: '010505',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'CONILA'
		},
		{
			ubigeo: '010506',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'INGUILPATA'
		},
		{
			ubigeo: '010507',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'LONGUITA'
		},
		{
			ubigeo: '010508',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'LONYA CHICO'
		},
		{
			ubigeo: '010509',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'LUYA'
		},
		{
			ubigeo: '010510',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'LUYA VIEJO'
		},
		{
			ubigeo: '010511',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'MARIA'
		},
		{
			ubigeo: '010512',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'OCALLI'
		},
		{
			ubigeo: '010513',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'OCUMAL'
		},
		{
			ubigeo: '010514',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'PISUQUIA'
		},
		{
			ubigeo: '010515',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'PROVIDENCIA'
		},
		{
			ubigeo: '010516',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'SAN CRISTOBAL'
		},
		{
			ubigeo: '010517',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'SAN FRANCISCO DEL YESO'
		},
		{
			ubigeo: '010518',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'SAN JERONIMO'
		},
		{
			ubigeo: '010519',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'SAN JUAN DE LOPECANCHA'
		},
		{
			ubigeo: '010520',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'SANTA CATALINA'
		},
		{
			ubigeo: '010521',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'SANTO TOMAS'
		},
		{
			ubigeo: '010522',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'TINGO'
		},
		{
			ubigeo: '010523',
			departamento: 'AMAZONAS',
			provincia: 'LUYA',
			distrito: 'TRITA'
		},
		{
			ubigeo: '010601',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'SAN NICOLAS'
		},
		{
			ubigeo: '010602',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'CHIRIMOTO'
		},
		{
			ubigeo: '010603',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'COCHAMAL'
		},
		{
			ubigeo: '010604',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'HUAMBO'
		},
		{
			ubigeo: '010605',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'LIMABAMBA'
		},
		{
			ubigeo: '010606',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'LONGAR'
		},
		{
			ubigeo: '010607',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'MARISCAL BENAVIDES'
		},
		{
			ubigeo: '010608',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'MILPUC'
		},
		{
			ubigeo: '010609',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'OMIA'
		},
		{
			ubigeo: '010610',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '010611',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'TOTORA'
		},
		{
			ubigeo: '010612',
			departamento: 'AMAZONAS',
			provincia: 'RODRIGUEZ DE MENDOZA',
			distrito: 'VISTA ALEGRE'
		},
		{
			ubigeo: '010701',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'BAGUA GRANDE'
		},
		{
			ubigeo: '010702',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'CAJARURO'
		},
		{
			ubigeo: '010703',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'CUMBA'
		},
		{
			ubigeo: '010704',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'EL MILAGRO'
		},
		{
			ubigeo: '010705',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'JAMALCA'
		},
		{
			ubigeo: '010706',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'LONYA GRANDE'
		},
		{
			ubigeo: '010707',
			departamento: 'AMAZONAS',
			provincia: 'UTCUBAMBA',
			distrito: 'YAMON'
		},
		{
			ubigeo: '020101',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'HUARAZ'
		},
		{
			ubigeo: '020102',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'COCHABAMBA'
		},
		{
			ubigeo: '020103',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'COLCABAMBA'
		},
		{
			ubigeo: '020104',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'HUANCHAY'
		},
		{
			ubigeo: '020105',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'INDEPENDENCIA'
		},
		{
			ubigeo: '020106',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'JANGAS'
		},
		{
			ubigeo: '020107',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'LA LIBERTAD'
		},
		{
			ubigeo: '020108',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'OLLEROS'
		},
		{
			ubigeo: '020109',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'PAMPAS'
		},
		{
			ubigeo: '020110',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'PARIACOTO'
		},
		{
			ubigeo: '020111',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'PIRA'
		},
		{
			ubigeo: '020112',
			departamento: 'ANCASH',
			provincia: 'HUARAZ',
			distrito: 'TARICA'
		},
		{
			ubigeo: '020201',
			departamento: 'ANCASH',
			provincia: 'AIJA',
			distrito: 'AIJA'
		},
		{
			ubigeo: '020202',
			departamento: 'ANCASH',
			provincia: 'AIJA',
			distrito: 'CORIS'
		},
		{
			ubigeo: '020203',
			departamento: 'ANCASH',
			provincia: 'AIJA',
			distrito: 'HUACLLAN'
		},
		{
			ubigeo: '020204',
			departamento: 'ANCASH',
			provincia: 'AIJA',
			distrito: 'LA MERCED'
		},
		{
			ubigeo: '020205',
			departamento: 'ANCASH',
			provincia: 'AIJA',
			distrito: 'SUCCHA'
		},
		{
			ubigeo: '020301',
			departamento: 'ANCASH',
			provincia: 'ANTONIO RAYMONDI',
			distrito: 'LLAMELLIN'
		},
		{
			ubigeo: '020302',
			departamento: 'ANCASH',
			provincia: 'ANTONIO RAYMONDI',
			distrito: 'ACZO'
		},
		{
			ubigeo: '020303',
			departamento: 'ANCASH',
			provincia: 'ANTONIO RAYMONDI',
			distrito: 'CHACCHO'
		},
		{
			ubigeo: '020304',
			departamento: 'ANCASH',
			provincia: 'ANTONIO RAYMONDI',
			distrito: 'CHINGAS'
		},
		{
			ubigeo: '020305',
			departamento: 'ANCASH',
			provincia: 'ANTONIO RAYMONDI',
			distrito: 'MIRGAS'
		},
		{
			ubigeo: '020306',
			departamento: 'ANCASH',
			provincia: 'ANTONIO RAYMONDI',
			distrito: 'SAN JUAN DE RONTOY'
		},
		{
			ubigeo: '020401',
			departamento: 'ANCASH',
			provincia: 'ASUNCION',
			distrito: 'CHACAS'
		},
		{
			ubigeo: '020402',
			departamento: 'ANCASH',
			provincia: 'ASUNCION',
			distrito: 'ACOCHACA'
		},
		{
			ubigeo: '020501',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'CHIQUIAN'
		},
		{
			ubigeo: '020502',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'ABELARDO PARDO LEZAMETA'
		},
		{
			ubigeo: '020503',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'ANTONIO RAYMONDI'
		},
		{
			ubigeo: '020504',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'AQUIA'
		},
		{
			ubigeo: '020505',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'CAJACAY'
		},
		{
			ubigeo: '020506',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'CANIS'
		},
		{
			ubigeo: '020507',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'COLQUIOC'
		},
		{
			ubigeo: '020508',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'HUALLANCA'
		},
		{
			ubigeo: '020509',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'HUASTA'
		},
		{
			ubigeo: '020510',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'HUAYLLACAYAN'
		},
		{
			ubigeo: '020511',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'LA PRIMAVERA'
		},
		{
			ubigeo: '020512',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'MANGAS'
		},
		{
			ubigeo: '020513',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'PACLLON'
		},
		{
			ubigeo: '020514',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'SAN MIGUEL DE CORPANQUI'
		},
		{
			ubigeo: '020515',
			departamento: 'ANCASH',
			provincia: 'BOLOGNESI',
			distrito: 'TICLLOS'
		},
		{
			ubigeo: '020601',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'CARHUAZ'
		},
		{
			ubigeo: '020602',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'ACOPAMPA'
		},
		{
			ubigeo: '020603',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'AMASHCA'
		},
		{
			ubigeo: '020604',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'ANTA'
		},
		{
			ubigeo: '020605',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'ATAQUERO'
		},
		{
			ubigeo: '020606',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'MARCARA'
		},
		{
			ubigeo: '020607',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'PARIAHUANCA'
		},
		{
			ubigeo: '020608',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'SAN MIGUEL DE ACO'
		},
		{
			ubigeo: '020609',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'SHILLA'
		},
		{
			ubigeo: '020610',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'TINCO'
		},
		{
			ubigeo: '020611',
			departamento: 'ANCASH',
			provincia: 'CARHUAZ',
			distrito: 'YUNGAR'
		},
		{
			ubigeo: '020701',
			departamento: 'ANCASH',
			provincia: 'CARLOS FERMIN FITZCARRALD',
			distrito: 'SAN LUIS'
		},
		{
			ubigeo: '020702',
			departamento: 'ANCASH',
			provincia: 'CARLOS FERMIN FITZCARRALD',
			distrito: 'SAN NICOLAS'
		},
		{
			ubigeo: '020703',
			departamento: 'ANCASH',
			provincia: 'CARLOS FERMIN FITZCARRALD',
			distrito: 'YAUYA'
		},
		{
			ubigeo: '020801',
			departamento: 'ANCASH',
			provincia: 'CASMA',
			distrito: 'CASMA'
		},
		{
			ubigeo: '020802',
			departamento: 'ANCASH',
			provincia: 'CASMA',
			distrito: 'BUENA VISTA ALTA'
		},
		{
			ubigeo: '020803',
			departamento: 'ANCASH',
			provincia: 'CASMA',
			distrito: 'COMANDANTE NOEL'
		},
		{
			ubigeo: '020804',
			departamento: 'ANCASH',
			provincia: 'CASMA',
			distrito: 'YAUTAN'
		},
		{
			ubigeo: '020901',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'CORONGO'
		},
		{
			ubigeo: '020902',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'ACO'
		},
		{
			ubigeo: '020903',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'BAMBAS'
		},
		{
			ubigeo: '020904',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'CUSCA'
		},
		{
			ubigeo: '020905',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'LA PAMPA'
		},
		{
			ubigeo: '020906',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'YANAC'
		},
		{
			ubigeo: '020907',
			departamento: 'ANCASH',
			provincia: 'CORONGO',
			distrito: 'YUPAN'
		},
		{
			ubigeo: '021001',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'HUARI'
		},
		{
			ubigeo: '021002',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'ANRA'
		},
		{
			ubigeo: '021003',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'CAJAY'
		},
		{
			ubigeo: '021004',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'CHAVIN DE HUANTAR'
		},
		{
			ubigeo: '021005',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'HUACACHI'
		},
		{
			ubigeo: '021006',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'HUACCHIS'
		},
		{
			ubigeo: '021007',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'HUACHIS'
		},
		{
			ubigeo: '021008',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'HUANTAR'
		},
		{
			ubigeo: '021009',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'MASIN'
		},
		{
			ubigeo: '021010',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'PAUCAS'
		},
		{
			ubigeo: '021011',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'PONTO'
		},
		{
			ubigeo: '021012',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'RAHUAPAMPA'
		},
		{
			ubigeo: '021013',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'RAPAYAN'
		},
		{
			ubigeo: '021014',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'SAN MARCOS'
		},
		{
			ubigeo: '021015',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'SAN PEDRO DE CHANA'
		},
		{
			ubigeo: '021016',
			departamento: 'ANCASH',
			provincia: 'HUARI',
			distrito: 'UCO'
		},
		{
			ubigeo: '021101',
			departamento: 'ANCASH',
			provincia: 'HUARMEY',
			distrito: 'HUARMEY'
		},
		{
			ubigeo: '021102',
			departamento: 'ANCASH',
			provincia: 'HUARMEY',
			distrito: 'COCHAPETI'
		},
		{
			ubigeo: '021103',
			departamento: 'ANCASH',
			provincia: 'HUARMEY',
			distrito: 'CULEBRAS'
		},
		{
			ubigeo: '021104',
			departamento: 'ANCASH',
			provincia: 'HUARMEY',
			distrito: 'HUAYAN'
		},
		{
			ubigeo: '021105',
			departamento: 'ANCASH',
			provincia: 'HUARMEY',
			distrito: 'MALVAS'
		},
		{
			ubigeo: '021201',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'CARAZ'
		},
		{
			ubigeo: '021202',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'HUALLANCA'
		},
		{
			ubigeo: '021203',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'HUATA'
		},
		{
			ubigeo: '021204',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'HUAYLAS'
		},
		{
			ubigeo: '021205',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'MATO'
		},
		{
			ubigeo: '021206',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'PAMPAROMAS'
		},
		{
			ubigeo: '021207',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'PUEBLO LIBRE'
		},
		{
			ubigeo: '021208',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'SANTA CRUZ'
		},
		{
			ubigeo: '021209',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'SANTO TORIBIO'
		},
		{
			ubigeo: '021210',
			departamento: 'ANCASH',
			provincia: 'HUAYLAS',
			distrito: 'YURACMARCA'
		},
		{
			ubigeo: '021301',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'PISCOBAMBA'
		},
		{
			ubigeo: '021302',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'CASCA'
		},
		{
			ubigeo: '021303',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'ELEAZAR GUZMAN BARRON'
		},
		{
			ubigeo: '021304',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'FIDEL OLIVAS ESCUDERO'
		},
		{
			ubigeo: '021305',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'LLAMA'
		},
		{
			ubigeo: '021306',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'LLUMPA'
		},
		{
			ubigeo: '021307',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'LUCMA'
		},
		{
			ubigeo: '021308',
			departamento: 'ANCASH',
			provincia: 'MARISCAL LUZURIAGA',
			distrito: 'MUSGA'
		},
		{
			ubigeo: '021401',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'OCROS'
		},
		{
			ubigeo: '021402',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'ACAS'
		},
		{
			ubigeo: '021403',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'CAJAMARQUILLA'
		},
		{
			ubigeo: '021404',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'CARHUAPAMPA'
		},
		{
			ubigeo: '021405',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'COCHAS'
		},
		{
			ubigeo: '021406',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'CONGAS'
		},
		{
			ubigeo: '021407',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'LLIPA'
		},
		{
			ubigeo: '021408',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'SAN CRISTOBAL DE RAJAN'
		},
		{
			ubigeo: '021409',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'SAN PEDRO'
		},
		{
			ubigeo: '021410',
			departamento: 'ANCASH',
			provincia: 'OCROS',
			distrito: 'SANTIAGO DE CHILCAS'
		},
		{
			ubigeo: '021501',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'CABANA'
		},
		{
			ubigeo: '021502',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'BOLOGNESI'
		},
		{
			ubigeo: '021503',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'CONCHUCOS'
		},
		{
			ubigeo: '021504',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'HUACASCHUQUE'
		},
		{
			ubigeo: '021505',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'HUANDOVAL'
		},
		{
			ubigeo: '021506',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'LACABAMBA'
		},
		{
			ubigeo: '021507',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'LLAPO'
		},
		{
			ubigeo: '021508',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'PALLASCA'
		},
		{
			ubigeo: '021509',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'PAMPAS'
		},
		{
			ubigeo: '021510',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '021511',
			departamento: 'ANCASH',
			provincia: 'PALLASCA',
			distrito: 'TAUCA'
		},
		{
			ubigeo: '021601',
			departamento: 'ANCASH',
			provincia: 'POMABAMBA',
			distrito: 'POMABAMBA'
		},
		{
			ubigeo: '021602',
			departamento: 'ANCASH',
			provincia: 'POMABAMBA',
			distrito: 'HUAYLLAN'
		},
		{
			ubigeo: '021603',
			departamento: 'ANCASH',
			provincia: 'POMABAMBA',
			distrito: 'PAROBAMBA'
		},
		{
			ubigeo: '021604',
			departamento: 'ANCASH',
			provincia: 'POMABAMBA',
			distrito: 'QUINUABAMBA'
		},
		{
			ubigeo: '021701',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'RECUAY'
		},
		{
			ubigeo: '021702',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'CATAC'
		},
		{
			ubigeo: '021703',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'COTAPARACO'
		},
		{
			ubigeo: '021704',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'HUAYLLAPAMPA'
		},
		{
			ubigeo: '021705',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'LLACLLIN'
		},
		{
			ubigeo: '021706',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'MARCA'
		},
		{
			ubigeo: '021707',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'PAMPAS CHICO'
		},
		{
			ubigeo: '021708',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'PARARIN'
		},
		{
			ubigeo: '021709',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'TAPACOCHA'
		},
		{
			ubigeo: '021710',
			departamento: 'ANCASH',
			provincia: 'RECUAY',
			distrito: 'TICAPAMPA'
		},
		{
			ubigeo: '021801',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'CHIMBOTE'
		},
		{
			ubigeo: '021802',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'CACERES DEL PERU'
		},
		{
			ubigeo: '021803',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'COISHCO'
		},
		{
			ubigeo: '021804',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'MACATE'
		},
		{
			ubigeo: '021805',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'MORO'
		},
		{
			ubigeo: '021806',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'NEPEÑA'
		},
		{
			ubigeo: '021807',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'SAMANCO'
		},
		{
			ubigeo: '021808',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'SANTA'
		},
		{
			ubigeo: '021809',
			departamento: 'ANCASH',
			provincia: 'SANTA',
			distrito: 'NUEVO CHIMBOTE'
		},
		{
			ubigeo: '021901',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'SIHUAS'
		},
		{
			ubigeo: '021902',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'ACOBAMBA'
		},
		{
			ubigeo: '021903',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'ALFONSO UGARTE'
		},
		{
			ubigeo: '021904',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'CASHAPAMPA'
		},
		{
			ubigeo: '021905',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'CHINGALPO'
		},
		{
			ubigeo: '021906',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'HUAYLLABAMBA'
		},
		{
			ubigeo: '021907',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'QUICHES'
		},
		{
			ubigeo: '021908',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'RAGASH'
		},
		{
			ubigeo: '021909',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'SAN JUAN'
		},
		{
			ubigeo: '021910',
			departamento: 'ANCASH',
			provincia: 'SIHUAS',
			distrito: 'SICSIBAMBA'
		},
		{
			ubigeo: '022001',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'YUNGAY'
		},
		{
			ubigeo: '022002',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'CASCAPARA'
		},
		{
			ubigeo: '022003',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'MANCOS'
		},
		{
			ubigeo: '022004',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'MATACOTO'
		},
		{
			ubigeo: '022005',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'QUILLO'
		},
		{
			ubigeo: '022006',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'RANRAHIRCA'
		},
		{
			ubigeo: '022007',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'SHUPLUY'
		},
		{
			ubigeo: '022008',
			departamento: 'ANCASH',
			provincia: 'YUNGAY',
			distrito: 'YANAMA'
		},
		{
			ubigeo: '030101',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'ABANCAY'
		},
		{
			ubigeo: '030102',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'CHACOCHE'
		},
		{
			ubigeo: '030103',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'CIRCA'
		},
		{
			ubigeo: '030104',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'CURAHUASI'
		},
		{
			ubigeo: '030105',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'HUANIPACA'
		},
		{
			ubigeo: '030106',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'LAMBRAMA'
		},
		{
			ubigeo: '030107',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'PICHIRHUA'
		},
		{
			ubigeo: '030108',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'SAN PEDRO DE CACHORA'
		},
		{
			ubigeo: '030109',
			departamento: 'APURIMAC',
			provincia: 'ABANCAY',
			distrito: 'TAMBURCO'
		},
		{
			ubigeo: '030201',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'ANDAHUAYLAS'
		},
		{
			ubigeo: '030202',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'ANDARAPA'
		},
		{
			ubigeo: '030203',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'CHIARA'
		},
		{
			ubigeo: '030204',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'HUANCARAMA'
		},
		{
			ubigeo: '030205',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'HUANCARAY'
		},
		{
			ubigeo: '030206',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'HUAYANA'
		},
		{
			ubigeo: '030207',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'KISHUARA'
		},
		{
			ubigeo: '030208',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'PACOBAMBA'
		},
		{
			ubigeo: '030209',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'PACUCHA'
		},
		{
			ubigeo: '030210',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'PAMPACHIRI'
		},
		{
			ubigeo: '030211',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'POMACOCHA'
		},
		{
			ubigeo: '030212',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'SAN ANTONIO DE CACHI'
		},
		{
			ubigeo: '030213',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'SAN JERONIMO'
		},
		{
			ubigeo: '030214',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'SAN MIGUEL DE CHACCRAMPA'
		},
		{
			ubigeo: '030215',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'SANTA MARIA DE CHICMO'
		},
		{
			ubigeo: '030216',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'TALAVERA'
		},
		{
			ubigeo: '030217',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'TUMAY HUARACA'
		},
		{
			ubigeo: '030218',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'TURPO'
		},
		{
			ubigeo: '030219',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'KAQUIABAMBA'
		},
		{
			ubigeo: '030220',
			departamento: 'APURIMAC',
			provincia: 'ANDAHUAYLAS',
			distrito: 'JOSE MARIA ARGUEDAS'
		},
		{
			ubigeo: '030301',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'ANTABAMBA'
		},
		{
			ubigeo: '030302',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'EL ORO'
		},
		{
			ubigeo: '030303',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'HUAQUIRCA'
		},
		{
			ubigeo: '030304',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'JUAN ESPINOZA MEDRANO'
		},
		{
			ubigeo: '030305',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'OROPESA'
		},
		{
			ubigeo: '030306',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'PACHACONAS'
		},
		{
			ubigeo: '030307',
			departamento: 'APURIMAC',
			provincia: 'ANTABAMBA',
			distrito: 'SABAINO'
		},
		{
			ubigeo: '030401',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'CHALHUANCA'
		},
		{
			ubigeo: '030402',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'CAPAYA'
		},
		{
			ubigeo: '030403',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'CARAYBAMBA'
		},
		{
			ubigeo: '030404',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'CHAPIMARCA'
		},
		{
			ubigeo: '030405',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'COLCABAMBA'
		},
		{
			ubigeo: '030406',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'COTARUSE'
		},
		{
			ubigeo: '030407',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'HUAYLLO'
		},
		{
			ubigeo: '030408',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'JUSTO APU SAHUARAURA'
		},
		{
			ubigeo: '030409',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'LUCRE'
		},
		{
			ubigeo: '030410',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'POCOHUANCA'
		},
		{
			ubigeo: '030411',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'SAN JUAN DE CHACÑA'
		},
		{
			ubigeo: '030412',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'SAÑAYCA'
		},
		{
			ubigeo: '030413',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'SORAYA'
		},
		{
			ubigeo: '030414',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'TAPAIRIHUA'
		},
		{
			ubigeo: '030415',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'TINTAY'
		},
		{
			ubigeo: '030416',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'TORAYA'
		},
		{
			ubigeo: '030417',
			departamento: 'APURIMAC',
			provincia: 'AYMARAES',
			distrito: 'YANACA'
		},
		{
			ubigeo: '030501',
			departamento: 'APURIMAC',
			provincia: 'COTABAMBAS',
			distrito: 'TAMBOBAMBA'
		},
		{
			ubigeo: '030502',
			departamento: 'APURIMAC',
			provincia: 'COTABAMBAS',
			distrito: 'COTABAMBAS'
		},
		{
			ubigeo: '030503',
			departamento: 'APURIMAC',
			provincia: 'COTABAMBAS',
			distrito: 'COYLLURQUI'
		},
		{
			ubigeo: '030504',
			departamento: 'APURIMAC',
			provincia: 'COTABAMBAS',
			distrito: 'HAQUIRA'
		},
		{
			ubigeo: '030505',
			departamento: 'APURIMAC',
			provincia: 'COTABAMBAS',
			distrito: 'MARA'
		},
		{
			ubigeo: '030506',
			departamento: 'APURIMAC',
			provincia: 'COTABAMBAS',
			distrito: 'CHALLHUAHUACHO'
		},
		{
			ubigeo: '030601',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'CHINCHEROS'
		},
		{
			ubigeo: '030602',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'ANCO-HUALLO'
		},
		{
			ubigeo: '030603',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'COCHARCAS'
		},
		{
			ubigeo: '030604',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'HUACCANA'
		},
		{
			ubigeo: '030605',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'OCOBAMBA'
		},
		{
			ubigeo: '030606',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'ONGOY'
		},
		{
			ubigeo: '030607',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'URANMARCA'
		},
		{
			ubigeo: '030608',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'RANRACANCHA'
		},
		{
			ubigeo: '030609',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'ROCCHACC'
		},
		{
			ubigeo: '030610',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'EL PORVENIR'
		},
		{
			ubigeo: '030611',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'LOS CHANKAS'
		},
		{
			ubigeo: '030612',
			departamento: 'APURIMAC',
			provincia: 'CHINCHEROS',
			distrito: 'AHUAYRO'
		},
		{
			ubigeo: '030701',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'CHUQUIBAMBILLA'
		},
		{
			ubigeo: '030702',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'CURPAHUASI'
		},
		{
			ubigeo: '030703',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'GAMARRA'
		},
		{
			ubigeo: '030704',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'HUAYLLATI'
		},
		{
			ubigeo: '030705',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'MAMARA'
		},
		{
			ubigeo: '030706',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'MICAELA BASTIDAS'
		},
		{
			ubigeo: '030707',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'PATAYPAMPA'
		},
		{
			ubigeo: '030708',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'PROGRESO'
		},
		{
			ubigeo: '030709',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'SAN ANTONIO'
		},
		{
			ubigeo: '030710',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '030711',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'TURPAY'
		},
		{
			ubigeo: '030712',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'VILCABAMBA'
		},
		{
			ubigeo: '030713',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'VIRUNDO'
		},
		{
			ubigeo: '030714',
			departamento: 'APURIMAC',
			provincia: 'GRAU',
			distrito: 'CURASCO'
		},
		{
			ubigeo: '040101',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'AREQUIPA'
		},
		{
			ubigeo: '040102',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'ALTO SELVA ALEGRE'
		},
		{
			ubigeo: '040103',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'CAYMA'
		},
		{
			ubigeo: '040104',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'CERRO COLORADO'
		},
		{
			ubigeo: '040105',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'CHARACATO'
		},
		{
			ubigeo: '040106',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'CHIGUATA'
		},
		{
			ubigeo: '040107',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'JACOBO HUNTER'
		},
		{
			ubigeo: '040108',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'LA JOYA'
		},
		{
			ubigeo: '040109',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'MARIANO MELGAR'
		},
		{
			ubigeo: '040110',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'MIRAFLORES'
		},
		{
			ubigeo: '040111',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'MOLLEBAYA'
		},
		{
			ubigeo: '040112',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'PAUCARPATA'
		},
		{
			ubigeo: '040113',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'POCSI'
		},
		{
			ubigeo: '040114',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'POLOBAYA'
		},
		{
			ubigeo: '040115',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'QUEQUEÑA'
		},
		{
			ubigeo: '040116',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SABANDIA'
		},
		{
			ubigeo: '040117',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SACHACA'
		},
		{
			ubigeo: '040118',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SAN JUAN DE SIGUAS'
		},
		{
			ubigeo: '040119',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SAN JUAN DE TARUCANI'
		},
		{
			ubigeo: '040120',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SANTA ISABEL DE SIGUAS'
		},
		{
			ubigeo: '040121',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SANTA RITA DE SIGUAS'
		},
		{
			ubigeo: '040122',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'SOCABAYA'
		},
		{
			ubigeo: '040123',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'TIABAYA'
		},
		{
			ubigeo: '040124',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'UCHUMAYO'
		},
		{
			ubigeo: '040125',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'VITOR'
		},
		{
			ubigeo: '040126',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'YANAHUARA'
		},
		{
			ubigeo: '040127',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'YARABAMBA'
		},
		{
			ubigeo: '040128',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'YURA'
		},
		{
			ubigeo: '040129',
			departamento: 'AREQUIPA',
			provincia: 'AREQUIPA',
			distrito: 'JOSE LUIS BUSTAMANTE Y RIVERO'
		},
		{
			ubigeo: '040201',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'CAMANA'
		},
		{
			ubigeo: '040202',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'JOSE MARIA QUIMPER'
		},
		{
			ubigeo: '040203',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'MARIANO NICOLAS VALCARCEL'
		},
		{
			ubigeo: '040204',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'MARISCAL CACERES'
		},
		{
			ubigeo: '040205',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'NICOLAS DE PIEROLA'
		},
		{
			ubigeo: '040206',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'OCOÑA'
		},
		{
			ubigeo: '040207',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'QUILCA'
		},
		{
			ubigeo: '040208',
			departamento: 'AREQUIPA',
			provincia: 'CAMANA',
			distrito: 'SAMUEL PASTOR'
		},
		{
			ubigeo: '040301',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'CARAVELI'
		},
		{
			ubigeo: '040302',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'ACARI'
		},
		{
			ubigeo: '040303',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'ATICO'
		},
		{
			ubigeo: '040304',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'ATIQUIPA'
		},
		{
			ubigeo: '040305',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'BELLA UNION'
		},
		{
			ubigeo: '040306',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'CAHUACHO'
		},
		{
			ubigeo: '040307',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'CHALA'
		},
		{
			ubigeo: '040308',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'CHAPARRA'
		},
		{
			ubigeo: '040309',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'HUANUHUANU'
		},
		{
			ubigeo: '040310',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'JAQUI'
		},
		{
			ubigeo: '040311',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'LOMAS'
		},
		{
			ubigeo: '040312',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'QUICACHA'
		},
		{
			ubigeo: '040313',
			departamento: 'AREQUIPA',
			provincia: 'CARAVELI',
			distrito: 'YAUCA'
		},
		{
			ubigeo: '040401',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'APLAO'
		},
		{
			ubigeo: '040402',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'ANDAGUA'
		},
		{
			ubigeo: '040403',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'AYO'
		},
		{
			ubigeo: '040404',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'CHACHAS'
		},
		{
			ubigeo: '040405',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'CHILCAYMARCA'
		},
		{
			ubigeo: '040406',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'CHOCO'
		},
		{
			ubigeo: '040407',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'HUANCARQUI'
		},
		{
			ubigeo: '040408',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'MACHAGUAY'
		},
		{
			ubigeo: '040409',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'ORCOPAMPA'
		},
		{
			ubigeo: '040410',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'PAMPACOLCA'
		},
		{
			ubigeo: '040411',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'TIPAN'
		},
		{
			ubigeo: '040412',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'UÑON'
		},
		{
			ubigeo: '040413',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'URACA'
		},
		{
			ubigeo: '040414',
			departamento: 'AREQUIPA',
			provincia: 'CASTILLA',
			distrito: 'VIRACO'
		},
		{
			ubigeo: '040501',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'CHIVAY'
		},
		{
			ubigeo: '040502',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'ACHOMA'
		},
		{
			ubigeo: '040503',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'CABANACONDE'
		},
		{
			ubigeo: '040504',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'CALLALLI'
		},
		{
			ubigeo: '040505',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'CAYLLOMA'
		},
		{
			ubigeo: '040506',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'COPORAQUE'
		},
		{
			ubigeo: '040507',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'HUAMBO'
		},
		{
			ubigeo: '040508',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'HUANCA'
		},
		{
			ubigeo: '040509',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'ICHUPAMPA'
		},
		{
			ubigeo: '040510',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'LARI'
		},
		{
			ubigeo: '040511',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'LLUTA'
		},
		{
			ubigeo: '040512',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'MACA'
		},
		{
			ubigeo: '040513',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'MADRIGAL'
		},
		{
			ubigeo: '040514',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'SAN ANTONIO DE CHUCA'
		},
		{
			ubigeo: '040515',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'SIBAYO'
		},
		{
			ubigeo: '040516',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'TAPAY'
		},
		{
			ubigeo: '040517',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'TISCO'
		},
		{
			ubigeo: '040518',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'TUTI'
		},
		{
			ubigeo: '040519',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'YANQUE'
		},
		{
			ubigeo: '040520',
			departamento: 'AREQUIPA',
			provincia: 'CAYLLOMA',
			distrito: 'MAJES'
		},
		{
			ubigeo: '040601',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'CHUQUIBAMBA'
		},
		{
			ubigeo: '040602',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'ANDARAY'
		},
		{
			ubigeo: '040603',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'CAYARANI'
		},
		{
			ubigeo: '040604',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'CHICHAS'
		},
		{
			ubigeo: '040605',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'IRAY'
		},
		{
			ubigeo: '040606',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'RIO GRANDE'
		},
		{
			ubigeo: '040607',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'SALAMANCA'
		},
		{
			ubigeo: '040608',
			departamento: 'AREQUIPA',
			provincia: 'CONDESUYOS',
			distrito: 'YANAQUIHUA'
		},
		{
			ubigeo: '040701',
			departamento: 'AREQUIPA',
			provincia: 'ISLAY',
			distrito: 'MOLLENDO'
		},
		{
			ubigeo: '040702',
			departamento: 'AREQUIPA',
			provincia: 'ISLAY',
			distrito: 'COCACHACRA'
		},
		{
			ubigeo: '040703',
			departamento: 'AREQUIPA',
			provincia: 'ISLAY',
			distrito: 'DEAN VALDIVIA'
		},
		{
			ubigeo: '040704',
			departamento: 'AREQUIPA',
			provincia: 'ISLAY',
			distrito: 'ISLAY'
		},
		{
			ubigeo: '040705',
			departamento: 'AREQUIPA',
			provincia: 'ISLAY',
			distrito: 'MEJIA'
		},
		{
			ubigeo: '040706',
			departamento: 'AREQUIPA',
			provincia: 'ISLAY',
			distrito: 'PUNTA DE BOMBON'
		},
		{
			ubigeo: '040801',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'COTAHUASI'
		},
		{
			ubigeo: '040802',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'ALCA'
		},
		{
			ubigeo: '040803',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'CHARCANA'
		},
		{
			ubigeo: '040804',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'HUAYNACOTAS'
		},
		{
			ubigeo: '040805',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'PAMPAMARCA'
		},
		{
			ubigeo: '040806',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'PUYCA'
		},
		{
			ubigeo: '040807',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'QUECHUALLA'
		},
		{
			ubigeo: '040808',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'SAYLA'
		},
		{
			ubigeo: '040809',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'TAURIA'
		},
		{
			ubigeo: '040810',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'TOMEPAMPA'
		},
		{
			ubigeo: '040811',
			departamento: 'AREQUIPA',
			provincia: 'LA UNION',
			distrito: 'TORO'
		},
		{
			ubigeo: '050101',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'AYACUCHO'
		},
		{
			ubigeo: '050102',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'ACOCRO'
		},
		{
			ubigeo: '050103',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'ACOS VINCHOS'
		},
		{
			ubigeo: '050104',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'CARMEN ALTO'
		},
		{
			ubigeo: '050105',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'CHIARA'
		},
		{
			ubigeo: '050106',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'OCROS'
		},
		{
			ubigeo: '050107',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'PACAYCASA'
		},
		{
			ubigeo: '050108',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'QUINUA'
		},
		{
			ubigeo: '050109',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'SAN JOSE DE TICLLAS'
		},
		{
			ubigeo: '050110',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'SAN JUAN BAUTISTA'
		},
		{
			ubigeo: '050111',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'SANTIAGO DE PISCHA'
		},
		{
			ubigeo: '050112',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'SOCOS'
		},
		{
			ubigeo: '050113',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'TAMBILLO'
		},
		{
			ubigeo: '050114',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'VINCHOS'
		},
		{
			ubigeo: '050115',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'JESUS NAZARENO'
		},
		{
			ubigeo: '050116',
			departamento: 'AYACUCHO',
			provincia: 'HUAMANGA',
			distrito: 'ANDRES AVELINO CACERES DORREGARAY'
		},
		{
			ubigeo: '050201',
			departamento: 'AYACUCHO',
			provincia: 'CANGALLO',
			distrito: 'CANGALLO'
		},
		{
			ubigeo: '050202',
			departamento: 'AYACUCHO',
			provincia: 'CANGALLO',
			distrito: 'CHUSCHI'
		},
		{
			ubigeo: '050203',
			departamento: 'AYACUCHO',
			provincia: 'CANGALLO',
			distrito: 'LOS MOROCHUCOS'
		},
		{
			ubigeo: '050204',
			departamento: 'AYACUCHO',
			provincia: 'CANGALLO',
			distrito: 'MARIA PARADO DE BELLIDO'
		},
		{
			ubigeo: '050205',
			departamento: 'AYACUCHO',
			provincia: 'CANGALLO',
			distrito: 'PARAS'
		},
		{
			ubigeo: '050206',
			departamento: 'AYACUCHO',
			provincia: 'CANGALLO',
			distrito: 'TOTOS'
		},
		{
			ubigeo: '050301',
			departamento: 'AYACUCHO',
			provincia: 'HUANCA SANCOS',
			distrito: 'SANCOS'
		},
		{
			ubigeo: '050302',
			departamento: 'AYACUCHO',
			provincia: 'HUANCA SANCOS',
			distrito: 'CARAPO'
		},
		{
			ubigeo: '050303',
			departamento: 'AYACUCHO',
			provincia: 'HUANCA SANCOS',
			distrito: 'SACSAMARCA'
		},
		{
			ubigeo: '050304',
			departamento: 'AYACUCHO',
			provincia: 'HUANCA SANCOS',
			distrito: 'SANTIAGO DE LUCANAMARCA'
		},
		{
			ubigeo: '050401',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'HUANTA'
		},
		{
			ubigeo: '050402',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'AYAHUANCO'
		},
		{
			ubigeo: '050403',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'HUAMANGUILLA'
		},
		{
			ubigeo: '050404',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'IGUAIN'
		},
		{
			ubigeo: '050405',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'LURICOCHA'
		},
		{
			ubigeo: '050406',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'SANTILLANA'
		},
		{
			ubigeo: '050407',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'SIVIA'
		},
		{
			ubigeo: '050408',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'LLOCHEGUA'
		},
		{
			ubigeo: '050409',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'CANAYRE'
		},
		{
			ubigeo: '050410',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'UCHURACCAY'
		},
		{
			ubigeo: '050411',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'PUCACOLPA'
		},
		{
			ubigeo: '050412',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'CHACA'
		},
		{
			ubigeo: '050413',
			departamento: 'AYACUCHO',
			provincia: 'HUANTA',
			distrito: 'PUTIS'
		},
		{
			ubigeo: '050501',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'SAN MIGUEL'
		},
		{
			ubigeo: '050502',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'ANCO'
		},
		{
			ubigeo: '050503',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'AYNA'
		},
		{
			ubigeo: '050504',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'CHILCAS'
		},
		{
			ubigeo: '050505',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'CHUNGUI'
		},
		{
			ubigeo: '050506',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'LUIS CARRANZA'
		},
		{
			ubigeo: '050507',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '050508',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'TAMBO'
		},
		{
			ubigeo: '050509',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'SAMUGARI'
		},
		{
			ubigeo: '050510',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'ANCHIHUAY'
		},
		{
			ubigeo: '050511',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'ORONCCOY'
		},
		{
			ubigeo: '050512',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'UNION PROGRESO'
		},
		{
			ubigeo: '050513',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'RIO MAGDALENA'
		},
		{
			ubigeo: '050514',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'NINABAMBA'
		},
		{
			ubigeo: '050515',
			departamento: 'AYACUCHO',
			provincia: 'LA MAR',
			distrito: 'PATIBAMBA'
		},
		{
			ubigeo: '050601',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'PUQUIO'
		},
		{
			ubigeo: '050602',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'AUCARA'
		},
		{
			ubigeo: '050603',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'CABANA'
		},
		{
			ubigeo: '050604',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'CARMEN SALCEDO'
		},
		{
			ubigeo: '050605',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'CHAVIÑA'
		},
		{
			ubigeo: '050606',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'CHIPAO'
		},
		{
			ubigeo: '050607',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'HUAC-HUAS'
		},
		{
			ubigeo: '050608',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'LARAMATE'
		},
		{
			ubigeo: '050609',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'LEONCIO PRADO'
		},
		{
			ubigeo: '050610',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'LLAUTA'
		},
		{
			ubigeo: '050611',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'LUCANAS'
		},
		{
			ubigeo: '050612',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'OCAÑA'
		},
		{
			ubigeo: '050613',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'OTOCA'
		},
		{
			ubigeo: '050614',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SAISA'
		},
		{
			ubigeo: '050615',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SAN CRISTOBAL'
		},
		{
			ubigeo: '050616',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SAN JUAN'
		},
		{
			ubigeo: '050617',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SAN PEDRO'
		},
		{
			ubigeo: '050618',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SAN PEDRO DE PALCO'
		},
		{
			ubigeo: '050619',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SANCOS'
		},
		{
			ubigeo: '050620',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SANTA ANA DE HUAYCAHUACHO'
		},
		{
			ubigeo: '050621',
			departamento: 'AYACUCHO',
			provincia: 'LUCANAS',
			distrito: 'SANTA LUCIA'
		},
		{
			ubigeo: '050701',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'CORACORA'
		},
		{
			ubigeo: '050702',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'CHUMPI'
		},
		{
			ubigeo: '050703',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'CORONEL CASTAÑEDA'
		},
		{
			ubigeo: '050704',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'PACAPAUSA'
		},
		{
			ubigeo: '050705',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'PULLO'
		},
		{
			ubigeo: '050706',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'PUYUSCA'
		},
		{
			ubigeo: '050707',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'SAN FRANCISCO DE RAVACAYCO'
		},
		{
			ubigeo: '050708',
			departamento: 'AYACUCHO',
			provincia: 'PARINACOCHAS',
			distrito: 'UPAHUACHO'
		},
		{
			ubigeo: '050801',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'PAUSA'
		},
		{
			ubigeo: '050802',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'COLTA'
		},
		{
			ubigeo: '050803',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'CORCULLA'
		},
		{
			ubigeo: '050804',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'LAMPA'
		},
		{
			ubigeo: '050805',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'MARCABAMBA'
		},
		{
			ubigeo: '050806',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'OYOLO'
		},
		{
			ubigeo: '050807',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'PARARCA'
		},
		{
			ubigeo: '050808',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'SAN JAVIER DE ALPABAMBA'
		},
		{
			ubigeo: '050809',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'SAN JOSE DE USHUA'
		},
		{
			ubigeo: '050810',
			departamento: 'AYACUCHO',
			provincia: 'PAUCAR DEL SARA SARA',
			distrito: 'SARA SARA'
		},
		{
			ubigeo: '050901',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'QUEROBAMBA'
		},
		{
			ubigeo: '050902',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'BELEN'
		},
		{
			ubigeo: '050903',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'CHALCOS'
		},
		{
			ubigeo: '050904',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'CHILCAYOC'
		},
		{
			ubigeo: '050905',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'HUACAÑA'
		},
		{
			ubigeo: '050906',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'MORCOLLA'
		},
		{
			ubigeo: '050907',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'PAICO'
		},
		{
			ubigeo: '050908',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'SAN PEDRO DE LARCAY'
		},
		{
			ubigeo: '050909',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'SAN SALVADOR DE QUIJE'
		},
		{
			ubigeo: '050910',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'SANTIAGO DE PAUCARAY'
		},
		{
			ubigeo: '050911',
			departamento: 'AYACUCHO',
			provincia: 'SUCRE',
			distrito: 'SORAS'
		},
		{
			ubigeo: '051001',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'HUANCAPI'
		},
		{
			ubigeo: '051002',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'ALCAMENCA'
		},
		{
			ubigeo: '051003',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'APONGO'
		},
		{
			ubigeo: '051004',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'ASQUIPATA'
		},
		{
			ubigeo: '051005',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'CANARIA'
		},
		{
			ubigeo: '051006',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'CAYARA'
		},
		{
			ubigeo: '051007',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'COLCA'
		},
		{
			ubigeo: '051008',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'HUAMANQUIQUIA'
		},
		{
			ubigeo: '051009',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'HUANCARAYLLA'
		},
		{
			ubigeo: '051010',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'HUAYA'
		},
		{
			ubigeo: '051011',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'SARHUA'
		},
		{
			ubigeo: '051012',
			departamento: 'AYACUCHO',
			provincia: 'VICTOR FAJARDO',
			distrito: 'VILCANCHOS'
		},
		{
			ubigeo: '051101',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'VILCAS HUAMAN'
		},
		{
			ubigeo: '051102',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'ACCOMARCA'
		},
		{
			ubigeo: '051103',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'CARHUANCA'
		},
		{
			ubigeo: '051104',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'CONCEPCION'
		},
		{
			ubigeo: '051105',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'HUAMBALPA'
		},
		{
			ubigeo: '051106',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'INDEPENDENCIA'
		},
		{
			ubigeo: '051107',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'SAURAMA'
		},
		{
			ubigeo: '051108',
			departamento: 'AYACUCHO',
			provincia: 'VILCAS HUAMAN',
			distrito: 'VISCHONGO'
		},
		{
			ubigeo: '060101',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'CAJAMARCA'
		},
		{
			ubigeo: '060102',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'ASUNCION'
		},
		{
			ubigeo: '060103',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'CHETILLA'
		},
		{
			ubigeo: '060104',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'COSPAN'
		},
		{
			ubigeo: '060105',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'ENCAÑADA'
		},
		{
			ubigeo: '060106',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'JESUS'
		},
		{
			ubigeo: '060107',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'LLACANORA'
		},
		{
			ubigeo: '060108',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'LOS BAÑOS DEL INCA'
		},
		{
			ubigeo: '060109',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'MAGDALENA'
		},
		{
			ubigeo: '060110',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'MATARA'
		},
		{
			ubigeo: '060111',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'NAMORA'
		},
		{
			ubigeo: '060112',
			departamento: 'CAJAMARCA',
			provincia: 'CAJAMARCA',
			distrito: 'SAN JUAN'
		},
		{
			ubigeo: '060201',
			departamento: 'CAJAMARCA',
			provincia: 'CAJABAMBA',
			distrito: 'CAJABAMBA'
		},
		{
			ubigeo: '060202',
			departamento: 'CAJAMARCA',
			provincia: 'CAJABAMBA',
			distrito: 'CACHACHI'
		},
		{
			ubigeo: '060203',
			departamento: 'CAJAMARCA',
			provincia: 'CAJABAMBA',
			distrito: 'CONDEBAMBA'
		},
		{
			ubigeo: '060204',
			departamento: 'CAJAMARCA',
			provincia: 'CAJABAMBA',
			distrito: 'SITACOCHA'
		},
		{
			ubigeo: '060301',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'CELENDIN'
		},
		{
			ubigeo: '060302',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'CHUMUCH'
		},
		{
			ubigeo: '060303',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'CORTEGANA'
		},
		{
			ubigeo: '060304',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'HUASMIN'
		},
		{
			ubigeo: '060305',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'JORGE CHAVEZ'
		},
		{
			ubigeo: '060306',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'JOSE GALVEZ'
		},
		{
			ubigeo: '060307',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'MIGUEL IGLESIAS'
		},
		{
			ubigeo: '060308',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'OXAMARCA'
		},
		{
			ubigeo: '060309',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'SOROCHUCO'
		},
		{
			ubigeo: '060310',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'SUCRE'
		},
		{
			ubigeo: '060311',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'UTCO'
		},
		{
			ubigeo: '060312',
			departamento: 'CAJAMARCA',
			provincia: 'CELENDIN',
			distrito: 'LA LIBERTAD DE PALLAN'
		},
		{
			ubigeo: '060401',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CHOTA'
		},
		{
			ubigeo: '060402',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'ANGUIA'
		},
		{
			ubigeo: '060403',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CHADIN'
		},
		{
			ubigeo: '060404',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CHIGUIRIP'
		},
		{
			ubigeo: '060405',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CHIMBAN'
		},
		{
			ubigeo: '060406',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CHOROPAMPA'
		},
		{
			ubigeo: '060407',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'COCHABAMBA'
		},
		{
			ubigeo: '060408',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CONCHAN'
		},
		{
			ubigeo: '060409',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'HUAMBOS'
		},
		{
			ubigeo: '060410',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'LAJAS'
		},
		{
			ubigeo: '060411',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'LLAMA'
		},
		{
			ubigeo: '060412',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'MIRACOSTA'
		},
		{
			ubigeo: '060413',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'PACCHA'
		},
		{
			ubigeo: '060414',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'PION'
		},
		{
			ubigeo: '060415',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'QUEROCOTO'
		},
		{
			ubigeo: '060416',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'SAN JUAN DE LICUPIS'
		},
		{
			ubigeo: '060417',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'TACABAMBA'
		},
		{
			ubigeo: '060418',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'TOCMOCHE'
		},
		{
			ubigeo: '060419',
			departamento: 'CAJAMARCA',
			provincia: 'CHOTA',
			distrito: 'CHALAMARCA'
		},
		{
			ubigeo: '060501',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'CONTUMAZA'
		},
		{
			ubigeo: '060502',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'CHILETE'
		},
		{
			ubigeo: '060503',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'CUPISNIQUE'
		},
		{
			ubigeo: '060504',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'GUZMANGO'
		},
		{
			ubigeo: '060505',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'SAN BENITO'
		},
		{
			ubigeo: '060506',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'SANTA CRUZ DE TOLEDO'
		},
		{
			ubigeo: '060507',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'TANTARICA'
		},
		{
			ubigeo: '060508',
			departamento: 'CAJAMARCA',
			provincia: 'CONTUMAZA',
			distrito: 'YONAN'
		},
		{
			ubigeo: '060601',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'CUTERVO'
		},
		{
			ubigeo: '060602',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'CALLAYUC'
		},
		{
			ubigeo: '060603',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'CHOROS'
		},
		{
			ubigeo: '060604',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'CUJILLO'
		},
		{
			ubigeo: '060605',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'LA RAMADA'
		},
		{
			ubigeo: '060606',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'PIMPINGOS'
		},
		{
			ubigeo: '060607',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'QUEROCOTILLO'
		},
		{
			ubigeo: '060608',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SAN ANDRES DE CUTERVO'
		},
		{
			ubigeo: '060609',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SAN JUAN DE CUTERVO'
		},
		{
			ubigeo: '060610',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SAN LUIS DE LUCMA'
		},
		{
			ubigeo: '060611',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SANTA CRUZ'
		},
		{
			ubigeo: '060612',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SANTO DOMINGO DE LA CAPILLA'
		},
		{
			ubigeo: '060613',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SANTO TOMAS'
		},
		{
			ubigeo: '060614',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'SOCOTA'
		},
		{
			ubigeo: '060615',
			departamento: 'CAJAMARCA',
			provincia: 'CUTERVO',
			distrito: 'TORIBIO CASANOVA'
		},
		{
			ubigeo: '060701',
			departamento: 'CAJAMARCA',
			provincia: 'HUALGAYOC',
			distrito: 'BAMBAMARCA'
		},
		{
			ubigeo: '060702',
			departamento: 'CAJAMARCA',
			provincia: 'HUALGAYOC',
			distrito: 'CHUGUR'
		},
		{
			ubigeo: '060703',
			departamento: 'CAJAMARCA',
			provincia: 'HUALGAYOC',
			distrito: 'HUALGAYOC'
		},
		{
			ubigeo: '060801',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'JAEN'
		},
		{
			ubigeo: '060802',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'BELLAVISTA'
		},
		{
			ubigeo: '060803',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'CHONTALI'
		},
		{
			ubigeo: '060804',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'COLASAY'
		},
		{
			ubigeo: '060805',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'HUABAL'
		},
		{
			ubigeo: '060806',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'LAS PIRIAS'
		},
		{
			ubigeo: '060807',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'POMAHUACA'
		},
		{
			ubigeo: '060808',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'PUCARA'
		},
		{
			ubigeo: '060809',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'SALLIQUE'
		},
		{
			ubigeo: '060810',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'SAN FELIPE'
		},
		{
			ubigeo: '060811',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'SAN JOSE DEL ALTO'
		},
		{
			ubigeo: '060812',
			departamento: 'CAJAMARCA',
			provincia: 'JAEN',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '060901',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'SAN IGNACIO'
		},
		{
			ubigeo: '060902',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'CHIRINOS'
		},
		{
			ubigeo: '060903',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'HUARANGO'
		},
		{
			ubigeo: '060904',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'LA COIPA'
		},
		{
			ubigeo: '060905',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'NAMBALLE'
		},
		{
			ubigeo: '060906',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'SAN JOSE DE LOURDES'
		},
		{
			ubigeo: '060907',
			departamento: 'CAJAMARCA',
			provincia: 'SAN IGNACIO',
			distrito: 'TABACONAS'
		},
		{
			ubigeo: '061001',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'PEDRO GALVEZ'
		},
		{
			ubigeo: '061002',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'CHANCAY'
		},
		{
			ubigeo: '061003',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'EDUARDO VILLANUEVA'
		},
		{
			ubigeo: '061004',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'GREGORIO PITA'
		},
		{
			ubigeo: '061005',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'ICHOCAN'
		},
		{
			ubigeo: '061006',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'JOSE MANUEL QUIROZ'
		},
		{
			ubigeo: '061007',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MARCOS',
			distrito: 'JOSE SABOGAL'
		},
		{
			ubigeo: '061101',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'SAN MIGUEL'
		},
		{
			ubigeo: '061102',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'BOLIVAR'
		},
		{
			ubigeo: '061103',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'CALQUIS'
		},
		{
			ubigeo: '061104',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'CATILLUC'
		},
		{
			ubigeo: '061105',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'EL PRADO'
		},
		{
			ubigeo: '061106',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'LA FLORIDA'
		},
		{
			ubigeo: '061107',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'LLAPA'
		},
		{
			ubigeo: '061108',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'NANCHOC'
		},
		{
			ubigeo: '061109',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'NIEPOS'
		},
		{
			ubigeo: '061110',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'SAN GREGORIO'
		},
		{
			ubigeo: '061111',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'SAN SILVESTRE DE COCHAN'
		},
		{
			ubigeo: '061112',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'TONGOD'
		},
		{
			ubigeo: '061113',
			departamento: 'CAJAMARCA',
			provincia: 'SAN MIGUEL',
			distrito: 'UNION AGUA BLANCA'
		},
		{
			ubigeo: '061201',
			departamento: 'CAJAMARCA',
			provincia: 'SAN PABLO',
			distrito: 'SAN PABLO'
		},
		{
			ubigeo: '061202',
			departamento: 'CAJAMARCA',
			provincia: 'SAN PABLO',
			distrito: 'SAN BERNARDINO'
		},
		{
			ubigeo: '061203',
			departamento: 'CAJAMARCA',
			provincia: 'SAN PABLO',
			distrito: 'SAN LUIS'
		},
		{
			ubigeo: '061204',
			departamento: 'CAJAMARCA',
			provincia: 'SAN PABLO',
			distrito: 'TUMBADEN'
		},
		{
			ubigeo: '061301',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'SANTA CRUZ'
		},
		{
			ubigeo: '061302',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'ANDABAMBA'
		},
		{
			ubigeo: '061303',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'CATACHE'
		},
		{
			ubigeo: '061304',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'CHANCAYBAÑOS'
		},
		{
			ubigeo: '061305',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'LA ESPERANZA'
		},
		{
			ubigeo: '061306',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'NINABAMBA'
		},
		{
			ubigeo: '061307',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'PULAN'
		},
		{
			ubigeo: '061308',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'SAUCEPAMPA'
		},
		{
			ubigeo: '061309',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'SEXI'
		},
		{
			ubigeo: '061310',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'UTICYACU'
		},
		{
			ubigeo: '061311',
			departamento: 'CAJAMARCA',
			provincia: 'SANTA CRUZ',
			distrito: 'YAUYUCAN'
		},
		{
			ubigeo: '070101',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'CALLAO'
		},
		{
			ubigeo: '070102',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'BELLAVISTA'
		},
		{
			ubigeo: '070103',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'CARMEN DE LA LEGUA REYNOSO'
		},
		{
			ubigeo: '070104',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'LA PERLA'
		},
		{
			ubigeo: '070105',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'LA PUNTA'
		},
		{
			ubigeo: '070106',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'VENTANILLA'
		},
		{
			ubigeo: '070107',
			departamento: 'CALLAO',
			provincia: 'CALLAO',
			distrito: 'MI PERU'
		},
		{
			ubigeo: '080101',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'CUSCO'
		},
		{
			ubigeo: '080102',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'CCORCA'
		},
		{
			ubigeo: '080103',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'POROY'
		},
		{
			ubigeo: '080104',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'SAN JERONIMO'
		},
		{
			ubigeo: '080105',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'SAN SEBASTIAN'
		},
		{
			ubigeo: '080106',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'SANTIAGO'
		},
		{
			ubigeo: '080107',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'SAYLLA'
		},
		{
			ubigeo: '080108',
			departamento: 'CUSCO',
			provincia: 'CUSCO',
			distrito: 'WANCHAQ'
		},
		{
			ubigeo: '080201',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'ACOMAYO'
		},
		{
			ubigeo: '080202',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'ACOPIA'
		},
		{
			ubigeo: '080203',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'ACOS'
		},
		{
			ubigeo: '080204',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'MOSOC LLACTA'
		},
		{
			ubigeo: '080205',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'POMACANCHI'
		},
		{
			ubigeo: '080206',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'RONDOCAN'
		},
		{
			ubigeo: '080207',
			departamento: 'CUSCO',
			provincia: 'ACOMAYO',
			distrito: 'SANGARARA'
		},
		{
			ubigeo: '080301',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'ANTA'
		},
		{
			ubigeo: '080302',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'ANCAHUASI'
		},
		{
			ubigeo: '080303',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'CACHIMAYO'
		},
		{
			ubigeo: '080304',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'CHINCHAYPUJIO'
		},
		{
			ubigeo: '080305',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'HUAROCONDO'
		},
		{
			ubigeo: '080306',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'LIMATAMBO'
		},
		{
			ubigeo: '080307',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'MOLLEPATA'
		},
		{
			ubigeo: '080308',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'PUCYURA'
		},
		{
			ubigeo: '080309',
			departamento: 'CUSCO',
			provincia: 'ANTA',
			distrito: 'ZURITE'
		},
		{
			ubigeo: '080401',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'CALCA'
		},
		{
			ubigeo: '080402',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'COYA'
		},
		{
			ubigeo: '080403',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'LAMAY'
		},
		{
			ubigeo: '080404',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'LARES'
		},
		{
			ubigeo: '080405',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'PISAC'
		},
		{
			ubigeo: '080406',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'SAN SALVADOR'
		},
		{
			ubigeo: '080407',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'TARAY'
		},
		{
			ubigeo: '080408',
			departamento: 'CUSCO',
			provincia: 'CALCA',
			distrito: 'YANATILE'
		},
		{
			ubigeo: '080501',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'YANAOCA'
		},
		{
			ubigeo: '080502',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'CHECCA'
		},
		{
			ubigeo: '080503',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'KUNTURKANKI'
		},
		{
			ubigeo: '080504',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'LANGUI'
		},
		{
			ubigeo: '080505',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'LAYO'
		},
		{
			ubigeo: '080506',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'PAMPAMARCA'
		},
		{
			ubigeo: '080507',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'QUEHUE'
		},
		{
			ubigeo: '080508',
			departamento: 'CUSCO',
			provincia: 'CANAS',
			distrito: 'TUPAC AMARU'
		},
		{
			ubigeo: '080601',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'SICUANI'
		},
		{
			ubigeo: '080602',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'CHECACUPE'
		},
		{
			ubigeo: '080603',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'COMBAPATA'
		},
		{
			ubigeo: '080604',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'MARANGANI'
		},
		{
			ubigeo: '080605',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'PITUMARCA'
		},
		{
			ubigeo: '080606',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'SAN PABLO'
		},
		{
			ubigeo: '080607',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'SAN PEDRO'
		},
		{
			ubigeo: '080608',
			departamento: 'CUSCO',
			provincia: 'CANCHIS',
			distrito: 'TINTA'
		},
		{
			ubigeo: '080701',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'SANTO TOMAS'
		},
		{
			ubigeo: '080702',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'CAPACMARCA'
		},
		{
			ubigeo: '080703',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'CHAMACA'
		},
		{
			ubigeo: '080704',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'COLQUEMARCA'
		},
		{
			ubigeo: '080705',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'LIVITACA'
		},
		{
			ubigeo: '080706',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'LLUSCO'
		},
		{
			ubigeo: '080707',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'QUIÑOTA'
		},
		{
			ubigeo: '080708',
			departamento: 'CUSCO',
			provincia: 'CHUMBIVILCAS',
			distrito: 'VELILLE'
		},
		{
			ubigeo: '080801',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'ESPINAR'
		},
		{
			ubigeo: '080802',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'CONDOROMA'
		},
		{
			ubigeo: '080803',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'COPORAQUE'
		},
		{
			ubigeo: '080804',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'OCORURO'
		},
		{
			ubigeo: '080805',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'PALLPATA'
		},
		{
			ubigeo: '080806',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'PICHIGUA'
		},
		{
			ubigeo: '080807',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'SUYCKUTAMBO'
		},
		{
			ubigeo: '080808',
			departamento: 'CUSCO',
			provincia: 'ESPINAR',
			distrito: 'ALTO PICHIGUA'
		},
		{
			ubigeo: '080901',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'SANTA ANA'
		},
		{
			ubigeo: '080902',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'ECHARATE'
		},
		{
			ubigeo: '080903',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'HUAYOPATA'
		},
		{
			ubigeo: '080904',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'MARANURA'
		},
		{
			ubigeo: '080905',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'OCOBAMBA'
		},
		{
			ubigeo: '080906',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'QUELLOUNO'
		},
		{
			ubigeo: '080907',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'QUIMBIRI'
		},
		{
			ubigeo: '080908',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'SANTA TERESA'
		},
		{
			ubigeo: '080909',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'VILCABAMBA'
		},
		{
			ubigeo: '080910',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'PICHARI'
		},
		{
			ubigeo: '080911',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'INKAWASI'
		},
		{
			ubigeo: '080912',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'VILLA VIRGEN'
		},
		{
			ubigeo: '080913',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'VILLA KINTIARINA'
		},
		{
			ubigeo: '080914',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'MEGANTONI'
		},
		{
			ubigeo: '080915',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'KUMPIRUSHIATO'
		},
		{
			ubigeo: '080916',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'CIELO PUNCO'
		},
		{
			ubigeo: '080917',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'MANITEA'
		},
		{
			ubigeo: '080918',
			departamento: 'CUSCO',
			provincia: 'LA CONVENCION',
			distrito: 'UNION ASHÁNINKA'
		},
		{
			ubigeo: '081001',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'PARURO'
		},
		{
			ubigeo: '081002',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'ACCHA'
		},
		{
			ubigeo: '081003',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'CCAPI'
		},
		{
			ubigeo: '081004',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'COLCHA'
		},
		{
			ubigeo: '081005',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'HUANOQUITE'
		},
		{
			ubigeo: '081006',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'OMACHA'
		},
		{
			ubigeo: '081007',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'PACCARITAMBO'
		},
		{
			ubigeo: '081008',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'PILLPINTO'
		},
		{
			ubigeo: '081009',
			departamento: 'CUSCO',
			provincia: 'PARURO',
			distrito: 'YAURISQUE'
		},
		{
			ubigeo: '081101',
			departamento: 'CUSCO',
			provincia: 'PAUCARTAMBO',
			distrito: 'PAUCARTAMBO'
		},
		{
			ubigeo: '081102',
			departamento: 'CUSCO',
			provincia: 'PAUCARTAMBO',
			distrito: 'CAICAY'
		},
		{
			ubigeo: '081103',
			departamento: 'CUSCO',
			provincia: 'PAUCARTAMBO',
			distrito: 'CHALLABAMBA'
		},
		{
			ubigeo: '081104',
			departamento: 'CUSCO',
			provincia: 'PAUCARTAMBO',
			distrito: 'COLQUEPATA'
		},
		{
			ubigeo: '081105',
			departamento: 'CUSCO',
			provincia: 'PAUCARTAMBO',
			distrito: 'HUANCARANI'
		},
		{
			ubigeo: '081106',
			departamento: 'CUSCO',
			provincia: 'PAUCARTAMBO',
			distrito: 'KOSÑIPATA'
		},
		{
			ubigeo: '081201',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'URCOS'
		},
		{
			ubigeo: '081202',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'ANDAHUAYLILLAS'
		},
		{
			ubigeo: '081203',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'CAMANTI'
		},
		{
			ubigeo: '081204',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'CCARHUAYO'
		},
		{
			ubigeo: '081205',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'CCATCA'
		},
		{
			ubigeo: '081206',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'CUSIPATA'
		},
		{
			ubigeo: '081207',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'HUARO'
		},
		{
			ubigeo: '081208',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'LUCRE'
		},
		{
			ubigeo: '081209',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'MARCAPATA'
		},
		{
			ubigeo: '081210',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'OCONGATE'
		},
		{
			ubigeo: '081211',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'OROPESA'
		},
		{
			ubigeo: '081212',
			departamento: 'CUSCO',
			provincia: 'QUISPICANCHI',
			distrito: 'QUIQUIJANA'
		},
		{
			ubigeo: '081301',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'URUBAMBA'
		},
		{
			ubigeo: '081302',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'CHINCHERO'
		},
		{
			ubigeo: '081303',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'HUAYLLABAMBA'
		},
		{
			ubigeo: '081304',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'MACHUPICCHU'
		},
		{
			ubigeo: '081305',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'MARAS'
		},
		{
			ubigeo: '081306',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'OLLANTAYTAMBO'
		},
		{
			ubigeo: '081307',
			departamento: 'CUSCO',
			provincia: 'URUBAMBA',
			distrito: 'YUCAY'
		},
		{
			ubigeo: '090101',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'HUANCAVELICA'
		},
		{
			ubigeo: '090102',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'ACOBAMBILLA'
		},
		{
			ubigeo: '090103',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'ACORIA'
		},
		{
			ubigeo: '090104',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'CONAYCA'
		},
		{
			ubigeo: '090105',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'CUENCA'
		},
		{
			ubigeo: '090106',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'HUACHOCOLPA'
		},
		{
			ubigeo: '090107',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'HUAYLLAHUARA'
		},
		{
			ubigeo: '090108',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'IZCUCHACA'
		},
		{
			ubigeo: '090109',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'LARIA'
		},
		{
			ubigeo: '090110',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'MANTA'
		},
		{
			ubigeo: '090111',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'MARISCAL CACERES'
		},
		{
			ubigeo: '090112',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'MOYA'
		},
		{
			ubigeo: '090113',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'NUEVO OCCORO'
		},
		{
			ubigeo: '090114',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'PALCA'
		},
		{
			ubigeo: '090115',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'PILCHACA'
		},
		{
			ubigeo: '090116',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'VILCA'
		},
		{
			ubigeo: '090117',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'YAULI'
		},
		{
			ubigeo: '090118',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'ASCENSION'
		},
		{
			ubigeo: '090119',
			departamento: 'HUANCAVELICA',
			provincia: 'HUANCAVELICA',
			distrito: 'HUANDO'
		},
		{
			ubigeo: '090201',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'ACOBAMBA'
		},
		{
			ubigeo: '090202',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'ANDABAMBA'
		},
		{
			ubigeo: '090203',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'ANTA'
		},
		{
			ubigeo: '090204',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'CAJA'
		},
		{
			ubigeo: '090205',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'MARCAS'
		},
		{
			ubigeo: '090206',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'PAUCARA'
		},
		{
			ubigeo: '090207',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'POMACOCHA'
		},
		{
			ubigeo: '090208',
			departamento: 'HUANCAVELICA',
			provincia: 'ACOBAMBA',
			distrito: 'ROSARIO'
		},
		{
			ubigeo: '090301',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'LIRCAY'
		},
		{
			ubigeo: '090302',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'ANCHONGA'
		},
		{
			ubigeo: '090303',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'CALLANMARCA'
		},
		{
			ubigeo: '090304',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'CCOCHACCASA'
		},
		{
			ubigeo: '090305',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'CHINCHO'
		},
		{
			ubigeo: '090306',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'CONGALLA'
		},
		{
			ubigeo: '090307',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'HUANCA-HUANCA'
		},
		{
			ubigeo: '090308',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'HUAYLLAY GRANDE'
		},
		{
			ubigeo: '090309',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'JULCAMARCA'
		},
		{
			ubigeo: '090310',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'SAN ANTONIO DE ANTAPARCO'
		},
		{
			ubigeo: '090311',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'SANTO TOMAS DE PATA'
		},
		{
			ubigeo: '090312',
			departamento: 'HUANCAVELICA',
			provincia: 'ANGARAES',
			distrito: 'SECCLLA'
		},
		{
			ubigeo: '090401',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'CASTROVIRREYNA'
		},
		{
			ubigeo: '090402',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'ARMA'
		},
		{
			ubigeo: '090403',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'AURAHUA'
		},
		{
			ubigeo: '090404',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'CAPILLAS'
		},
		{
			ubigeo: '090405',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'CHUPAMARCA'
		},
		{
			ubigeo: '090406',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'COCAS'
		},
		{
			ubigeo: '090407',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'HUACHOS'
		},
		{
			ubigeo: '090408',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'HUAMATAMBO'
		},
		{
			ubigeo: '090409',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'MOLLEPAMPA'
		},
		{
			ubigeo: '090410',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'SAN JUAN'
		},
		{
			ubigeo: '090411',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'SANTA ANA'
		},
		{
			ubigeo: '090412',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'TANTARA'
		},
		{
			ubigeo: '090413',
			departamento: 'HUANCAVELICA',
			provincia: 'CASTROVIRREYNA',
			distrito: 'TICRAPO'
		},
		{
			ubigeo: '090501',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'CHURCAMPA'
		},
		{
			ubigeo: '090502',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'ANCO'
		},
		{
			ubigeo: '090503',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'CHINCHIHUASI'
		},
		{
			ubigeo: '090504',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'EL CARMEN'
		},
		{
			ubigeo: '090505',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'LA MERCED'
		},
		{
			ubigeo: '090506',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'LOCROJA'
		},
		{
			ubigeo: '090507',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'PAUCARBAMBA'
		},
		{
			ubigeo: '090508',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'SAN MIGUEL DE MAYOCC'
		},
		{
			ubigeo: '090509',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'SAN PEDRO DE CORIS'
		},
		{
			ubigeo: '090510',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'PACHAMARCA'
		},
		{
			ubigeo: '090511',
			departamento: 'HUANCAVELICA',
			provincia: 'CHURCAMPA',
			distrito: 'COSME'
		},
		{
			ubigeo: '090601',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'HUAYTARA'
		},
		{
			ubigeo: '090602',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'AYAVI'
		},
		{
			ubigeo: '090603',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'CORDOVA'
		},
		{
			ubigeo: '090604',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'HUAYACUNDO ARMA'
		},
		{
			ubigeo: '090605',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'LARAMARCA'
		},
		{
			ubigeo: '090606',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'OCOYO'
		},
		{
			ubigeo: '090607',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'PILPICHACA'
		},
		{
			ubigeo: '090608',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'QUERCO'
		},
		{
			ubigeo: '090609',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'QUITO-ARMA'
		},
		{
			ubigeo: '090610',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'SAN ANTONIO DE CUSICANCHA'
		},
		{
			ubigeo: '090611',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'SAN FRANCISCO DE SANGAYAICO'
		},
		{
			ubigeo: '090612',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'SAN ISIDRO'
		},
		{
			ubigeo: '090613',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'SANTIAGO DE CHOCORVOS'
		},
		{
			ubigeo: '090614',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'SANTIAGO DE QUIRAHUARA'
		},
		{
			ubigeo: '090615',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'SANTO DOMINGO DE CAPILLAS'
		},
		{
			ubigeo: '090616',
			departamento: 'HUANCAVELICA',
			provincia: 'HUAYTARA',
			distrito: 'TAMBO'
		},
		{
			ubigeo: '090701',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'PAMPAS'
		},
		{
			ubigeo: '090702',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'ACOSTAMBO'
		},
		{
			ubigeo: '090703',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'ACRAQUIA'
		},
		{
			ubigeo: '090704',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'AHUAYCHA'
		},
		{
			ubigeo: '090705',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'COLCABAMBA'
		},
		{
			ubigeo: '090706',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'DANIEL HERNANDEZ'
		},
		{
			ubigeo: '090707',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'HUACHOCOLPA'
		},
		{
			ubigeo: '090709',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'HUARIBAMBA'
		},
		{
			ubigeo: '090710',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'ÑAHUIMPUQUIO'
		},
		{
			ubigeo: '090711',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'PAZOS'
		},
		{
			ubigeo: '090713',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'QUISHUAR'
		},
		{
			ubigeo: '090714',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'SALCABAMBA'
		},
		{
			ubigeo: '090715',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'SALCAHUASI'
		},
		{
			ubigeo: '090716',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'SAN MARCOS DE ROCCHAC'
		},
		{
			ubigeo: '090717',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'SURCUBAMBA'
		},
		{
			ubigeo: '090718',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'TINTAY PUNCU'
		},
		{
			ubigeo: '090719',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'QUICHUAS'
		},
		{
			ubigeo: '090720',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'ANDAYMARCA'
		},
		{
			ubigeo: '090721',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'ROBLE'
		},
		{
			ubigeo: '090722',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'PICHOS'
		},
		{
			ubigeo: '090723',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'SANTIAGO DE TUCUMA'
		},
		{
			ubigeo: '090724',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'LAMBRAS'
		},
		{
			ubigeo: '090725',
			departamento: 'HUANCAVELICA',
			provincia: 'TAYACAJA',
			distrito: 'COCHABAMBA'
		},
		{
			ubigeo: '100101',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'HUANUCO'
		},
		{
			ubigeo: '100102',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'AMARILIS'
		},
		{
			ubigeo: '100103',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'CHINCHAO'
		},
		{
			ubigeo: '100104',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'CHURUBAMBA'
		},
		{
			ubigeo: '100105',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'MARGOS'
		},
		{
			ubigeo: '100106',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'QUISQUI'
		},
		{
			ubigeo: '100107',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'SAN FRANCISCO DE CAYRAN'
		},
		{
			ubigeo: '100108',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'SAN PEDRO DE CHAULAN'
		},
		{
			ubigeo: '100109',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'SANTA MARIA DEL VALLE'
		},
		{
			ubigeo: '100110',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'YARUMAYO'
		},
		{
			ubigeo: '100111',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'PILLCO MARCA'
		},
		{
			ubigeo: '100112',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'YACUS'
		},
		{
			ubigeo: '100113',
			departamento: 'HUANUCO',
			provincia: 'HUANUCO',
			distrito: 'SAN PABLO DE PILLAO'
		},
		{
			ubigeo: '100201',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'AMBO'
		},
		{
			ubigeo: '100202',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'CAYNA'
		},
		{
			ubigeo: '100203',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'COLPAS'
		},
		{
			ubigeo: '100204',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'CONCHAMARCA'
		},
		{
			ubigeo: '100205',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'HUACAR'
		},
		{
			ubigeo: '100206',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'SAN FRANCISCO'
		},
		{
			ubigeo: '100207',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'SAN RAFAEL'
		},
		{
			ubigeo: '100208',
			departamento: 'HUANUCO',
			provincia: 'AMBO',
			distrito: 'TOMAY KICHWA'
		},
		{
			ubigeo: '100301',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'LA UNION'
		},
		{
			ubigeo: '100307',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'CHUQUIS'
		},
		{
			ubigeo: '100311',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'MARIAS'
		},
		{
			ubigeo: '100313',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'PACHAS'
		},
		{
			ubigeo: '100316',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'QUIVILLA'
		},
		{
			ubigeo: '100317',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'RIPAN'
		},
		{
			ubigeo: '100321',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'SHUNQUI'
		},
		{
			ubigeo: '100322',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'SILLAPATA'
		},
		{
			ubigeo: '100323',
			departamento: 'HUANUCO',
			provincia: 'DOS DE MAYO',
			distrito: 'YANAS'
		},
		{
			ubigeo: '100401',
			departamento: 'HUANUCO',
			provincia: 'HUACAYBAMBA',
			distrito: 'HUACAYBAMBA'
		},
		{
			ubigeo: '100402',
			departamento: 'HUANUCO',
			provincia: 'HUACAYBAMBA',
			distrito: 'CANCHABAMBA'
		},
		{
			ubigeo: '100403',
			departamento: 'HUANUCO',
			provincia: 'HUACAYBAMBA',
			distrito: 'COCHABAMBA'
		},
		{
			ubigeo: '100404',
			departamento: 'HUANUCO',
			provincia: 'HUACAYBAMBA',
			distrito: 'PINRA'
		},
		{
			ubigeo: '100501',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'LLATA'
		},
		{
			ubigeo: '100502',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'ARANCAY'
		},
		{
			ubigeo: '100503',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'CHAVIN DE PARIARCA'
		},
		{
			ubigeo: '100504',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'JACAS GRANDE'
		},
		{
			ubigeo: '100505',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'JIRCAN'
		},
		{
			ubigeo: '100506',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'MIRAFLORES'
		},
		{
			ubigeo: '100507',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'MONZON'
		},
		{
			ubigeo: '100508',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'PUNCHAO'
		},
		{
			ubigeo: '100509',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'PUÑOS'
		},
		{
			ubigeo: '100510',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'SINGA'
		},
		{
			ubigeo: '100511',
			departamento: 'HUANUCO',
			provincia: 'HUAMALIES',
			distrito: 'TANTAMAYO'
		},
		{
			ubigeo: '100601',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'RUPA-RUPA'
		},
		{
			ubigeo: '100602',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'DANIEL ALOMIAS ROBLES'
		},
		{
			ubigeo: '100603',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'HERMILIO VALDIZAN'
		},
		{
			ubigeo: '100604',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'JOSE CRESPO Y CASTILLO'
		},
		{
			ubigeo: '100605',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'LUYANDO'
		},
		{
			ubigeo: '100606',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'MARIANO DAMASO BERAUN'
		},
		{
			ubigeo: '100607',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'PUCAYACU'
		},
		{
			ubigeo: '100608',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'CASTILLO GRANDE'
		},
		{
			ubigeo: '100609',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'PUEBLO NUEVO'
		},
		{
			ubigeo: '100610',
			departamento: 'HUANUCO',
			provincia: 'LEONCIO PRADO',
			distrito: 'SANTO DOMINGO DE ANDA'
		},
		{
			ubigeo: '100701',
			departamento: 'HUANUCO',
			provincia: 'MARAÑON',
			distrito: 'HUACRACHUCO'
		},
		{
			ubigeo: '100702',
			departamento: 'HUANUCO',
			provincia: 'MARAÑON',
			distrito: 'CHOLON'
		},
		{
			ubigeo: '100703',
			departamento: 'HUANUCO',
			provincia: 'MARAÑON',
			distrito: 'SAN BUENAVENTURA'
		},
		{
			ubigeo: '100704',
			departamento: 'HUANUCO',
			provincia: 'MARAÑON',
			distrito: 'LA MORADA'
		},
		{
			ubigeo: '100705',
			departamento: 'HUANUCO',
			provincia: 'MARAÑON',
			distrito: 'SANTA ROSA DE ALTO YANAJANCA'
		},
		{
			ubigeo: '100801',
			departamento: 'HUANUCO',
			provincia: 'PACHITEA',
			distrito: 'PANAO'
		},
		{
			ubigeo: '100802',
			departamento: 'HUANUCO',
			provincia: 'PACHITEA',
			distrito: 'CHAGLLA'
		},
		{
			ubigeo: '100803',
			departamento: 'HUANUCO',
			provincia: 'PACHITEA',
			distrito: 'MOLINO'
		},
		{
			ubigeo: '100804',
			departamento: 'HUANUCO',
			provincia: 'PACHITEA',
			distrito: 'UMARI'
		},
		{
			ubigeo: '100901',
			departamento: 'HUANUCO',
			provincia: 'PUERTO INCA',
			distrito: 'PUERTO INCA'
		},
		{
			ubigeo: '100902',
			departamento: 'HUANUCO',
			provincia: 'PUERTO INCA',
			distrito: 'CODO DEL POZUZO'
		},
		{
			ubigeo: '100903',
			departamento: 'HUANUCO',
			provincia: 'PUERTO INCA',
			distrito: 'HONORIA'
		},
		{
			ubigeo: '100904',
			departamento: 'HUANUCO',
			provincia: 'PUERTO INCA',
			distrito: 'TOURNAVISTA'
		},
		{
			ubigeo: '100905',
			departamento: 'HUANUCO',
			provincia: 'PUERTO INCA',
			distrito: 'YUYAPICHIS'
		},
		{
			ubigeo: '101001',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'JESUS'
		},
		{
			ubigeo: '101002',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'BAÑOS'
		},
		{
			ubigeo: '101003',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'JIVIA'
		},
		{
			ubigeo: '101004',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'QUEROPALCA'
		},
		{
			ubigeo: '101005',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'RONDOS'
		},
		{
			ubigeo: '101006',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'SAN FRANCISCO DE ASIS'
		},
		{
			ubigeo: '101007',
			departamento: 'HUANUCO',
			provincia: 'LAURICOCHA',
			distrito: 'SAN MIGUEL DE CAURI'
		},
		{
			ubigeo: '101101',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'CHAVINILLO'
		},
		{
			ubigeo: '101102',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'CAHUAC'
		},
		{
			ubigeo: '101103',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'CHACABAMBA'
		},
		{
			ubigeo: '101104',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'APARICIO POMARES'
		},
		{
			ubigeo: '101105',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'JACAS CHICO'
		},
		{
			ubigeo: '101106',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'OBAS'
		},
		{
			ubigeo: '101107',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'PAMPAMARCA'
		},
		{
			ubigeo: '101108',
			departamento: 'HUANUCO',
			provincia: 'YAROWILCA',
			distrito: 'CHORAS'
		},
		{
			ubigeo: '110101',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'ICA'
		},
		{
			ubigeo: '110102',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'LA TINGUIÑA'
		},
		{
			ubigeo: '110103',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'LOS AQUIJES'
		},
		{
			ubigeo: '110104',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'OCUCAJE'
		},
		{
			ubigeo: '110105',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'PACHACUTEC'
		},
		{
			ubigeo: '110106',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'PARCONA'
		},
		{
			ubigeo: '110107',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'PUEBLO NUEVO'
		},
		{
			ubigeo: '110108',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'SALAS'
		},
		{
			ubigeo: '110109',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'SAN JOSE DE LOS MOLINOS'
		},
		{
			ubigeo: '110110',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'SAN JUAN BAUTISTA'
		},
		{
			ubigeo: '110111',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'SANTIAGO'
		},
		{
			ubigeo: '110112',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'SUBTANJALLA'
		},
		{
			ubigeo: '110113',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'TATE'
		},
		{
			ubigeo: '110114',
			departamento: 'ICA',
			provincia: 'ICA',
			distrito: 'YAUCA DEL ROSARIO'
		},
		{
			ubigeo: '110201',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'CHINCHA ALTA'
		},
		{
			ubigeo: '110202',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'ALTO LARAN'
		},
		{
			ubigeo: '110203',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'CHAVIN'
		},
		{
			ubigeo: '110204',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'CHINCHA BAJA'
		},
		{
			ubigeo: '110205',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'EL CARMEN'
		},
		{
			ubigeo: '110206',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'GROCIO PRADO'
		},
		{
			ubigeo: '110207',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'PUEBLO NUEVO'
		},
		{
			ubigeo: '110208',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'SAN JUAN DE YANAC'
		},
		{
			ubigeo: '110209',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'SAN PEDRO DE HUACARPANA'
		},
		{
			ubigeo: '110210',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'SUNAMPE'
		},
		{
			ubigeo: '110211',
			departamento: 'ICA',
			provincia: 'CHINCHA',
			distrito: 'TAMBO DE MORA'
		},
		{
			ubigeo: '110301',
			departamento: 'ICA',
			provincia: 'NAZCA',
			distrito: 'NAZCA'
		},
		{
			ubigeo: '110302',
			departamento: 'ICA',
			provincia: 'NAZCA',
			distrito: 'CHANGUILLO'
		},
		{
			ubigeo: '110303',
			departamento: 'ICA',
			provincia: 'NAZCA',
			distrito: 'EL INGENIO'
		},
		{
			ubigeo: '110304',
			departamento: 'ICA',
			provincia: 'NAZCA',
			distrito: 'MARCONA'
		},
		{
			ubigeo: '110305',
			departamento: 'ICA',
			provincia: 'NAZCA',
			distrito: 'VISTA ALEGRE'
		},
		{
			ubigeo: '110401',
			departamento: 'ICA',
			provincia: 'PALPA',
			distrito: 'PALPA'
		},
		{
			ubigeo: '110402',
			departamento: 'ICA',
			provincia: 'PALPA',
			distrito: 'LLIPATA'
		},
		{
			ubigeo: '110403',
			departamento: 'ICA',
			provincia: 'PALPA',
			distrito: 'RIO GRANDE'
		},
		{
			ubigeo: '110404',
			departamento: 'ICA',
			provincia: 'PALPA',
			distrito: 'SANTA CRUZ'
		},
		{
			ubigeo: '110405',
			departamento: 'ICA',
			provincia: 'PALPA',
			distrito: 'TIBILLO'
		},
		{
			ubigeo: '110501',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'PISCO'
		},
		{
			ubigeo: '110502',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'HUANCANO'
		},
		{
			ubigeo: '110503',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'HUMAY'
		},
		{
			ubigeo: '110504',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'INDEPENDENCIA'
		},
		{
			ubigeo: '110505',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'PARACAS'
		},
		{
			ubigeo: '110506',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'SAN ANDRES'
		},
		{
			ubigeo: '110507',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'SAN CLEMENTE'
		},
		{
			ubigeo: '110508',
			departamento: 'ICA',
			provincia: 'PISCO',
			distrito: 'TUPAC AMARU INCA'
		},
		{
			ubigeo: '120101',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'HUANCAYO'
		},
		{
			ubigeo: '120104',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CARHUACALLANGA'
		},
		{
			ubigeo: '120105',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CHACAPAMPA'
		},
		{
			ubigeo: '120106',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CHICCHE'
		},
		{
			ubigeo: '120107',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CHILCA'
		},
		{
			ubigeo: '120108',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CHONGOS ALTO'
		},
		{
			ubigeo: '120111',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CHUPURO'
		},
		{
			ubigeo: '120112',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'COLCA'
		},
		{
			ubigeo: '120113',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'CULLHUAS'
		},
		{
			ubigeo: '120114',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'EL TAMBO'
		},
		{
			ubigeo: '120116',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'HUACRAPUQUIO'
		},
		{
			ubigeo: '120117',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'HUALHUAS'
		},
		{
			ubigeo: '120119',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'HUANCAN'
		},
		{
			ubigeo: '120120',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'HUASICANCHA'
		},
		{
			ubigeo: '120121',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'HUAYUCACHI'
		},
		{
			ubigeo: '120122',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'INGENIO'
		},
		{
			ubigeo: '120124',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'PARIAHUANCA'
		},
		{
			ubigeo: '120125',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'PILCOMAYO'
		},
		{
			ubigeo: '120126',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'PUCARA'
		},
		{
			ubigeo: '120127',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'QUICHUAY'
		},
		{
			ubigeo: '120128',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'QUILCAS'
		},
		{
			ubigeo: '120129',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'SAN AGUSTIN'
		},
		{
			ubigeo: '120130',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'SAN JERONIMO DE TUNAN'
		},
		{
			ubigeo: '120132',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'SAÑO'
		},
		{
			ubigeo: '120133',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'SAPALLANGA'
		},
		{
			ubigeo: '120134',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'SICAYA'
		},
		{
			ubigeo: '120135',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'SANTO DOMINGO DE ACOBAMBA'
		},
		{
			ubigeo: '120136',
			departamento: 'JUNIN',
			provincia: 'HUANCAYO',
			distrito: 'VIQUES'
		},
		{
			ubigeo: '120201',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'CONCEPCION'
		},
		{
			ubigeo: '120202',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'ACO'
		},
		{
			ubigeo: '120203',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'ANDAMARCA'
		},
		{
			ubigeo: '120204',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'CHAMBARA'
		},
		{
			ubigeo: '120205',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'COCHAS'
		},
		{
			ubigeo: '120206',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'COMAS'
		},
		{
			ubigeo: '120207',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'HEROINAS TOLEDO'
		},
		{
			ubigeo: '120208',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'MANZANARES'
		},
		{
			ubigeo: '120209',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'MARISCAL CASTILLA'
		},
		{
			ubigeo: '120210',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'MATAHUASI'
		},
		{
			ubigeo: '120211',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'MITO'
		},
		{
			ubigeo: '120212',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'NUEVE DE JULIO'
		},
		{
			ubigeo: '120213',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'ORCOTUNA'
		},
		{
			ubigeo: '120214',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'SAN JOSE DE QUERO'
		},
		{
			ubigeo: '120215',
			departamento: 'JUNIN',
			provincia: 'CONCEPCION',
			distrito: 'SANTA ROSA DE OCOPA'
		},
		{
			ubigeo: '120301',
			departamento: 'JUNIN',
			provincia: 'CHANCHAMAYO',
			distrito: 'CHANCHAMAYO'
		},
		{
			ubigeo: '120302',
			departamento: 'JUNIN',
			provincia: 'CHANCHAMAYO',
			distrito: 'PERENE'
		},
		{
			ubigeo: '120303',
			departamento: 'JUNIN',
			provincia: 'CHANCHAMAYO',
			distrito: 'PICHANAQUI'
		},
		{
			ubigeo: '120304',
			departamento: 'JUNIN',
			provincia: 'CHANCHAMAYO',
			distrito: 'SAN LUIS DE SHUARO'
		},
		{
			ubigeo: '120305',
			departamento: 'JUNIN',
			provincia: 'CHANCHAMAYO',
			distrito: 'SAN RAMON'
		},
		{
			ubigeo: '120306',
			departamento: 'JUNIN',
			provincia: 'CHANCHAMAYO',
			distrito: 'VITOC'
		},
		{
			ubigeo: '120401',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'JAUJA'
		},
		{
			ubigeo: '120402',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'ACOLLA'
		},
		{
			ubigeo: '120403',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'APATA'
		},
		{
			ubigeo: '120404',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'ATAURA'
		},
		{
			ubigeo: '120405',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'CANCHAYLLO'
		},
		{
			ubigeo: '120406',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'CURICACA'
		},
		{
			ubigeo: '120407',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'EL MANTARO'
		},
		{
			ubigeo: '120408',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'HUAMALI'
		},
		{
			ubigeo: '120409',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'HUARIPAMPA'
		},
		{
			ubigeo: '120410',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'HUERTAS'
		},
		{
			ubigeo: '120411',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'JANJAILLO'
		},
		{
			ubigeo: '120412',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'JULCAN'
		},
		{
			ubigeo: '120413',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'LEONOR ORDOÑEZ'
		},
		{
			ubigeo: '120414',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'LLOCLLAPAMPA'
		},
		{
			ubigeo: '120415',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MARCO'
		},
		{
			ubigeo: '120416',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MASMA'
		},
		{
			ubigeo: '120417',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MASMA CHICCHE'
		},
		{
			ubigeo: '120418',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MOLINOS'
		},
		{
			ubigeo: '120419',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MONOBAMBA'
		},
		{
			ubigeo: '120420',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MUQUI'
		},
		{
			ubigeo: '120421',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'MUQUIYAUYO'
		},
		{
			ubigeo: '120422',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'PACA'
		},
		{
			ubigeo: '120423',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'PACCHA'
		},
		{
			ubigeo: '120424',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'PANCAN'
		},
		{
			ubigeo: '120425',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'PARCO'
		},
		{
			ubigeo: '120426',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'POMACANCHA'
		},
		{
			ubigeo: '120427',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'RICRAN'
		},
		{
			ubigeo: '120428',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'SAN LORENZO'
		},
		{
			ubigeo: '120429',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'SAN PEDRO DE CHUNAN'
		},
		{
			ubigeo: '120430',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'SAUSA'
		},
		{
			ubigeo: '120431',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'SINCOS'
		},
		{
			ubigeo: '120432',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'TUNAN MARCA'
		},
		{
			ubigeo: '120433',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'YAULI'
		},
		{
			ubigeo: '120434',
			departamento: 'JUNIN',
			provincia: 'JAUJA',
			distrito: 'YAUYOS'
		},
		{
			ubigeo: '120501',
			departamento: 'JUNIN',
			provincia: 'JUNIN',
			distrito: 'JUNIN'
		},
		{
			ubigeo: '120502',
			departamento: 'JUNIN',
			provincia: 'JUNIN',
			distrito: 'CARHUAMAYO'
		},
		{
			ubigeo: '120503',
			departamento: 'JUNIN',
			provincia: 'JUNIN',
			distrito: 'ONDORES'
		},
		{
			ubigeo: '120504',
			departamento: 'JUNIN',
			provincia: 'JUNIN',
			distrito: 'ULCUMAYO'
		},
		{
			ubigeo: '120601',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'SATIPO'
		},
		{
			ubigeo: '120602',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'COVIRIALI'
		},
		{
			ubigeo: '120603',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'LLAYLLA'
		},
		{
			ubigeo: '120604',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'MAZAMARI'
		},
		{
			ubigeo: '120605',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'PAMPA HERMOSA'
		},
		{
			ubigeo: '120606',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'PANGOA'
		},
		{
			ubigeo: '120607',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'RIO NEGRO'
		},
		{
			ubigeo: '120608',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'RIO TAMBO'
		},
		{
			ubigeo: '120609',
			departamento: 'JUNIN',
			provincia: 'SATIPO',
			distrito: 'VIZCATAN DEL ENE'
		},
		{
			ubigeo: '120701',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'TARMA'
		},
		{
			ubigeo: '120702',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'ACOBAMBA'
		},
		{
			ubigeo: '120703',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'HUARICOLCA'
		},
		{
			ubigeo: '120704',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'HUASAHUASI'
		},
		{
			ubigeo: '120705',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'LA UNION'
		},
		{
			ubigeo: '120706',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'PALCA'
		},
		{
			ubigeo: '120707',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'PALCAMAYO'
		},
		{
			ubigeo: '120708',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'SAN PEDRO DE CAJAS'
		},
		{
			ubigeo: '120709',
			departamento: 'JUNIN',
			provincia: 'TARMA',
			distrito: 'TAPO'
		},
		{
			ubigeo: '120801',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'LA OROYA'
		},
		{
			ubigeo: '120802',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'CHACAPALPA'
		},
		{
			ubigeo: '120803',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'HUAY-HUAY'
		},
		{
			ubigeo: '120804',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'MARCAPOMACOCHA'
		},
		{
			ubigeo: '120805',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'MOROCOCHA'
		},
		{
			ubigeo: '120806',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'PACCHA'
		},
		{
			ubigeo: '120807',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'SANTA BARBARA DE CARHUACAYAN'
		},
		{
			ubigeo: '120808',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'SANTA ROSA DE SACCO'
		},
		{
			ubigeo: '120809',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'SUITUCANCHA'
		},
		{
			ubigeo: '120810',
			departamento: 'JUNIN',
			provincia: 'YAULI',
			distrito: 'YAULI'
		},
		{
			ubigeo: '120901',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'CHUPACA'
		},
		{
			ubigeo: '120902',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'AHUAC'
		},
		{
			ubigeo: '120903',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'CHONGOS BAJO'
		},
		{
			ubigeo: '120904',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'HUACHAC'
		},
		{
			ubigeo: '120905',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'HUAMANCACA CHICO'
		},
		{
			ubigeo: '120906',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'SAN JUAN DE YSCOS'
		},
		{
			ubigeo: '120907',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'SAN JUAN DE JARPA'
		},
		{
			ubigeo: '120908',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'TRES DE DICIEMBRE'
		},
		{
			ubigeo: '120909',
			departamento: 'JUNIN',
			provincia: 'CHUPACA',
			distrito: 'YANACANCHA'
		},
		{
			ubigeo: '130101',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'TRUJILLO'
		},
		{
			ubigeo: '130102',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'EL PORVENIR'
		},
		{
			ubigeo: '130103',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'FLORENCIA DE MORA'
		},
		{
			ubigeo: '130104',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'HUANCHACO'
		},
		{
			ubigeo: '130105',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'LA ESPERANZA'
		},
		{
			ubigeo: '130106',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'LAREDO'
		},
		{
			ubigeo: '130107',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'MOCHE'
		},
		{
			ubigeo: '130108',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'POROTO'
		},
		{
			ubigeo: '130109',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'SALAVERRY'
		},
		{
			ubigeo: '130110',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'SIMBAL'
		},
		{
			ubigeo: '130111',
			departamento: 'LA LIBERTAD',
			provincia: 'TRUJILLO',
			distrito: 'VICTOR LARCO HERRERA'
		},
		{
			ubigeo: '130201',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'ASCOPE'
		},
		{
			ubigeo: '130202',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'CHICAMA'
		},
		{
			ubigeo: '130203',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'CHOCOPE'
		},
		{
			ubigeo: '130204',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'MAGDALENA DE CAO'
		},
		{
			ubigeo: '130205',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'PAIJAN'
		},
		{
			ubigeo: '130206',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'RAZURI'
		},
		{
			ubigeo: '130207',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'SANTIAGO DE CAO'
		},
		{
			ubigeo: '130208',
			departamento: 'LA LIBERTAD',
			provincia: 'ASCOPE',
			distrito: 'CASA GRANDE'
		},
		{
			ubigeo: '130301',
			departamento: 'LA LIBERTAD',
			provincia: 'BOLIVAR',
			distrito: 'BOLIVAR'
		},
		{
			ubigeo: '130302',
			departamento: 'LA LIBERTAD',
			provincia: 'BOLIVAR',
			distrito: 'BAMBAMARCA'
		},
		{
			ubigeo: '130303',
			departamento: 'LA LIBERTAD',
			provincia: 'BOLIVAR',
			distrito: 'CONDORMARCA'
		},
		{
			ubigeo: '130304',
			departamento: 'LA LIBERTAD',
			provincia: 'BOLIVAR',
			distrito: 'LONGOTEA'
		},
		{
			ubigeo: '130305',
			departamento: 'LA LIBERTAD',
			provincia: 'BOLIVAR',
			distrito: 'UCHUMARCA'
		},
		{
			ubigeo: '130306',
			departamento: 'LA LIBERTAD',
			provincia: 'BOLIVAR',
			distrito: 'UCUNCHA'
		},
		{
			ubigeo: '130401',
			departamento: 'LA LIBERTAD',
			provincia: 'CHEPEN',
			distrito: 'CHEPEN'
		},
		{
			ubigeo: '130402',
			departamento: 'LA LIBERTAD',
			provincia: 'CHEPEN',
			distrito: 'PACANGA'
		},
		{
			ubigeo: '130403',
			departamento: 'LA LIBERTAD',
			provincia: 'CHEPEN',
			distrito: 'PUEBLO NUEVO'
		},
		{
			ubigeo: '130501',
			departamento: 'LA LIBERTAD',
			provincia: 'JULCAN',
			distrito: 'JULCAN'
		},
		{
			ubigeo: '130502',
			departamento: 'LA LIBERTAD',
			provincia: 'JULCAN',
			distrito: 'CALAMARCA'
		},
		{
			ubigeo: '130503',
			departamento: 'LA LIBERTAD',
			provincia: 'JULCAN',
			distrito: 'CARABAMBA'
		},
		{
			ubigeo: '130504',
			departamento: 'LA LIBERTAD',
			provincia: 'JULCAN',
			distrito: 'HUASO'
		},
		{
			ubigeo: '130601',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'OTUZCO'
		},
		{
			ubigeo: '130602',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'AGALLPAMPA'
		},
		{
			ubigeo: '130604',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'CHARAT'
		},
		{
			ubigeo: '130605',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'HUARANCHAL'
		},
		{
			ubigeo: '130606',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'LA CUESTA'
		},
		{
			ubigeo: '130608',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'MACHE'
		},
		{
			ubigeo: '130610',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'PARANDAY'
		},
		{
			ubigeo: '130611',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'SALPO'
		},
		{
			ubigeo: '130613',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'SINSICAP'
		},
		{
			ubigeo: '130614',
			departamento: 'LA LIBERTAD',
			provincia: 'OTUZCO',
			distrito: 'USQUIL'
		},
		{
			ubigeo: '130701',
			departamento: 'LA LIBERTAD',
			provincia: 'PACASMAYO',
			distrito: 'SAN PEDRO DE LLOC'
		},
		{
			ubigeo: '130702',
			departamento: 'LA LIBERTAD',
			provincia: 'PACASMAYO',
			distrito: 'GUADALUPE'
		},
		{
			ubigeo: '130703',
			departamento: 'LA LIBERTAD',
			provincia: 'PACASMAYO',
			distrito: 'JEQUETEPEQUE'
		},
		{
			ubigeo: '130704',
			departamento: 'LA LIBERTAD',
			provincia: 'PACASMAYO',
			distrito: 'PACASMAYO'
		},
		{
			ubigeo: '130705',
			departamento: 'LA LIBERTAD',
			provincia: 'PACASMAYO',
			distrito: 'SAN JOSE'
		},
		{
			ubigeo: '130801',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'TAYABAMBA'
		},
		{
			ubigeo: '130802',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'BULDIBUYO'
		},
		{
			ubigeo: '130803',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'CHILLIA'
		},
		{
			ubigeo: '130804',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'HUANCASPATA'
		},
		{
			ubigeo: '130805',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'HUAYLILLAS'
		},
		{
			ubigeo: '130806',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'HUAYO'
		},
		{
			ubigeo: '130807',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'ONGON'
		},
		{
			ubigeo: '130808',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'PARCOY'
		},
		{
			ubigeo: '130809',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'PATAZ'
		},
		{
			ubigeo: '130810',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'PIAS'
		},
		{
			ubigeo: '130811',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'SANTIAGO DE CHALLAS'
		},
		{
			ubigeo: '130812',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'TAURIJA'
		},
		{
			ubigeo: '130813',
			departamento: 'LA LIBERTAD',
			provincia: 'PATAZ',
			distrito: 'URPAY'
		},
		{
			ubigeo: '130901',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'HUAMACHUCO'
		},
		{
			ubigeo: '130902',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'CHUGAY'
		},
		{
			ubigeo: '130903',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'COCHORCO'
		},
		{
			ubigeo: '130904',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'CURGOS'
		},
		{
			ubigeo: '130905',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'MARCABAL'
		},
		{
			ubigeo: '130906',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'SANAGORAN'
		},
		{
			ubigeo: '130907',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'SARIN'
		},
		{
			ubigeo: '130908',
			departamento: 'LA LIBERTAD',
			provincia: 'SANCHEZ CARRION',
			distrito: 'SARTIMBAMBA'
		},
		{
			ubigeo: '131001',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'SANTIAGO DE CHUCO'
		},
		{
			ubigeo: '131002',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'ANGASMARCA'
		},
		{
			ubigeo: '131003',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'CACHICADAN'
		},
		{
			ubigeo: '131004',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'MOLLEBAMBA'
		},
		{
			ubigeo: '131005',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'MOLLEPATA'
		},
		{
			ubigeo: '131006',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'QUIRUVILCA'
		},
		{
			ubigeo: '131007',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'SANTA CRUZ DE CHUCA'
		},
		{
			ubigeo: '131008',
			departamento: 'LA LIBERTAD',
			provincia: 'SANTIAGO DE CHUCO',
			distrito: 'SITABAMBA'
		},
		{
			ubigeo: '131101',
			departamento: 'LA LIBERTAD',
			provincia: 'GRAN CHIMU',
			distrito: 'CASCAS'
		},
		{
			ubigeo: '131102',
			departamento: 'LA LIBERTAD',
			provincia: 'GRAN CHIMU',
			distrito: 'LUCMA'
		},
		{
			ubigeo: '131103',
			departamento: 'LA LIBERTAD',
			provincia: 'GRAN CHIMU',
			distrito: 'MARMOT'
		},
		{
			ubigeo: '131104',
			departamento: 'LA LIBERTAD',
			provincia: 'GRAN CHIMU',
			distrito: 'SAYAPULLO'
		},
		{
			ubigeo: '131201',
			departamento: 'LA LIBERTAD',
			provincia: 'VIRU',
			distrito: 'VIRU'
		},
		{
			ubigeo: '131202',
			departamento: 'LA LIBERTAD',
			provincia: 'VIRU',
			distrito: 'CHAO'
		},
		{
			ubigeo: '131203',
			departamento: 'LA LIBERTAD',
			provincia: 'VIRU',
			distrito: 'GUADALUPITO'
		},
		{
			ubigeo: '140101',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'CHICLAYO'
		},
		{
			ubigeo: '140102',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'CHONGOYAPE'
		},
		{
			ubigeo: '140103',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'ETEN'
		},
		{
			ubigeo: '140104',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'ETEN PUERTO'
		},
		{
			ubigeo: '140105',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'JOSE LEONARDO ORTIZ'
		},
		{
			ubigeo: '140106',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'LA VICTORIA'
		},
		{
			ubigeo: '140107',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'LAGUNAS'
		},
		{
			ubigeo: '140108',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'MONSEFU'
		},
		{
			ubigeo: '140109',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'NUEVA ARICA'
		},
		{
			ubigeo: '140110',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'OYOTUN'
		},
		{
			ubigeo: '140111',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'PICSI'
		},
		{
			ubigeo: '140112',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'PIMENTEL'
		},
		{
			ubigeo: '140113',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'REQUE'
		},
		{
			ubigeo: '140114',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '140115',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'SAÑA'
		},
		{
			ubigeo: '140116',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'CAYALTI'
		},
		{
			ubigeo: '140117',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'PATAPO'
		},
		{
			ubigeo: '140118',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'POMALCA'
		},
		{
			ubigeo: '140119',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'PUCALA'
		},
		{
			ubigeo: '140120',
			departamento: 'LAMBAYEQUE',
			provincia: 'CHICLAYO',
			distrito: 'TUMAN'
		},
		{
			ubigeo: '140201',
			departamento: 'LAMBAYEQUE',
			provincia: 'FERREÑAFE',
			distrito: 'FERREÑAFE'
		},
		{
			ubigeo: '140202',
			departamento: 'LAMBAYEQUE',
			provincia: 'FERREÑAFE',
			distrito: 'CAÑARIS'
		},
		{
			ubigeo: '140203',
			departamento: 'LAMBAYEQUE',
			provincia: 'FERREÑAFE',
			distrito: 'INCAHUASI'
		},
		{
			ubigeo: '140204',
			departamento: 'LAMBAYEQUE',
			provincia: 'FERREÑAFE',
			distrito: 'MANUEL ANTONIO MESONES MURO'
		},
		{
			ubigeo: '140205',
			departamento: 'LAMBAYEQUE',
			provincia: 'FERREÑAFE',
			distrito: 'PITIPO'
		},
		{
			ubigeo: '140206',
			departamento: 'LAMBAYEQUE',
			provincia: 'FERREÑAFE',
			distrito: 'PUEBLO NUEVO'
		},
		{
			ubigeo: '140301',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'LAMBAYEQUE'
		},
		{
			ubigeo: '140302',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'CHOCHOPE'
		},
		{
			ubigeo: '140303',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'ILLIMO'
		},
		{
			ubigeo: '140304',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'JAYANCA'
		},
		{
			ubigeo: '140305',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'MOCHUMI'
		},
		{
			ubigeo: '140306',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'MORROPE'
		},
		{
			ubigeo: '140307',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'MOTUPE'
		},
		{
			ubigeo: '140308',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'OLMOS'
		},
		{
			ubigeo: '140309',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'PACORA'
		},
		{
			ubigeo: '140310',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'SALAS'
		},
		{
			ubigeo: '140311',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'SAN JOSE'
		},
		{
			ubigeo: '140312',
			departamento: 'LAMBAYEQUE',
			provincia: 'LAMBAYEQUE',
			distrito: 'TUCUME'
		},
		{
			ubigeo: '150101',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LIMA'
		},
		{
			ubigeo: '150102',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'ANCON'
		},
		{
			ubigeo: '150103',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'ATE'
		},
		{
			ubigeo: '150104',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'BARRANCO'
		},
		{
			ubigeo: '150105',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'BREÑA'
		},
		{
			ubigeo: '150106',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'CARABAYLLO'
		},
		{
			ubigeo: '150107',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'CHACLACAYO'
		},
		{
			ubigeo: '150108',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'CHORRILLOS'
		},
		{
			ubigeo: '150109',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'CIENEGUILLA'
		},
		{
			ubigeo: '150110',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'COMAS'
		},
		{
			ubigeo: '150111',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'EL AGUSTINO'
		},
		{
			ubigeo: '150112',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'INDEPENDENCIA'
		},
		{
			ubigeo: '150113',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'JESUS MARIA'
		},
		{
			ubigeo: '150114',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LA MOLINA'
		},
		{
			ubigeo: '150115',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LA VICTORIA'
		},
		{
			ubigeo: '150116',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LINCE'
		},
		{
			ubigeo: '150117',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LOS OLIVOS'
		},
		{
			ubigeo: '150118',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LURIGANCHO'
		},
		{
			ubigeo: '150119',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'LURIN'
		},
		{
			ubigeo: '150120',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'MAGDALENA DEL MAR'
		},
		{
			ubigeo: '150121',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'PUEBLO LIBRE'
		},
		{
			ubigeo: '150122',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'MIRAFLORES'
		},
		{
			ubigeo: '150123',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'PACHACAMAC'
		},
		{
			ubigeo: '150124',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'PUCUSANA'
		},
		{
			ubigeo: '150125',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'PUENTE PIEDRA'
		},
		{
			ubigeo: '150126',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'PUNTA HERMOSA'
		},
		{
			ubigeo: '150127',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'PUNTA NEGRA'
		},
		{
			ubigeo: '150128',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'RIMAC'
		},
		{
			ubigeo: '150129',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN BARTOLO'
		},
		{
			ubigeo: '150130',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN BORJA'
		},
		{
			ubigeo: '150131',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN ISIDRO'
		},
		{
			ubigeo: '150132',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN JUAN DE LURIGANCHO'
		},
		{
			ubigeo: '150133',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN JUAN DE MIRAFLORES'
		},
		{
			ubigeo: '150134',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN LUIS'
		},
		{
			ubigeo: '150135',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN MARTIN DE PORRES'
		},
		{
			ubigeo: '150136',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SAN MIGUEL'
		},
		{
			ubigeo: '150137',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SANTA ANITA'
		},
		{
			ubigeo: '150138',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SANTA MARIA DEL MAR'
		},
		{
			ubigeo: '150139',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '150140',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SANTIAGO DE SURCO'
		},
		{
			ubigeo: '150141',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SURQUILLO'
		},
		{
			ubigeo: '150142',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'VILLA EL SALVADOR'
		},
		{
			ubigeo: '150143',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'VILLA MARIA DEL TRIUNFO'
		},
		{
			ubigeo: '150144',
			departamento: 'LIMA',
			provincia: 'LIMA',
			distrito: 'SANTA MARIA DE HUACHIPA'
		},
		{
			ubigeo: '150201',
			departamento: 'LIMA',
			provincia: 'BARRANCA',
			distrito: 'BARRANCA'
		},
		{
			ubigeo: '150202',
			departamento: 'LIMA',
			provincia: 'BARRANCA',
			distrito: 'PARAMONGA'
		},
		{
			ubigeo: '150203',
			departamento: 'LIMA',
			provincia: 'BARRANCA',
			distrito: 'PATIVILCA'
		},
		{
			ubigeo: '150204',
			departamento: 'LIMA',
			provincia: 'BARRANCA',
			distrito: 'SUPE'
		},
		{
			ubigeo: '150205',
			departamento: 'LIMA',
			provincia: 'BARRANCA',
			distrito: 'SUPE PUERTO'
		},
		{
			ubigeo: '150301',
			departamento: 'LIMA',
			provincia: 'CAJATAMBO',
			distrito: 'CAJATAMBO'
		},
		{
			ubigeo: '150302',
			departamento: 'LIMA',
			provincia: 'CAJATAMBO',
			distrito: 'COPA'
		},
		{
			ubigeo: '150303',
			departamento: 'LIMA',
			provincia: 'CAJATAMBO',
			distrito: 'GORGOR'
		},
		{
			ubigeo: '150304',
			departamento: 'LIMA',
			provincia: 'CAJATAMBO',
			distrito: 'HUANCAPON'
		},
		{
			ubigeo: '150305',
			departamento: 'LIMA',
			provincia: 'CAJATAMBO',
			distrito: 'MANAS'
		},
		{
			ubigeo: '150401',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'CANTA'
		},
		{
			ubigeo: '150402',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'ARAHUAY'
		},
		{
			ubigeo: '150403',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'HUAMANTANGA'
		},
		{
			ubigeo: '150404',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'HUAROS'
		},
		{
			ubigeo: '150405',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'LACHAQUI'
		},
		{
			ubigeo: '150406',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'SAN BUENAVENTURA'
		},
		{
			ubigeo: '150407',
			departamento: 'LIMA',
			provincia: 'CANTA',
			distrito: 'SANTA ROSA DE QUIVES'
		},
		{
			ubigeo: '150501',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'SAN VICENTE DE CAÑETE'
		},
		{
			ubigeo: '150502',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'ASIA'
		},
		{
			ubigeo: '150503',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'CALANGO'
		},
		{
			ubigeo: '150504',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'CERRO AZUL'
		},
		{
			ubigeo: '150505',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'CHILCA'
		},
		{
			ubigeo: '150506',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'COAYLLO'
		},
		{
			ubigeo: '150507',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'IMPERIAL'
		},
		{
			ubigeo: '150508',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'LUNAHUANA'
		},
		{
			ubigeo: '150509',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'MALA'
		},
		{
			ubigeo: '150510',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'NUEVO IMPERIAL'
		},
		{
			ubigeo: '150511',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'PACARAN'
		},
		{
			ubigeo: '150512',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'QUILMANA'
		},
		{
			ubigeo: '150513',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'SAN ANTONIO'
		},
		{
			ubigeo: '150514',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'SAN LUIS'
		},
		{
			ubigeo: '150515',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'SANTA CRUZ DE FLORES'
		},
		{
			ubigeo: '150516',
			departamento: 'LIMA',
			provincia: 'CAÑETE',
			distrito: 'ZUÑIGA'
		},
		{
			ubigeo: '150601',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'HUARAL'
		},
		{
			ubigeo: '150602',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'ATAVILLOS ALTO'
		},
		{
			ubigeo: '150603',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'ATAVILLOS BAJO'
		},
		{
			ubigeo: '150604',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'AUCALLAMA'
		},
		{
			ubigeo: '150605',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'CHANCAY'
		},
		{
			ubigeo: '150606',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'IHUARI'
		},
		{
			ubigeo: '150607',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'LAMPIAN'
		},
		{
			ubigeo: '150608',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'PACARAOS'
		},
		{
			ubigeo: '150609',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'SAN MIGUEL DE ACOS'
		},
		{
			ubigeo: '150610',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'SANTA CRUZ DE ANDAMARCA'
		},
		{
			ubigeo: '150611',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'SUMBILCA'
		},
		{
			ubigeo: '150612',
			departamento: 'LIMA',
			provincia: 'HUARAL',
			distrito: 'VEINTISIETE DE NOVIEMBRE'
		},
		{
			ubigeo: '150701',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'MATUCANA'
		},
		{
			ubigeo: '150702',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'ANTIOQUIA'
		},
		{
			ubigeo: '150703',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'CALLAHUANCA'
		},
		{
			ubigeo: '150704',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'CARAMPOMA'
		},
		{
			ubigeo: '150705',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'CHICLA'
		},
		{
			ubigeo: '150706',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'CUENCA'
		},
		{
			ubigeo: '150707',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'HUACHUPAMPA'
		},
		{
			ubigeo: '150708',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'HUANZA'
		},
		{
			ubigeo: '150709',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'HUAROCHIRI'
		},
		{
			ubigeo: '150710',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'LAHUAYTAMBO'
		},
		{
			ubigeo: '150711',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'LANGA'
		},
		{
			ubigeo: '150712',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'LARAOS'
		},
		{
			ubigeo: '150713',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'MARIATANA'
		},
		{
			ubigeo: '150714',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'RICARDO PALMA'
		},
		{
			ubigeo: '150715',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN ANDRES DE TUPICOCHA'
		},
		{
			ubigeo: '150716',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN ANTONIO'
		},
		{
			ubigeo: '150717',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN BARTOLOME'
		},
		{
			ubigeo: '150718',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN DAMIAN'
		},
		{
			ubigeo: '150719',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN JUAN DE IRIS'
		},
		{
			ubigeo: '150720',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN JUAN DE TANTARANCHE'
		},
		{
			ubigeo: '150721',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN LORENZO DE QUINTI'
		},
		{
			ubigeo: '150722',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN MATEO'
		},
		{
			ubigeo: '150723',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN MATEO DE OTAO'
		},
		{
			ubigeo: '150724',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN PEDRO DE CASTA'
		},
		{
			ubigeo: '150725',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SAN PEDRO DE HUANCAYRE'
		},
		{
			ubigeo: '150726',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SANGALLAYA'
		},
		{
			ubigeo: '150727',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SANTA CRUZ DE COCACHACRA'
		},
		{
			ubigeo: '150728',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SANTA EULALIA'
		},
		{
			ubigeo: '150729',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SANTIAGO DE ANCHUCAYA'
		},
		{
			ubigeo: '150730',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SANTIAGO DE TUNA'
		},
		{
			ubigeo: '150731',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SANTO DOMINGO DE LOS OLLEROS'
		},
		{
			ubigeo: '150732',
			departamento: 'LIMA',
			provincia: 'HUAROCHIRI',
			distrito: 'SURCO'
		},
		{
			ubigeo: '150801',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'HUACHO'
		},
		{
			ubigeo: '150802',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'AMBAR'
		},
		{
			ubigeo: '150803',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'CALETA DE CARQUIN'
		},
		{
			ubigeo: '150804',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'CHECRAS'
		},
		{
			ubigeo: '150805',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'HUALMAY'
		},
		{
			ubigeo: '150806',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'HUAURA'
		},
		{
			ubigeo: '150807',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'LEONCIO PRADO'
		},
		{
			ubigeo: '150808',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'PACCHO'
		},
		{
			ubigeo: '150809',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'SANTA LEONOR'
		},
		{
			ubigeo: '150810',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'SANTA MARIA'
		},
		{
			ubigeo: '150811',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'SAYAN'
		},
		{
			ubigeo: '150812',
			departamento: 'LIMA',
			provincia: 'HUAURA',
			distrito: 'VEGUETA'
		},
		{
			ubigeo: '150901',
			departamento: 'LIMA',
			provincia: 'OYON',
			distrito: 'OYON'
		},
		{
			ubigeo: '150902',
			departamento: 'LIMA',
			provincia: 'OYON',
			distrito: 'ANDAJES'
		},
		{
			ubigeo: '150903',
			departamento: 'LIMA',
			provincia: 'OYON',
			distrito: 'CAUJUL'
		},
		{
			ubigeo: '150904',
			departamento: 'LIMA',
			provincia: 'OYON',
			distrito: 'COCHAMARCA'
		},
		{
			ubigeo: '150905',
			departamento: 'LIMA',
			provincia: 'OYON',
			distrito: 'NAVAN'
		},
		{
			ubigeo: '150906',
			departamento: 'LIMA',
			provincia: 'OYON',
			distrito: 'PACHANGARA'
		},
		{
			ubigeo: '151001',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'YAUYOS'
		},
		{
			ubigeo: '151002',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'ALIS'
		},
		{
			ubigeo: '151003',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'AYAUCA'
		},
		{
			ubigeo: '151004',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'AYAVIRI'
		},
		{
			ubigeo: '151005',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'AZANGARO'
		},
		{
			ubigeo: '151006',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'CACRA'
		},
		{
			ubigeo: '151007',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'CARANIA'
		},
		{
			ubigeo: '151008',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'CATAHUASI'
		},
		{
			ubigeo: '151009',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'CHOCOS'
		},
		{
			ubigeo: '151010',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'COCHAS'
		},
		{
			ubigeo: '151011',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'COLONIA'
		},
		{
			ubigeo: '151012',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'HONGOS'
		},
		{
			ubigeo: '151013',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'HUAMPARA'
		},
		{
			ubigeo: '151014',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'HUANCAYA'
		},
		{
			ubigeo: '151015',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'HUANGASCAR'
		},
		{
			ubigeo: '151016',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'HUANTAN'
		},
		{
			ubigeo: '151017',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'HUAÑEC'
		},
		{
			ubigeo: '151018',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'LARAOS'
		},
		{
			ubigeo: '151019',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'LINCHA'
		},
		{
			ubigeo: '151020',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'MADEAN'
		},
		{
			ubigeo: '151021',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'MIRAFLORES'
		},
		{
			ubigeo: '151022',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'OMAS'
		},
		{
			ubigeo: '151023',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'PUTINZA'
		},
		{
			ubigeo: '151024',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'QUINCHES'
		},
		{
			ubigeo: '151025',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'QUINOCAY'
		},
		{
			ubigeo: '151026',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'SAN JOAQUIN'
		},
		{
			ubigeo: '151027',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'SAN PEDRO DE PILAS'
		},
		{
			ubigeo: '151028',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'TANTA'
		},
		{
			ubigeo: '151029',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'TAURIPAMPA'
		},
		{
			ubigeo: '151030',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'TOMAS'
		},
		{
			ubigeo: '151031',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'TUPE'
		},
		{
			ubigeo: '151032',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'VIÑAC'
		},
		{
			ubigeo: '151033',
			departamento: 'LIMA',
			provincia: 'YAUYOS',
			distrito: 'VITIS'
		},
		{
			ubigeo: '160101',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'IQUITOS'
		},
		{
			ubigeo: '160102',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'ALTO NANAY'
		},
		{
			ubigeo: '160103',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'FERNANDO LORES'
		},
		{
			ubigeo: '160104',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'INDIANA'
		},
		{
			ubigeo: '160105',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'LAS AMAZONAS'
		},
		{
			ubigeo: '160106',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'MAZAN'
		},
		{
			ubigeo: '160107',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'NAPO'
		},
		{
			ubigeo: '160108',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'PUNCHANA'
		},
		{
			ubigeo: '160109',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'PUTUMAYO'
		},
		{
			ubigeo: '160110',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'TORRES CAUSANA'
		},
		{
			ubigeo: '160112',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'BELEN'
		},
		{
			ubigeo: '160113',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'SAN JUAN BAUTISTA'
		},
		{
			ubigeo: '160114',
			departamento: 'LORETO',
			provincia: 'MAYNAS',
			distrito: 'TENIENTE MANUEL CLAVERO'
		},
		{
			ubigeo: '160201',
			departamento: 'LORETO',
			provincia: 'ALTO AMAZONAS',
			distrito: 'YURIMAGUAS'
		},
		{
			ubigeo: '160202',
			departamento: 'LORETO',
			provincia: 'ALTO AMAZONAS',
			distrito: 'BALSAPUERTO'
		},
		{
			ubigeo: '160205',
			departamento: 'LORETO',
			provincia: 'ALTO AMAZONAS',
			distrito: 'JEBEROS'
		},
		{
			ubigeo: '160206',
			departamento: 'LORETO',
			provincia: 'ALTO AMAZONAS',
			distrito: 'LAGUNAS'
		},
		{
			ubigeo: '160210',
			departamento: 'LORETO',
			provincia: 'ALTO AMAZONAS',
			distrito: 'SANTA CRUZ'
		},
		{
			ubigeo: '160211',
			departamento: 'LORETO',
			provincia: 'ALTO AMAZONAS',
			distrito: 'TENIENTE CESAR LOPEZ ROJAS'
		},
		{
			ubigeo: '160301',
			departamento: 'LORETO',
			provincia: 'LORETO',
			distrito: 'NAUTA'
		},
		{
			ubigeo: '160302',
			departamento: 'LORETO',
			provincia: 'LORETO',
			distrito: 'PARINARI'
		},
		{
			ubigeo: '160303',
			departamento: 'LORETO',
			provincia: 'LORETO',
			distrito: 'TIGRE'
		},
		{
			ubigeo: '160304',
			departamento: 'LORETO',
			provincia: 'LORETO',
			distrito: 'TROMPETEROS'
		},
		{
			ubigeo: '160305',
			departamento: 'LORETO',
			provincia: 'LORETO',
			distrito: 'URARINAS'
		},
		{
			ubigeo: '160401',
			departamento: 'LORETO',
			provincia: 'MARISCAL RAMON CASTILLA',
			distrito: 'RAMON CASTILLA'
		},
		{
			ubigeo: '160402',
			departamento: 'LORETO',
			provincia: 'MARISCAL RAMON CASTILLA',
			distrito: 'PEBAS'
		},
		{
			ubigeo: '160403',
			departamento: 'LORETO',
			provincia: 'MARISCAL RAMON CASTILLA',
			distrito: 'YAVARI'
		},
		{
			ubigeo: '160404',
			departamento: 'LORETO',
			provincia: 'MARISCAL RAMON CASTILLA',
			distrito: 'SAN PABLO'
		},
		{
			ubigeo: '160501',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'REQUENA'
		},
		{
			ubigeo: '160502',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'ALTO TAPICHE'
		},
		{
			ubigeo: '160503',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'CAPELO'
		},
		{
			ubigeo: '160504',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'EMILIO SAN MARTIN'
		},
		{
			ubigeo: '160505',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'MAQUIA'
		},
		{
			ubigeo: '160506',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'PUINAHUA'
		},
		{
			ubigeo: '160507',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'SAQUENA'
		},
		{
			ubigeo: '160508',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'SOPLIN'
		},
		{
			ubigeo: '160509',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'TAPICHE'
		},
		{
			ubigeo: '160510',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'JENARO HERRERA'
		},
		{
			ubigeo: '160511',
			departamento: 'LORETO',
			provincia: 'REQUENA',
			distrito: 'YAQUERANA'
		},
		{
			ubigeo: '160601',
			departamento: 'LORETO',
			provincia: 'UCAYALI',
			distrito: 'CONTAMANA'
		},
		{
			ubigeo: '160602',
			departamento: 'LORETO',
			provincia: 'UCAYALI',
			distrito: 'INAHUAYA'
		},
		{
			ubigeo: '160603',
			departamento: 'LORETO',
			provincia: 'UCAYALI',
			distrito: 'PADRE MARQUEZ'
		},
		{
			ubigeo: '160604',
			departamento: 'LORETO',
			provincia: 'UCAYALI',
			distrito: 'PAMPA HERMOSA'
		},
		{
			ubigeo: '160605',
			departamento: 'LORETO',
			provincia: 'UCAYALI',
			distrito: 'SARAYACU'
		},
		{
			ubigeo: '160606',
			departamento: 'LORETO',
			provincia: 'UCAYALI',
			distrito: 'VARGAS GUERRA'
		},
		{
			ubigeo: '160701',
			departamento: 'LORETO',
			provincia: 'DATEM DEL MARAÑON',
			distrito: 'BARRANCA'
		},
		{
			ubigeo: '160702',
			departamento: 'LORETO',
			provincia: 'DATEM DEL MARAÑON',
			distrito: 'CAHUAPANAS'
		},
		{
			ubigeo: '160703',
			departamento: 'LORETO',
			provincia: 'DATEM DEL MARAÑON',
			distrito: 'MANSERICHE'
		},
		{
			ubigeo: '160704',
			departamento: 'LORETO',
			provincia: 'DATEM DEL MARAÑON',
			distrito: 'MORONA'
		},
		{
			ubigeo: '160705',
			departamento: 'LORETO',
			provincia: 'DATEM DEL MARAÑON',
			distrito: 'PASTAZA'
		},
		{
			ubigeo: '160706',
			departamento: 'LORETO',
			provincia: 'DATEM DEL MARAÑON',
			distrito: 'ANDOAS'
		},
		{
			ubigeo: '160801',
			departamento: 'LORETO',
			provincia: 'PUTUMAYO',
			distrito: 'PUTUMAYO'
		},
		{
			ubigeo: '160802',
			departamento: 'LORETO',
			provincia: 'PUTUMAYO',
			distrito: 'ROSA PANDURO'
		},
		{
			ubigeo: '160803',
			departamento: 'LORETO',
			provincia: 'PUTUMAYO',
			distrito: 'TENIENTE MANUEL CLAVERO'
		},
		{
			ubigeo: '160804',
			departamento: 'LORETO',
			provincia: 'PUTUMAYO',
			distrito: 'YAGUAS'
		},
		{
			ubigeo: '170101',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAMBOPATA',
			distrito: 'TAMBOPATA'
		},
		{
			ubigeo: '170102',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAMBOPATA',
			distrito: 'INAMBARI'
		},
		{
			ubigeo: '170103',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAMBOPATA',
			distrito: 'LAS PIEDRAS'
		},
		{
			ubigeo: '170104',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAMBOPATA',
			distrito: 'LABERINTO'
		},
		{
			ubigeo: '170201',
			departamento: 'MADRE DE DIOS',
			provincia: 'MANU',
			distrito: 'MANU'
		},
		{
			ubigeo: '170202',
			departamento: 'MADRE DE DIOS',
			provincia: 'MANU',
			distrito: 'FITZCARRALD'
		},
		{
			ubigeo: '170203',
			departamento: 'MADRE DE DIOS',
			provincia: 'MANU',
			distrito: 'MADRE DE DIOS'
		},
		{
			ubigeo: '170204',
			departamento: 'MADRE DE DIOS',
			provincia: 'MANU',
			distrito: 'HUEPETUHE'
		},
		{
			ubigeo: '170301',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAHUAMANU',
			distrito: 'IÑAPARI'
		},
		{
			ubigeo: '170302',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAHUAMANU',
			distrito: 'IBERIA'
		},
		{
			ubigeo: '170303',
			departamento: 'MADRE DE DIOS',
			provincia: 'TAHUAMANU',
			distrito: 'TAHUAMANU'
		},
		{
			ubigeo: '180101',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'MOQUEGUA'
		},
		{
			ubigeo: '180102',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'CARUMAS'
		},
		{
			ubigeo: '180103',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'CUCHUMBAYA'
		},
		{
			ubigeo: '180104',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'SAMEGUA'
		},
		{
			ubigeo: '180105',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'SAN CRISTOBAL'
		},
		{
			ubigeo: '180106',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'TORATA'
		},
		{
			ubigeo: '180201',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'OMATE'
		},
		{
			ubigeo: '180202',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'CHOJATA'
		},
		{
			ubigeo: '180203',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'COALAQUE'
		},
		{
			ubigeo: '180204',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'ICHUÑA'
		},
		{
			ubigeo: '180205',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'LA CAPILLA'
		},
		{
			ubigeo: '180206',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'LLOQUE'
		},
		{
			ubigeo: '180207',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'MATALAQUE'
		},
		{
			ubigeo: '180208',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'PUQUINA'
		},
		{
			ubigeo: '180209',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'QUINISTAQUILLAS'
		},
		{
			ubigeo: '180210',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'UBINAS'
		},
		{
			ubigeo: '180211',
			departamento: 'MOQUEGUA',
			provincia: 'GENERAL SANCHEZ CERRO',
			distrito: 'YUNGA'
		},
		{
			ubigeo: '180301',
			departamento: 'MOQUEGUA',
			provincia: 'ILO',
			distrito: 'ILO'
		},
		{
			ubigeo: '180302',
			departamento: 'MOQUEGUA',
			provincia: 'ILO',
			distrito: 'EL ALGARROBAL'
		},
		{
			ubigeo: '180303',
			departamento: 'MOQUEGUA',
			provincia: 'ILO',
			distrito: 'PACOCHA'
		},
		{
			ubigeo: '190101',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'CHAUPIMARCA'
		},
		{
			ubigeo: '190102',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'HUACHON'
		},
		{
			ubigeo: '190103',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'HUARIACA'
		},
		{
			ubigeo: '190104',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'HUAYLLAY'
		},
		{
			ubigeo: '190105',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'NINACACA'
		},
		{
			ubigeo: '190106',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'PALLANCHACRA'
		},
		{
			ubigeo: '190107',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'PAUCARTAMBO'
		},
		{
			ubigeo: '190108',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'SAN FRANCISCO DE ASIS DE YARUSYACAN'
		},
		{
			ubigeo: '190109',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'SIMON BOLIVAR'
		},
		{
			ubigeo: '190110',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'TICLACAYAN'
		},
		{
			ubigeo: '190111',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'TINYAHUARCO'
		},
		{
			ubigeo: '190112',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'VICCO'
		},
		{
			ubigeo: '190113',
			departamento: 'PASCO',
			provincia: 'PASCO',
			distrito: 'YANACANCHA'
		},
		{
			ubigeo: '190201',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'YANAHUANCA'
		},
		{
			ubigeo: '190202',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'CHACAYAN'
		},
		{
			ubigeo: '190203',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'GOYLLARISQUIZGA'
		},
		{
			ubigeo: '190204',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'PAUCAR'
		},
		{
			ubigeo: '190205',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'SAN PEDRO DE PILLAO'
		},
		{
			ubigeo: '190206',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'SANTA ANA DE TUSI'
		},
		{
			ubigeo: '190207',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'TAPUC'
		},
		{
			ubigeo: '190208',
			departamento: 'PASCO',
			provincia: 'DANIEL ALCIDES CARRION',
			distrito: 'VILCABAMBA'
		},
		{
			ubigeo: '190301',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'OXAPAMPA'
		},
		{
			ubigeo: '190302',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'CHONTABAMBA'
		},
		{
			ubigeo: '190303',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'HUANCABAMBA'
		},
		{
			ubigeo: '190304',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'PALCAZU'
		},
		{
			ubigeo: '190305',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'POZUZO'
		},
		{
			ubigeo: '190306',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'PUERTO BERMUDEZ'
		},
		{
			ubigeo: '190307',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'VILLA RICA'
		},
		{
			ubigeo: '190308',
			departamento: 'PASCO',
			provincia: 'OXAPAMPA',
			distrito: 'CONSTITUCION'
		},
		{
			ubigeo: '200101',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'PIURA'
		},
		{
			ubigeo: '200104',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'CASTILLA'
		},
		{
			ubigeo: '200105',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'CATACAOS'
		},
		{
			ubigeo: '200107',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'CURA MORI'
		},
		{
			ubigeo: '200108',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'EL TALLAN'
		},
		{
			ubigeo: '200109',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'LA ARENA'
		},
		{
			ubigeo: '200110',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'LA UNION'
		},
		{
			ubigeo: '200111',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'LAS LOMAS'
		},
		{
			ubigeo: '200114',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'TAMBO GRANDE'
		},
		{
			ubigeo: '200115',
			departamento: 'PIURA',
			provincia: 'PIURA',
			distrito: 'VEINTISEIS DE OCTUBRE'
		},
		{
			ubigeo: '200201',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'AYABACA'
		},
		{
			ubigeo: '200202',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'FRIAS'
		},
		{
			ubigeo: '200203',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'JILILI'
		},
		{
			ubigeo: '200204',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'LAGUNAS'
		},
		{
			ubigeo: '200205',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'MONTERO'
		},
		{
			ubigeo: '200206',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'PACAIPAMPA'
		},
		{
			ubigeo: '200207',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'PAIMAS'
		},
		{
			ubigeo: '200208',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'SAPILLICA'
		},
		{
			ubigeo: '200209',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'SICCHEZ'
		},
		{
			ubigeo: '200210',
			departamento: 'PIURA',
			provincia: 'AYABACA',
			distrito: 'SUYO'
		},
		{
			ubigeo: '200301',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'HUANCABAMBA'
		},
		{
			ubigeo: '200302',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'CANCHAQUE'
		},
		{
			ubigeo: '200303',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'EL CARMEN DE LA FRONTERA'
		},
		{
			ubigeo: '200304',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'HUARMACA'
		},
		{
			ubigeo: '200305',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'LALAQUIZ'
		},
		{
			ubigeo: '200306',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'SAN MIGUEL DE EL FAIQUE'
		},
		{
			ubigeo: '200307',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'SONDOR'
		},
		{
			ubigeo: '200308',
			departamento: 'PIURA',
			provincia: 'HUANCABAMBA',
			distrito: 'SONDORILLO'
		},
		{
			ubigeo: '200401',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'CHULUCANAS'
		},
		{
			ubigeo: '200402',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'BUENOS AIRES'
		},
		{
			ubigeo: '200403',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'CHALACO'
		},
		{
			ubigeo: '200404',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'LA MATANZA'
		},
		{
			ubigeo: '200405',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'MORROPON'
		},
		{
			ubigeo: '200406',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'SALITRAL'
		},
		{
			ubigeo: '200407',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'SAN JUAN DE BIGOTE'
		},
		{
			ubigeo: '200408',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'SANTA CATALINA DE MOSSA'
		},
		{
			ubigeo: '200409',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'SANTO DOMINGO'
		},
		{
			ubigeo: '200410',
			departamento: 'PIURA',
			provincia: 'MORROPON',
			distrito: 'YAMANGO'
		},
		{
			ubigeo: '200501',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'PAITA'
		},
		{
			ubigeo: '200502',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'AMOTAPE'
		},
		{
			ubigeo: '200503',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'ARENAL'
		},
		{
			ubigeo: '200504',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'COLAN'
		},
		{
			ubigeo: '200505',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'LA HUACA'
		},
		{
			ubigeo: '200506',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'TAMARINDO'
		},
		{
			ubigeo: '200507',
			departamento: 'PIURA',
			provincia: 'PAITA',
			distrito: 'VICHAYAL'
		},
		{
			ubigeo: '200601',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'SULLANA'
		},
		{
			ubigeo: '200602',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'BELLAVISTA'
		},
		{
			ubigeo: '200603',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'IGNACIO ESCUDERO'
		},
		{
			ubigeo: '200604',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'LANCONES'
		},
		{
			ubigeo: '200605',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'MARCAVELICA'
		},
		{
			ubigeo: '200606',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'MIGUEL CHECA'
		},
		{
			ubigeo: '200607',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'QUERECOTILLO'
		},
		{
			ubigeo: '200608',
			departamento: 'PIURA',
			provincia: 'SULLANA',
			distrito: 'SALITRAL'
		},
		{
			ubigeo: '200701',
			departamento: 'PIURA',
			provincia: 'TALARA',
			distrito: 'PARIÑAS'
		},
		{
			ubigeo: '200702',
			departamento: 'PIURA',
			provincia: 'TALARA',
			distrito: 'EL ALTO'
		},
		{
			ubigeo: '200703',
			departamento: 'PIURA',
			provincia: 'TALARA',
			distrito: 'LA BREA'
		},
		{
			ubigeo: '200704',
			departamento: 'PIURA',
			provincia: 'TALARA',
			distrito: 'LOBITOS'
		},
		{
			ubigeo: '200705',
			departamento: 'PIURA',
			provincia: 'TALARA',
			distrito: 'LOS ORGANOS'
		},
		{
			ubigeo: '200706',
			departamento: 'PIURA',
			provincia: 'TALARA',
			distrito: 'MANCORA'
		},
		{
			ubigeo: '200801',
			departamento: 'PIURA',
			provincia: 'SECHURA',
			distrito: 'SECHURA'
		},
		{
			ubigeo: '200802',
			departamento: 'PIURA',
			provincia: 'SECHURA',
			distrito: 'BELLAVISTA DE LA UNION'
		},
		{
			ubigeo: '200803',
			departamento: 'PIURA',
			provincia: 'SECHURA',
			distrito: 'BERNAL'
		},
		{
			ubigeo: '200804',
			departamento: 'PIURA',
			provincia: 'SECHURA',
			distrito: 'CRISTO NOS VALGA'
		},
		{
			ubigeo: '200805',
			departamento: 'PIURA',
			provincia: 'SECHURA',
			distrito: 'VICE'
		},
		{
			ubigeo: '200806',
			departamento: 'PIURA',
			provincia: 'SECHURA',
			distrito: 'RINCONADA LLICUAR'
		},
		{
			ubigeo: '210101',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'PUNO'
		},
		{
			ubigeo: '210102',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'ACORA'
		},
		{
			ubigeo: '210103',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'AMANTANI'
		},
		{
			ubigeo: '210104',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'ATUNCOLLA'
		},
		{
			ubigeo: '210105',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'CAPACHICA'
		},
		{
			ubigeo: '210106',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'CHUCUITO'
		},
		{
			ubigeo: '210107',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'COATA'
		},
		{
			ubigeo: '210108',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'HUATA'
		},
		{
			ubigeo: '210109',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'MAÑAZO'
		},
		{
			ubigeo: '210110',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'PAUCARCOLLA'
		},
		{
			ubigeo: '210111',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'PICHACANI'
		},
		{
			ubigeo: '210112',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'PLATERIA'
		},
		{
			ubigeo: '210113',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'SAN ANTONIO'
		},
		{
			ubigeo: '210114',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'TIQUILLACA'
		},
		{
			ubigeo: '210115',
			departamento: 'PUNO',
			provincia: 'PUNO',
			distrito: 'VILQUE'
		},
		{
			ubigeo: '210201',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'AZANGARO'
		},
		{
			ubigeo: '210202',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'ACHAYA'
		},
		{
			ubigeo: '210203',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'ARAPA'
		},
		{
			ubigeo: '210204',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'ASILLO'
		},
		{
			ubigeo: '210205',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'CAMINACA'
		},
		{
			ubigeo: '210206',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'CHUPA'
		},
		{
			ubigeo: '210207',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'JOSE DOMINGO CHOQUEHUANCA'
		},
		{
			ubigeo: '210208',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'MUÑANI'
		},
		{
			ubigeo: '210209',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'POTONI'
		},
		{
			ubigeo: '210210',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'SAMAN'
		},
		{
			ubigeo: '210211',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'SAN ANTON'
		},
		{
			ubigeo: '210212',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'SAN JOSE'
		},
		{
			ubigeo: '210213',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'SAN JUAN DE SALINAS'
		},
		{
			ubigeo: '210214',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'SANTIAGO DE PUPUJA'
		},
		{
			ubigeo: '210215',
			departamento: 'PUNO',
			provincia: 'AZANGARO',
			distrito: 'TIRAPATA'
		},
		{
			ubigeo: '210301',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'MACUSANI'
		},
		{
			ubigeo: '210302',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'AJOYANI'
		},
		{
			ubigeo: '210303',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'AYAPATA'
		},
		{
			ubigeo: '210304',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'COASA'
		},
		{
			ubigeo: '210305',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'CORANI'
		},
		{
			ubigeo: '210306',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'CRUCERO'
		},
		{
			ubigeo: '210307',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'ITUATA'
		},
		{
			ubigeo: '210308',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'OLLACHEA'
		},
		{
			ubigeo: '210309',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'SAN GABAN'
		},
		{
			ubigeo: '210310',
			departamento: 'PUNO',
			provincia: 'CARABAYA',
			distrito: 'USICAYOS'
		},
		{
			ubigeo: '210401',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'JULI'
		},
		{
			ubigeo: '210402',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'DESAGUADERO'
		},
		{
			ubigeo: '210403',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'HUACULLANI'
		},
		{
			ubigeo: '210404',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'KELLUYO'
		},
		{
			ubigeo: '210405',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'PISACOMA'
		},
		{
			ubigeo: '210406',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'POMATA'
		},
		{
			ubigeo: '210407',
			departamento: 'PUNO',
			provincia: 'CHUCUITO',
			distrito: 'ZEPITA'
		},
		{
			ubigeo: '210501',
			departamento: 'PUNO',
			provincia: 'EL COLLAO',
			distrito: 'ILAVE'
		},
		{
			ubigeo: '210502',
			departamento: 'PUNO',
			provincia: 'EL COLLAO',
			distrito: 'CAPAZO'
		},
		{
			ubigeo: '210503',
			departamento: 'PUNO',
			provincia: 'EL COLLAO',
			distrito: 'PILCUYO'
		},
		{
			ubigeo: '210504',
			departamento: 'PUNO',
			provincia: 'EL COLLAO',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '210505',
			departamento: 'PUNO',
			provincia: 'EL COLLAO',
			distrito: 'CONDURIRI'
		},
		{
			ubigeo: '210601',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'HUANCANE'
		},
		{
			ubigeo: '210602',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'COJATA'
		},
		{
			ubigeo: '210603',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'HUATASANI'
		},
		{
			ubigeo: '210604',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'INCHUPALLA'
		},
		{
			ubigeo: '210605',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'PUSI'
		},
		{
			ubigeo: '210606',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'ROSASPATA'
		},
		{
			ubigeo: '210607',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'TARACO'
		},
		{
			ubigeo: '210608',
			departamento: 'PUNO',
			provincia: 'HUANCANE',
			distrito: 'VILQUE CHICO'
		},
		{
			ubigeo: '210701',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'LAMPA'
		},
		{
			ubigeo: '210702',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'CABANILLA'
		},
		{
			ubigeo: '210703',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'CALAPUJA'
		},
		{
			ubigeo: '210704',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'NICASIO'
		},
		{
			ubigeo: '210705',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'OCUVIRI'
		},
		{
			ubigeo: '210706',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'PALCA'
		},
		{
			ubigeo: '210707',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'PARATIA'
		},
		{
			ubigeo: '210708',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'PUCARA'
		},
		{
			ubigeo: '210709',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'SANTA LUCIA'
		},
		{
			ubigeo: '210710',
			departamento: 'PUNO',
			provincia: 'LAMPA',
			distrito: 'VILAVILA'
		},
		{
			ubigeo: '210801',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'AYAVIRI'
		},
		{
			ubigeo: '210802',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'ANTAUTA'
		},
		{
			ubigeo: '210803',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'CUPI'
		},
		{
			ubigeo: '210804',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'LLALLI'
		},
		{
			ubigeo: '210805',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'MACARI'
		},
		{
			ubigeo: '210806',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'NUÑOA'
		},
		{
			ubigeo: '210807',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'ORURILLO'
		},
		{
			ubigeo: '210808',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '210809',
			departamento: 'PUNO',
			provincia: 'MELGAR',
			distrito: 'UMACHIRI'
		},
		{
			ubigeo: '210901',
			departamento: 'PUNO',
			provincia: 'MOHO',
			distrito: 'MOHO'
		},
		{
			ubigeo: '210902',
			departamento: 'PUNO',
			provincia: 'MOHO',
			distrito: 'CONIMA'
		},
		{
			ubigeo: '210903',
			departamento: 'PUNO',
			provincia: 'MOHO',
			distrito: 'HUAYRAPATA'
		},
		{
			ubigeo: '210904',
			departamento: 'PUNO',
			provincia: 'MOHO',
			distrito: 'TILALI'
		},
		{
			ubigeo: '211001',
			departamento: 'PUNO',
			provincia: 'SAN ANTONIO DE PUTINA',
			distrito: 'PUTINA'
		},
		{
			ubigeo: '211002',
			departamento: 'PUNO',
			provincia: 'SAN ANTONIO DE PUTINA',
			distrito: 'ANANEA'
		},
		{
			ubigeo: '211003',
			departamento: 'PUNO',
			provincia: 'SAN ANTONIO DE PUTINA',
			distrito: 'PEDRO VILCA APAZA'
		},
		{
			ubigeo: '211004',
			departamento: 'PUNO',
			provincia: 'SAN ANTONIO DE PUTINA',
			distrito: 'QUILCAPUNCU'
		},
		{
			ubigeo: '211005',
			departamento: 'PUNO',
			provincia: 'SAN ANTONIO DE PUTINA',
			distrito: 'SINA'
		},
		{
			ubigeo: '211101',
			departamento: 'PUNO',
			provincia: 'SAN ROMAN',
			distrito: 'JULIACA'
		},
		{
			ubigeo: '211102',
			departamento: 'PUNO',
			provincia: 'SAN ROMAN',
			distrito: 'CABANA'
		},
		{
			ubigeo: '211103',
			departamento: 'PUNO',
			provincia: 'SAN ROMAN',
			distrito: 'CABANILLAS'
		},
		{
			ubigeo: '211104',
			departamento: 'PUNO',
			provincia: 'SAN ROMAN',
			distrito: 'CARACOTO'
		},
		{
			ubigeo: '211105',
			departamento: 'PUNO',
			provincia: 'SAN ROMAN',
			distrito: 'SAN MIGUEL'
		},
		{
			ubigeo: '211201',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'SANDIA'
		},
		{
			ubigeo: '211202',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'CUYOCUYO'
		},
		{
			ubigeo: '211203',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'LIMBANI'
		},
		{
			ubigeo: '211204',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'PATAMBUCO'
		},
		{
			ubigeo: '211205',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'PHARA'
		},
		{
			ubigeo: '211206',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'QUIACA'
		},
		{
			ubigeo: '211207',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'SAN JUAN DEL ORO'
		},
		{
			ubigeo: '211208',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'YANAHUAYA'
		},
		{
			ubigeo: '211209',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'ALTO INAMBARI'
		},
		{
			ubigeo: '211210',
			departamento: 'PUNO',
			provincia: 'SANDIA',
			distrito: 'SAN PEDRO DE PUTINA PUNCO'
		},
		{
			ubigeo: '211301',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'YUNGUYO'
		},
		{
			ubigeo: '211302',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'ANAPIA'
		},
		{
			ubigeo: '211303',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'COPANI'
		},
		{
			ubigeo: '211304',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'CUTURAPI'
		},
		{
			ubigeo: '211305',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'OLLARAYA'
		},
		{
			ubigeo: '211306',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'TINICACHI'
		},
		{
			ubigeo: '211307',
			departamento: 'PUNO',
			provincia: 'YUNGUYO',
			distrito: 'UNICACHI'
		},
		{
			ubigeo: '220101',
			departamento: 'SAN MARTIN',
			provincia: 'MOYOBAMBA',
			distrito: 'MOYOBAMBA'
		},
		{
			ubigeo: '220102',
			departamento: 'SAN MARTIN',
			provincia: 'MOYOBAMBA',
			distrito: 'CALZADA'
		},
		{
			ubigeo: '220103',
			departamento: 'SAN MARTIN',
			provincia: 'MOYOBAMBA',
			distrito: 'HABANA'
		},
		{
			ubigeo: '220104',
			departamento: 'SAN MARTIN',
			provincia: 'MOYOBAMBA',
			distrito: 'JEPELACIO'
		},
		{
			ubigeo: '220105',
			departamento: 'SAN MARTIN',
			provincia: 'MOYOBAMBA',
			distrito: 'SORITOR'
		},
		{
			ubigeo: '220106',
			departamento: 'SAN MARTIN',
			provincia: 'MOYOBAMBA',
			distrito: 'YANTALO'
		},
		{
			ubigeo: '220201',
			departamento: 'SAN MARTIN',
			provincia: 'BELLAVISTA',
			distrito: 'BELLAVISTA'
		},
		{
			ubigeo: '220202',
			departamento: 'SAN MARTIN',
			provincia: 'BELLAVISTA',
			distrito: 'ALTO BIAVO'
		},
		{
			ubigeo: '220203',
			departamento: 'SAN MARTIN',
			provincia: 'BELLAVISTA',
			distrito: 'BAJO BIAVO'
		},
		{
			ubigeo: '220204',
			departamento: 'SAN MARTIN',
			provincia: 'BELLAVISTA',
			distrito: 'HUALLAGA'
		},
		{
			ubigeo: '220205',
			departamento: 'SAN MARTIN',
			provincia: 'BELLAVISTA',
			distrito: 'SAN PABLO'
		},
		{
			ubigeo: '220206',
			departamento: 'SAN MARTIN',
			provincia: 'BELLAVISTA',
			distrito: 'SAN RAFAEL'
		},
		{
			ubigeo: '220301',
			departamento: 'SAN MARTIN',
			provincia: 'EL DORADO',
			distrito: 'SAN JOSE DE SISA'
		},
		{
			ubigeo: '220302',
			departamento: 'SAN MARTIN',
			provincia: 'EL DORADO',
			distrito: 'AGUA BLANCA'
		},
		{
			ubigeo: '220303',
			departamento: 'SAN MARTIN',
			provincia: 'EL DORADO',
			distrito: 'SAN MARTIN'
		},
		{
			ubigeo: '220304',
			departamento: 'SAN MARTIN',
			provincia: 'EL DORADO',
			distrito: 'SANTA ROSA'
		},
		{
			ubigeo: '220305',
			departamento: 'SAN MARTIN',
			provincia: 'EL DORADO',
			distrito: 'SHATOJA'
		},
		{
			ubigeo: '220401',
			departamento: 'SAN MARTIN',
			provincia: 'HUALLAGA',
			distrito: 'SAPOSOA'
		},
		{
			ubigeo: '220402',
			departamento: 'SAN MARTIN',
			provincia: 'HUALLAGA',
			distrito: 'ALTO SAPOSOA'
		},
		{
			ubigeo: '220403',
			departamento: 'SAN MARTIN',
			provincia: 'HUALLAGA',
			distrito: 'EL ESLABON'
		},
		{
			ubigeo: '220404',
			departamento: 'SAN MARTIN',
			provincia: 'HUALLAGA',
			distrito: 'PISCOYACU'
		},
		{
			ubigeo: '220405',
			departamento: 'SAN MARTIN',
			provincia: 'HUALLAGA',
			distrito: 'SACANCHE'
		},
		{
			ubigeo: '220406',
			departamento: 'SAN MARTIN',
			provincia: 'HUALLAGA',
			distrito: 'TINGO DE SAPOSOA'
		},
		{
			ubigeo: '220501',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'LAMAS'
		},
		{
			ubigeo: '220502',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'ALONSO DE ALVARADO'
		},
		{
			ubigeo: '220503',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'BARRANQUITA'
		},
		{
			ubigeo: '220504',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'CAYNARACHI'
		},
		{
			ubigeo: '220505',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'CUÑUMBUQUI'
		},
		{
			ubigeo: '220506',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'PINTO RECODO'
		},
		{
			ubigeo: '220507',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'RUMISAPA'
		},
		{
			ubigeo: '220508',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'SAN ROQUE DE CUMBAZA'
		},
		{
			ubigeo: '220509',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'SHANAO'
		},
		{
			ubigeo: '220510',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'TABALOSOS'
		},
		{
			ubigeo: '220511',
			departamento: 'SAN MARTIN',
			provincia: 'LAMAS',
			distrito: 'ZAPATERO'
		},
		{
			ubigeo: '220601',
			departamento: 'SAN MARTIN',
			provincia: 'MARISCAL CACERES',
			distrito: 'JUANJUI'
		},
		{
			ubigeo: '220602',
			departamento: 'SAN MARTIN',
			provincia: 'MARISCAL CACERES',
			distrito: 'CAMPANILLA'
		},
		{
			ubigeo: '220603',
			departamento: 'SAN MARTIN',
			provincia: 'MARISCAL CACERES',
			distrito: 'HUICUNGO'
		},
		{
			ubigeo: '220604',
			departamento: 'SAN MARTIN',
			provincia: 'MARISCAL CACERES',
			distrito: 'PACHIZA'
		},
		{
			ubigeo: '220605',
			departamento: 'SAN MARTIN',
			provincia: 'MARISCAL CACERES',
			distrito: 'PAJARILLO'
		},
		{
			ubigeo: '220701',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'PICOTA'
		},
		{
			ubigeo: '220702',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'BUENOS AIRES'
		},
		{
			ubigeo: '220703',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'CASPISAPA'
		},
		{
			ubigeo: '220704',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'PILLUANA'
		},
		{
			ubigeo: '220705',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'PUCACACA'
		},
		{
			ubigeo: '220706',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'SAN CRISTOBAL'
		},
		{
			ubigeo: '220707',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'SAN HILARION'
		},
		{
			ubigeo: '220708',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'SHAMBOYACU'
		},
		{
			ubigeo: '220709',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'TINGO DE PONASA'
		},
		{
			ubigeo: '220710',
			departamento: 'SAN MARTIN',
			provincia: 'PICOTA',
			distrito: 'TRES UNIDOS'
		},
		{
			ubigeo: '220801',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'RIOJA'
		},
		{
			ubigeo: '220802',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'AWAJUN'
		},
		{
			ubigeo: '220803',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'ELIAS SOPLIN VARGAS'
		},
		{
			ubigeo: '220804',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'NUEVA CAJAMARCA'
		},
		{
			ubigeo: '220805',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'PARDO MIGUEL'
		},
		{
			ubigeo: '220806',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'POSIC'
		},
		{
			ubigeo: '220807',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'SAN FERNANDO'
		},
		{
			ubigeo: '220808',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'YORONGOS'
		},
		{
			ubigeo: '220809',
			departamento: 'SAN MARTIN',
			provincia: 'RIOJA',
			distrito: 'YURACYACU'
		},
		{
			ubigeo: '220901',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'TARAPOTO'
		},
		{
			ubigeo: '220902',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'ALBERTO LEVEAU'
		},
		{
			ubigeo: '220903',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'CACATACHI'
		},
		{
			ubigeo: '220904',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'CHAZUTA'
		},
		{
			ubigeo: '220905',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'CHIPURANA'
		},
		{
			ubigeo: '220906',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'EL PORVENIR'
		},
		{
			ubigeo: '220907',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'HUIMBAYOC'
		},
		{
			ubigeo: '220908',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'JUAN GUERRA'
		},
		{
			ubigeo: '220909',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'LA BANDA DE SHILCAYO'
		},
		{
			ubigeo: '220910',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'MORALES'
		},
		{
			ubigeo: '220911',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'PAPAPLAYA'
		},
		{
			ubigeo: '220912',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'SAN ANTONIO'
		},
		{
			ubigeo: '220913',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'SAUCE'
		},
		{
			ubigeo: '220914',
			departamento: 'SAN MARTIN',
			provincia: 'SAN MARTIN',
			distrito: 'SHAPAJA'
		},
		{
			ubigeo: '221001',
			departamento: 'SAN MARTIN',
			provincia: 'TOCACHE',
			distrito: 'TOCACHE'
		},
		{
			ubigeo: '221002',
			departamento: 'SAN MARTIN',
			provincia: 'TOCACHE',
			distrito: 'NUEVO PROGRESO'
		},
		{
			ubigeo: '221003',
			departamento: 'SAN MARTIN',
			provincia: 'TOCACHE',
			distrito: 'POLVORA'
		},
		{
			ubigeo: '221004',
			departamento: 'SAN MARTIN',
			provincia: 'TOCACHE',
			distrito: 'SHUNTE'
		},
		{
			ubigeo: '221005',
			departamento: 'SAN MARTIN',
			provincia: 'TOCACHE',
			distrito: 'UCHIZA'
		},
		{
			ubigeo: '221006',
			departamento: 'SAN MARTIN',
			provincia: 'TOCACHE',
			distrito: 'SANTA LUCIA'
		},
		{
			ubigeo: '230101',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'TACNA'
		},
		{
			ubigeo: '230102',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'ALTO DE LA ALIANZA'
		},
		{
			ubigeo: '230103',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'CALANA'
		},
		{
			ubigeo: '230104',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'CIUDAD NUEVA'
		},
		{
			ubigeo: '230105',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'INCLAN'
		},
		{
			ubigeo: '230106',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'PACHIA'
		},
		{
			ubigeo: '230107',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'PALCA'
		},
		{
			ubigeo: '230108',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'POCOLLAY'
		},
		{
			ubigeo: '230109',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'SAMA'
		},
		{
			ubigeo: '230110',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'CORONEL GREGORIO ALBARRACIN LANCHIPA'
		},
		{
			ubigeo: '230111',
			departamento: 'TACNA',
			provincia: 'TACNA',
			distrito: 'LA YARADA LOS PALOS'
		},
		{
			ubigeo: '230201',
			departamento: 'TACNA',
			provincia: 'CANDARAVE',
			distrito: 'CANDARAVE'
		},
		{
			ubigeo: '230202',
			departamento: 'TACNA',
			provincia: 'CANDARAVE',
			distrito: 'CAIRANI'
		},
		{
			ubigeo: '230203',
			departamento: 'TACNA',
			provincia: 'CANDARAVE',
			distrito: 'CAMILACA'
		},
		{
			ubigeo: '230204',
			departamento: 'TACNA',
			provincia: 'CANDARAVE',
			distrito: 'CURIBAYA'
		},
		{
			ubigeo: '230205',
			departamento: 'TACNA',
			provincia: 'CANDARAVE',
			distrito: 'HUANUARA'
		},
		{
			ubigeo: '230206',
			departamento: 'TACNA',
			provincia: 'CANDARAVE',
			distrito: 'QUILAHUANI'
		},
		{
			ubigeo: '230301',
			departamento: 'TACNA',
			provincia: 'JORGE BASADRE',
			distrito: 'LOCUMBA'
		},
		{
			ubigeo: '230302',
			departamento: 'TACNA',
			provincia: 'JORGE BASADRE',
			distrito: 'ILABAYA'
		},
		{
			ubigeo: '230303',
			departamento: 'TACNA',
			provincia: 'JORGE BASADRE',
			distrito: 'ITE'
		},
		{
			ubigeo: '230401',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'TARATA'
		},
		{
			ubigeo: '230402',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'HEROES ALBARRACIN CHUCATAMANI'
		},
		{
			ubigeo: '230403',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'ESTIQUE'
		},
		{
			ubigeo: '230404',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'ESTIQUE-PAMPA'
		},
		{
			ubigeo: '230405',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'SITAJARA'
		},
		{
			ubigeo: '230406',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'SUSAPAYA'
		},
		{
			ubigeo: '230407',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'TARUCACHI'
		},
		{
			ubigeo: '230408',
			departamento: 'TACNA',
			provincia: 'TARATA',
			distrito: 'TICACO'
		},
		{
			ubigeo: '240101',
			departamento: 'TUMBES',
			provincia: 'TUMBES',
			distrito: 'TUMBES'
		},
		{
			ubigeo: '240102',
			departamento: 'TUMBES',
			provincia: 'TUMBES',
			distrito: 'CORRALES'
		},
		{
			ubigeo: '240103',
			departamento: 'TUMBES',
			provincia: 'TUMBES',
			distrito: 'LA CRUZ'
		},
		{
			ubigeo: '240104',
			departamento: 'TUMBES',
			provincia: 'TUMBES',
			distrito: 'PAMPAS DE HOSPITAL'
		},
		{
			ubigeo: '240105',
			departamento: 'TUMBES',
			provincia: 'TUMBES',
			distrito: 'SAN JACINTO'
		},
		{
			ubigeo: '240106',
			departamento: 'TUMBES',
			provincia: 'TUMBES',
			distrito: 'SAN JUAN DE LA VIRGEN'
		},
		{
			ubigeo: '240201',
			departamento: 'TUMBES',
			provincia: 'CONTRALMIRANTE VILLAR',
			distrito: 'ZORRITOS'
		},
		{
			ubigeo: '240202',
			departamento: 'TUMBES',
			provincia: 'CONTRALMIRANTE VILLAR',
			distrito: 'CASITAS'
		},
		{
			ubigeo: '240203',
			departamento: 'TUMBES',
			provincia: 'CONTRALMIRANTE VILLAR',
			distrito: 'CANOAS DE PUNTA SAL'
		},
		{
			ubigeo: '240301',
			departamento: 'TUMBES',
			provincia: 'ZARUMILLA',
			distrito: 'ZARUMILLA'
		},
		{
			ubigeo: '240302',
			departamento: 'TUMBES',
			provincia: 'ZARUMILLA',
			distrito: 'AGUAS VERDES'
		},
		{
			ubigeo: '240303',
			departamento: 'TUMBES',
			provincia: 'ZARUMILLA',
			distrito: 'MATAPALO'
		},
		{
			ubigeo: '240304',
			departamento: 'TUMBES',
			provincia: 'ZARUMILLA',
			distrito: 'PAPAYAL'
		},
		{
			ubigeo: '250101',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'CALLERIA'
		},
		{
			ubigeo: '250102',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'CAMPOVERDE'
		},
		{
			ubigeo: '250103',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'IPARIA'
		},
		{
			ubigeo: '250104',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'MASISEA'
		},
		{
			ubigeo: '250105',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'YARINACOCHA'
		},
		{
			ubigeo: '250106',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'NUEVA REQUENA'
		},
		{
			ubigeo: '250107',
			departamento: 'UCAYALI',
			provincia: 'CORONEL PORTILLO',
			distrito: 'MANANTAY'
		},
		{
			ubigeo: '250201',
			departamento: 'UCAYALI',
			provincia: 'ATALAYA',
			distrito: 'RAYMONDI'
		},
		{
			ubigeo: '250202',
			departamento: 'UCAYALI',
			provincia: 'ATALAYA',
			distrito: 'SEPAHUA'
		},
		{
			ubigeo: '250203',
			departamento: 'UCAYALI',
			provincia: 'ATALAYA',
			distrito: 'TAHUANIA'
		},
		{
			ubigeo: '250204',
			departamento: 'UCAYALI',
			provincia: 'ATALAYA',
			distrito: 'YURUA'
		},
		{
			ubigeo: '250301',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'PADRE ABAD'
		},
		{
			ubigeo: '250302',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'IRAZOLA'
		},
		{
			ubigeo: '250303',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'CURIMANA'
		},
		{
			ubigeo: '250304',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'NESHUYA'
		},
		{
			ubigeo: '250305',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'ALEXANDER VON HUMBOLDT'
		},
		{
			ubigeo: '250306',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'HUIPOCA'
		},
		{
			ubigeo: '250307',
			departamento: 'UCAYALI',
			provincia: 'PADRE ABAD',
			distrito: 'BOQUERON'
		},
		{
			ubigeo: '250401',
			departamento: 'UCAYALI',
			provincia: 'PURUS',
			distrito: 'PURUS'
		},
		{
			ubigeo: '170107',
			departamento: 'MOQUEGUA',
			provincia: 'MARISCAL NIETO',
			distrito: 'SAN ANTONIO'
		}
	]
};

module.exports = ubigeos;
