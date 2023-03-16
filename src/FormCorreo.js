import "./FormCorreo.css";

export function FormCorreo() {

    return (
        <>
            <h1 class="titulo">Disfruta donde quieras. Cancela cuando quieras.</h1>
            <h3 class="titulo">¿Quieres ver algo ya? Escribe tu dirección<br />de correo para crear una suscripción a <br />Netflix o reactivarla.</h3>
            <form novalidate="novalidate" onSubmit={checkForm} name="formulario1">
                <input onBlur={checkMail} onChange={removeAlert} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="form-control input" placeholder="Dirección de correo" />
                <br /><span class="span"> </span>
                <br /><br />
                <button class="submit">Empezar ></button>
            </form>
        </>
    );

    function removeAlert(evt) {

        let email = evt.target;

        email.nextElementSibling.nextElementSibling.innerText = "";

    }

    function checkForm(evt) {
        let form = document.forms["formulario1"];
        // console.log(!form.checkValidity());
        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    }

    function checkMail(evt) {

        let mail = evt.target;

        mail.setCustomValidity("");
        console.log(mail.validity.valueMissing);
        console.log(mail.validity.patternMismatch);

        if (!mail.checkValidity()) {

            if (mail.validity.valueMissing) {
                mail.nextElementSibling.nextElementSibling.innerText = "La dirección de correo obligatoria"
            }

            if (mail.validity.patternMismatch) {
                mail.nextElementSibling.nextElementSibling.innerText = "La dirección no es válida"
            }

        }

    }
}

export function CrearContraseña() {

    return (

        <>
            <p>PASO 1 DE 3</p>
            <h1>Crea una contraseña para<br /> empezar la suscripción.</h1>
            <p>¡Faltan solo algunos pasos!</p>
            <p>También odiamos el papeleo</p>

            <form novalidate="novalidate" onSubmit={checkFormulario} name="formularioPaso1">
                <input class="input form-control" id="email" minLength="5" maxLength="50" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Dirección de correo" />
                <br /><span > </span>
                <br /><br />
                <input type="password" id="password" class="input form-control" minLength="6" maxLength="60" required placeholder="Añadir una contraseña" />
                <br /><span > </span>
                <br /><br />
                <input type="checkbox" id="cbox" />
                <label for="cbox">No, no quiero ofertas especiales de Netflix por correo.</label>
                <br /><br />
                <button class="submit">Siguiente</button>
            </form>

        </>

    )

    function checkFormulario(evt) {
        let form = document.forms["formularioPaso1"];
        console.log(!form.checkValidity());

        checkMail();
        checkPassword();

        if (!form.checkValidity()) {
            evt.preventDefault();
        }

    }

    function checkMail() {

        let mail = document.getElementById("email");

        mail.nextElementSibling.nextElementSibling.innerText = "";

        if (!mail.checkValidity()) {

            if (mail.validity.valueMissing) {
                mail.nextElementSibling.nextElementSibling.innerText = "La dirección de correo obligatoria"
            }

            if (mail.validity.patternMismatch) {
                mail.nextElementSibling.nextElementSibling.innerText = "La dirección no es válida"
            }

            if (mail.validity.tooLong || mail.validity.tooShort) {
                mail.nextElementSibling.nextElementSibling.innerText = "La dirección de correo debe tener de 5 a 50 caracteres"
            }
        }
    }

    function checkPassword() {

        let password = document.getElementById("password");

        password.nextElementSibling.nextElementSibling.innerText = "";

        if (!password.checkValidity()) {

            if (password.validity.valueMissing) {
                password.nextElementSibling.nextElementSibling.innerText = "La contraseña es obligatoria"
            }

            if (password.validity.tooLong || password.validity.tooShort) {
                password.nextElementSibling.nextElementSibling.innerText = "La contraseña debe tener de 6 a 60 caracteres"
            }
        }
    }

}


export function SeleccionarPlan() {

    return (

        <>
            <p>PASO 2 DE 3</p>
            <h1>Selecciona el plan ideal para ti</h1>


            <p>✔ Ve todo lo que quieras.</p>
            <p>✔ Recomendaciones exclusivas para ti.</p>
            <p>✔ Cambia de plan o cancelalo cuando quieras.</p>
            <form>
                <table class="table" style={{ width: "70%", margin: "auto" }}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Básico con anuncios</th>
                            <th scope="col">Estándar</th>
                            <th scope="col">Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Precio al mes</th>
                            <td>5,49€</td>
                            <td>12,99€</td>
                            <td>17,99€</td>
                        </tr>
                        <tr>
                            <th scope="row">Calidad de video</th>
                            <td>Buena</td>
                            <td>Muy buena</td>
                            <td>Excepcional</td>
                        </tr>
                        <tr>
                            <th scope="row">Resolución</th>
                            <td>720p</td>
                            <td>1080p</td>
                            <td>4K+HDR</td>
                        </tr>
                        <tr>
                            <th scope="row">Multidispositivo: TV, ordenador, teléfono móvil y tableta</th>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <th scope="row">Descargas</th>
                            <td>-</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> <input type="radio" name="plan" value="basico" required />
                                <label for="age1"></label></td>
                            <td><input type="radio" name="plan" value="estandar" required />
                                <label for="age2"></label>  </td>
                            <td><input type="radio" name="plan" value="premium" required />
                                <label for="age3"></label></td>

                        </tr>
                    </tbody>
                </table>

                <button class="submit">Siguiente</button>
            </form>
        </>

    )

}