// add event listener to the document for the DOM
document.addEventListener('DOMContentLoaded', ()=> {
// declared variables
const groupTableDisplay = document.getElementById('table-body')
const winnerDetail = document.getElementById('winner')



// create the fetch function from our API
  fetch('http://localhost:3000/a_cappella_groups')
  .then(response => response.json())
  .then(aCappellaGroupJsonObject => {
// console.log(aCappellaGroupJsonObject) to verify it's working
// create a forEach to loop through the array & set the innerHTML of
      aCappellaGroupJsonObject.forEach((groupObject) => {
        let newGroup = new aCappellaGroup(groupObject)
        groupTableDisplay.innerHTML += newGroup.renderAllGroups()
      })
  })

// create an event listener on the page to check which button has been pressed
// populate the winners item w/ the team thats been clicked
  groupTableDisplay.addEventListener('click', (event) => {
// console.log(event.target.dataset.name) - to verify that it works
    if (event.target.id === 'winButton'){
      const groupId = event.target.dataset.id
      const targetGroup = aCappellaGroup.findById(groupId)
      winnerDetail.innerHTML = targetGroup.renderOneGroup()

// also have to remove the winning group from the table array
      const rowToRemove = document.getElementById(`tr-${groupId}`)
        rowToRemove.remove()
    } // end of if statement
  }) // end of groupTableDisplay event listener

}) // end of DOMContentLoaded event listener
