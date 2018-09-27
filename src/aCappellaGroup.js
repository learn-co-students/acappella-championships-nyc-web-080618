const Group = (() => {
  let groups = []
  return class Group {
    constructor(object){
      this.id = object.id
      this.name = object.name
      this.membership = object.membership
      this.college = object.college
      groups.push(this)
    }
    static all(){
      return groups
    }
    static findById(id){
      return groups.find(function(group){
        return group.id == id
      })
    }
    render() {
      return (
        `
        <tr>
        <td>${this.college.name}</td>
        <td>${this.name}</td>
        <td>${this.membership}</td>
        <td>${this.college.division}</td>
        <td><img src="assets/trophy.png" data-id="${this.id}"></td>
        <td><button id="remove" data-id="${this.id}" style="padding: 10px; margin-left: 5px;">DQ</button>
        </tr>
        `
      )
    }
  }
})();
