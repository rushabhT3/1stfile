function onsignup(event){
    // functionName.preventDefault() values ko retain rakhne k liye 
    event.preventDefault();
    // console panel me browser k dekh sakte ye kya optput de rha hain toh
    console.log(event.target.myName.value);
}