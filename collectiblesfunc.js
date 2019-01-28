var collectibles = {
    mostExpensive: "Flash Action Figures",
    leastExpensive: "Bat Girl Action Figures",
    amount: 100,
    quantity: 2,
    price: function() {
       return this.amount * this.quantity;

        }
};
 console.log("The total amount for the", collectibles.mostExpensive, "is", collectibles.price().toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
 //------------------------------------------------------------------------------------------------------------------------------------------
 var collectibles = {
    mostExpensive: "Flash Action Figures",
    leastExpensive: "Bat Girl Action Figures",
    price: 100,
    price1: 45
};

function buyCollectibles(mostExpensive, leastExpensive, price, price1) 
{console.log("If I were to buy 2", collectibles.mostExpensive, "it would cost me", (price * collectibles.price).toLocaleString('en-US', {style: 'currency' , currency: 'USD'}))}

buyCollectibles(2);