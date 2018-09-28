const store = []
document.addEventListener("DOMContentLoaded", function() {
  const displayGroups = document.getElementById('table-body')
  const displayWinner = document.getElementById('winner')

  Adapter.getGroups()
  .then(json => json.forEach((group) => {
    store.push(group)
    displayGroups.innerHTML += Adapter.renderRow(group)
  })) //end of then

  displayGroups.addEventListener("click", (event) => {
    debugger
    if (event.target.tagName === "IMG"){
      const winnerId = event.target.dataset.id
      const winnerObj = store.find(group => winnerId == group.id)
      if (winnerObj){
        displayWinner.innerHTML = `<h1>${event.target.parentNode.parentNode.children[1].innerText}</h1>`
        event.target.parentNode.remove()
      }
      displayGroups.innerHTML = ""
      store.forEach((group) => {
        if (group === winnerObj){
        } else {
          displayGroups.innerHTML += Adapter.renderRow(group)
        }
      }) //end for each
    } // end winner sections
    else if (event.target.tagName === "BUTTON"){
      const deleteId = event.target.parentNode.parentNode.children[4].children[0].dataset.id
      const deleteObj = store.find(group => deleteId == group.id)
      //event.target.parentNode.parentNode.remove()
      Adapter.deleteGroup(deleteObj)
      store.splice( store.indexOf(deleteObj), 1 );
      displayGroups.innerHTML = ""
      store.forEach((group) => {
        displayGroups.innerHTML += Adapter.renderRow(group)
      }) //end for each statement
    } //END IF STATEMENT FOR BUTTON

  }) //end of event listener for table


}) //end of DOM event listener
