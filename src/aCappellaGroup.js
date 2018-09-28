class ACappellaGroup {
  constructor(cappella) {
    this.id = cappella.id;
    this.name = cappella.name;
    this.membership = cappella.membership;
    this.college = cappella.college;
    allGroups.push(this)
  }

  renderInfo(){
    return `<tr id=tr-${this.id}>
    <td>*${this.college.name}*</td>
    <td>*${this.name}*</td>
    <td>*${this.membership}*</td>
    <td>*${this.college.division}*</td>
    <td><button><img src='./assets/trophy.png' data-id='${this.id}'/></button></td>
    <td><button name="delete" data-id=${this.id}>Delete</button></td>
    </tr>`
  }

  // sortRemainCollege(array){
  //   return this.sort(function(obj1, obj2){
  //     return ('' + obj1.college.name).localeCompare(obj2.college.name);
  //   })
  // }

  static sortCollege(array){
    return array.slice().sort(function(obj1, obj2){
      return ('' + obj1.college.name).localeCompare(obj2.college.name);
    })
  }

  static sortGroupName(array){
    return array.slice().sort(function(obj1, obj2){
      return ('' + obj1.name).localeCompare(obj2.name);
    })
  }

  static sortMembership(array){
    return array.slice().sort(function(obj1, obj2){
      return ('' + obj1.membership).localeCompare(obj2.membership);
    })
  }

  static sortDivision(array){
    return array.slice().sort(function(obj1, obj2){
      return ('' + obj1.college.division).localeCompare(obj2.college.division);
    })
  }

}

allGroups = [];
