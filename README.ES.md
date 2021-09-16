# SUNAT-Catalogs

Catálogos SUNAT para facturación electrónica.

```
npm install sunat-catalogs-pe
```

## Usage

Crea una instancia a partir de la librería, con esa instancia puedes acceder a cada catálogo.

```
const catalogsPeru = require('catalogs-conflux');

const miCatalogo = new catalogsPeru();

const typeDoc = miCatalogo.tipoDocumento();

console.log(typeDoc.find("07"));
```

## Help

Para ver todos los catálogos disponibles y sus descripciones, ejecutar el método help().

```
miCatalogo.help()
```
