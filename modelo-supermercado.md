## Productos

-   producto_id (PK)
-   nombre
-   descripcion
-   precio
-   cantidad_stock

## Categorías

-   categoria_id (PK)
-   nombre

## Producto_Categoría

-   producto_id (FK)
-   categoria_id (FK)

## Proveedores

-   proveedor_id (PK)
-   nombre
-   direccion

## Producto_Proveedor

-   producto_id (FK)
-   proveedor_id (FK)

## Empleados

-   empleado_id (PK)
-   nombre
-   puesto
-   salario
-   fecha_contratacion

## Departamentos

-   departamento_id (PK)
-   nombre

## Empleado_Departamento

-   empleado_id (FK)
-   departamento_id (FK)

## Clientes

-   cliente_id (PK)
-   nombre
-   direccion
-   telefono
-   email

## Tarjetas_Fidelidad

-   tarjeta_id (PK)
-   cliente_id (FK)
-   puntos_acumulados

## Ventas

-   venta_id (PK)
-   fecha
-   cliente_id (FK)
-   empleado_id (FK)
-   total

## Detalle_Ventas

-   venta_id (FK)
-   producto_id (FK)
-   cantidad
-   precio_unitario

## Promociones

-   promocion_id (PK)
-   descripcion
-   fecha_inicio
-   fecha_fin
-   descuento

## Promocion_Producto

-   promocion_id (FK)
-   producto_id (FK)

## Promocion_Categoria

-   promocion_id (FK)
-   categoria_id (FK)

## Historial_Precios

-   producto_id (FK)
-   fecha_inicio
-   fecha_fin
-   precio
