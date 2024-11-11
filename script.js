function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
      msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >= 0 && hora < 12){
        //msg.innerHTML = `bom dia`
        img.src = "manha.jpg"
    }else if ( hora >= 12 && hora < 18){
       // msg.innerHTML = `boa tade`
        img.src="tarde.jpg"
    }else{
        //msg.innerHTML = `boa noite`
        img.src="noite.jpg" 
    }
     

}
