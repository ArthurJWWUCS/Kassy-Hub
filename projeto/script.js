function enviar(){
    a = document.getElementById("nome").value
    if(a == "Kassy") {
        document.write("<audio controls><source src='Gravando-VEED.mp3' type='audio/ogg'></audio><link rel='stylesheet' href='style.css'>Gente, queremos fazer uma homenagem a menina mais linda do cetec.<br>Uma menina conhecida como Kassy.<br>Uma menina onde a energia dela emana positividade, alegria, e, dependendo do caso, até AMOR <3<br>por isso, fizemos uma seleção de fotos para homenagear essa garota fofa, chamada Kassy<br><img src='Kassy.png' alt=''><br>    <img src='Captura de tela 2025-04-24 154357.png' alt=''><br><img src='biscoito.jpg' alt=''><br><img src='Captura de tela 2025-04-24 154411.png' alt=''><br><img src='thais.webp' alt=''><br><img src='Captura de tela 2025-04-24 154501.png' alt=''><br><img src='Captura de tela 2025-04-24 154525.png' alt=''><br>Essa foi a homenagem. I HATE NIGGA")
    }
    else if (a == "Mattana") {
        document.write("<img src='mamata.png' alt=''>")
    }
    else if (a == "Ludson") {
        document.write("<img src='lulu.png' alt=''>")
    }
    else if (a == "Dany" || a == "Danny") {
        document.write("<img src='dany.png' alt=''>")
    }
    else if (a=="Toyota") {
        
    }
    else if (a=="Fran" ||a=="Francisco") {
        document.write("<img src='sigmaboy.jpg'>")
    }
    else {
        document.write("o nome do seu melhor amigo é " + a)
    }
    
}
