// GetData();
async function GetData() {
  try {
    let res = await fetch(`https://www.balldontlie.io/api/v1/players`);
    let data = await res.json();
    let allData=data.data
    console.log(allData);
    ShowData(allData);
  } catch (err) {
    console.log(err);
  }
}
// console.log("hello")

function ShowData(allData) {
  let container = (document.getElementById("container"));
  container.innerHTML=null
  allData.forEach((el,i) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = el.first_name;
    let position = document.createElement("p");
    position.innerText = el.position;
    div.append(name, position);
    container.append(div);
  });
}
ShowData()