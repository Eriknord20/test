import * as AJAX from "./AJAX";


AJAX.post(
    "http://localhost:3000/students", 
    JSON.stringify({
        username: "kalle",
        first_name: "olof",
        last_name: "olofsson",
        pwd: "letmein"
    }),  
    (response:string) => {
        console.log(response)
    }
)



AJAX.get("http://localhost:3000/students", (response: any) => {
  console.log(response);
  // let result = response.match(/((?<=\[)(.*?)(?=\])|\[.*?\])/)

  // let result_of_result = response[0].replace(/(^"|"$)/,"'")
  // console.log(result_of_result);

  // let final_result = JSON.parse(result_of_result)
  // console.log(final_result);
  AJAX.makeList(response);

//   AJAX.postForm();
});

// function createUser() {
//   let h1 = document.createElement("h1");
//   h1.innerText = "create user";
//   document.body.appendChild(h1);
//   let form = document.createElement("form");
//   form.setAttribute("id", "id_create");
//   document.body.appendChild(form);

//   let input1 = document.createElement("input");
//   input1.setAttribute("type", "text");
//   input1.setAttribute("name", "username");
//   input1.placeholder = "username";
//   let input2 = document.createElement("input");
//   input2.setAttribute("type", "text");
//   input2.setAttribute("name", "first_name");
//   input2.placeholder = "first name";
//   let input3 = document.createElement("input");
//   input3.setAttribute("type", "text");
//   input3.setAttribute("name", "last_name");
//   input3.placeholder = "last name";
//   let input4 = document.createElement("input");
//   input4.setAttribute("type", "password");
//   input4.setAttribute("name", "pwd");
//   input4.placeholder = "password";


//   let data = new FormData(form);

//   form.appendChild(input1);
//   form.appendChild(input2);
//   form.appendChild(input3);
//   form.appendChild(input4);
//   let button = document.createElement("button");
//   button.setAttribute("type", "submit");
//   button.setAttribute("form", "id_create");
//   button.innerText = "button";
//   form.appendChild(button);
//   button.onclick = () => {
//     AJAX.post(
//       "http://localhost:3000/students/create",
//       data,
//       (response: any) => {
//         console.log(response);
//       }
//     );
//   };
// }
// https://reqres.in/api/users

// export function test(url:any) {
//     console.log(url)
// }

// let request = new XMLHttpRequest()

// request.open("GET", "http://localhost:4567/stuff", true)

// request.onreadystatechange = function(){
//     console.log(request.readyState)
//     if(request.readyState == XMLHttpRequest.DONE){
//         console.log(request.responseText)
//     }
// }

// request.send()
