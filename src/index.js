document.addEventListener('DOMContentLoaded', () => {

  const tableList = document.getElementById('table-body')


  fetch('http://localhost:3000/a_cappella_groups')
  .then(res => res.json())
  .then(data => {
    tableList.innerHTML = data.map(cappellaObj => {
      let newCapp = new Cappella(cappellaObj)
      return newCapp.render()
    }).join("")
  })

  tableList.addEventListener('click', (event) => {
    let cappArr = [...allCappella]
    if(event.target.tagName === 'IMG'){
      const targetId = event.target.dataset.id
      const target = Cappella.findCapp(targetId)
      const winner = document.getElementById('winner')
      winner.innerText = `Winner: ${target.college.name}`
      cappArr = cappArr.filter(el => el !== target)
      tableList.innerHTML = cappArr.map(capp => capp.render()).join("")
    }

    if(event.target.tagName === 'BUTTON'){
      const targetId = event.target.dataset.id
      const target = Cappella.findCapp(targetId)
      fetch(`http://localhost:3000/a_cappella_groups/${targetId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        allCappella = allCappella.filter(cap => cap.id != targetId)
        tableList.innerHTML = allCappella.map(capp => capp.render()).join("")

      })
    }
  })



})
