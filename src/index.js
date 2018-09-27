document.addEventListener("DOMContentLoaded",()=>{

  const table_body = document.getElementById("table-body")
  const winner_header = document.getElementById("winner")
  let winnerGroup = false


  Adapter.getGroups()
  .then(data =>{
    data.forEach((group)=>{
      new_group_obj = new Group(group)
    })
    table_body.innerHTML = Group.renderAll()
  })

  //trophy click
  table_body.addEventListener("click", award)

  function award(){
    if (event.target.className === "trophy-pic"){
      if (winnerGroup){

        console.log(winnerGroup)
        let winnerGroupElement = document.createElement("tr")
        winnerGroupElement.innerHTML = winnerGroup.renderWinner()
        console.log(winnerGroupElement)
        table_body.appendChild(winnerGroupElement)
        event.target.parentElement.parentElement.remove()
        console.log(event.target.parentElement.parentElement)



        let groupObjToAward = Group.findGroupById(event.target.dataset.id)

        winnerGroup = groupObjToAward


        winner_header.innerText = `Winner: ${groupObjToAward.name}`


      }else{



      let groupObjToAward = Group.findGroupById(event.target.dataset.id)
      winnerGroup = groupObjToAward
      event.target.parentElement.parentElement.remove()
      console.log(event.target.parentElement.parentElement)
      winner_header.innerText = `Winner: ${groupObjToAward.name}`



    }
    }
  }














})
