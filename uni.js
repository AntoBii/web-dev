function myfun(){
      
      if (document.getElementById('course').value == ""){
        alert("Enter your Course");
      } else if (document.getElementById('special').value == ""){
        alert("Enter field of Specialization");
      } else if (document.getElementById('pass1').value == ""){
        alert("Enter password");
      } else if (document.getElementById('pass2').value !=document.getElementById('pass1').value){
        alert("Password do not match");
      } else if( document.getElementById('age').value <= 16 ) {
          alert("not allowed");
      }
      const grade=document.getElementById('arra')
         if (( grade.value !="A")&&( grade.value !="A-")&&( grade.value !="B+")
          &&( grade.value !="B")&&( grade.value !="B-")&&( grade.value !="C+")){
        alert("YOU DO NOT MEET THE QUALIFICATIION");
    }
      
      else {
        alert("success");
      }
    }
document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() +
 " This a trial code. All rights reserved.</p>";
 