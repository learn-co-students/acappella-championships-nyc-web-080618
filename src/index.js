document.addEventListener("DOMContentLoaded", ()=>{

const tableBody = document.getElementById("table-body")
const winnerContainer = document.getElementById("winner")
const header = document.getElementById("header")

fetch('http://localhost:3000/a_cappella_groups')
  .then((response) =>{return response.json()})
  .then((acJsonData)=>{
    acJsonData.forEach((ac)=>{
      let newAc = new AcapellaGroup(ac)
      tableBody.innerHTML += newAc.render();
    })
  })

//onclick of button, remove from table, add to winner
tableBody.addEventListener("click", (event)=>{
  if(event.target.id==="winner-button"){
    let acId = event.target.dataset.id
    let acGroup = AcapellaGroup.all.find((ac)=>{
      return ac.id == acId
    })
    winnerContainer.innerText = `Winner: ${acGroup.name}`
    const rowToRemove = document.getElementById(`tr-${acId}`)
    rowToRemove.remove()
  }
})

//onclick of delete button, remove from table and db
tableBody.addEventListener("click", (event)=>{
  if(event.target.id==="delete-group"){
    let acId = event.target.dataset.id
    let acGroup = AcapellaGroup.all.find((ac)=>{
      return ac.id == acId
    })
    const rowToRemove = document.getElementById(`tr-${acId}`)
    rowToRemove.remove()
    //remove from db
    let acIndex = AcapellaGroup.all.findIndex((ac)=>{
      return ac.id == acId
    })
    AcapellaGroup.all.splice(acIndex,1)
  }
})

//onclick of table header, sort by college, name, membership, division
header.addEventListener("click", (event)=>{
  if(event.target.id === "college-head"){
    tableBody.innerHTML =''
    // sort by college name
    let sortedAc = AcapellaGroup.all.sort((a,b)=>{
      let textA = a.college
      let textB = b.college;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    sortedAc.forEach((ac)=> {
      tableBody.innerHTML += ac.render();
    })
  } else if (event.target.id === "group-head") {
    tableBody.innerHTML =''
    //sort by group name
    let sortedAc = AcapellaGroup.all.sort((a,b)=>{
      let textA = a.name
      let textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    sortedAc.forEach((ac)=> {
      tableBody.innerHTML += ac.render();
    })
  } else if (event.target.id === "membership-head"){
    tableBody.innerHTML =''
    //sort by membership type
    let sortedAc = AcapellaGroup.all.sort((a,b)=>{
      let textA = a.membership
      let textB = b.membership;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    sortedAc.forEach((ac)=> {
      tableBody.innerHTML += ac.render();
    })
  } else if (event.target.id === "division-head"){
    //sort by division name
    tableBody.innerHTML =''
    let sortedAc = AcapellaGroup.all.sort((a,b)=>{
      let textA = a.division
      let textB = b.division;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    sortedAc.forEach((ac)=> {
      tableBody.innerHTML += ac.render();
    })
  }
})



}) //ENDD
