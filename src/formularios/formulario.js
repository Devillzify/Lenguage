function validar()
{
    let ok_name = validar_name();
    let ok_email = validar_email();

    return ok_name && ok_email;
}

function validar_name()
{
    let patron = /^[A-Z][a-z]+( [A-Z](\.|[a-z]+))?( [A-Z][a-z]+){1,2}$/;
    let elemento = document.querySelector("#name");
    let mensaje = document.querySelector("label[for='name'] span");

    if (elemento.value.length != 0)
    {
        if (patron.test(elemento.value))
        {
            mensaje.innerHTML = "";
            return true;
        }
        else
        {
            mensaje.innerHTML = "Incorrecto";
            return false;
        }
    }
    mensaje.innerHTML = "Obligatorio";
    return false;
}

function validar_email()
{
    let patron = /^[a-z]{3,}((_[a-z]{3,})*|(.[a-z]{3,})*)?@[a-z]{3,}[.][a-z]{2,4}$/;
    let elemento = document.querySelector("#email");
    let mensaje = document.querySelector("label[for='email'] span")

    if (elemento.value.length != 0)
    {
        if (patron.test(elemento.value))
        {
            mensaje.innerHTML = "";
            return true;
        }
        else
        {
            mensaje.innerHTML = "Incorrecto";
            return false;
        }
    }
    mensaje.innerHTML = "Obligatorio";
    return false;
}