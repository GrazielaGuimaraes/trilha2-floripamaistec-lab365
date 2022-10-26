

				//Executa a função de concatenação de String ao rodar o script no console
					concatenacaoString()


				/*ATIVIDADE 1 (Calculando dois valores do input)*/
				function calculadora(){

					if(document.getElementById('valor1').value != '' && document.getElementById('valor2').value != ''
						&& document.getElementById('operacoes').value != '') {

					let valor1 = Number(document.getElementById('valor1').value)
					let valor2 = Number(document.getElementById('valor2').value)
					let operacao = document.getElementById('operacoes').value

					//Passando valores as variáveis de operação
					let soma = valor1 + valor2
					let subtracao = valor1 - valor2
					let multiplicacao = valor1 * valor2
					let divisao = valor1 / valor2

					switch(operacao){

					case 'soma':
					console.log(soma)
					document.getElementById('resultado').textContent = 'A soma é: ' + soma
					break

					case 'subtracao':
					console.log(subtracao)
					document.getElementById('resultado').textContent = 'A subtração é: ' + subtracao
					break


					case 'multiplicacao':
					console.log(multiplicacao)
					document.getElementById('resultado').textContent = 'A multiplicação é: ' + multiplicacao
					break

					case 'divisao':
					console.log(divisao)
					document.getElementById('resultado').textContent = 'A divisão é: ' + divisao
					break

				} //fim switch


			} else {

				alert('Preencha os campos corretamente!')
			}

		} //fim função



		/*ATIVIDADE 2 verificando setores por idade*/
		function verificaSetor(){


			if(document.getElementById('setorIdade').value == '' || isNaN(document.getElementById('setorIdade').value){

				alert('Insira uma idade válida')

			} else {

			let idade = document.getElementById('setorIdade').value

			if(idade < 14){
				console.log('Idade: ' + idade + ', setor amarelo')
				document.getElementById('setor').textContent = 'Idade: ' + idade + ', setor amarelo'

			} else if(idade >= 14 && idade < 18) {
				console.log('Idade: ' + idade + ', setor azul')
				document.getElementById('setor').textContent = 'Idade: ' + idade + ', setor azul'

			} else if(idade >= 18 && idade < 25) {
				console.log('Idade: ' + idade + ', setor branco')
				document.getElementById('setor').textContent = 'Idade: ' + idade + ', setor branco'

			} else{
				console.log('Idade: ' + idade + ', setor verde')
				document.getElementById('setor').textContent = 'Idade: ' + idade + ', setor verde'
			}

		} //fim else

		} //fim função



		/*ATIVIDADE 3 operações matemáticas*/
		function operacoesEstudadas(operacaoHtml) {

		let numero1 = 8
		let numero2 = 4
		let op = 0
		let texto = ''


		switch(operacaoHtml) {

		case 'soma':
		op = numero1 + numero2
		texto = 'A soma de ' + numero1 + '+' + numero2 + ' é igual a: ' + op
		console.log('A soma de ' + numero1 + '+' + numero2 + ' é igual a: ' + op)
		document.getElementById('op').textContent = texto
		break

		case 'subtracao':
		op = numero1 - numero2
		texto = 'A subtração de ' + numero1 + '-' + numero2 + ' é igual a: ' + op
		console.log('A subtração de ' + numero1 + '-' + numero2 + ' é igual a: ' + op)
		document.getElementById('op').textContent = texto
		break

		case 'multiplicacao':
		op = numero1 * numero2
		texto = 'A multiplicação de ' + numero1 + 'x' + numero2 + ' é igual a: ' + op
		console.log('A multiplicação de ' + numero1 + 'x' + numero2 + ' é igual a: ' + op)
		document.getElementById('op').textContent = texto
		break


		case 'divisao':
		op = numero1 / numero2
		texto = 'A divisão de ' + numero1 + '/' + numero2 + ' é igual a: ' + op
		console.log('A divisão de ' + numero1 + '/' + numero2 + ' é igual a: ' + op)
		document.getElementById('op').textContent = texto
		break

		case 'exponenciacao':
		op = Math.pow(numero1, numero2)
		texto = 'A exponenciação de ' + numero1 + ' elevado a ' + numero2 + ' é igual a: ' + op
		console.log('A exponenciação de ' + numero1 + ' elevado a ' + numero2 + ' é igual a: ' + op)
		document.getElementById('op').textContent = texto
		break

		case 'resto':
		let resto = numero1 / numero2
		op = (resto % 2)
		texto = 'O resto da divisão entre ' + numero1 + ' e ' + numero2 + ' é igual a: ' + op
		console.log('O resto da divisão entre ' + numero1 + ' e ' + numero2 + ' é igual a: ' + op)
		document.getElementById('op').textContent = texto
		break

	} //fim switch

} //fim função


		/*ATIVIDADE 4 concatenação de String*/
		function concatenacaoString() {

			let idade = 34
			let nome = 'Graziela'
			let curso = 'Front-end básico'

			let variavel_concatena = 'Sou a variável concatenada! Idade: ' + idade + ', nome: ' + nome + ', curso: ' + curso

			//Mostrando no console
			console.log(idade)
			console.log(nome)
			console.log(curso)
			console.log(variavel_concatena)

		} //fim função

