

let primeiroNum ;
let segundoNum ;
let operador ;
let resetVisor = false;
let stringNum = "";
let resultado ;
const operadores = ['+','%','*','/', '-'];
const botoes = document.querySelectorAll('.botao');
const visor = document.querySelector('.visor');
let segundoNumTrue = false;
//iterando os botoes com forEach
botoes.forEach(botao=> {
    botao.addEventListener('click',function(){
        //pego o conteudo dos botões iterados
        const valor = this.textContent;
        

        //confiro se o texto do valor é um numero
        if(stringNum == "" && valor ==='-' && visor.textContent == "") {
            stringNum += valor ;
            visor.textContent += valor;
        } else if(!isNaN(Number(valor))) {
            stringNum += valor
            visor.textContent += valor;
        } else if(segundoNumTrue && stringNum =="" && operadores.includes(visor.textContent.slice(-1))) {
            stringNum += valor;
            visor.textContent += valor;
        } else {
            
        }
        
        if (resetVisor){
            visor.textContent = '';
            stringNum = ""
            stringNum = String(resultado);
            visor.textContent = stringNum;
            primeiroNum = parseFloat(stringNum);
            segundoNum = undefined ;
            operador = undefined ;
            segundoNumTrue = false ;
            resetVisor = false 

        } 
    
        //valido se o valor é um dos operadores e se o primeiroNumero foi digitado
        if(operadores.includes(valor) && stringNum !== "" && stringNum !== "-"){
            operador = valor;
            visor.textContent += operador;
            //habilito o segundo numero
            segundoNumTrue = true ;
            stringNum = "";
        }

        if(!segundoNumTrue && stringNum !== "" && stringNum !== "-"){
            primeiroNum = parseFloat(stringNum)
        } else if(segundoNumTrue && stringNum !== "" && stringNum !== "-"){
                segundoNum = parseFloat(stringNum)
        }
  
        if(operador === "/" && segundoNum === 0) {
            visor.textContent = "Erro: Divisão por zero";
            primeiroNum = undefined;
            segundoNum = undefined;
            operador = undefined;
            segundoNumTrue = false;
            stringNum = "";
            resetVisor = true;
            resultado = undefined;
            return
        }

        if(valor === 'C') {
            visor.textContent = '';
            stringNum = ""
            primeiroNum = undefined;
            segundoNum = undefined ;
            operador = undefined ;
            segundoNumTrue = false ;
        }

        if(valor === '=' && primeiroNum && operador && segundoNum) {

            resetVisor = true ;
            switch(operador){
                case '+':
                    resultado = primeiroNum + segundoNum ;
                    visor.textContent = resultado;
                    break;
                case '-':
                    resultado = primeiroNum - segundoNum;
                    visor.textContent = resultado;
                    break;
                case '*':
                    resultado = primeiroNum*segundoNum;
                    visor.textContent = resultado;
                    break;
                case '/':
                    resultado  = primeiroNum / segundoNum;
                    visor.textContent = resultado;
                    break;
                case '%':
                    resultado = primeiroNum %segundoNum;
                    visor.textContent = resultado;
                    break;
            }
        }

    })
});