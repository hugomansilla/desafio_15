// Guardar variables 
const listaTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#tarea")
const btnAgregar = document.querySelector("#agregarTarea")
const tareasContar = document.querySelector(".tareasContar")
const tareasRealizadas = document.querySelector(".tareasRealizadas")

const tareas = [
   {id: Date.now() + 1, nombre: "Lavar la loza", realizado: false},
   {id: Date.now() + 2, nombre: "Sacar a pasear a la Alaska", realizado: false},
   {id: Date.now() + 3, nombre: "Cocinar", realizado: false}
]

// Actualizar tareas en el HTML 
function renderTareas() {
    let html = ""
    let realizadas = 0;
    
    for (let tarea of tareas) {
    if(tarea.realizado) realizadas++; 
    html += `<tr> 
                <th>${tarea.id}</th> 
                <th>${tarea.nombre}</th>
                <th><input type="checkbox" onclick="toggleRealizado(${tarea.id})" ${tarea.realizado ? 'checked' : ''}></th> 
                <th><button onclick="borrar(${tarea.id})"> X </button></th> 
             </tr>`;
    }
    // Actualizar tabla
    listaTareas.innerHTML = html;

    // Actualizar contador tareas
    tareasContar.textContent = tareas.length;

    // Actualizar contador tareas realizadas 
    tareasRealizadas.textContent = realizadas;

}

// Agregar tareas 
btnAgregar.addEventListener("click",() => {
    // Agregar tarea
    const nuevaTarea = tareaInput.value
    tareas.push({id: Date.now(), nombre: nuevaTarea})
    tareaInput.value = ""

    // Agregar en el HTML 
    renderTareas()
})

// Borrar tareas 
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id === id)
    tareas.splice(index, 1)
    
    // Agregar en el HTML 
    renderTareas()
}

// Alternar estado de realización de la tarea
function toggleRealizado(id) {
    const tarea = tareas.find((ele) => ele.id === id)
    tarea.realizado = !tarea.realizado

    // Agregar en el HTML 
    renderTareas()
}

// Mostrar tareas iniciales
renderTareas()



