
let studentsName = [ {name: "John"},
                {name: "Alex"},{name: "Alice"}, {name: "Maria"},{name: "Albert"},{name: "George"},
             {name: "Morisa"},{name: "Maddison"}, {name: "Aidan"}, {name: "Hector"}
 ]
 function setInfo(){
   for(let i = 0; i < studentsName.length; i++){
      if(studentsName[i].name.length < 5){
        console.log("Less than 5 letters")}
      else{
        console.log("More than 5 letters");
         }
     }}
 setInfo()

