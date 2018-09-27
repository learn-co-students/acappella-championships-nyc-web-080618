const Aca=(()=>{
  const list=[]
  let previous_winner
  return class  {
    constructor(obj) {
      this.id=obj.id
      this.name=obj.name
      this.membership=obj.membership
      this.collegeName=obj.college.name
      this.division=obj.college.division
      list.push(this)
    }

   static render_all(){
     return list.map(aca=>{
       return `<tr><td>${aca.collegeName}</td> <td>${aca.name}</td>
        <td>${aca.membership}</td> <td>${aca.division}</td>
        <td><img src='./assets/trophy.png' data-id=${aca.id}>
          <button data-id=${aca.id} type="button" name="button">DELETE</button></td> </tr>`
     }).join("")
   }

   static find(id){
     return list.find(aca=>aca.id==id)
   }

   static set_winner(current_winner_id){
     if (previous_winner) {
       list.push(previous_winner)
     }
      const aca=Aca.find(current_winner_id)
      previous_winner=aca
      const index=list.indexOf(aca)
      list.splice(index,1)
     return `Winner:${aca.collegeName}`
   }

  static delete_by_id(id){
    const aca=Aca.find(id)
    const index=list.indexOf(aca)
    list.splice(index,1)
  }


  }
})()
