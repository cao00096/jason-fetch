

function createNode(element){
    return document.createElement(element);
}


function append(parent,el){
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url ='https://picsum.photos/v2/list?limit=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let authors = data.results;
    return authors.map(function(author){
        let li = createNode('li'),
        img = createNode ('img'),
        span = createNode ('span');

        img.scr= author.picture.medium;
        span.innerHTML=`{author.name.first}&{author.name.last}`;
        
        append(li,img);
        append(li,span);
        append(ul,li);
    })
})
.catch(function(error){
    console.log(JSON.stringify(error)); 
})