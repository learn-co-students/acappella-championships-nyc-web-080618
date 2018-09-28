class aCappellaGroup{
  constructor(aCappellaGroupJsonObject){
    this.id = aCappellaGroupJsonObject.id
    this.name = aCappellaGroupJsonObject.name
    this.membership = aCappellaGroupJsonObject.membership
    this.college = aCappellaGroupJsonObject.college
    allGroups.push(this)
  } // end of constructor

  static findById(groupId){
    return allGroups.find(group => group.id == groupId)
  }

  renderAllGroups(){
    return (`
      <tr id="tr-${this.id}">
      <td>${this.college.name}</td>
      <td>${this.name}</td>
      <td>${this.membership}</td>
      <td>${this.college.division}</td>
      <td><img src='./assets/trophy.png' data-id=${this.id} id='winButton'></td>
      </tr>
      `)
  }

  renderOneGroup(){
    return (`
      Winner: ${this.name}
      `)
  }

} // end of aCappellaGroup Class


const allGroups = []
