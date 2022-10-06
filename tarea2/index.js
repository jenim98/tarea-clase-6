const $botonCantidadTrabajadores = document.querySelector('#boton-trabajadores');

const $borrarFormulario = document.querySelector('#borrar');
const $formularioCompleto = document.querySelectorAll('#nuevo-formulario');
const $nuevoFormulario = document.querySelector('#form');
const $body = document.querySelector('#contenedor');

$borrarFormulario.onclick = function() {
    $nuevoFormulario.parentNode.removeChild($nuevoFormulario);
}

$botonCantidadTrabajadores.onclick = function() {
    const cantidadTrabajadores = document.querySelector('#trabajadores').value;
    
    const classInput = "salario-mensual";

    for(i = 0; i < $formularioCompleto.length; i++){
        $formularioCompleto[i].style.display = 'block';
    }

    for(i= 1; i <= cantidadTrabajadores; i++){
        let label = document.createElement('label');
        let labelClass = "labelCreado";
        let textoLabel = document.createTextNode("Salario mensual del integrante: ");
        label.appendChild(textoLabel);
        label.setAttribute('class',labelClass);

        let input = document.createElement('input');
        let inputType = "number";
        input.setAttribute('type',inputType);
        input.setAttribute('class',classInput);

        let botonBorrar = document.createElement('input');
        let botonBorrarType = "reset";
        let botonBorrarValue = "Borrar";
        let botonBorrarClass = "borrar-input";
        botonBorrar.setAttribute('type',botonBorrarType);
        botonBorrar.setAttribute('value',botonBorrarValue);
        botonBorrar.setAttribute('class',botonBorrarClass);

        let br = document.createElement('br');

        $nuevoFormulario.appendChild(label);
        $nuevoFormulario.appendChild(input);
        $nuevoFormulario.appendChild(botonBorrar);
        $nuevoFormulario.appendChild(br);
    }
    let boton = document.createElement('input');
    let botonType = "submit";
    let botonValue = "Calcular";
    let botonId = "calcular";
    boton.setAttribute('type',botonType);
    boton.setAttribute('value',botonValue);
    boton.setAttribute('id',botonId);

    $nuevoFormulario.appendChild(boton);

    const $botonBorrarInputs = document.querySelectorAll('.borrar-input');
    const $labelCreado = document.querySelector('.labelCreado');
    const $inputCreado = document.querySelector('.classInput');

    $botonBorrarInputs.onclick = function(){
        for(i=0; i<$nuevoFormulario.length; i++){
            $labelCreado[i].remove();
            $inputCreado[i].remove();
        }
    }

    const $botonCalcular = document.querySelector('#calcular');
    const $salarioMensual = document.querySelectorAll('.salario-mensual');
    
    $botonCalcular.onclick = function() {
        let salarioArray = [];
        for(i = 0; i < $salarioMensual.length; i++){
            salarioArray.push(Number($salarioMensual[i].value))
        }
        console.log(salarioArray)
    
        function calcularSalarioPromedioAnual(salarioArray) {
            let sumaTotal = 0;
            for(i = 0; i < salarioArray.length; i++){
                sumaTotal += salarioArray[i];
            }
            return sumaTotal / salarioArray.length;
        }
        
        function calcularSalarioPromedioMensual(salarioArray) {
            const MESES_EN_UN_ANIO = 12;
            return calcularSalarioPromedioAnual(salarioArray) / MESES_EN_UN_ANIO;
        }

        function calcularSalarioMenor(salarioArray) {
            let salarioMenor = salarioArray[0];
            for(i = 1; i < salarioArray.length; i++){
                if(salarioArray[i]<salarioMenor){
                    salarioMenor = salarioArray[i];
                }
            return salarioMenor;
            }
        }

        function calcularSalarioMayor(salarioArray) {
            let salarioMayor = salarioArray[0];
            for(i = 1; i < salarioArray.length; i++){
                if(salarioArray[i]>salarioMayor){
                    salarioMayor = salarioArray[i];
                }
                
            }
            return salarioMayor;
        }

        $pMayor = document.querySelector('#mayor');
        $pMenor = document.querySelector('#menor');
        $pPromedio = document.querySelector('#promedio');
        $pPromedioMensual = document.querySelector('#promedio-mensual');

        $pMayor.innerText = `El salario anual mayor es ${calcularSalarioMayor(salarioArray)}`;
        $pMenor.innerText = `El salario anual menor es ${calcularSalarioMenor(salarioArray)}`;
        $pPromedio.innerText = `El salario promedio anual es ${calcularSalarioPromedioAnual(salarioArray)}`;
        $pPromedioMensual.innerText = `El salario promedio mensual es ${calcularSalarioPromedioMensual(salarioArray)}`;
        
    }

}
