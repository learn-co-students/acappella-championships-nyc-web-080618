class Cappella {

  static findCapp(id){
    return allCappella.find(capp => capp.id == id)
  }

  constructor(cappellaObj){
    this.id = cappellaObj.id
    this.name = cappellaObj.name
    this.membership = cappellaObj.membership
    this.college = cappellaObj.college
    allCappella.push(this)
  }

  render(){
    return `<tr>
                <td>${this.college.name}</td>
                <td>${this.name}</td>
                <td>${this.membership}</td>
                <td>${this.college.division}</td>
                <td><img src='./assets/trophy.png' data-id='${this.id}'/></td>
                <td><button data-id="${this.id}">Delete</button></td>
                </tr>`
  }

}

allCappella = []
