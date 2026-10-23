//Déclarer toutes les variables avec const ou let.
const nom_client = "Awa";
const nom_produit = "Ordinateur";
const prix_unitaire = 250000;
const quantité = 2;
const Frais_livraison = 5000;
const Taux_TVA = 0.18;

//Afficher le nom du client, le produit et le prix unitaire.
console.log("Nom du client :",nom_client);
console.log("Nom du produit :",nom_produit);
console.log ("Prix unitaire :",prix_unitaire)

//Calculer le montant total des produits
const mont_total_produits = prix_unitaire * quantité

//Calculer le montant de la TVA sur les produits
const mont_TVA = mont_total_produits * Taux_TVA

//Calculer le montant total TTC (produits + TVA)
const mont_TTC = mont_total_produits + mont_TVA

//Calculer le montant final à payer (TTC + livraison)
const mont_final = mont_TTC + Frais_livraison

//Calculer le prix moyen d'un produit, TVA comprise
const prix_moyen_TTC = (mont_TTC)/(quantité)

//Afficher le type de chaque variable avec typeof
console.log("Type du nom :", typeof nom_client)
console.log ("Type du produit :", typeof nom_produit)
console.log ("Type de la quantité :", typeof quantité)

//Afficher un reçu récapitulatif avec console.log()
console.log("===== REÇU DE LA COMMANDE =====")
console.log("Client :",nom_client)
console.log("Produit :",nom_produit)
console.log("Prix unitaire :",prix_unitaire, "FCFA")
console.log("Quantité :",quantité)
console.log("")
console.log("Montant des produits :",mont_total_produits, "FCFA")
console.log("TVA(18%) :",mont_TVA,"FCFA")
console.log("Montant TTC :",mont_TTC,"FCFA")
console.log("Livraison :",Frais_livraison, "FCFA")
console.log("TOTAL A PAYER :",mont_final,"FCFA")
console.log("")
console.log("Prix moyen TTC par produit :",prix_moyen_TTC,"FCFA")
console.log("Type du nom :", typeof nom_client)
console.log ("Type du produit :", typeof nom_produit)
console.log ("Type de la quantité :", typeof quantité)

git remote add 

