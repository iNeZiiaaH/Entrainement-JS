let zone1 = document.querySelector("#zone1");
let zone2 = document.querySelector("#zone2");

let elements = [
    {image: "/img/animal1.jpg", nom:"Animal1", categorie: "Animaux", prix:"200"},
    {image: "/img/animal2.jpg", nom:"Animal2", categorie: "Animaux", prix:"200"},
    {image: "/img/animal3.jpg", nom:"Animal3", categorie: "Animaux", prix:"200"},
    {image: "/img/animal4.jpg", nom:"Animal4", categorie: "Animaux", prix:"200"},
    {image: "/img/paysage1.jpg", nom:"Paysage1", categorie: "Paysages", prix:"100"},
    {image: "/img/paysage2.jpg", nom:"Paysage2", categorie: "Paysages", prix:"100"},
    {image: "/img/paysage3.jpg", nom:"Paysage3", categorie: "Paysages", prix:"100"},
    {image: "/img/paysage4.jpg", nom:"Paysage4", categorie: "Paysages", prix:"100"},
    {image: "/img/personne1.jpg", nom:"Personnes1", categorie: "Personnes", prix:"300"},
    {image: "/img/personne2.jpg", nom:"Personne2", categorie: "Personnes", prix:"300"},
    {image: "/img/personne3.jpg", nom:"Personne3", categorie: "Personnes", prix:"300"},
    {image: "/img/personne4.jpg", nom:"Personne4", categorie: "Personnes", prix:"300"},
];

majInterface("");

function majInterface(typeDemande){
    zone2.innerHTML="";
    
    if(typeDemande=="") {
        var configElementsFiltres=elements;
    }else{
        var configElementsFiltres = elements.filter(function(configElement,i){
            console.log(configElement.categorie);
            console.log(typeDemande);
            return configElement.categorie==typeDemande;
        });
    }
    console.table(configElementsFiltres);



    configElementsFiltres.forEach(function(laconfig,i){
        Afficher(laconfig,i);
    });

}

function Afficher(configElement,i){

    let vignette = document.createElement('img');
    vignette.className = "vignette "+ configElement.categorie; 
    vignette.setAttribute("src",configElement.image);
    let titre = document.createElement('figcaption');
    titre.innerHTML = configElement.nom;
    let fig = document.createElement('figure');
    vignette.id = "p" + i

    fig.onmouseover = function(e){
        fig.style.boxShadow = '0px 0px 10px black';
        fig.style.transform = 'scale(1.1)';
    };
    fig.onmouseleave = function(e){
        fig.style.boxShadow = 'none';
        fig.style.transform = 'scale(1)';
        affiche.classList.remove('affiche');
    };
    
    vignette.addEventListener('click', (event)=> changeImg(event))
    
    zone2.appendChild(fig);
    fig.appendChild(vignette);
    fig.appendChild(titre);
};

function changeImg(event){
    document.getElementById('zone1').style.background = `url('${event.target.src}')`;
    document.querySelector("#nom").innerHTML = elements[event.target.id.substr(1,1)].nom;
    document.querySelector("#categorie").innerHTML = elements[event.target.id.substr(1,1)].categorie;
    document.querySelector("#prix").innerHTML = elements[event.target.id.substr(1,1)].prix;
}

