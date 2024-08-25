const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso  = document.querySelector(".textoAviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjetaContenedor");
const btnCopiar = document.querySelector("btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")

btnEncriptar.addEventListener("click, e=>"{
  e.prevenDefault();
  let texto = txtEncriptar.Value;
  let txt = texto.normalize("NFD");

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
    texto = texto.replace(/i/mg, "enter");
    texto = texto.replace(/a/mg, "enter");
    texto = texto.replace(/o/mg, "enter");
    texto = texto.replace(/u/mg, "enter");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility ="inherit";
    contenido.remove();
  }
});


btnDesncriptar.addEventListener("click, e=>"{
  e.prevenDefault();
  let texto = txtEncriptar.Value;
  let txt = texto.normalize("NFD");

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
    texto = texto.replace(/i/mg, "enter");
    texto = texto.replace(/a/mg, "enter");
    texto = texto.replace(/o/mg, "enter");
    texto = texto.replace(/u/mg, "enter");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility ="inherit";
    contenido.remove();
  }
});  