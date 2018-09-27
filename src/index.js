document.addEventListener('DOMContentLoaded', () => {
  const groupTable = document.getElementById('table-body')
  const winnerDisplay = document.getElementById('winner')
  const tableHead = document.getElementById("table-head")
  let groupWinner;

  Adapter.getGroups().then( groupData => {
    groupData.forEach( groupObj => {
      const group = new ACappellaGroup(groupObj)
      groupTable.innerHTML += group.render()
    })
  }) // Adapter.getGroups()

  groupTable.addEventListener('click', event => {
    if(event.target.tagName === 'IMG'){
      if(!groupWinner){
        const groupId = event.target.dataset.id
        const group = ACappellaGroup.find(groupId)
        event.target.parentNode.parentNode.remove();
        winnerDisplay.innerText = `Winner: ${group.name}`
        groupWinner = group
      } else {
        groupTable.innerHTML += groupWinner.render()
        const groupId = event.target.dataset.id
        const group = ACappellaGroup.find(groupId)
        document.getElementById(`row-${groupId}`).remove()
        winnerDisplay.innerText = `Winner: ${group.name}`
        groupWinner = group
      }
    } else if (event.target.tagName === 'BUTTON') {
      const groupId = event.target.id.split('-')[1]
      const group = ACappellaGroup.find(groupId)
      document.getElementById(`row-${groupId}`).remove()
    }
  }) // groupTable AEL click

  tableHead.addEventListener('click', event => {
    const metric = event.target.id
    const sortedGroups = ACappellaGroup.sortBy(metric).map(group => {
      return group.render()
    }).join('')
    groupTable.innerHTML = sortedGroups
  }) // tableHead AEL click
}) // DOMContentLoaded
