console.log("Script Started");
const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  const response = await fetch(url);

  const data = await response.json();
  return data;
}

const container = document.createElement("div");
container.id = "container";
document.body.append(container);

async function displayData() {
  const users = await getData();

  users.forEach((user) => {
    const child = document.createElement("div");
    child.className = "child";
    child.innerHTML = `
    id = ${user.id} <br> <br>
    name = ${user.name} <br> <br>
    UserName = ${user.userName} <br> <br>
    Email = ${user.email} <br> <br>
    Phone = ${user.phone} <br> <br>
    Website = ${user.website} <br> <br>
    `;
    const Delete = document.createElement("button");
    const Edit = document.createElement("button");
    Delete.id = "delete";
    Edit.id = "edit";
    Delete.innerText = "Delete";
    Edit.innerText = "Edit";
    child.appendChild(Delete);
    child.appendChild(Edit);

    //Edit
    Edit.addEventListener("click", () => {
      const popUp = document.createElement("div");
      popUp.id = "pop";
      const div = document.createElement("div");

      const name = document.createElement("input");
      const username = document.createElement("input");
      const email = document.createElement("input");
      const phone = document.createElement("input");
      const website = document.createElement("input");

      const save = document.createElement("button");

      save.className = "popbtn";

      save.innerText = "Save";

      name.placeholder = "re -ENTER your Name";
      username.placeholder = "re -ENTER your username";
      email.placeholder = "re -ENTER your email";
      phone.placeholder = "re -ENTER your phone";
      website.placeholder = "re -ENTER your website";

      name.required = true;
      username.required = true;
      email.required = true;
      phone.required = true;
      website.required = true;



      save.addEventListener("click", () => {
        user.name = name.value;
        user.username = username.value;
        user.email = email.value;
        user.phone = phone.value;
        user.website = website.value;

        child.innerHTML = `
      id = ${user.id} <br> <br>
      name = ${user.name} <br> <br>
      UserName = ${user.userName} <br> <br>
      Email = ${user.email} <br> <br>
      Phone = ${user.phone} <br> <br>
      Website = ${user.website} <br> <br>
      `;

      document.body.removeChild(popUp);
      });

      
      div.appendChild(name);
      div.appendChild(username);
      div.appendChild(email);
      div.appendChild(phone);
      div.appendChild(website);
      div.appendChild(save);
      div.appendChild(exit);
      popUp.appendChild(div);
      document.body.append(popUp);
    });



    //delete
    Delete.addEventListener("click", () => {
      container.removeChild(child);
    });
    container.appendChild(child);
  });
}
displayData();

    // exit

    const exit = document.createElement("button");
    exit.className = "popbtn";
    exit.innerText = "Exit";
      exit.addEventListener('click',()=>{
        document.body.removeChild(popUp);
      })




// Address = {<br>
//   City =  ${user.address.city}<br>
//   Street =  ${user.address.street}<br>
//   ZipCode = ${user.address.zipcode}<br>
//   suite =  ${user.address.suite}<br>
//    }<br> <br>
