
group_store = []


class Group{

  constructor(groupObj){
    this.id = groupObj.id
    this.name = groupObj.name
    this.membership = groupObj.membership
    this.college = groupObj.college
    group_store.push(this)

  }

  static renderAll(){
    return group_store.map((group)=>{
      return group.renderRow()
    }).join("")

  }
  renderWinner(){
    return (`
      <td>${this.college.name}</td>
      <td>${this.name}</td>
      <td>${this.membership}</td>
      <td>${this.college.division}</td>
      <td><img src='./assets/trophy.png' data-id=${this.id} class="trophy-pic"></td>
      `)
  }
  renderRow(){
    return (`<tr>
      <td>${this.college.name}</td>
      <td>${this.name}</td>
      <td>${this.membership}</td>
      <td>${this.college.division}</td>
      <td><img src='./assets/trophy.png' data-id=${this.id} class="trophy-pic"></td>
      </tr>`)
  }

  static findGroupById(id){
    return group_store.find(group => id == group.id)
  }


}
