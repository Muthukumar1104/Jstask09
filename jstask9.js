function report(){
const student = {
            "name":"",
            "age":"",
            "gender":"",
            "email":"",
            "college":"",
            "department":"",
            "cgpa":""
}     

student.name = document.getElementById('name').value;
student.age = document.getElementById('age').value;

if(document.getElementById('male').checked) { 
                 student.gender = document.getElementById("male").value;
            } 
            else if(document.getElementById('female').checked) { 
                student.gender = document.getElementById("female").value;
            }
            else { 
                alert("select the gender!");
            }

student.email = document.getElementById('email').value;
student.college = document.getElementById('college').value;
student.department = document.getElementById('dept').value;
student.cgpa = document.getElementById('cgpa').value; 

var name = document.getElementById('name').value
var age = document.getElementById('age').value
var email = document.getElementById('email').value
var college = document.getElementById('college').value
var dept = document.getElementById('dept').value
var cgpa = document.getElementById('cgpa').value
if (name==""||age==""||email==""||college==""||dept==""||cgpa=="") {
    alert("fill all the field!");   
}
else{
window.alert("Your form is submitted successfully");
let profile = JSON.parse(localStorage.getItem('student'));
profile !== null ? localStorage.setItem('student', JSON.stringify([...profile,student])) :localStorage.setItem('student', JSON.stringify([student]));
window.location.href = "table.html";
}
}