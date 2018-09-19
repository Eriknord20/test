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