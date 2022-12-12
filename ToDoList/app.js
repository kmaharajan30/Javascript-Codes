const addBtn = document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});
// function to show Notes---
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <p class="card-text fs-4">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`;
  });
  let notesEle =document.getElementById('notes');
  if(notesObj.length!=0){
    notesEle.innerHTML=html;
  }
  else{
    notesEle.innerHTML=`Nothing to show!`;
  }
}

// delete notes
function deleteNote(index){
    let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}
// Search notes!!
let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    // console.log('fired');
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    });
});
 
//Sort Notes
let sort =document.getElementById('sort');
sort.addEventListener('click',function(n){
  
    let cardTxt = document.getElementsByClassName('noteCard');
    let singleTxt = [...cardTxt];
    // console.log(cardTxt); 
    // console.log(singleTxt); 
    singleTxt.sort((a,b)=>{
      let x = a.getElementsByTagName('p')[n];
      let y = b.getElementsByTagName('p')[n];
      return x < y ? -1 :1;
    });
    singleTxt.map((abc)=>{
      console.log(abc.innerHTML);
    });
      
})

