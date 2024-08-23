const name = document.querySelector("#name")
const lastName = document.querySelector("#lastname")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const btnSend = document.querySelector(".section-4__form-btn")
const form = document.querySelector(".section-4__form");


let lead_list = JSON.parse(localStorage.getItem('lead_list')) || [];
let lead_id = 0

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const lead = {
        lead_id: lead_id,
        name: name.value,
        apellido: lastName.value,
        email: email.value,
        phone: phone.value
    };

    lead_list.push(lead);

    // Guarda la lista actualizada en el localStorage
    localStorage.setItem('lead_list', JSON.stringify(lead_list));

    // Para limpiar los campos del formulario
    name.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";

    // Suma el ID para el próximo 
    lead_id++;

    alert("Solicitud enviada satisfactoriamente");
  
});
