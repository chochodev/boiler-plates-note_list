function add(){
    document.getElementById('display-area').removeChild(list)
    window.moreList = document.createElement('li')
    moreList.appendChild(content)
    document.getElementById('display-area').appendChild(moreList)
}
        
function save(){
    window.input = document.getElementById('textarea').value
    window.content = document.createTextNode(input)
    window.list = document.createElement('li')

    if(input.length == 0){
            alert('Please enter your text')
            return;
            }
        
    if(input.length >= 65){
        window.slice = (input.slice(0, 60) + '...')
        window.join =  document.createTextNode(slice)
        list.appendChild(join)
        document.getElementById('display-area').appendChild(list)

        window.btn = document.createElement('a')
        btn.setAttribute('id', 'button')
        window.readMore = 'read-more'
        window.read = document.createTextNode(readMore)
        btn.appendChild(read)
        list.appendChild(btn)
        
        document.getElementById('button').setAttribute('onclick', 'add()')

    }else{
        list.appendChild(content)
    document.getElementById('display-area').appendChild(list)

    }
    
}

function style_1(){
    document.getElementById('theme-style').href = 'style_1.css'
}

function light(){
    document.getElementById('theme-style').href = 'light.css'
}

function dark(){
    document.getElementById('theme-style').href = 'dark.css'
}
