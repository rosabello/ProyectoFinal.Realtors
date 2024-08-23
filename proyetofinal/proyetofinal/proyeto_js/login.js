const loginForm = document.querySelector(".login-form")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const btnLogin = document.querySelector(".btn-login")



const customer_list = JSON.parse(localStorage.getItem('customer_list')) || [];


loginForm.addEventListener(`submit`,function(event) {

    //se usa para evitar la pagina redireccione y poder ver los parametros que se establecen al darle click y me verifique primero si esta correcto o no
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    //para buscar si el usuario existe y la contraseña es correcta usamos un if else

   // Buscar si el usuario existe y la contraseña es correcta
   const user = customer_list.find(customer => {
    if (customer.email === emailValue) {
        if (customer.password === passwordValue) {
            return true;
        }
    }
    return false;
});

if (user) {
    
    // para guardar en el localStorage los datos de la persona que inicio sesion. en el 1ro se coloca la clave y en el segundo parametro el valor que le ponemos json.stringify para convertirlo de obj  a json y llamamos user para tener los datos

     localStorage.setItem(`current_user`, JSON.stringify(user));

    // Inicio de sesión verificado y me lleve a dashboard
    window.location.href = '../proyeto_html/dashboard.html';
} else {

    //  alert("correo o usuario incorrecto")
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo o contraseña incorrecto",
        footer: '<a href="#">¡Intentalo de nuevo!</a>'
    });       
    
}
});