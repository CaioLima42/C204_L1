function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function defineImc(peso,altura){
    var imc = calcularIMC(peso,altura);
    if (imc > 39){
        return 'Obeseidade grau 3(mórbida)'
    }
    else if (imc >= 35 && imc < 40){
        return 'Obeseidade grau 2(severa)'
    }
    else if (imc >= 30 && imc < 35){
        return 'Obesidade grau 1'
    }
    else if (imc >= 25 && imc < 30){
        return 'Levemene acima do peso'
    }
    else if (imc >= 18.5 && imc < 25){
        return 'Peso ideal, parabens!!'
    }
    else if (imc < 18.5){
        return 'Abaixo do peso'
    }
        
    
}



module.exports = { calcularIMC,defineImc  }; // Exporta a função calcularIMC
