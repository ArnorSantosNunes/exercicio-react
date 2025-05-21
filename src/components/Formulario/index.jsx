import { useState } from 'react';
import './styles.css';

function CalculadoraIMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

  // Função para classificar o IMC
    const getClassificacao = (imc) => {
    if (imc < 18.5) return 'Magreza';
    if (imc < 25) return 'Peso saudável';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidade';
    };

    const calcularIMC = (e) => {
    e.preventDefault();
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));
    setClassificacao(getClassificacao(imcCalculado));
    };

    return (
        <>
            <div className="container">
        <h2>Calculadora de IMC</h2>
        <form onSubmit={calcularIMC}>
        <div className="input-group">
            <label htmlFor="peso">Peso (kg):</label>
            <input 
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            required
            />
        </div>
        <div className="input-group">
            <label htmlFor="altura">Altura (m):</label>
            <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
            step="0.01"
            required
            />
        </div>
        <button type="submit">Calcular IMC</button>
        </form>

        {imc && (
        <div className="resultado">
            <h2>Seu IMC: {imc}</h2>
            <p>Classificação: <strong>{classificacao}</strong></p>
        </div>
        )}
    </div>
        </>

    );
}

export default CalculadoraIMC;