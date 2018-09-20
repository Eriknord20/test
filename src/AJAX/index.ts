// import * as tester from '../'
export function get(url:any, handler:any) {
    let request = new XMLHttpRequest()

    request.open("GET", url, true)

    request.onreadystatechange = function () {
        console.log(request.readyState)
        if (request.readyState == XMLHttpRequest.DONE) {
            if(request.getResponseHeader("Content-Type") == "application/json"){
                request = JSON.parse(request.responseText)
                handler(request)
                console.log("hej")
            }else{
                console.log("då")
                handler(request.responseText)
            }
        }
    }
    request.send()
}
export function post(url:any, data:any, handler:any) {
    let request = new XMLHttpRequest()

    request.open("POST", url, true)
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.onreadystatechange = function () {
        console.log(request.readyState)
        if (request.readyState == XMLHttpRequest.DONE) {
            console.log(request.responseText)
        }
    }
    request.send(data)
}
export function makeList(data:any) {
    let jsonList = JSON.parse(data)
    console.log(jsonList)
    // Create the list element:
    let list = document.createElement('ul')

    for (let i = 0; i < jsonList.length; i++) {
        // Create the list item:
        let item = document.createElement('li')

        // Set its contents:
        item.appendChild(document.createTextNode(jsonList[i].username))

        // Add it to the list:
        list.appendChild(item)
    }
    document.body.appendChild(list)
    console.log(list)
    // Finally, return the constructed list:
    return list;
}
export function postForm() {
    let form = document.createElement('form')
    form.setAttribute('id','postForm')
    document.body.appendChild(form)
    let input = document.createElement('input')
    input.setAttribute('value','')
    input.setAttribute('name','url')
    input.setAttribute('type','text')
    form.appendChild(input)
    let btn = document.createElement('button')
    btn.innerText = 'postForm submit'
    btn.setAttribute('onclick','getPostUrl')
    btn.setAttribute('form','postForm')
    btn.addEventListener("click", () => {
        let postUrl = input.value
        console.log("postUrl")
        // tester.test(postUrl)
    })
    document.body.appendChild(btn)
    console.log(form)
    console.log(btn)


    return form
}
