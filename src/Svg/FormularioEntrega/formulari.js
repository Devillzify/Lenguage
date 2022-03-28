function validar()
{
    let name = validar_name();
    let email = validar_email();
    let apodo = validar_apodo();
    let topics = validar_topics();
    let duration = validar_duration();

    return name && email && apodo && topics && duration;
}

function validar_name()
{
    let pattern = /^[A-ZÑ][a-zñ]+( [A-ZÑ](\.|[a-zñ]+))?( [A-ZÑ][a-zñ]+){1,2}$/;
    let thing = document.querySelector('#name');
    let message = document.querySelector('label[for="name"] span');

    if (thing.value.length !== 0)
    {
        if (pattern.test(thing.value))
        {
            message.innerHTML = "";
            return true;
        }
        else
        {
            message.innerHTML = "Incorrect";
            message.style.color = "purple";
            return false;
        }
    }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}

function validar_email()
{
    let pattern = /^[a-z]{3,}(([.][a-z]{3,})*|([_][a-z]{3,})*)?@[a-z]{3,}[.][a-z]{2,4}$/;
    let thing = document.querySelector('#email');
    let message = document.querySelector('label[for="email"] span');

    if (thing.value.length !== 0)
    {
        if (pattern.test(thing.value))
        {
            message.innerHTML = "";
            return true;
        }
        else
        {
            message.innerHTML = "Incorrect";
            message.style.color = "purple";
            return false;
        }
    }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}

function validar_apodo()
{
    let pattern = /^[A-Z][a-z1-9]{4,10}$/;
    let thing = document.querySelector('#apodo');
    let message = document.querySelector('label[for="apodo"] span');

    if (thing.value.length !== 0)
    {
        if (pattern.test(thing.value))
        {
            message.innerHTML = "";
            return true;
        }
        else
        {
            message.innerHTML = "Incorrect";
            message.style.color = "purple";
            return false;
        }
    }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}


function validar_topics()
{
    let thing = document.querySelectorAll('input[name="topics"]');
    let message = document.querySelector('#topics span');

    let counter = 0;
    for (let i = 0; i < thing.length; i++)
        if (thing[i].checked)
            counter++;

    if (counter < 2)
    {
        message.innerHTML = "Choose at least two";
        message.style.color = "red";
        return false;
    }
    message.innerHTML = "";
    return true;
}

function validar_duration()
{
    let thing = document.querySelectorAll('input[name="duration"]');
    let message = document.querySelector('#duration span');

    for (let i = 0; i < thing.length; i++)
        if (thing[i].checked)
        {
            message.innerHTML = "";
            return true;
        }
    message.innerHTML = "Mandatory";
    message.style.color = "red";
    return false;
}

function myFunction(val) {
    document.getElementById("imagenes").style.backgroundImage= "url(img/"+ val + ".png)";
    var voces = document.getElementById("voces");
    voces.src= "audio/" + val + ".mp3";
    voces.load();
    voces.play();
}

