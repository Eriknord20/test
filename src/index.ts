import * as AJAX from './AJAX'

AJAX.get("/students/list", (response:any) => {
    console.log("hello???");
    
    console.log(response)
    let result = response.match(/((?<=\[)(.*?)(?=\])|\[.*?\])/)

    let result_of_result = result[0].replace(/(^"|"$)/,"'")
    console.log(result_of_result);
    
    let final_result = JSON.parse(result_of_result)
    console.log(final_result);
    AJAX.makeList(final_result)
    AJAX.postForm()
})
// export function test(url:any) {
//     console.log(url)
// }


let data = "omg=13&foo=1000" 
// https://reqres.in/api/users
// AJAX.post(, data, (response:any) => {

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