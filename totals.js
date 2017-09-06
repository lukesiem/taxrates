var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates) {
  // Implement your code herev
  let resultOb = {}
  for( let i = 0; i < salesData.length; i++){
    var name = salesData[i].name
    var prov = salesData[i].province  
    var totalSales = 0
    for( let j = 0; j < salesData[i].sales.length; j++){
      totalSales = salesData[i].sales[j] + totalSales  
   
   }
    totalTax = taxRates[prov] * totalSales 
      

     if(resultOb[name]) {

      resultOb[name].totalSales += totalSales;
      resultOb[name].totalTaxes += totalTax;


     }  else {
    
    resultOb[name] = {
     totalSales: totalSales,
     totalTaxes: totalTax
   }
    }
     
  }
 return resultOb
}
  


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/