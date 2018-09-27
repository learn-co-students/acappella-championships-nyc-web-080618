document.addEventListener("DOMContentLoaded",()=>{
      const tableBody=document.getElementById('table-body')
      const winner=document.getElementById('winner')
      let previous_winner_id;
      fetch("http://localhost:3000/a_cappella_groups")
      .then(res=>res.json())
      .then(data=>{
        data.forEach(obj=>new Aca(obj))
        tableBody.innerHTML=Aca.render_all()
      })

     tableBody.addEventListener('click',e=>{
       if (e.target.tagName=="IMG") {
         winner.innerText=Aca.set_winner(e.target.dataset.id)
         tableBody.innerHTML=Aca.render_all()
       }else if (e.target.name=="button") {
         const aca=Aca.find(e.target.dataset.id)
         fetch(`http://localhost:3000/a_cappella_groups/${aca.id}`,{
           method:"DELETE"
         }).then(res=>res.json())
         .then(data=>{
           Aca.delete_by_id(aca.id)
           tableBody.innerHTML=Aca.render_all()
         })
         }
       })
})
