/*llamar al formulario*/
const formularioUsuarios = document.querySelector("#formularioUsuarios")
const contenedorHTML = document.querySelector(".contendorUsuarios")

/*agregar evento*/

const usuarios = []

const renderizarUsuarios = () =>{
    contenedorHTML.innerHTML = ""
    for(const usuario of usuarios){
        contenedorHTML.innerHTML += `
        <div class="card-user" 
          <h2>${usuario.nombre}</h2>
          <h3>${usuario.email}</h3>
          <p>${usuario.contrasena}</p>
          <p>${usuario.edades}</p>

        </div>
        `
  }
}

 formularioUsuarios.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(formularioUsuarios.edades.value);
    usuarios.push({
      nombre: formularioUsuarios.nombre.value,
      email: formularioUsuarios.email.value,
      contrasena: formularioUsuarios.contrasena.value,
      edades: formularioUsuarios.edades.value
    })
    renderizarUsuarios()
 })
 /*array de objeto*/
