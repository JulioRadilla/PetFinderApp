//Delete Button functionality 
const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePet)
})

async function deletePet(){
    const petId = this.parentNode.dataset.id
    try{
        const response = await fetch('/pets/deletePet', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'petIdFromJSFile': petId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//Urgent button fuctionality 
const urgentBtn = document.querySelectorAll('.urgent')

Array.from(urgentBtn).forEach((el)=>{
    el.addEventListener('click', addUrgent)
})

async function addUrgent(){
    const petId = this.parentNode.dataset.id    
    try{
        const response = await fetch('/pets/addUrgent', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'petIdFromJSFile': petId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}