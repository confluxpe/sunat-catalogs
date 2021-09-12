const catalogsPeru = require("../index");

test("should get tipodocumentos", () => {
    const tipoDocumento = catalogsPeru.TipoDocumento;
    expect(tipoDocumento).toBeInstanceOf(Object);
});

test("should get factura", () => {
    const miCatalogo = new catalogsPeru();
    const tipoDocumento = miCatalogo.tipoDocumento();
    expect(tipoDocumento.datos[0].descripcion).toEqual("Factura");
});
