const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icons");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay"); 
const saludoCustomer = document.querySelector(".h3-saludo"); 
const logout = document.querySelector(".logout")

// aqui recupero la info  localStorage para la lista de registrados

const customer_list = JSON.parse(localStorage.getItem('customer_list')) || [];


// aqui recupero la info  localStorage para el usuario que inicia sesion y poder saludarlo

const current_user = JSON.parse(localStorage.getItem(`current_user`)) || [];

console.log(current_user)


saludoCustomer.textContent = `Hola ${current_user.name}!! :)`



menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
    });  
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("open"); 
});

// evento para cerrar sesion al darle a cerrar sesion
logout.onclick = () => {

    // eliminar lo datos del inicio de sesion para persona nueva

    localStorage.removeItem('current_user');

    // redirigir al login
    window.location.href = `../proyeto_html/login.html`


}



    
