<script>
	let peso;
	let altura;
	let imc;

	function calcularIMC(){
	if(peso > 0 && altura > 0){
		imc = peso/Math.pow(altura,2).toFixed(2);
	}
	else{
		imc = 0;
	}
}

</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	
	{#if imc > 0}
	{#if imc > 39}
	<strong><p style="color: red;">Obeseidade grau 3(mórbida)</p></strong>
	{/if}
	{#if imc >= 35 && imc < 40}
	<strong><p style="color: red;">Obeseidade grau 2(severa)</p></strong>
	{/if}
	{#if imc >= 30 && imc < 35}
	<strong><p style="color: red;">Obesidade grau 1</p></strong>
	{/if}
	{#if imc >= 25 && imc < 30}
	<strong><p style="color: yellow;">Levemene acima do peso</p></strong>
	{/if}
	{#if imc >= 18.5 && imc < 25}
	<strong><p style="color: green;">Peso ideal, parabens!!</p></strong>
	{/if}
	{#if imc < 18.5}
	<strong><p style="color: red;">Abaixo do peso</p></strong>
	{/if}
	  <p>Valor do IMC: {imc}</p>
	{/if}

</main>

  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}

	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}
  </style>