function phoneStore (phoneType, phoneCost, unitsSold) {
    var revenue = phoneCost * unitsSold;
    console.log("The total revenue for the", phoneType,"is", revenue.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));
}

phoneStore ("Samsung", 799.99, 100);