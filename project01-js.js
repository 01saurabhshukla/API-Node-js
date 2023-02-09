function test(){
    var name= document.getElementById("username").value;
    var pwd= document.getElementById("password").value;
    var male= document.getElementById("male").value;
    var female= document.getElementById("female").value;
    var email= document.getElementById("email").value;
    var countrycode= document.getElementById("code").value;
    var phoneno= document.getElementById("no").value;

    // alert(name);

   document.writeln(name+"<br>"+pwd+"<br>"+email+"<br>"+countrycode+"<br>"+phoneno+"<br>");
    // if(female==0) document.writeln("male");
    // else if(male==0) document.writeln("female");
}