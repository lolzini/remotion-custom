import ads from '../../components/ads';
import CodeBlock from '../../components/code-block';
import Cover from '../../components/cover';

export default {
	id: 'convenciones-de-nombramiento',
	slides: [
		() => (
			<Cover logo="buenas-practicas" title="Convenciones de nombramiento" />
		),
		() => {
			return (
				<div className="mt-16 flex flex-col gap-4">
					<p>
						Existen diferentes <strong>notaciones</strong> para nombrar
						entidades.
					</p>
					<p>Nos ayudan a mejorar la legibilidad de nuestro código.</p>

					<ul className="ml-4 flex list-disc flex-col gap-4">
						<li>
							<C>snake_case</C>: Todo en minúscula, separando palabras con guion
							bajo
						</li>
						<li>
							<C>camelCase</C>: Sin separación entre palabras, primera palabra
							en minúscula, palabras subsecuentes empezando con mayúscula
						</li>
						<li>
							<C>PascalCase</C>: Sin separación entre palabras, cada palabra
							comienza con mayúscula
						</li>
						<li>
							<C>kebab-case</C>: Todo en minúscula, separando palabras con guion
							medio
						</li>
						<li>
							<C>CONSTANT_CASE</C>: Todo en mayúscula, separando palabras con
							guion bajo
						</li>
					</ul>
					<p>
						Cada lenguaje de programación tiene recomendaciones para nombrar
						variables, constantes, funciones, clases, etc.
					</p>
					<p>
						A estas se les llama <strong>convenciones de nombramiento</strong>.
					</p>
				</div>
			);
		},
		() => {
			return (
				<div className="mt-16 flex flex-col gap-4">
					<table className="table border text-center">
						<caption className="my-4">
							Convenciones de nombramiento en{' '}
							<span className="rounded-full bg-[#F0DB4F] px-2 py-1 font-bold text-[#323330]">
								JavaScript
							</span>
						</caption>
						<tr>
							<th className="border py-2">Concepto</th>
							<th className="border py-2">Convención</th>
							<th className="border py-2">Ejemplo</th>
						</tr>
						<tr>
							<td className="border py-2">Variable</td>
							<td className="border py-2">
								<C>camelCase</C>
							</td>
							<td className="border py-2">
								<CodeBlock
									language="javascript"
									code='let nombreDeUsuario = "lolzini";'
								/>
							</td>
						</tr>
						<tr>
							<td className="border py-2">Constante</td>
							<td className="border py-2">
								<C>CONSTANT_CASE</C>
							</td>
							<td className="border py-2">
								<CodeBlock
									language="javascript"
									code="const GRAVEDAD_MAXIMA = 9.81;"
								/>
							</td>
						</tr>
						<tr>
							<td className="border py-2">Función</td>
							<td className="border py-2">
								<C>camelCase</C>
							</td>
							<td className="border py-2">
								<CodeBlock
									language="javascript"
									code="function miProcedimiento(){}"
								/>
							</td>
						</tr>
						<tr>
							<td className="border py-2">Clase</td>
							<td className="border py-2">
								<C>PascalCase</C>
							</td>
							<td className="border py-2">
								<CodeBlock
									language="javascript"
									code="class CuentaDeUsuario{}"
								/>
							</td>
						</tr>
					</table>
					<p>Estas sólo son algunas entidades</p>
				</div>
			);
		},
		() => {
			return (
				<div className="mt-16 flex flex-col gap-4">
					<table className="table border text-center">
						<caption className="my-4">
							Convenciones de nombramiento en{' '}
							<span className="rounded-full bg-[#306998] px-2 py-1 font-bold text-[#FFE873]">
								Python
							</span>
						</caption>
						<tr>
							<th className="border py-2">Concepto</th>
							<th className="border py-2">Convención</th>
							<th className="border py-2">Ejemplo</th>
						</tr>
						<tr>
							<td className="border py-2">Variable</td>
							<td className="border py-2">
								<C>snake_case</C>
							</td>
							<td className="border py-2">
								<CodeBlock
									language="python"
									code='nombre_de_usuario = "lolzini"'
								/>
							</td>
						</tr>
						<tr>
							<td className="border py-2">Constante</td>
							<td className="border py-2">
								<C>CONSTANT_CASE</C>
							</td>
							<td className="border py-2">
								<CodeBlock language="python" code="GRAVEDAD_MAXIMA = 9.81" />
							</td>
						</tr>
						<tr>
							<td className="border py-2">Función</td>
							<td className="border py-2">
								<C>snake_case</C>
							</td>
							<td className="border py-2">
								<CodeBlock language="python" code="def mi_procedimiento():" />
							</td>
						</tr>
						<tr>
							<td className="border py-2">Clase</td>
							<td className="border py-2">
								<C>PascalCase</C>
							</td>
							<td className="border py-2">
								<CodeBlock language="python" code="class CuentaDeUsuario:" />
							</td>
						</tr>
					</table>
					<p>Estas sólo son algunas entidades</p>
				</div>
			);
		},
		() => {
			return (
				<div className="mt-16 flex flex-col gap-4">
					<table className="table border text-center">
						<caption className="my-4">
							Convenciones de nombramiento en{' '}
							<span className="rounded-full bg-[#820C02] px-2 py-1 font-bold">
								Ruby
							</span>
						</caption>
						<tr>
							<th className="border py-2">Concepto</th>
							<th className="border py-2">Convención</th>
							<th className="border py-2">Ejemplo</th>
						</tr>
						<tr>
							<td className="border py-2">Variable</td>
							<td className="border py-2">
								<C>snake_case</C>
							</td>
							<td className="border py-2">
								<CodeBlock
									language="ruby"
									code='nombre_de_usuario = "lolzini"'
								/>
							</td>
						</tr>
						<tr>
							<td className="border py-2">Constante</td>
							<td className="border py-2">
								<C>CONSTANT_CASE</C>
							</td>
							<td className="border py-2">
								<CodeBlock language="ruby" code="GRAVEDAD_MAXIMA = 9.81" />
							</td>
						</tr>
						<tr>
							<td className="border py-2">Función</td>
							<td className="border py-2">
								<C>snake_case</C>
							</td>
							<td className="border py-2">
								<CodeBlock language="ruby" code="def mi_procedimiento" />
							</td>
						</tr>
						<tr>
							<td className="border py-2">Clase</td>
							<td className="border py-2">
								<C>PascalCase</C>
							</td>
							<td className="border py-2">
								<CodeBlock language="ruby" code="class CuentaDeUsuario" />
							</td>
						</tr>
					</table>
					<p>Estas sólo son algunas entidades</p>
				</div>
			);
		},
		ads,
	],
};

function C({children}) {
	return (
		<code className="rounded-full bg-white/10 px-2 py-1 font-mono font-bold">
			{children}
		</code>
	);
}
