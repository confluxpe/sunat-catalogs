const Pais = require('./lib/CodigosPais');
const Leyenda = require('./lib/CodigosLeyendas');
const EstadoItem = require('./lib/CodigosEstadoItem');
const TipoMoneda = require('./lib/CodigosTipoMoneda');
const TipoTributo = require('./lib/CodigosTipoTributo');
const TipoResumen = require('./lib/CodigosTipoResumen');
const TipoDocumento = require('./lib/CodigosTipoDocumento');
const TipoOperacion = require('./lib/CodigosTipoOperacion');
const TipoValorVenta = require('./lib/CodigosTipoValorVenta');
const TipoNotaDebito = require('./lib/CodigosTipoNotaDebito');
const TipoNotaCredito = require('./lib/CodigosTipoNotaCredito');
const CargoDescuento = require('./lib/CodigosCargosDescuentos');
const RegimenRetencion = require('./lib/CodigosRegimenRetencion');
const TipoUnidadMedida = require('./lib/CodigosTipoUnidadMedida');
const TipoAfectacionIgv = require('./lib/CodigosTipoAfectacionIgv');
const RegimenPercepcion = require('./lib/CodigosRegimenPercepcion');
const TipoSistemaIsc = require('./lib/CodigosTipoSistemaCalculoIsc');
const ConceptoTributario = require('./lib/CodigosConceptoTributario');
const TipoPrecioVenta = require('./lib/CodigosTipoPrecioVentaUnitario');
const TipoDocumentoIdentidad = require('./lib/CodigosTipoDocumentoIdentidad');
const DocumentoRelacionado = require('./lib/CodigosDocumentosRelacionadosTributarios');
const Ubigeos = require('./lib/CodigosUbigeos');
const Detraccion = require('./lib/CodigosDetraccion');
const Departamentos = require('./lib/CodigosDepartamentos');
const Distritos = require('./lib/CodigosDistritos');
const Provincias = require('./lib/CodigosProvincias');

class catalogsPeru {
	help() {
		let catalog = {
			cargoDescuento: 'Códigos de cargos o descuentos',
			conceptoTributario: 'Códigos de Identificación del Concepto Tributario',
			documentoRelacionado: 'Códigos de documentos relacionados tributarios',
			estadoItem: 'Códigos de estado del ítem (resumen diario)',
			leyenda: 'Códigos de leyendas',
			pais: 'Códigos de país',
			regimenPercepcion: 'Códigos de regimen de percepciones',
			regimenRetencion: 'Códigos de regimen de retenciones',
			tipoAfectacionIgv: 'Códigos de tipo de afectación del IGV',
			tipoDocumento: 'Códigos de tipo de documento',
			tipoDocumentoIdentidad: 'Códigos de tipo de documento de Identidad',
			tipoMoneda: 'Códigos de tipo de monedas',
			tipoNotaCredito: 'Códigos de tipo de nota de crédito electrónica',
			tipoNotaDebito: 'Códigos de tipo de nota de débito electrónica',
			tipoOperacion: 'Códigos de tipo de operación',
			tipoPrecioVenta: 'Códigos de tipo de precio de venta unitario',
			tipoResumen: 'Códigos de tipo de resumen',
			tipoSistemaIsc: 'Códigos de tipos de sistema de cálculo del ISC',
			tipoTributo: 'Códigos de tipos de tributos y otros conceptos',
			tipoUnidadMedida: 'Códigos de Tipo de Unidad de Medida Comercial',
			tipoValorVenta: 'Códigos de tipo de valor de venta (Resumen diario de boletas y notas)',
			ubigeos: 'Ubigeos con Departamento, Provincia y Distritos',
			detraccion: 'Código de detracción con porcentaje',
			departamentos: 'Lista departamentos Perú',
			provincias: 'Lista provincias Perú',
			distritos: 'Lista distritos Perú'
		};
		return catalog;
	}

	pais() {
		return Pais;
	}
	leyenda() {
		return Leyenda;
	}
	estadoItem() {
		return EstadoItem;
	}
	tipoMoneda() {
		return TipoMoneda;
	}
	tipoTributo() {
		return TipoTributo;
	}
	tipoResumen() {
		return TipoResumen;
	}
	tipoOperacion() {
		return TipoOperacion;
	}
	tipoValorVenta() {
		return TipoValorVenta;
	}
	tipoNotaDebito() {
		return TipoNotaDebito;
	}
	tipoNotaCredito() {
		return TipoNotaCredito;
	}
	cargoDescuento() {
		return CargoDescuento;
	}
	regimenRetencion() {
		return RegimenRetencion;
	}
	tipoUnidadMedida() {
		return TipoUnidadMedida;
	}
	tipoAfectacionIgv() {
		return TipoAfectacionIgv;
	}
	regimenPercepcion() {
		return RegimenPercepcion;
	}
	tipoSistemaIsc() {
		return TipoSistemaIsc;
	}
	tipoDocumento() {
		return TipoDocumento;
	}
	conceptoTributario() {
		return ConceptoTributario;
	}
	tipoPrecioVenta() {
		return TipoPrecioVenta;
	}
	tipoDocumentoIdentidad() {
		return TipoDocumentoIdentidad;
	}
	documentoRelacionado() {
		return DocumentoRelacionado;
	}
	ubigeos() {
		return Ubigeos;
	}
	detraccion() {
		return Detraccion;
	}
	departamentos() {
		return Departamentos;
	}
	provincias() {
		return Provincias;
	}
	distritos() {
		return Distritos;
	}
}

module.exports = catalogsPeru;
