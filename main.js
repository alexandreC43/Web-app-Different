// On récupère les élements HTML
const select1V = document.querySelector(".select1V");
const select2V = document.querySelector(".select2V");
const divButtonColor = document.getElementById("buttonColor");
const divButtonColorDeuxV = document.getElementById("buttonColorDeuxV");
const titreOuverture = document.getElementById("titreOuverture");
const modelesPrefal1V = document.getElementById("modelesPrefal1V")
const modelesPrefal2V = document.getElementById("modelesPrefal2V")
const modelesTechnal1V = document.getElementById("modelesTechnal1V")
const modelesTechnal2V = document.getElementById("modelesTechnal2V")
const FYM1V = document.querySelector(".FYM1V");
const FYM2V = document.querySelector(".FYM2V")
const RAL7016 = document.getElementById("RAL7016")
const RAL9016 = document.getElementById("RAL9016")


// Initialisation de l'application
afficherImage("modele1VFYM", "7016", "poignee1");
select1V.classList.add("active");
FYM1V.classList.add("active");
afficherElem ([modelesPrefal1V, modelesTechnal1V])
masquerElem ([modelesPrefal2V,modelesTechnal2V])
rendreActif (RAL7016)
// divButtonColor.style.display = "flex";
// divButtonColorDeuxV.style.display = "none";


function afficherImage(modele, coloris, poignee) {
  // Construire le chemin de l'image en fonction des choix
  const cheminImage = `images/modeles/${modele}/${coloris}/${poignee}.png`;

  // Sélectionner la balise img où afficher l'image
  const imgProduit = document.getElementById("imgProduit");

  // Mettre à jour l'attribut src de l'image avec le chemin construit
  imgProduit.src = cheminImage;
  imgProduit.alt = `Fenêtre - Modèle: ${modele}, Coloris: ${coloris}, Poignée: ${poignee}`;
}

function rendreActif (elem) {
  elem.classList.add("active")
}

function rendreInactif (elem) {
  elem.classList.remove("active")
}

function afficherElem (elem) {
  for (let elements of elem) {
  elements.style.display = "flex"
} }

function masquerElem (elem) {
  for (let elements of elem) {
  elements.style.display = "none"
} }



// Lorsque je clique sur les boutons :

select1V.addEventListener("click", function () {
  afficherImage("modele1VFYM", "7016", "poignee1");
  rendreActif(select1V)
  rendreInactif(select2V)
  afficherElem ([modelesPrefal1V, modelesTechnal1V])
  masquerElem ([modelesPrefal2V,modelesTechnal2V])
});

select2V.addEventListener("click", function () {
  afficherImage("modele2VFYM", "7016", "poignee1");
  rendreActif(select2V)
  rendreInactif(select1V)
  rendreActif(FYM2V)
  afficherElem ([modelesPrefal2V,modelesTechnal2V])
  masquerElem ([modelesPrefal1V, modelesTechnal1V])
  
});


RAL7016.addEventListener("click", function () {
  if (select1V.classList.contains("active") && FYM1V.classList.contains("active")) {
  afficherImage("modele1VFYM", "7016", "poignee1");
  } else if (select2V.classList.contains("active") && FYM1V.classList.contains("active")) {
  afficherImage("modele2VFYM", "7016", "poignee1");
  }
  rendreActif(RAL7016)
  rendreInactif(RAL9016)
});

RAL9016.addEventListener("click", function () {
  if (select1V.classList.contains("active") && FYM1V.classList.contains("active")) {
  afficherImage("modele1VFYM", "9016", "poignee1");
  } else if (select2V.classList.contains("active") && FYM1V.classList.contains("active")) {
  afficherImage("modele2VFYM", "9016", "poignee1");
  }
  rendreActif(RAL9016)
  rendreInactif(RAL7016)
});

// function afficherFinition (ouverture, modele) {
//   if (ouverture.classList === "active" && modele.classList === "active") {
//     afficherImage
//   }
// }

  

  
//   // Event listeners pour les boutons de modèle
//   boutonUnVantail.addEventListener("click", function() {
//     afficherImage(0);
//     boutonUnVantail.classList.add("active");
//     boutonDeuxVantaux.classList.remove("active");
//     divButtonColor.style.display = "block";
//     divButtonColorDeuxV.style.display = "none";
//     titreOuverture.textContent = "1 Vantail";
  
//     // Afficher/Masquer les divs de poignées selon le modèle
//     divBoutonsPoigneesUnV7016.style.display = "block";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "none";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   boutonDeuxVantaux.addEventListener("click", function() {
//     afficherImage(6);
//     boutonUnVantail.classList.remove("active");
//     boutonDeuxVantaux.classList.add("active");
//     divButtonColor.style.display = "none";
//     divButtonColorDeuxV.style.display = "block";
//     titreOuverture.textContent = "2 Vantaux";
  
