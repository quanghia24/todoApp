const myNodeList = document.getElementsByTagName("LI");
let i;
for(i = 0; i < myNodeList.length; i++){
  let span = document.createElement("SPAN");
  let txt  = document.createTextNode("\u00D7");
  span.className = "Close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

const close = document.getElementsByClassName("Close");
for(i = 0; i < close.length; i++){
  close[i].onclick = () => {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement () {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue === ''){
    console.log("You need to enter something!");
  }
  else{
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


}