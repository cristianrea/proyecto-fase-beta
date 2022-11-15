function valuap(respuest){ 
	var reto;
	if(parseInt(respuest)==this.correcta){
		// var reto;
		alert("Es correcta");
		reto=true;
		return reto;
	}else{
		alert("Es false");
		return reto;
	}
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
	this.pregun=pregun;
	this.respuestas=[];
	this.respuestas[0]=respuesta1;
	this.respuestas[1]=respuesta2;
	this.respuestas[2]=respuesta3;
	this.respuestas[3]=respuesta4;
	this.correcta=parseInt(correcta);
	this.ocupado=false;
	this.valuap=valuap;
}

var retorno=[];
var preguntas=[];


preguntas[0]=new pregunta("¿Qué es la lógica proposicional?","Es una herramienta que se utiliza para hacer deducciones basadas en conocimiento.","Es una herramienta para evidenciar o deducir la solidez o correctitud de un argumento lógico.","Es un lenguaje para resolver un problema.","d.	Es un sistema formal basado en axiomas.",1);

preguntas[1]=new pregunta("¿Qué es una proposición?","Es un enunciado interrogativo que puede adquirir el valor de falso o verdadero.","Es el enunciado de un problema.","Es un enunciado declarativo ambiguo.","Es un enunciado declarativo que puede adquirir el valor de falso o verdadero.",3);

preguntas[2]=new pregunta("¿Qué es una tabla de verdad?","Es una tabla donde todos los valores son verdaderos.","Es una tabla con la que se puede determinar si la proposición es tautología, contradicción o contingencia."," Es una tabla que describe los valores de verdad para las proposiciones.","Es una tabla con valores positivos.",2);

preguntas[3]=new pregunta("¿Cómo se denota conjunción, disyunción, condicional y bicondicional?","∨, ∧, ⇆ y →, respectivamente.","⇆, →, ∨ y ∧, respectivamente.⇆, →, ∨ y ∧,  respectivamente.","∧, ∨, → y  ⇆,, respectivamente.","∧, ∨, ⇆ y →, respectivamente. →, ∨, ⇆ y ∧,  respectivamente.",2);

preguntas[4]=new pregunta("En la siguiente fórmula proposicional p → q, ¿qué nombre reciben las atómicas p y q?","Proposición antecedente y proposición consecuente, respectivamente.","Proposición consecuente y proposición antecedente, respectivamente.","Primera proposición y segunda proposición, respectivamente.","Proposición p y proposición q, respectivamente.",0);

preguntas[5]=new pregunta("¿Qué son los equivalentes lógicos?","Dos proposiciones diferentes que tienen los mismos valores de verdad.","Dos proposiciones diferentes que tienen diferentes valores de verdad.dos proposiciones diferentes que tienen diferentes valores de verdad.","Dos proposiciones iguales que tienen los mismos valores de verdad.dos proposiciones iguales que tienen los mismos valores de verdad.","Dos proposiciones iguales que tienen diferentes valores de verdad. Dos proposiciones iguales que tienen diferentes valores de verdad.",0);

preguntas[6]=new pregunta("¿Qué es una condición necesaria?","Es una condición que basta para garantizar un resultado en particular. Una condición única para garantizar un resultado en particular.","Es una condición especial para lograr un resultado en particular. Es una condición que basta para garantizar un resultado en particular. Es una condición única para lograr un resultado en particular.","Una condición que se necesita para lograr un resultado en particular.","Una condición especial para garantizar un resultado en particular.",2);

preguntas[7]=new pregunta("¿Qué es una condición suficiente?","Es una condición única para lograr un resultado en particular. Una condición que se necesita para lograr un resultado en particular.","Es una condición que basta para garantizar un resultado en particular.","Es una condición especial para lograr un resultado en particular.una condición única para garantizar un resultado en particular.","Una condición que se necesita para lograr un resultado en particular. Una condición especial para garantizar un resultado en particular.",1);

preguntas[8]=new pregunta("¿Qué conectivo binario usa en lenguaje natural “si ___ y sólo si ___”?","Conjunción","Condicional","Bicondicional","Disyunción",2);

preguntas[9]=new pregunta("Los conectivos se clasifican en 2 grupos, ¿cuáles son?","Unarios y binarios","Binarios y terciarios","Unarios y terciarios","Simples y complejos",0);

preguntas[10]=new pregunta("Esta propiedad nos dice que el orden en que aparecen las proposiciones relacionadas por el conectivo lógico no afecta el resultado de la operación.","Asociatividad","Conmutatividad","Identidad","Idempotencia",1);

