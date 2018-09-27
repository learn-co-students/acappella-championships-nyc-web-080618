const Group= (()=> {
  const allGroups = []

  return class{
    constructor(groupJson){
      this.id = groupJson.id
      this.name = groupJson.name
      this.membership = groupJson.membership
      this.college = groupJson.college
      allGroups.push(this);
    }

    static findById(groupId){
      return allGroups.find(group=> group.id == groupId)
    }
    static deleteById(groupId){
      allGroups.splice(Group.findByindex(groupId),1)
    }
    static renderAll(){
      return allGroups.map(group => {
        return `<tr class='padding center' id = "${group.id}"><td>${group.college.name}</td> <td>${group.name}</td> <td>${group.membership}</td> <td>${group.college.division}</td> <td><img src='./assets/trophy.png' data-id='${group.id}'/></td>
        <td><button data-deleteId='${group.id}'>Delete</button></td>
        </tr>`

      }).join('')
    }

    static findByindex(groupId){
      const index = allGroups.indexOf(Group.findById(groupId))
      return index
    }

    dynamicSort(property){
      var sortOrder = 1;
      if(property[0] === '-'){
        sortOrder = -1;
        property = property.substr(1);
      }
      return function(a,b){
        if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }

      }
    }
  static sortColumn(property) {
    return allGroups.dynamicSort(property)
  }


  }
})()
