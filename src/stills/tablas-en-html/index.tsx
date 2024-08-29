import {IFrame} from 'remotion';

import Cover from '../../components/cover';
import CodeBlock from '../../components/code-block';

export default {
	id: 'tablas-en-html',
	slides: [
		() => <Cover logo="html" title="¿Cómo hacer tablas en HTML?" />,
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">
						<Tag name="table" />, <Tag name="tr" />, <Tag name="td" />
					</h1>
					<p>
						Existen algunas etiquetas básicas que podemos usar para crear
						tablas.
					</p>
					<p>
						Podemos usar la etiqueta <Tag name="table" /> para crear el
						contenedor principal, la etiqueta <Tag name="tr" /> para crear filas
						y la etiqueta <Tag name="td" /> para crear celdas .
					</p>
					<CodeBlock
						language="html"
						code={`<table>
	<tr>
		<td>Celda (1,1)</td>
		<td>Celda (1,2)</td>
		<td>Celda (1,3)</td>
	<tr>
		<td>Celda (2,1)</td>
		<td>Celda (2,2)</td>
		<td>Celda (2,3)</td>
	</tr>
</table>`}
					/>

					<p>En este ejemplo, la tabla está marcada con un borde rojo.</p>
					<p>Las filas están marcadas con un fondo amarillo.</p>
					<p>Las celdas están marcadas con un borde azul.</p>
					<IFrame
						className="bg-white h-20 w-full"
						srcDoc={`
						<style>
						table{
							border: 1px solid red;
						}
							tr{
								background-color:yellow;
							}
							td{
								border: 1px solid blue;
							}
						</style>
					<table>
						<tr>
						<td>Celda (1,1)</td>
						<td>Celda (1,2)</td>
						<td>Celda (1,3)</td>
					</tr>
					<tr>
					<td>Celda (2,1)</td>
					<td>Celda (2,2)</td>
					<td>Celda (2,3)</td>
				</tr>
					</table>`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">
						<Tag name="th" />
					</h1>
					<p>
						Podemos usar la etiqueta <Tag name="th" /> en lugar de{' '}
						<Tag name="td" /> para crear los encabezados en la primera fila.
					</p>
					<CodeBlock
						language="html"
						code={`<table>
	<tr>
		<th>Encabezado 1</th>
		<th>Encabezado 2</th>
		<th>Encabezado 3</th>
	</tr>
	<!-- Datos de la tabla -->
</table>`}
					/>
					<IFrame
						className="bg-white h-36 w-full"
						srcDoc={`<table>
	<tr>
		<th>Encabezado 1</th>
		<th>Encabezado 2</th>
		<th>Encabezado 3</th>
	</tr>
	<tr>
		<td>Celda (1,1)</td>
		<td>Celda (1,2)</td>
		<td>Celda (1,3)</td>
	</tr>
	<tr>
		<td>Celda (1,1)</td>
		<td>Celda (1,2)</td>
		<td>Celda (1,3)</td>
	</tr>
	<tr>
		<td>Celda (2,1)</td>
		<td>Celda (2,2)</td>
		<td>Celda (2,3)</td>
	</tr>
	<tr>
		<td>Celda (3,1)</td>
		<td>Celda (3,2)</td>
		<td>Celda (3,3)</td>
	</tr>
</table>`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">
						<Tag name="caption" />
					</h1>
					<p>
						Podemos usar la etiqueta <Tag name="caption" /> para darle un nombre
						a la tabla.
					</p>
					<CodeBlock
						language="html"
						code={`<table>
	<caption>
		Título
	</caption>
	<!-- Encabezado de la tabla -->
	<!-- Datos de la tabla -->
</table>`}
					/>
					<IFrame
						className="bg-white h-40 w-full"
						srcDoc={`<table>
<caption>
	Título
</caption>
<tr>
	<th>Encabezado 1</th>
	<th>Encabezado 2</th>
	<th>Encabezado 3</th>
</tr>
<tr>
	<td>Celda (1,1)</td>
	<td>Celda (1,2)</td>
	<td>Celda (1,3)</td>
</tr>
<tr>
	<td>Celda (1,1)</td>
	<td>Celda (1,2)</td>
	<td>Celda (1,3)</td>
</tr>
<tr>
	<td>Celda (2,1)</td>
	<td>Celda (2,2)</td>
	<td>Celda (2,3)</td>
</tr>
<tr>
	<td>Celda (3,1)</td>
	<td>Celda (3,2)</td>
	<td>Celda (3,3)</td>
</tr>
</table>`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">
						<Tag name="tfoot" />
					</h1>
					<p>
						Podemos usar la etiqueta <Tag name="tfoot" /> para crear un resumen
						o un total del contenido de la tabla.
					</p>
					<CodeBlock
						language="html"
						code={`<table>
	<!-- Resto de la tabla -->
	<tfoot>
		<tr>
			<td>Sección de pie 1</td>
			<td>Sección de pie 2</td>
			<td>Sección de pie 3</td>
		</tr>
	</tfoot>
</table>`}
					/>
					<IFrame
						className="bg-white h-48 w-full"
						srcDoc={`<table>
	<caption>
		Título
	</caption>
	<tr>
		<th>Encabezado 1</th>
		<th>Encabezado 2</th>
		<th>Encabezado 3</th>
	</tr>
	<tr>
		<td>Celda (1,1)</td>
		<td>Celda (1,2)</td>
		<td>Celda (1,3)</td>
	</tr>
	<tr>
		<td>Celda (1,1)</td>
		<td>Celda (1,2)</td>
		<td>Celda (1,3)</td>
	</tr>
	<tr>
		<td>Celda (2,1)</td>
		<td>Celda (2,2)</td>
		<td>Celda (2,3)</td>
	</tr>
	<tr>
		<td>Celda (3,1)</td>
		<td>Celda (3,2)</td>
		<td>Celda (3,3)</td>
	</tr>
	<tfoot>
		<tr>
			<td>Sección de pie 1</td>
			<td>Sección de pie 2</td>
			<td>Sección de pie 3</td>
		</tr>
	</tfoot>
</table>`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">
						<Tag name="tbody" />, <Tag name="thead" />
					</h1>
					<p>
						Para mejorar la accesibilidad y legibilidad de la tabla, podemos
						utilizar adicionalmente las etiquetas <Tag name="tbody" /> y{' '}
						<Tag name="thead" />.
					</p>
					<p>
						La fila de encabezados va dentro de <Tag name="thead" /> y el
						contenido de la tabla va dentro de <Tag name="tbody" /> y por último
						debe estar <Tag name="tfoot" />.
					</p>
					<CodeBlock
						language="html"
						code={`<table>
	<caption>
		<!-- Título -->
	</caption>
	<thead>
		<!-- Fila de encabezados -->
	</thead>
	<tbody>
		<!-- Filas de contenido -->
	</tbody>
	<tfoot>
		<!-- Fila de pie -->
	</tfoot>
</table>`}
					/>
					<IFrame
						className="bg-white h-48 w-full"
						srcDoc={`<table>
						<caption>
							Título
						</caption>
						<thead>
							<tr>
								<th>Encabezado 1</th>
								<th>Encabezado 2</th>
								<th>Encabezado 3</th>
							</tr>
						</thead>
						<tbody>
						<tr>
							<td>Celda (1,1)</td>
							<td>Celda (1,2)</td>
							<td>Celda (1,3)</td>
						</tr>
						<tr>
							<td>Celda (1,1)</td>
							<td>Celda (1,2)</td>
							<td>Celda (1,3)</td>
						</tr>
						<tr>
							<td>Celda (2,1)</td>
							<td>Celda (2,2)</td>
							<td>Celda (2,3)</td>
						</tr>
						<tr>
							<td>Celda (3,1)</td>
							<td>Celda (3,2)</td>
							<td>Celda (3,3)</td>
						</tr>
						</tbody>
						<tfoot>
							<tr>
								<td>Sección de pie 1</td>
								<td>Sección de pie 2</td>
								<td>Sección de pie 3</td>
							</tr>
						</tfoot>
					</table>`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">Ejemplo 1/3</h1>
					<CodeBlock
						language="html"
						code={`<table>
	<caption>
		Reporte de Ventas
	</caption>
	<thead>
		<tr>
			<th>Producto</th>
			<th>Cantidad</th>
			<th>Costo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Producto A</td>
			<td>40</td>
			<td>$400</td>
		</tr>
		<tr>
			<td>Producto B</td>
			<td>30</td>
			<td>$300</td>
		</tr>
		<tr>
			<td>Producto C</td>
			<td>10</td>
			<td>$500</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>70</td>
			<td>$1200</td>
		</tr>
	</tfoot>
</table>`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">Ejemplo 2/3</h1>
					<p>Sin estilos, tenemos como resultado esta tabla:</p>
					<IFrame
						className="bg-white h-48 w-full"
						srcDoc={`<table>
	<caption>
		Reporte de Ventas
	</caption>
	<thead>
		<tr>
			<th>Producto</th>
			<th>Cantidad</th>
			<th>Costo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Producto A</td>
			<td>40</td>
			<td>$400</td>
		</tr>
		<tr>
			<td>Producto B</td>
			<td>30</td>
			<td>$300</td>
		</tr>
		<tr>
			<td>Producto C</td>
			<td>10</td>
			<td>$500</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>70</td>
			<td>$1200</td>
		</tr>
	</tfoot>
</table>`}
					/>
					<p>Podemos agregar algunos para mejorar la visualización:</p>
					<CodeBlock
						language="css"
						code={`table {
  border-collapse: collapse;
}
caption {
  margin: 8px 0;
}
td,
th {
  border: 1px solid black;
  text-align: center;
  padding: 2px 4px;
}`}
					/>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl">Ejemplo 3/3</h1>
					<p>Nos quedaría de esta forma:</p>
					<IFrame
						className="bg-white h-48 w-full"
						srcDoc={`<table>
	<caption>
		Reporte de Ventas
	</caption>
	<thead>
		<tr>
			<th>Producto</th>
			<th>Cantidad</th>
			<th>Costo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Producto A</td>
			<td>40</td>
			<td>$400</td>
		</tr>
		<tr>
			<td>Producto B</td>
			<td>30</td>
			<td>$300</td>
		</tr>
		<tr>
			<td>Producto C</td>
			<td>10</td>
			<td>$500</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Total</td>
			<td>70</td>
			<td>$1200</td>
		</tr>
	</tfoot>
</table>
<style>
table {
  border-collapse: collapse;
}
caption {
  margin: 8px 0;
}
td,
th {
  border: 1px solid black;
  text-align: center;
  padding: 2px 4px;
}
</style>
`}
					/>
				</div>
			);
		},
	],
};

function Tag({name}: {name: string}) {
	return (
		<code className="font-monospace">
			&lt;<span className="text-[#569cd6]">{name}</span>&gt;
		</code>
	);
}
