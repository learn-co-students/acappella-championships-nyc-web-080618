class aCapellaGroup{
  constructor(group){
    this.id = group.id
    this.name = group.name
    this.membership = group.membership
    this.college = group.college
    this.division = group.division
    aCapellaGroup.all.push(this)
  }
  render(){
    let value = `
    <tr><td>${this.college.name}</td>
    <td>${this.name}</td>
    <td>${this.membership}</td>
    <td>${this.college.division}</td>
    <td><img class="image" id=${this.id} src='${"/assets/trophy.png"}'/></td> </tr>`
    return value
  }

  static findGroupById(id){
    return aCapellaGroup.all.find((aCapellaGroup) => {
    return aCapellaGroup.id == id
  })
}

  static findEverythingBut(id){
    var emptyArray = []
    aCapellaGroup.all.forEach(function(group){
      if (group.id != id){
        emptyArray.push(group)
      } else {

      }
      return emptyArray
    })
  }

}
aCapellaGroup.all = []
