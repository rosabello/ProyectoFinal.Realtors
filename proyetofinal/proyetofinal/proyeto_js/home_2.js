const cafecito = document.querySelector(".section-2__box-1");
const eventos = document.querySelector(".section-2__box-2");
const retiro = document.querySelector(".section-2__box-3");
const podcast = document.querySelector(".section-2__box-4");
const rigth = document.querySelector(".section-1__rigth");
const formContainer = document.querySelector(".div-form");


cafecito.onclick = () => {
    window.open('https://www.youtube.com/@C5Global/streams', '_blank');

}

retiro.onclick = () => {
    window.open('https://api.whatsapp.com/send/?phone=16824229511&text&type=phone_number&app_absent=0', '_blank');

}

podcast.onclick = () => {
    window.open('https://linktr.ee/AtrevermeYopodcast', '_blank');

}

function inserForm(){
    const form = `
    <div class="div-form">
                    <i class="fa-solid fa-xmark iconForm"></i>
                    <p class="section-4__form-p">Ingresa tus datos y nuestro equipo te mantendra informado sobre nuestros próximos eventos </p>
                    <form action=""                     class="section-4__form">
                        <label for="name" class="section-4__form-label section-4__form-label-fullname">Nombre</label>
            
                        <label for="lastname" class="section-4__form-label section-4__form-label-fullname">Apellido</label>
            
                        <input type="text" name="name" id="name" class="section-4__form-input section-4__form-input-fullname" placeholder="Ingresa tu nombre">
            
                        
                        <input type="text" name="lastname" id="lastname" class="section-4__form-input section-4__form-input-fullname" placeholder="Ingresa tu apellido">
            
                        <label for="email" class="section-4__form-label">Email</label>
                        <input type="text" name="email" id="email" class="section-4__form-input" placeholder="Ingresa tu email">
            
                        <label for="phone" class="section-4__form-label section-4__form-label-modify">Número de teléfono</label>
                        <input type="text" name="phone" id="phone" class="section-4__form-input section-4__form-input-modify" placeholder="Ingresa tu número de telefono">
            
                        <input type="submit" value="Enviar información" class="section-4__form-btn"> 
            
                    </form>
                </div>
    `;

    rigth.insertAdjacentHTML('beforeend', form);

}

eventos.addEventListener('click', function() {
    inserForm()
})