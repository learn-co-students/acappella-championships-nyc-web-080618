class Adapter {
  static getGroups(){
    return fetch("http://localhost:3000/a_cappella_groups")
    .then((resp)=> resp.json())
  }

  static addUser(Obj){
    return fetch(`http://localhost:3000/a_cappella_groups/${Obj.id}`, {
       method: 'PATCH',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(Obj)
    }).then(resp => resp.json())
  }

  static renderRow(group){
    return `
      <tr>
      <td>${group.college.name}</td>
      <td>${group.name}</td>
      <td>${group.membership}</td> <td>${group.college.division}</td>
      <td><img src='./assets/trophy.png' data-id=${group.id}></td>
      <td><button>Delete</button>
      </tr>
    `
  }

  static deleteGroup(obj){
    return fetch(`http://localhost:3000/a_cappella_groups/${obj.id}`, {
      method: 'DELETE'
    }).then(console.log)
  }
}
