import ads from '../../components/ads';
import CodeBlock from '../../components/code-block';
import Cover from '../../components/cover';

export default {
	id: 'operadores-aritmeticos',
	slides: [
		() => <Cover logo="js" title="Operadores aritméticos" />,
		() => {
			const add = `let miCalculo = 2 + 2;`;
			const sub = `let miCalculo = 10 - 5;`;
			const mult = `let miCalculo = 3 * 3;`;

			return (
				<div className="flex flex-col gap-4 mt-16">
					<div>
						<h2 className="text-2xl">Suma</h2>
						<p className="my-2">
							Podemos usar el símbolo{' '}
							<code className="bg-white/10 p-1 rounded-full">+</code> para
							calcular sumas.
						</p>

						<CodeBlock language="javascript" code={add} />
						<CodeBlock language="text" code="4" />
					</div>
					<div>
						<h2 className="text-2xl">Resta</h2>
						<p className="my-2">
							Podemos usar el símbolo{' '}
							<code className="bg-white/10 p-1 rounded-full">-</code> para
							calcular restas.
						</p>

						<CodeBlock language="javascript" code={sub} />
						<CodeBlock language="text" code="5" />
					</div>
					<div>
						<h2 className="text-2xl">Multiplicación</h2>
						<p className="my-2">
							Podemos usar el símbolo{' '}
							<code className="bg-white/10 p-1 rounded-full">*</code> para
							calcular multiplicaciones.
						</p>

						<CodeBlock language="javascript" code={mult} />
						<CodeBlock language="text" code="9" />
					</div>
				</div>
			);
		},
		() => {
			const div = `let miCalculo = 10 / 3;`;
			const mod = `let miCalculo = 10 % 3;`;
			const exp = `let miCalculo = 2 ** 3;`;

			return (
				<div className="flex flex-col gap-4 mt-16">
					<div>
						<h2 className="text-2xl">División</h2>
						<p className="my-2">
							Podemos usar el símbolo{' '}
							<code className="bg-white/10 p-1 rounded-full">/</code> para
							calcular divisiones.
						</p>

						<CodeBlock language="javascript" code={div} />
						<CodeBlock language="text" code="3.3333333333333335" />
					</div>

					<div>
						<h2 className="text-2xl">Módulo o restante</h2>
						<p className="my-2">
							Podemos usar el símbolo{' '}
							<code className="bg-white/10 p-1 rounded-full">%</code> para
							calcular divisiones y <strong>conseguir el restante</strong>.
						</p>

						<CodeBlock language="javascript" code={mod} />
						<CodeBlock language="text" code="1" />
					</div>

					<div>
						<h2 className="text-2xl">Exponencial</h2>
						<p className="my-2">
							Podemos usar los símbolos{' '}
							<code className="bg-white/10 p-1 rounded-full">**</code> para
							calcular exponentes.
						</p>

						<CodeBlock language="javascript" code={exp} />
						<CodeBlock language="text" code="8" />
					</div>
				</div>
			);
		},
		() => {
			const group = `let miCalculo = 2 + 3 * (4 - 2 / 3);`;
			return (
				<div className="flex flex-col gap-4 mt-16">
					<div>
						<h2 className="text-2xl">Agrupaciones</h2>
						<p className="py-2">
							Cuando creamos operaciones más complejas podemos agrupar usando
							paréntesis
							<code className="bg-white/10 p-1 rounded-full">()</code>.
						</p>

						<CodeBlock language="javascript" code={group} />
						<CodeBlock language="text" code="12" />
					</div>

					<div>
						<h2 className="text-2xl">Precedencia de operadores</h2>
						<p className="py-2">
							El orden en el que se calculan las operaciones es el mismo que
							conocemos en las matemáticas.
						</p>
						<table className="table-auto border-separate bg-white/10 rounded text-center mx-auto text-xl border-spacing-x-8 border-spacing-y-4 my-2">
							<tr>
								<th>Operador</th>
								<th>Orden de cálculo</th>
							</tr>
							<tr>
								<td>
									<code className="bg-white/10 p-1 rounded-full">()</code>
								</td>
								<td>1</td>
							</tr>
							<tr>
								<td>
									<code className="bg-white/10 p-1 rounded-full">**</code>
								</td>
								<td>2</td>
							</tr>
							<tr>
								<td>
									<code className="bg-white/10 p-1 rounded-full">*</code>,{' '}
									<code className="bg-white/10 p-1 rounded-full">/</code>,{' '}
									<code className="bg-white/10 p-1 rounded-full">%</code>
								</td>
								<td>3</td>
							</tr>
							<tr>
								<td>
									<code className="bg-white/10 p-1 rounded-full">+</code>,{' '}
									<code className="bg-white/10 p-1 rounded-full">-</code>
								</td>
								<td>4</td>
							</tr>
						</table>
					</div>
				</div>
			);
		},
		ads,
	],
};