//     // Afficher/Masquer les divs de poignées selon le modèle
//     divBoutonsPoigneesUnV7016.style.display = "none";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "block";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   function afficherImage(index) {
//     const imageAffichee = document.getElementById("img-produit");
//     const titreColoris = document.getElementById("titreColoris");
//     const RALSeptMilleSeize = document.getElementById("RALSeptMilleSeize");
//     const RALNeufMilleSeize = document.getElementById("RALNeufMilleSeize");
//     const Champ = document.getElementById("Champ");
//     const RALSeptMilleSeizeDeuxV = document.getElementById("RALSeptMilleSeizeDeuxV");
//     const RALNeufMilleSeizeDeuxV = document.getElementById("RALNeufMilleSeizeDeuxV");
//     const ChampDeuxV = document.getElementById("ChampDeuxV");
  
//     if (index >= 0 && index < Rendu3D.length) {
//       imageAffichee.src = Rendu3D[index];
//       imageAffichee.alt = "Image" + (index + 1);
  
//       switch (index) {
//         case 0:
//         case 6:
//           titreColoris.textContent = "RAL 7016";
//           RALSeptMilleSeize.classList.add("active");
//           RALSeptMilleSeizeDeuxV.classList.add("active");
//           RALNeufMilleSeize.classList.remove("active");
//           RALNeufMilleSeizeDeuxV.classList.remove("active");
//           Champ.classList.remove("active");
//           ChampDeuxV.classList.remove("active");
//           break;
//         case 2:
//         case 8:
//           titreColoris.textContent = "RAL 9016";
//           RALSeptMilleSeize.classList.remove("active");
//           RALSeptMilleSeizeDeuxV.classList.remove("active");
//           RALNeufMilleSeize.classList.add("active");
//           RALNeufMilleSeizeDeuxV.classList.add("active");
//           Champ.classList.remove("active");
//           ChampDeuxV.classList.remove("active");
//           break;
//         case 4:
//         case 10:
//           titreColoris.textContent = "Champagne";
//           RALSeptMilleSeize.classList.remove("active");
//           RALSeptMilleSeizeDeuxV.classList.remove("active");
//           RALNeufMilleSeize.classList.remove("active");
//           RALNeufMilleSeizeDeuxV.classList.remove("active");
//           Champ.classList.add("active");
//           ChampDeuxV.classList.add("active");
//           break;
//         default:
//           titreColoris.textContent = "";
//       }
//     }
//   }
  
//   const boutonRALSeptMilleSeize = document.getElementById("RALSeptMilleSeize");
//   const boutonRALNeufMilleSeize = document.getElementById("RALNeufMilleSeize");
//   const boutonChamp = document.getElementById("Champ");
//   const boutonRALSeptMilleSeizeDeuxV = document.getElementById("RALSeptMilleSeizeDeuxV");
//   const boutonRALNeufMilleSeizeDeuxV = document.getElementById("RALNeufMilleSeizeDeuxV");
//   const boutonChampDeuxV = document.getElementById("ChampDeuxV");
  
//   // Event listeners pour les boutons de choix de coloris
//   boutonRALSeptMilleSeize.addEventListener("click", function() {
//     divBoutonsPoigneesUnV7016.style.display = "block";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "none";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   boutonRALNeufMilleSeize.addEventListener("click", function() {
//     divBoutonsPoigneesUnV7016.style.display = "none";
//     divBoutonsPoigneesUnV9016.style.display = "block";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "none";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   boutonChamp.addEventListener("click", function() {
//     divBoutonsPoigneesUnV7016.style.display = "none";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "block";
//     divBoutonsPoigneesDeuxV7016.style.display = "none";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   boutonRALSeptMilleSeizeDeuxV.addEventListener("click", function() {
//     divBoutonsPoigneesUnV7016.style.display = "none";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "block";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   boutonRALNeufMilleSeizeDeuxV.addEventListener("click", function() {
//     divBoutonsPoigneesUnV7016.style.display = "none";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "none";
//     divBoutonsPoigneesDeuxV9016.style.display = "block";
//     divBoutonsPoigneesDeuxVChamp.style.display = "none";
//   });
  
//   boutonChampDeuxV.addEventListener("click", function() {
//     divBoutonsPoigneesUnV7016.style.display = "none";
//     divBoutonsPoigneesUnV9016.style.display = "none";
//     divBoutonsPoigneesUnVChamp.style.display = "none";
//     divBoutonsPoigneesDeuxV7016.style.display = "none";
//     divBoutonsPoigneesDeuxV9016.style.display = "none";
//     divBoutonsPoigneesDeuxVChamp.style.display = "block";
//   });