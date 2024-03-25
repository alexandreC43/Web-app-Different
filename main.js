const Rendu3D = ["Images/1V 7016 P1.png","Images/1V 7016 P2.png", "Images/1V 9016 P1.png", "Images/1V 9016 P2.png", "Images/1V champ P1.png", "Images/1V champ P2.png", "Images/2V 7016 P1.png", "Images/2V 7016 P2.png","Images/2V 9016 P1.png","Images/2V 9016 P1.png","Images/2V champ P1.png","Images/2V champ P2.png"];



function afficherImage(index) {
    const imageAffichee = document.getElementById("img-produit")
    const titreColoris = document.getElementById("titreColoris")

    if (index >= 0 && index < Rendu3D.length) {
        imageAffichee.src = Rendu3D[index];
        imageAffichee.alt = "Image" + (index + 1);
        
        switch (index) {
            case 0:
                titreColoris.textContent = "RAL 7016";
                break;
            case 2:
                titreColoris.textContent = "RAL 9016";
                break;
            case 4:
                titreColoris.textContent = "Champagne"
        }
    }
}

function modifierTexte1V2V () {
    const titreModele = document.getElementById(titreModele); {

   
    console.log("titreModele")
}
}
modifierTexte1V2V

