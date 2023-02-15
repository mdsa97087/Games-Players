let data = JSON.parse(localStorage.getItem("Player"));
//  data=data[1]
ShowData(data);

function ShowData(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;

  let div = document.createElement("div");
  div.setAttribute("class", "middleDiv");
  let imgSrc =
    "https://images.pexels.com/photos/9002742/pexels-photo-9002742.jpeg?auto=compress&cs=tinysrgb&w=600";
  let img = document.createElement("img");
  img.src = `${imgSrc}`;
  img.setAttribute("class", "img");
  let name = document.createElement("h3");
  name.innerText = `${data.first_name} ${data.last_name}`;
  let position = document.createElement("p");
  position.innerText = `Position:-  ${data.position}`;
  
  div.append(img, name, position,);
  container.append(div);
  
}
