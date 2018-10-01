const table = document.getElementById('table-body')
const winner = document.getElementById('winner')

document.addEventListener('click', (e) => {
  const groupId = e.target.dataset.id
  const groupObj = allAcapellaGroups.find(group => group.id == groupId)

  if (e.target.className === 'winner') {
    if (winner.dataset.id) {
      const oldWinnerId = winner.dataset.id
      const oldWinnerObj = allAcapellaGroups.find(group => group.id == oldWinnerId)
      e.target.parentNode.parentNode.innerHTML = oldWinnerObj.render()
    } else {
      e.target.parentNode.parentNode.remove()
    }

    winner.dataset.id = groupId
    winner.innerText = `Winner: ${groupObj.college.name} ${groupObj.name}`

  } else if (e.target.className === 'delete') {
    Adapter.deleteGroup(groupId)
    e.target.parentNode.parentNode.remove()
    allAcapellaGroups = allAcapellaGroups.filter(item => {
      item.id != groupId
    })
  } else if (e.target.dataset.sort) {
    let sortedArray = AcapellaGroup.sortRender(e.target.dataset.sort)
    table.innerHTML = sortedArray.map(group => group.render()).join('')
    if (winner.dataset.id) {

    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  Adapter.getAcapellaGroups().then(data => {
    data.forEach(group => {
      const groupObj = new AcapellaGroup(group)
      table.innerHTML += groupObj.render()
    })
  })
})
