const listaMascotas = document.getElementById('lista-mascotas');

let mascotas = [
    {
        tipo: "Gato",
        nombre: "Michi",
        dueno: "Alejo"
    }
];

function listarMascotas() {
    let htmlMascotas = mascotas.map((mascota, index) => 
    `<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
    </tr>`)
    .join("");
  listaMascotas.innerHTML = htmlMascotas;
}

listarMascotas();