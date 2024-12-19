function mudardepagina(){
    const nomeesperado = "Murielgamudu"
    const nomedigitado = document.getElementById("nome").value.trim();
    const radioo = document.getElementById("datacerta")
    if(nomedigitado === nomeesperado && document.getElementById("datacerta").checked){
        window.location.href = "http://127.0.0.1:5500/escrita.html";
    }else{
        alert("Tudo errado, não me ama mais? ou será que você é um impostor??????")
    }
}