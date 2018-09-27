document.addEventListener("DOMContentLoaded", ()=>{
  const groupLists = document.getElementById('table-body')
  const winnerBanner= document.getElementById('winner-banner')
  // get all groupLists
  fetch('http://localhost:3000/a_cappella_groups')
    .then(res=> res.json())
    .then(resJson => {

      resJson.forEach(groupObj => {
        const newGroup = new Group(groupObj)
      })
      groupLists.innerHTML = Group.renderAll()
    })

  document.addEventListener('click', e=> {

    if (e.target.tagName === "IMG"){

      const deleteId = parseInt(e.target.dataset.id)

        groupLists.innerHTML = Group.renderAll()
        const WinnerGroup = Group.findById(deleteId)
        const rowIndex = Group.findByindex(deleteId)
        groupLists.deleteRow(rowIndex)
        winnerBanner.firstElementChild.innerText =`Winner: ${WinnerGroup.college.name} ${WinnerGroup.name}`
    } else if (e.target.tagName === "BUTTON"){
      const deleteId =parseInt(e.target.dataset.deleteid)
      fetch(`http://localhost:3000/a_cappella_groups/${deleteId}`,
      {
        method:"DELETE"
      }).then(res => res.json())
        .then(resJson => {
          Group.deleteById(deleteId)
          groupLists.innerHTML = Group.renderAll()
        })

    } else if (e.target.innerText === "Group Name"){
      
    }
  })



})
