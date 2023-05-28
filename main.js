let datalist = [];



const inputarea = document.querySelector('input');
const taskarea = document.querySelector('.todo-list ul')
inputarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        datalist.push({
            text: inputarea.value,
            completed: false,
            deleted:false
        })
        update();
        inputarea.value = '';
    }
})

function update() {
    taskarea.innerHTML = '';
    if(data.deleted===false){
    datalist.forEach((data) => {
        let text = data.text;
        let item = document.createElement('div')
        item.className = 'task';
        item.innerHTML = " <div> " + " <li> " + text + "</li> " +
            "<button class='tick'>&#10004</button> " +
            "<button class='delete'>" +
            "<img src='icons8-delete-30.png'>" +
            "</button>" + " </div> ";
        taskarea.prepend(item);

    })}

const delbtn = document.querySelectorAll('.delete');
        const tickbtn=document.querySelectorAll('.tick');
    tickbtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            e.target.parentElement.getElementsByTagName('li')[0].classList.toggle('completed')
        })
    })
      delbtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove()
        })
    })


}


