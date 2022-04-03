export function facturaPDF(factura) {

    let output = [];
    factura.productos?.map((item) => {
      return output.push(`${item.nombre} (${item.cantidad})  x  $${item.precio}`);
    });

return `FACTURA DE VENTA FERRETERIA DON RAUL\n
Factura #${factura.id}\n
Fecha: ${factura.fecha}\n
Vendedor(a): ${factura.vendedor.nombre}\n
Cliente: ${factura.cliente.nombre} - Celular: ${factura.cliente.celular} \n \n
Productos \n
${output.join("\n")}
\n
TOTAL: $${factura.total}\n`;
}
