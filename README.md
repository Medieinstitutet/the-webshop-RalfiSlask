[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M2kOnNl1)
# Webbshop

Skapa en applikation som agerar webbutik åt en fiktiv kund. 
Webbbutiken skall hämta produkter från ett api som finns på följande adress: https://medieinstitutet
wie-products.azurewebsites.net/api/products  

Produkterna skall presenteras på ett trevligt sätt genom att använda de tekniker som ni lärt er i 
kursen.  

En användare skall kunna lägga saker i en varukorg. Fundera över hur det skall fungera med 
varukorgen vad det gäller att lägga till och ta bort varor. Hur skall dessa varor lagras för att kunna 
presenteras på ett bra sätt? Var någonstans kan dessa varor lagras för att komma åt dem snabbt?  

När användaren är klar skall användaren komma till en checka-ut-sida där en order skickas till api:t 
nedan tillsammans med användarens uppgifter. Fundera över hur denna data lagras i databsen och 
hur ni behöver strukturera upp ert formulär efter det.  

För att skapa en order behöver följande adress användas: https://medieinstitutet-wie-products.azurewebsites.net/api/orders

För att göra sidan lite mer levande och kunna visa mer dynamisk data finns det ytterligare några 
api:er som kan användas:  

Kategorier: https://medieinstitutet-wie-products.azurewebsites.net/api/categories  
Sök: https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchtext= 

## Betygskrav G: 

- En fungerande webbshop 
- Användare kan lägga produkter i varukorgen 
- Användaren kan skapa en order med sina produkter 
- Ett admin-gränssnitt finns för att kunna se ordrar.  

## Betygskrav VG: 

- Alla krav för G 
- Användaren kan ändra antalet av respektive produkt i varukorgen 
- Använda routing för de olika sidorna (hem, produkter, betala och admin) 
- Implementera kategorier med filtrering av produkter 
- Implementera sök och sökresultat
