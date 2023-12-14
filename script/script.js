
// Array des données sur les séries
let seriesData = [
    {
        photo: "assets/images/vikings.jpg",
        title: "Vikings",
        creator: "Michael Hirst",
        genre: "Série historique guerre",
        date: 2013,
        summary: "Ragnar Lothbrok et son frère Rollo participent à une bataille contre les peuples baltes.Après le massacre, Ragnar a des visions du dieu Odin et ses Valkyries.",
        trailer: "https://www.youtube.com/watch?v=mAl60ykBm4A",
    },
    {
        photo: "assets/images/virgin-river.webp",
        title: "Virgin River",
        creator: "Ian Hay",
        genre: "Série romantique",
        date: "2019",
        summary: "Melinda « Mel » Monroe, infirmière en deuil, répond à une annonce pour travailler dans la ville reculée de Virgin River en Californie. Elle a tout abandonné à Los Angeles en pensant que ce serait l'endroit idéal pour repartir à zéro et laisser ses souvenirs douloureux derrière elle.",
        trailer: "https://www.youtube.com/watch?v=LnFHNsx3OkY",
    },

    {
        photo: "assets/images/good-witch.jpg",
        title: "Good Witch",
        creator: "Sue Tenney",
        genre: "Serie Comédie",
        date: 2015,
        summary: "Jake Russel élève seul ses enfants Brandon et Laurie depuis son veuvage. Un jour, la femme du maire l'informe de l'arrivée de Cassandra à Grey House, un château abandonné et réputé hanté. Aussitôt, les commérages vont bon train sur la belle et mystérieuse étrangère",
        trailer: "https://www.youtube.com/watch?v=OLnxYaEYci8",
    },
    {
        photo: "assets/images/dark.jpg",
        title: "Dark",
        creator: "Baran bo Odar",
        genre: "Science-fiction",
        date: 2015,
        summary: "En 2019, le policier Ulrich Nielsen cherche désespérément son fils disparu, Mikkel, âgé de 11 ans. Trente-trois ans plus tôt, en 1986, c'est son frère cadet Mads qui avait disparu dans des circonstances tout aussi mystérieuses. ",
        trailer: "https://www.youtube.com/watch?v=VsLr5w_hM9c",
    },
    {
        photo: "assets/images/behind.jpeg",
        title: "Behind her eyes",
        creator: "Steve Lightfoot",
        genre: "Thriller",
        date: 2021,
        summary: "Louise est une jeune femme divorcée et mère d'un petit garçon, Adam. Un soir alors qu'une amie lui fait faux bond à un bar, elle rencontre un homme séduisant.",
        trailer: "https://www.youtube.com/watch?v=c4LtoWQaLxk",
    },
    {
        photo: "assets/images/breaking.webp",
        title: "Breaking Bad",
        creator: "Vince Gilligan",
        genre: "Policier-Thriller",
        date: 2013,
        summary: "Walter « Walt » White est professeur de chimie dans une école secondaire. Il vit à Albuquerque, au Nouveau-Mexique, avec son fils handicapé moteur et son épouse enceinte. Le lendemain de son cinquantième anniversaire,",
        trailer:"https://www.youtube.com/watch?v=dlnKTmdqxn4",
    },
    {
        photo: "assets/images/you.jpg",
        title: "You",
        creator: "Greg Berlanti",
        genre: "Thriller psychologique",
        date: "2018",
        summary: "Joe Goldberg, gérant d'une modeste librairie à New York. Un jour, il fait la rencontre d'une cliente, Guinevere Beck. La jeune femme est un véritable coup de foudre pour Joe qui décide de la retrouver sur Internet.",
        trailer: "https://www.youtube.com/watch?v=sDOWgRpgc3w",
    },

    {
        photo: "assets/images/casa.jpg",
        title: "La casa de papel",
        creator: "Alex Pina",
        genre: "Thriller-Braquage",
        date: 2017,
        summary: "Un homme mystérieux, surnommé le Professeur, planifie le meilleur braquage jamais réalisé. Pour exécuter son plan, il recrute huit des meilleurs malfaiteurs en Espagne qui n'ont rien à perdre",
        trailer:"https://www.youtube.com/watch?v=rLKo9TCxv5Q",
    },

    {
        photo: "assets/images/emily.jpg",
        title: "Emily in Paris",
        creator: "Darren Star",
        genre: "Comédie",
        date: 2020,
        summary: " Emily Jane Cooper, une Américaine originaire de Chicago, accepte de déménager en France, et plus précisément à Paris, pour saisir une opportunité professionnelle. ",
        trailer: "https://www.youtube.com/watch?v=oSkDB9xhFqU",
    },

    {
        photo: "assets/images/outlander.webp",
        title: "Outlander",
        creator: "Ronald D. Moore",
        genre: "Drame-Fantasy",
        date: 2014,
        summary: "En 1945, une infirmière de guerre, Claire Randall, mariée à un descendant de capitaine des Dragons, Frank Randall, se retrouve transportée dans l'Écosse révoltée de 1743. Là-bas, elle va être immédiatement confrontée à un monde d'aventures qui lui est inconnu.",
        trailer:"https://www.youtube.com/watch?v=0yzY6Rm-Fwg",
    }
];

let header = document.querySelector('header');
let flexContainer = document.createElement("div");
flexContainer.className = "flex-container";
header.append(flexContainer);


let h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Hanen's favorite Series: here you can find my collection of series! ";
flexContainer.appendChild(h1);

let imgMoi = document.createElement("img");
imgMoi.className = "ma_photo";
imgMoi.src ="assets/images/photo de moi github.jpg";
imgMoi.alt = `photo de moi`;
flexContainer.append(imgMoi);

// Sélectionner le body du document
const body = document.body;
const container = document.querySelector(".Collection");

// Créer une section pour chaque série
seriesData.forEach((serie) => {
  

    // Créer la div card
    const card = document.createElement("div");
    card.className = "First_card";

    // Créer l'image
    let img = document.createElement("img");
    img.className = "card_photo";
    img.src = serie.photo;
    img.alt = `photo de ${serie.title}`;

    // Créer le titre
    const title = document.createElement("h2");
    title.className = "card_title";
    title.textContent = serie.title;

   

    // Créer le créateur
    const creator = document.createElement("p");
    creator.className = "creator";
    creator.textContent = serie.creator;

    // Créer le genre
    const genre = document.createElement("p");
    genre.className = "genre";
    genre.textContent = serie.genre;

    // Créer la date
    const date = document.createElement("p");
    date.className = "Date";
    date.textContent = serie.date;

    // Créer le résumé
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = serie.summary;
   
    // Anchor
    let a = document.createElement('a');
    a.className = 'trailer';
    a.textContent = 'Bande annonce';
    a.href = serie.trailer;

    // Ajouter les éléments à la div card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(creator);
    card.appendChild(genre);
    card.appendChild(date);
    card.appendChild(summary);
    card.appendChild(a);
    container.appendChild(card);

});

