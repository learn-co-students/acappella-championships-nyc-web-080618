class Adapter {

  static getGroup(){
    return fetch('http://localhost:3000/a_cappella_groups')
        .then((resp) => resp.json())
  }

}
