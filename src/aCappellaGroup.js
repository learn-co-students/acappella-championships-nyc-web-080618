allGroups = []
class aCappellaGroup {
  constructor(obj) {
    this.id = obj.id
    this.membership = obj.membership
    this.groupName = obj.name
    this.college = obj.college.name
    this.division = obj.college.division
    allGroups.push(this)
  }

  render() {
    return (`
      <tr><td>${this.college}</td> <td>${this.groupName}</td> <td>${this.membership}</td> <td>${this.division}</td> <td>
      <img src='./assets/trophy.png' data-id=${this.id}></td> </tr>
      `)
  }

  static findById(groupId) {
    return allGroups.find(group => group.id == groupId)
  }
}