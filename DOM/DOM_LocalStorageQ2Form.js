function onsignup(event){
    // prevent default, make variables that store the values on submission
    // save those values inside the local storage by localStorage.setItem("key", "value") format
    
    event.preventDefault();

    // target k baad name wala bhi use kr sakte the id k jagah
    // event.target. .value wale me submit k baad ki values select; 
    // with getElementBy wale me html tags pick hote

    // event.target is the form ko uthata isliye event.target.myName jo hain vo name ko batata 
    const name = event.target.myName.value;
    const email = event.target.exampleInputEmail1.value;
    const tel = event.target.tel.value;

    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone Number", tel);

    // declaring an object instead of the separate variables for name, email and phone number
    // ye object directly store nahi kr sakte 
    let myObj = {
        "Name" : name,
        "Email" : email,
        "Phone Number" : tel,
    }

    // to convert an object into a string; myObj_serialized is a string
    let myObj_serialized = JSON.stringify(myObj);

    // storing as earlier but This is the local storage in the form of an Object
    localStorage.setItem("myObj", myObj_serialized);

    // to convert string back to the object; myObj_deserialized is an object
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

    console.log(myObj_serialized);
    console.log(myObj_deserialized);
    
}
