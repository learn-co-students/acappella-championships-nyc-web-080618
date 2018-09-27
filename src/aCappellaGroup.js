class AcapellaGroup{

  constructor(agJsonObj){
    this.id = agJsonObj.id,
    this.name= agJsonObj.name,
    this.college = agJsonObj.college.name,
    this.membership = agJsonObj.membership,
    this.division = agJsonObj.college.division,
    AcapellaGroup.all.push(this)
  }

  render(){
    return`
    <tr id="tr-${this.id}">
      <td>${this.college}</td>
      <td>${this.name}</td>
      <td>${this.membership}</td>
      <td>${this.division}</td>
      <td><button type="button" id="winner-button" data-id="${this.id}"></button></td>
      <td><button type="button" id="delete-group" data-id="${this.id}">delete</button></td>
    </tr>
  `
  }

}
AcapellaGroup.all = [];