preguntas[11]=new pregunta("Es aquella constante que al operar con cualquier otro valor, el resultado es la constante misma.","Idempotencia","Identidad","Elemento dominante","Elemento tercero excluido",2);

preguntas[12]=new pregunta("Este tipo de conectivos trabajan con dos proposiciones.","Unarios","Binarios","Terciarios","N-arios",1);

preguntas[13]=new pregunta(" Este tipo de conectivos trabajan sobre una sola propoición.","Unarios","Binarios ","Terciarios","N-arios",0);

preguntas[14]=new pregunta(" ¿Qué se toma en cuenta para clasificar una fórmula proposicional?","La tabla de verdad","Los conectivos que la conforman","El número de atómicas","Su columna resultante",3);

preguntas[15]=new pregunta("¿De qué otra forma se le conoce a las cadenas de entrada?","Entradas","Listas","Cintas finitas","Colas",2);

preguntas[16]=new pregunta("¿Cuáles son los métodos de razonamiento que proporciona la lógica?","Manipular objetos, demostrar propiedades de y sobre los objetos, obtener resultados nuevos a partir de los ya conocidos, extensión del conocimiento.","Crear objetos, asumir propiedades de y sobre los objetos, obtener resultados nuevos a partir de los ya conocidos, extensión del conocimiento","Formar objetos, comprobar propiedades de y sobre objetos, obtener resultados nuevos.","Ninguna de las anteriores",3);

preguntas[17]=new pregunta("¿Cuáles de estos son considerados como operadores unarios?","Signo multiplicación x * .","Signo division ÷ /.","Signo suma + .","Signo resta -.", );

preguntas[18]=new pregunta("¿Cuáles son considerados operadores binarios?","Signos de multiplicación x * y signos de división /  ÷.","Signo más + y signo menos -.","Signo de división /  ÷ y signos más +.","Signos de multiplicación * x y signos de menos -.", );

preguntas[19]=new pregunta("¿Cuándo una proposición es atómica?","La formalización de la lógica proposicional.","Cuando no puede subdividirse en proposiciones más simples.","Cuando es un enunciado declarativo que puede tomar el valor de falso o verdadero, es decir, no es ambiguo.","Cuando nos proporciona reglas de inferencia que nos permitan demostrar la validez de los razonamientos.",);

preguntas[20]=new pregunta(" "," "," "," "," ",1);

preguntas[21]=new pregunta(" "," "," "," "," ",0);

preguntas[22]=new pregunta(" "," "," "," "," ",0);

preguntas[23]=new pregunta(" "," "," "," "," ",0);

preguntas[24]=new pregunta(" "," "," "," "," ",0);

preguntas[25]=new pregunta(" "," "," "," "," ",0);

preguntas[26]=new pregunta(" "," "," "," "," ",0);

preguntas[27]=new pregunta(" "," "," "," "," ",0);

preguntas[28]=new pregunta(" "," "," "," "," ",0);

preguntas[29]=new pregunta(" "," "," "," "," ",0);

preguntas[31]=new pregunta(" "," "," "," "," ",0);

preguntas[32]=new pregunta(" "," "," "," "," ",0);

preguntas[33]=new pregunta(" "," "," "," "," ",0);

preguntas[34]=new pregunta(" "," "," "," "," ",0);

preguntas[35]=new pregunta(" "," "," "," "," ",0);

preguntas[36]=new pregunta(" "," "," "," "," ",0);

preguntas[37]=new pregunta(" "," "," "," "," ",0);

preguntas[38]=new pregunta(" "," "," "," "," ",0);

preguntas[39]=new pregunta(" "," "," "," "," ",0);

preguntas[40]=new pregunta(" "," "," "," "," ",0);

preguntas[41]=new pregunta(" "," "," "," "," ",0);

preguntas[42]=new pregunta(" "," "," "," "," ",0);

preguntas[43]=new pregunta(" "," "," "," "," ",0);

preguntas[44]=new pregunta(" "," "," "," "," ",0);

preguntas[45]=new pregunta(" "," "," "," "," ",0);

preguntas[46]=new pregunta(" "," "," "," "," ",0);

preguntas[47]=new pregunta(" "," "," "," "," ",0);

preguntas[48]=new pregunta(" "," "," "," "," ",0);

preguntas[49]=new pregunta(" "," "," "," "," ",0);
















