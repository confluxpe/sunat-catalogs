# SUNAT-Catalogs

SUNAT Catalogs for electronic billing.

```
npm install sunat-catalogs-pe
```

[🇵🇪 Spanish - Español](README.ES.md)

## Usage

Create an instance from the library, with that instance you can access each catalog.

```
const catalogsPeru = require('catalogs-conflux');

const miCatalogo = new catalogsPeru();

const typeDoc = miCatalogo.tipoDocumento();

console.log(typeDoc.find("07"));
```

## Help

To see all available catalogs and their descriptions, execute the help() method.

```
miCatalogo.help()
```
