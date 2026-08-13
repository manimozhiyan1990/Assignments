function calculateMaxStockProfit(stockValue: number[]): number {
    let minPrice = Number.MAX_VALUE;  // any price in array will be smaller than this initially
    let maxProfit = 0;  
    
    for (let price of stockValue){
        if(price<minPrice){
            minPrice=price;  // update the lowest value 

    }
    else{
        let profit: number= price-minPrice;
          if (profit > maxProfit) {
                maxProfit = profit; // update max profit
            }
    }
}

 return maxProfit;

}
let stockValue:number[] = [5,7,9,10,1,6,15];
let maxProfit = calculateMaxStockProfit(stockValue);
console.log(`The maximum profit that can be made is: ${maxProfit}`);