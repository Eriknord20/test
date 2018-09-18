export function get(url:any, handler:any) {
    let request = new XMLHttpRequest()

    request.open("GET", url, true)

    request.onreadystatechange = function () {
        console.log(request.readyState)
        if (request.readyState == XMLHttpRequest.DONE) {

            console.log(JSON.parse(request.responseText))
        }
    }
    request.send()
}
export function post(url:any, data:any, handler:any) {
    let request = new XMLHttpRequest()

    request.open("POST", url, true)
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        console.log(request.readyState)
        if (request.readyState == XMLHttpRequest.DONE) {
            console.log(request.responseText)
        }
    }
    request.send(data)
}