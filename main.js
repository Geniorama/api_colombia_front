var cont_dptos = document.querySelector('#dptos');
var cont_mun = document.querySelector('#municipios');

fetch('https://univercity.com.co/api_colombia/departamentos.php')

.then(res => res.json())
.then(data => {
    for (let dpto of data) {
        cont_dptos.innerHTML += `
            <option value="${dpto.id_departamento}">${dpto.departamento}</option>
        `
    }
})

cont_dptos.addEventListener('change', function(e) {
    cont_mun.innerHTML = '<option selected>Selecciona un municipio</option>';
    
    let valor_dpto = e.target.value;

    fetch('https://univercity.com.co/api_colombia/municipios.php?id_departamento=' + valor_dpto)

    .then(res => res.json())
    .then(data => {
        for (let mun of data) {
            cont_mun.innerHTML += `
                <option value="${mun.id_municipio}">${mun.municipio}</option>
            `
        }
    })
})







