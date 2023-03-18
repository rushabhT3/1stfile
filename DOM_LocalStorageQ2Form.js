function onsignup(event){
    // prevent default, make variables that store the values on submission, save those values inside the local storage
    
    event.preventDefault();

    const name = event.target.myName.value;
    const email = event.target.exampleInputEmail1.value;
    const tel = event.target.tel.value;

    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone Number", tel);
}
