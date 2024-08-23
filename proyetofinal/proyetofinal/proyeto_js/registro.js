const name = document.querySelector(".name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const phone = document.querySelector(".phone")
const btnRegistration = document.querySelector(".btn-registration")


let customer_list 
let customer_id

// lo usamos para convertir un json en obj y me deje colocar varios coustumers en el local storage

const data = JSON.parse(localStorage.getItem(`customer_list`))

// si la data no viene vacia customer sera igual a la data y si no existe nada en el localstorage sera un array vacio

if(data){
    customer_list = data
    customer_id = data.length 
}else{
    customer_list = []
    customer_id = 1
}

btnRegistration.addEventListener(`click`, (event) => {
    
    event.preventDefault();

    const customer = {
        customer_id: customer_id,
        name: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value
    }

    customer_list.push(customer)

    // Guarda la lista actualizada en el localStorage

    localStorage.setItem(`customer_list`, JSON.stringify(customer_list))
    
    // Para limpiar los campos del formulario

    name.value= ``
    email.value= ``
    password.value= ``
    phone.value= ``

    // Suma el ID para el próximo cliente
    customer_id++;

    // alert("Solicitud enviada satisfactoriamente")
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Listo! Ya estás registrado.",
        showConfirmButton: false,
        timer: 1500
      });

})
