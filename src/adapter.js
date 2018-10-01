class Adapter{
  static getAcapellaGroups(){
    return fetch('http://localhost:3000/a_cappella_groups')
      .then(res => res.json())
  }

  static deleteGroup(id){
    return fetch(`http://localhost:3000/a_cappella_groups/${id}`,{
      method:'DELETE'
    }).then(res => res.json())
  }
}
