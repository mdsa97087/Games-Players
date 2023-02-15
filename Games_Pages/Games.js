let data = JSON.parse(localStorage.getItem("Player"));
//  data=data[1]
console.log(data)
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
  name.innerText = `Team: ${data.team.full_name}`;
  
  let position = document.createElement("p");
  position.innerText = `Abbr:-  ${data.team.abbreviation}`;
  let conference = document.createElement("p");
  conference.innerText = `Conference:-  ${data.team.conference}`;
  let division = document.createElement("p");
  division.innerText = `Division:-  ${data.team.division}`;
  
  let city = document.createElement("p");
  city.innerText = `City:-  ${data.team.city}`;
  
  div.append(img, name, position,conference,division,city);
  container.append(div);
  
}
