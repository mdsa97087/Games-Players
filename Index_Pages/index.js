GetData();
async function GetData() {
  let search = document.getElementById("search").value;
  try {
    let res = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${search}&per_page=${10}`
    );
    let data = await res.json();
    data = data.data;
    console.log(data);
    ShowData(data);
  } catch (err) {
    console.log(err);
  }
}

function ShowData(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "middleDiv");
    let imgSrc =
      "https://images.pexels.com/photos/9002742/pexels-photo-9002742.jpeg?auto=compress&cs=tinysrgb&w=600";
    let img = document.createElement("img");
    img.src = `${imgSrc}`;
    img.setAttribute("class", "img");
    let name = document.createElement("h3");
    name.innerText = `Name:- ${el.first_name}`;
    let position = document.createElement("p");
    position.innerText = `Position:-  ${el.position}`;
    let btn = document.createElement("button");
    btn.innerText = "TEAM DETAILS";
    btn.setAttribute("class", "btn");
    div.append(img, name, position, btn);
    container.append(div);
  });
}
// ShowData();
