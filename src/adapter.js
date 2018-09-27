class Adapter {
  static getGroups() {
    let url = "http://localhost:3000/a_cappella_groups";
    return fetch(url).then(response => response.json());
  }

  static deleteGroup(id){
    let url = `http://localhost:3000/a_cappella_groups/${id}`
    return fetch(url, {
      method: "DELETE"
    }).then(response => response.json())
  }
}
