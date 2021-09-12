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

class catalogsPeru {
	help() {
		let catalog = {
			codigosCargosDescuentos: 'Códigos de cargos o descuentos',
			codigosConceptoTributario: 'Códigos de Identificación del Concepto Tributario',
			codigosDocumentosRelacionadosTributarios: 'Códigos de documentos relacionados tributarios',
			codigosEstadoItem: 'Códigos de estado del ítem (resumen diario)',
			codigosLeyendas: 'Códigos de leyendas',
			codigosPais: 'Códigos de país',
			codigosRegimenPercepcion: 'Códigos de regimen de percepciones',
			codigosRegimenRetencion: 'Códigos de regimen de retenciones',
			codigosTipoAfectacionIgv: 'Códigos de tipo de afectación del IGV',
			codigosTipoDocumento: 'Códigos de tipo de documento',
			codigosTipoDocumentoIdentidad: 'Códigos de tipo de documento de Identidad',
			codigosTipoMoneda: 'Códigos de tipo de monedas',
			codigosTipoNotaCredito: 'Códigos de tipo de nota de crédito electrónica',
			codigosTipoNotaDebito: 'Códigos de tipo de nota de débito electrónica',
			codigosTipoOperacion: 'Códigos de tipo de operación',
			codigosTipoPrecioVentaUnitario: 'Códigos de tipo de precio de venta unitario',
			codigosTipoResumen: 'Códigos de tipo de resumen',
			codigosTipoSistemaCalculoIsc: 'Códigos de tipos de sistema de cálculo del ISC',
			codigosTipoTributo: 'Códigos de tipos de tributos y otros conceptos',
			codigosTipoUnidadMedida: 'Códigos de Tipo de Unidad de Medida Comercial',
			codigosTipoValorVenta: 'Códigos de tipo de valor de venta (Resumen diario de boletas y notas)'
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
}

module.exports = catalogsPeru;
