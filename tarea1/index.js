const $cantidadFamiliares = document.querySelector('#cantidad');

$cantidadFamiliares.onclick = function() {
    const numeroIntegrantes = document.querySelector('#numero-familiares').value;
    const $nuevoFormulario = document.querySelector('#resultados');
    const classInput = "integrantes";

    for(i = 1; i <= numeroIntegrantes; i++){
        let label = document.createElement('label');
        let textoLabel = document.createTextNode("Edad del integrante: ");
        label.appendChild(textoLabel);

        let input = document.createElement('input');
        let inputType = "number";
        input.setAttribute('type',inputType);
        input.setAttribute('class',classInput);

        let br = document.createElement('br');

        $nuevoFormulario.appendChild(label);
        $nuevoFormulario.appendChild(input);
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

    const $calcularEdades = document.querySelector('#calcular');
    const $edadIntegrates = document.querySelectorAll('.integrantes');


    $calcularEdades.onclick = function() {

        let edadesArray = [];
        for(i = 0; i < $edadIntegrates.length; i++){
            edadesArray.push(Number($edadIntegrates[i].value))
        }

        function calcularEdadMayor(edadesArray) {
            let edadMayor = edadesArray[0];
            for(i = 1; i < edadesArray.length; i++){
                if(edadesArray[i]>edadMayor){
                    edadMayor = edadesArray[i];
                }
                
            }
            return edadMayor;
        }
        
        function calcularEdadMenor(edadesArray) {
            let edadMenor = edadesArray[0];
            for(i = 1; i < edadesArray.length; i++){
                if(edadesArray[i]<edadMenor){
                    edadMenor = edadesArray[i];
                }
                return edadMenor;
            }
        }
        
        function calcularPromedio(edadesArray) {
            let sumaTotal = 0;
            for(i = 0; i < edadesArray.length; i++){
                sumaTotal += edadesArray[i];
            }
            return sumaTotal / edadesArray.length;
        }

        const pMayor = document.createElement('p');
        const pMayorText = document.createTextNode("La edad del integrante mayor es de " + calcularEdadMayor(edadesArray) + " años.");
        pMayor.appendChild(pMayorText);

        const pMenor = document.createElement('p');
        const pMenorText = document.createTextNode("La edad del integrante menor es de " + calcularEdadMenor(edadesArray) + " años.");
        pMenor.appendChild(pMenorText);

        const pPromedio = document.createElement('p');
        const pPromedioText = document.createTextNode("El promedio de edad en tu familia es de " + calcularPromedio(edadesArray) + ".");
        pPromedio.appendChild(pPromedioText);

        $nuevoFormulario.appendChild(pMayor);
        $nuevoFormulario.appendChild(pMenor);
        $nuevoFormulario.appendChild(pPromedio);
    }
    const $botonBorrar = document.querySelector('#borrar');
    $botonBorrar.onclick = function() {
        $nuevoFormulario.remove();
    }
}

