


export const getOrderInfo = () =>{
    let order = localStorage.getItem('order');
if(order == null){
    order = []
     return order;
}
else{
    let orderList = order.split(';');
    console.log(orderList);
    return orderList;
}


}

export const recordOrderInfo = (orderDetails) =>{
    let order = localStorage.getItem('order');
    if(order == null){
        localStorage.setItem('order', orderDetails);
   }
   else{
    let newOrder = order + orderDetails;
    localStorage.setItem('order', newOrder);
   }

}
