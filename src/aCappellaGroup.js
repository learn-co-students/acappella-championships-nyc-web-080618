const ACappellaGroup = (() => {
  let allACappellaGroups = [];
  return class {
    static all(){
      return allACappellaGroups;
    }
    constructor(groupObj){
      this.id = groupObj.id;
      this.name = groupObj.name;
      this.membership = groupObj.membership;
      this.college = groupObj.college.name;
      this.division = groupObj.college.division;
      allACappellaGroups.push(this);
    }

    render(){
      return `
      <tr id="detail-${this.id}">
        <td>${this.college}</td>
        <td>${this.name}</td>
        <td>${this.membership}</td>
        <td>${this.division}</td>
        <td><img src='./assets/trophy.png' class="trophy-img" data-id=${this.id}></td>
        <td><button class="delete-btn" data-id=${this.id}>Delete</button></td>
      </tr>
      `
    }
  }
})()
