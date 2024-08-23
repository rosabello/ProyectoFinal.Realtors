// Recuperar los datos del localStorage
const agentsList = JSON.parse(localStorage.getItem('customer_list')) || [];
const tbody = document.getElementById('agents-list');
const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icons");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay"); 


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


// Insertar cada cliente en la tabla
agentsList.forEach(agent => {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = agent.name;

    const emailTd = document.createElement('td');
    emailTd.textContent = agent.email;

    const phoneTd = document.createElement('td');
    phoneTd.textContent = agent.phone;

    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(phoneTd);

    tbody.appendChild(tr);
});