console.log('this is main.js')
getCSS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                const style = document.createElement('style')
                style.textContent = request.response
                document.head.appendChild(style)
            }
        }
    }
    request.send()
}
getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                const script = document.createElement('script')
                script.textContent = request.response
                document.body.appendChild(script)

            }
        } 
    }
    request.send()
}
getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)

            }
        } 
    }
    request.send()
}
getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                // console.log(request.responseXML)
                const dom = request.responseXML
                console.log(dom.getElementsByTagName('warning')[0].textContent.trim())
            }
        } 
    }
    request.send()
}
getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                console.log(request.response)
                console.log(typeof request.response)
                const object = JSON.parse(request.response)
                console.log(object)
                console.log(typeof object)
                getName.textContent=object.name
            }
        } 
    }
    request.send()
}
let n=1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState ===4){
            if(request.status>=200&&request.status<300){
                const array=JSON.parse(request.response)
                array.forEach(element => {
                    const li = document.createElement('li')
                    li.textContent = element.id
                    xxx.appendChild(li)
                });
            }
        }
    }
    n+=1
    request.send()

}