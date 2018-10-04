document.addEventListener("DOMContentLoaded", () => {

  const tableBody = document.getElementById('table-body')
  const winner = document.getElementById('winner')

  fetch(`http://localhost:3000/a_cappella_groups`)
    .then(response => response.json())
    .then(groupObj => {
      groupObj.forEach(group => {
        let newGroup = new aCappellaGroup(group)
        tableBody.innerHTML += newGroup.render()
      })
    })


  tableBody.addEventListener('click', event => {
    let groupId = event.target.dataset.id
    let selectedGroup = aCappellaGroup.findById(groupId)
    winner.innerHTML = `WINNER: ${selectedGroup.college} ${selectedGroup.groupName}`
    tableBody.deleteRow(`${selectedGroup.id-1}`)

  })
})