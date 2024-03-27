const Rendu3D = [
    "Images/1V 7016 P1.png",
    "Images/1V 7016 P2.png",
    "Images/1V 9016 P1.png",
    "Images/1V 9016 P2.png",
    "Images/1V champ P1.png",
    "Images/1V champ P2.png",
    "Images/2V 7016 P1.png",
    "Images/2V 7016 P2.png",
    "Images/2V 9016 P1.png",
    "Images/2V 9016 P2.png",
    "Images/2V champ P1.png",
    "Images/2V champ P2.png"
  ];
  
  const boutonUnVantail = document.querySelector(".unVantail");
  const boutonDeuxVantaux = document.querySelector(".deuxVantaux");
  const divButtonColor = document.getElementById("button-color");
  const divButtonColorDeuxV = document.getElementById("button-color-deuxV");
  const titreModele = document.getElementById("titreModele");
  
  // Initialisation de l'application
  afficherImage(0);
  boutonUnVantail.classList.add("active");
  divButtonColor.style.display = "block";
  divButtonColorDeuxV.style.display = "none";
  
  // Ajout de la ligne suivante pour cibler la div que vous voulez afficher
  const divBoutonsPoigneesUnV7016 = document.getElementById("boutonsPoigneesUnV7016");
  const divBoutonsPoigneesUnV9016 = document.getElementById("boutonsPoigneesUnV9016");
  const divBoutonsPoigneesUnVChamp = document.getElementById("boutonsPoigneesUnVChamp");
  const divBoutonsPoigneesDeuxV7016 = document.getElementById("boutonsPoigneesDeuxV7016");
  const divBoutonsPoigneesDeuxV9016 = document.getElementById("boutonsPoigneesDeuxV9016");
  const divBoutonsPoigneesDeuxVChamp = document.getElementById("boutonsPoigneesDeuxVChamp");
  
  // Masquer toutes les divs sauf boutonsPoigneesUnV7016
  divBoutonsPoigneesUnV7016.style.display = "block";
  divBoutonsPoigneesUnV9016.style.display = "none";
  divBoutonsPoigneesUnVChamp.style.display = "none";
  divBoutonsPoigneesDeuxV7016.style.display = "none";
  divBoutonsPoigneesDeuxV9016.style.display = "none";
  divBoutonsPoigneesDeuxVChamp.style.display = "none";
  
  // Event listeners pour les boutons de modèle
  boutonUnVantail.addEventListener("click", function() {
    afficherImage(0);
    boutonUnVantail.classList.add("active");
    boutonDeuxVantaux.classList.remove("active");
    divButtonColor.style.display = "block";
    divButtonColorDeuxV.style.display = "none";
    titreModele.textContent = "1 Vantail";
  
    // Afficher/Masquer les divs de poignées selon le modèle
    divBoutonsPoigneesUnV7016.style.display = "block";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "none";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  boutonDeuxVantaux.addEventListener("click", function() {
    afficherImage(6);
    boutonUnVantail.classList.remove("active");
    boutonDeuxVantaux.classList.add("active");
    divButtonColor.style.display = "none";
    divButtonColorDeuxV.style.display = "block";
    titreModele.textContent = "2 Vantaux";
  
    // Afficher/Masquer les divs de poignées selon le modèle
    divBoutonsPoigneesUnV7016.style.display = "none";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "block";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  function afficherImage(index) {
    const imageAffichee = document.getElementById("img-produit");
    const titreColoris = document.getElementById("titreColoris");
    const RALSeptMilleSeize = document.getElementById("RALSeptMilleSeize");
    const RALNeufMilleSeize = document.getElementById("RALNeufMilleSeize");
    const Champ = document.getElementById("Champ");
    const RALSeptMilleSeizeDeuxV = document.getElementById("RALSeptMilleSeizeDeuxV");
    const RALNeufMilleSeizeDeuxV = document.getElementById("RALNeufMilleSeizeDeuxV");
    const ChampDeuxV = document.getElementById("ChampDeuxV");
  
    if (index >= 0 && index < Rendu3D.length) {
      imageAffichee.src = Rendu3D[index];
      imageAffichee.alt = "Image" + (index + 1);
  
      switch (index) {
        case 0:
        case 6:
          titreColoris.textContent = "RAL 7016";
          RALSeptMilleSeize.classList.add("active");
          RALSeptMilleSeizeDeuxV.classList.add("active");
          RALNeufMilleSeize.classList.remove("active");
          RALNeufMilleSeizeDeuxV.classList.remove("active");
          Champ.classList.remove("active");
          ChampDeuxV.classList.remove("active");
          break;
        case 2:
        case 8:
          titreColoris.textContent = "RAL 9016";
          RALSeptMilleSeize.classList.remove("active");
          RALSeptMilleSeizeDeuxV.classList.remove("active");
          RALNeufMilleSeize.classList.add("active");
          RALNeufMilleSeizeDeuxV.classList.add("active");
          Champ.classList.remove("active");
          ChampDeuxV.classList.remove("active");
          break;
        case 4:
        case 10:
          titreColoris.textContent = "Champagne";
          RALSeptMilleSeize.classList.remove("active");
          RALSeptMilleSeizeDeuxV.classList.remove("active");
          RALNeufMilleSeize.classList.remove("active");
          RALNeufMilleSeizeDeuxV.classList.remove("active");
          Champ.classList.add("active");
          ChampDeuxV.classList.add("active");
          break;
        default:
          titreColoris.textContent = "";
      }
    }
  }
  
  const boutonRALSeptMilleSeize = document.getElementById("RALSeptMilleSeize");
  const boutonRALNeufMilleSeize = document.getElementById("RALNeufMilleSeize");
  const boutonChamp = document.getElementById("Champ");
  const boutonRALSeptMilleSeizeDeuxV = document.getElementById("RALSeptMilleSeizeDeuxV");
  const boutonRALNeufMilleSeizeDeuxV = document.getElementById("RALNeufMilleSeizeDeuxV");
  const boutonChampDeuxV = document.getElementById("ChampDeuxV");
  
  // Event listeners pour les boutons de choix de coloris
  boutonRALSeptMilleSeize.addEventListener("click", function() {
    divBoutonsPoigneesUnV7016.style.display = "block";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "none";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  boutonRALNeufMilleSeize.addEventListener("click", function() {
    divBoutonsPoigneesUnV7016.style.display = "none";
    divBoutonsPoigneesUnV9016.style.display = "block";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "none";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  boutonChamp.addEventListener("click", function() {
    divBoutonsPoigneesUnV7016.style.display = "none";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "block";
    divBoutonsPoigneesDeuxV7016.style.display = "none";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  boutonRALSeptMilleSeizeDeuxV.addEventListener("click", function() {
    divBoutonsPoigneesUnV7016.style.display = "none";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "block";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  boutonRALNeufMilleSeizeDeuxV.addEventListener("click", function() {
    divBoutonsPoigneesUnV7016.style.display = "none";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "none";
    divBoutonsPoigneesDeuxV9016.style.display = "block";
    divBoutonsPoigneesDeuxVChamp.style.display = "none";
  });
  
  boutonChampDeuxV.addEventListener("click", function() {
    divBoutonsPoigneesUnV7016.style.display = "none";
    divBoutonsPoigneesUnV9016.style.display = "none";
    divBoutonsPoigneesUnVChamp.style.display = "none";
    divBoutonsPoigneesDeuxV7016.style.display = "none";
    divBoutonsPoigneesDeuxV9016.style.display = "none";
    divBoutonsPoigneesDeuxVChamp.style.display = "block";
  });