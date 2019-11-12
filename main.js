var cont_dptos = document.querySelector('#dptos');

fetch('http://localhost/api/ciudades_dptos/departamentos.php')
.then(res => res.json())
.then(data => {
    for (let dpto of data) {

        cont_dptos.innerHTML += `
            <option value="${dpto.id_departamento}">${dpto.departamento}</option>
        `
    }
})


function cargarMunicipios(){
    console.log(this);
}