const path = require("path");
const fs = require("fs");

const Pais = require("./lib/CodigosPais");
const Leyenda = require("./lib/CodigosLeyendas");
const EstadoItem = require("./lib/CodigosEstadoItem");
const TipoMoneda = require("./lib/CodigosTipoMoneda");
const TipoTributo = require("./lib/CodigosTipoTributo");
const TipoResumen = require("./lib/CodigosTipoResumen");
const TipoDocumento = require("./lib/CodigosTipoDocumento");
const TipoOperacion = require("./lib/CodigosTipoOperacion");
const TipoValorVenta = require("./lib/CodigosTipoValorVenta");
const TipoNotaDebito = require("./lib/CodigosTipoNotaDebito");
const TipoNotaCredito = require("./lib/CodigosTipoNotaCredito");
const CargoDescuento = require("./lib/CodigosCargosDescuentos");
const RegimenRetencion = require("./lib/CodigosRegimenRetencion");
const TipoUnidadMedida = require("./lib/CodigosTipoUnidadMedida");
const TipoAfectacionIgv = require("./lib/CodigosTipoAfectacionIgv");
const RegimenPercepcion = require("./lib/CodigosRegimenPercepcion");
const TipoSistemaIsc = require("./lib/CodigosTipoSistemaCalculoIsc");
const ConceptoTributario = require("./lib/CodigosConceptoTributario");
const TipoPrecioVenta = require("./lib/CodigosTipoPrecioVentaUnitario");
const TipoDocumentoIdentidad = require("./lib/CodigosTipoDocumentoIdentidad");
const DocumentoRelacionado = require("./lib/CodigosDocumentosRelacionadosTributarios");

class catalogsPeru {
    help() {
        const directoryPath = path.join(__dirname, "lib");
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log("Error de Lectura " + err);
            }
            files.forEach(function (file) {
                const libJs = require(`./lib/${file}`);
                const nameVar = file[0].toLowerCase() + file.substring(1, file.length - 3) + "()";
                console.log(`${nameVar} - ${libJs.titulo}`);
            });
        });
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
