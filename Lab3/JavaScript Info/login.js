let mes = prompt("Who`s there?", "");

if(mes == "Admin"){
    let mes2 = prompt("Password?", "")
    if(mes2 == "TheMaster"){
        alert("Welcome!");
    }
    else if(!mes2){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if(!mes){
    alert("Canceled");
}
else{
    alert("I don`t know you");
}