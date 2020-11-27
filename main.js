pizzas=[]; 
function makeingalign() {
    var deepak1=document.getElementById ("pizza1").value;
    var deepak2=document.getElementById ("pizza2").value;
    var deepak3=document.getElementById ("pizza3").value;
    var deepak4=document.getElementById ("pizza4").value;
    pizzas.push(deepak1);
    pizzas.push(deepak2);
    pizzas.push(deepak3);
    pizzas.push(deepak4);
    console.log(students);
    document.getElementById("div1").innerHTML=students;
    document.getElementById("makealign").style.display = "none"; document.getElementById("makealign2").style.display = "inline-block";
}
function makeingalign2() {
    students.sort();
    console.log(pizzas);
    document.getElementById("division1").innerHTML=pizzas;
}