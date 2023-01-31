const element = document.getElementById("box")
element.setAttribute('draggable','true');



element.addEventListener("dragstart", function(event) {
  event.target.style.backgroundColor = "lightpink";
  console.log ("drag " +  "X: " + event.clientX  + " Y: " +  event.clientY);
  element.style.fontSize = event.clientX /10 + "px"; // change la taille de la police en fonction du deplacement de 

});

element.addEventListener("dragend", function(event) {
    event.target.style.backgroundColor = "lightgreen";
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(event)
    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    event.target.style.position = "absolute"; //Necessary
    console.log ("dragend" + "X: " + event.clientX  + " Y: " +  event.clientY );
  });