let form = document.querySelector("form")
console.log(form)
let arr = [];
form.addEventListener("submit",myFunc)
function myFunc(event){
    event.preventDefault()
    let Name = document.querySelector("#name").value
    let EmployeeID = document.querySelector("#employeeID").value
    let Department = document.querySelector("#department").value
    let Exp = document.querySelector("#exp").value
    let Email = document.querySelector("#email").value
    let Mobile =document.querySelector("#mbl").value

    let data={
        DName : Name,
        DEmpId : EmployeeID,
        DDepartment : Department,
        DExp : Exp,
        DEmail : Email,
        DMobile : Mobile
    }
    arr.push(data);
    console.log(arr);
    Display(arr);
}

function Display(arr){
  document.querySelector("tbody").innerHTML ="";

 arr.forEach( function (d) {
    
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText =d.DName;

    let id = document.createElement("td");
    id.innerText =d.DEmpId;

    let department = document.createElement("td");
    department.innerText =d.DDepartment;

    let exp = document.createElement("td");
    exp.innerText =d.DExp;

    let email = document.createElement("td");
    email.innerText =d.DEmail;

    let Mob = document.createElement("td");
    Mob.innerText =d.DMobile;

    let role = document.createElement("td");
     let roleText = giveRole(d.DExp);
     role.innerText = roleText;
     
     let Delete = document.createElement('td')
     Delete.textContent = 'Delete'
     
     Delete.addEventListener("click",function(event)
{
    event.target.parentNode.remove()
})

Delete.style.backgroundColor ="Red"

    tr.append(name,id,department,exp,email,Mob,role, Delete);
    document.querySelector("tbody").append(tr);
 
});

}


function giveRole(DExp)
{
    if(DExp>5){
        return "Senior";
    }
    else if(DExp>=2 && DExp<=5){
        return "Junior";
    }
    else if(DExp<=1 ){
        return "Fresher"
    }
}

    