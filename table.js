function Myfn(){
let profile = JSON.parse(localStorage.getItem('student'));
function Myfun(data){
   return `<tr>
           <td>${data.name}</td>
           <td>${data.age}</td>
           <td>${data.gender}</td>
           <td>${data.email}</td>
           <td>${data.college}</td>
           <td>${data.department}</td>
           <td>${data.cgpa}</td>
           </tr>`
}
let output = profile.map(Myfun);
document.getElementById("body").innerHTML = output.join("");
}