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
	  <p>obeseidade grau 3(mórbida)</p>
	{/if}
	{#if imc >= 35 && imc < 40}
	  <p>obeseidade grau 2(severa)</p>
	{/if}
	{#if imc >= 30 && imc < 35}
	  <p>Obesidade grau 1</p>
	{/if}
	{#if imc >= 25 && imc < 30}
	  <p>Levemene acima do peso</p>
	{/if}
	{#if imc >= 18.5 && imc < 25}
	  <p>Peso ideal, parabens!!</p>
	{/if}
	{#if imc < 18.5}
	  <p>Abaixo do peso</p>
	{/if}
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