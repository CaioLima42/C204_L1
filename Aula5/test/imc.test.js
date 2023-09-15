const { expect } = require('chai');
const {calcularIMC,defineImc} = require('../src/imc');


describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('saida deve ser o peso ideal', () => {
    const peso = 80; 
    const altura = 180; 

    const pesoIdeal = defineImc(peso, altura);
    expect(pesoIdeal).to.equal('Peso ideal, parabens!!');
    });

    it('saida deve ser acima do peso', () => {
      const peso = 81; 
      const altura = 168; 
  
      const acimaDoPeso = defineImc(peso, altura);
      expect(acimaDoPeso).to.equal('Levemene acima do peso');
    });
});

//describe('Definicoes da condicao fisica', () => {

  //});
  