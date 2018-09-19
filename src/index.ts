import * as AJAX from './AJAX'

AJAX.get("/students/list", (response:any) => {
    console.log("hello???");
    
    console.log(response)
    let result = response.match(/((?<=\[)(.*?)(?=\])|\[.*?\])/)

    let result_of_result = result[0].replace(/(^"|"$)/,"'")
    console.log(result_of_result);
    
    let final_result = JSON.parse(result_of_result)
    console.log(final_result);
    
})

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// let data = "omg=13&foo=1000"
// AJAX.post("https://reqres.in/api/users", data, (response:any) => {

// })

// let request = new XMLHttpRequest()

// request.open("GET", "http://localhost:4567/stuff", true)

// request.onreadystatechange = function(){
//     console.log(request.readyState)
//     if(request.readyState == XMLHttpRequest.DONE){
//         console.log(request.responseText)
//     }
// }

// request.send()git te