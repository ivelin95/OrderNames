let btn = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
let orderListElement = document.getElementsByTagName("ol")[0];
let list = orderListElement.getElementsByTagName("li");

function names() {
  if (input.value) {
    let currentName = "";
    //get the index from upper case letter
    currentName += input.value[0].toUpperCase();
    console.log(currentName)
    let index = currentName.charCodeAt(0) - 65;
    console.log(index);
    // get the word 
    for (let i = 1; i < input.value.length; i++) {
      currentName += input.value[i].toLowerCase();
     
    }
    
     //get the index from upper case letter
   
    if (list[index].innerText.length === 0) {
        list[index].innerText += currentName;
    } else {
        list[index].innerText += ", " + currentName;
    }
   
    list.value = null;
    input.value=""
  }
}
btn.addEventListener("click", names);
