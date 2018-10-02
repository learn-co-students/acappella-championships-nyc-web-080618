document.addEventListener("DOMContentLoaded", () => {
document.addEventListener("DOMContentLoaded", () => {
  
})

  const displayContainer = document.getElementById('table-body')
  const winnerContainer = document.getElementById('winner')



  Adapter.getGroup()
  .then(function(data){
    data.forEach(function(group){
      let addingGroup = new aCapellaGroup(group)
      displayContainer.innerHTML += addingGroup.render()
    })
  })

displayContainer.addEventListener('click', (event) => {
  if(event.target.nodeName === "IMG"){
    let group = aCapellaGroup.findGroupById(event.target.id)
    displayContainer.innerHTML = ""

    aCapellaGroup.all.forEach(function(eachGroup){

      if(eachGroup.id !== group.id){
       displayContainer.innerHTML += eachGroup.render()
     } else {
       winnerContainer.innerHTML = eachGroup.render()
     }
    })
  }
})






}) // end of the DOM CONTENT LOADED
