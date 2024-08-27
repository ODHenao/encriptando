const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso  = document.querySelector(".textoAviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjetaContenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")

btnEncriptar.addEventListener("click", e=>{
  e.preventDefault();
  let texto = txtEncriptar.Value;
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");


  if(texto == "");{
    aviso.style.background = "#0A3871";
    aviso.style.color = #FFFFFF;
    aviso.style.fontWeight = "800";
    aviso.textContent = "El campo de texto no debe de estar vacío";

    setTimeout(()=>{
      aviso.removeAttribute("style");

    },1500);
  }
  else if(texto !== txt){
    aviso.style.background = "#0A3871";
    aviso.style.color = #FFFFFF;
    aviso.style.fontWeight = "800";
    aviso.textContent = "No debe contener acentos ni caracteres especiales";

    setTimeout(()=>{
      aviso.removeAttribute("style");

    },1500);
  }
    else if(texto !== texto.tolowerCase()){
    aviso.style.background = "#0A3871";
    aviso.style.color = #FFFFFF;
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto deber todo en minúsula";

    setTimeout(()=>{
      aviso.removeAttribute("style");

    },1500);

  }
  else{
    texto = texto.replace(/e/mg, "enter");
    texto = texto.replace(/i/mg, "imes");
    texto = texto.replace(/a/mg, "ai");
    texto = texto.replace(/o/mg, "ober");
    texto = texto.replace(/u/mg, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility ="inherit";
    contenido.remove();
  }
});


btnDesencriptar.addEventListener("click", e=>{
  e.prevenDefault();
  let texto = txtEncriptar.Value;
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");;

  if(texto == "");{
    aviso.style.background = "#0A3871";
    aviso.style.color = #FFFFFF;
    aviso.style.fontWeight = "800";
    aviso.textContent = "El campo de texto no debe de estar vacío";

    setTimeout(()=>{
      aviso.removeAttribute("style");

    },1500);
  }
  else if(texto !== txt){
    aviso.style.background = "#0A3871";
    aviso.style.color = #FFFFFF;
    aviso.style.fontWeight = "800";
    aviso.textContent = "No debe contener acentos ni caracteres especiales";

    setTimeout(()=>{
      aviso.removeAttribute("style");

    },1500);
  }
  else if(texto !== texto.tolowerCase()){
    aviso.style.background = "#0A3871";
    aviso.style.color = #FFFFFF;
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto deber todo en minúsula";

    setTimeout(()=>{
      aviso.removeAttribute("style");

    },1500);

  }
  else{
    texto = texto.replace(/enter/mg, "e");
    texto = texto.replace(/imes/mg, "imes");
    texto = texto.replace(/ai/mg, "a");
    texto = texto.replace(/ober/mg, "o");
    texto = texto.replace(/ufat/mg, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility ="inherit";
    contenido.remove();
  }
});