document.addEventListener('DOMContentLoaded', function() {

  fetch("http://localhost:3000/a_cappella_groups")
  .then(response => response.json())
  .then( data => {
    for(const group of data) {
      new Group(group)
    }
    const table = document.getElementById("table-body")

    Group.all().forEach(function (group) {
      table.innerHTML += group.render()
    })

    table.addEventListener('click', function(event){
      if(event.target.tagName == "IMG") {
        const groupId = event.target.dataset.id
        const rowItem = event.target.parentElement.parentElement
        const allRows = document.querySelectorAll("tr")
        allRows.forEach(function (tr){
          tr.style.display = "table-row"
        })
        rowItem.style.display = "none"
        const winnerName = rowItem.children[1].innerText
        const winningHeader = document.getElementById("winner")
        winningHeader.innerText = "Winner: " + winnerName
      } else if (event.target.id == "remove") {
        const groupId = event.target.dataset.id
        const groupRow = event.target.parentElement.parentElement
        groupRow.remove()
        fetch(`http://localhost:3000/a_cappella_groups/${groupId}`,{
          method: "DELETE"
        })
      }
    })
  })











})
