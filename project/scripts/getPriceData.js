export const getPriceData = async ()=>{
    
    let info = await fetch('data/products.json');
    let jsonData = await info.json()
   // console.log(jsonData);
    return jsonData;
   
}