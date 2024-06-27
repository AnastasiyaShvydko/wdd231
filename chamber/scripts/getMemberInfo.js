export const getDataMembers = async ()=>{
    
    let info = await fetch('data/members.json');
    let jsonData = await info.json()
   // console.log(jsonData);
    return jsonData;
   
}
