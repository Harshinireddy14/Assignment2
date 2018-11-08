// Add EventLsiter to search button on load
window.addEventListener('load', function(event) {
    console.log('The document has been fully loaded.'); 
    addSubmitListener(); 
});
// Adding click event yto submit button
function addSubmitListener() {
    
    var button = document.getElementById('myBtn');    
    button.addEventListener('click',buttonclick); 
}

//function called when submit button is clicked
function buttonclick () {
    var ul=document.getElementById("part1");
    ul.innerHTML = "";
var lastname = document.getElementById('lastname').value;
for(var i=0;i<persons.length;i++){
if( persons[i].lastName == lastname)
{ 
   
var listItem = document.createElement('li');
var textnode = document.createTextNode(persons[i].firstName + " " + persons[i].lastName);
listItem.appendChild(textnode);
ul.append(listItem);
//adding event lister to each of the li element;
listItem.addEventListener('click', function(listItem) {
    
    var p= document.getElementById("p");
    p.innerHTML = "Grades for  " + this.innerHTML + "<br/>";
   // part2.insertBefore(p,table);
    var firstName = this.innerHTML.split(" ")[0];
   //calling function to display course results
   diaplayCourse(firstName);
 });
 
 
}
}
 }
// Function to display course name and grade
    function diaplayCourse(firstName)
    {
        var part2 =  document.getElementById("table1");
         while (part2.childNodes.length > 2) {
            part2.removeChild(part2.lastChild);
        }
        for(var j=0;j<persons.length;j++){
            if( persons[j].firstName == firstName)
            { 
                
                for(var i=0;i<persons[j].courseDetail.length;i++){
                    //console.log(part2.childElementCount);

                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    var cellText = document.createTextNode(persons[j].courseDetail[i].course);
                    td.appendChild(cellText);
                    tr.appendChild(td)
                    var td = document.createElement('td');
                    var cellText = document.createTextNode(persons[j].courseDetail[i].grade);
                    td.appendChild(cellText);
                    tr.appendChild(td)
                    part2.appendChild(tr);
                          
                }
                
            }
        }

    }
