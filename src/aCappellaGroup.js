let allAcapellaGroups = []

const findValue = (obj, path) => {
  const pathArray = path.split('.')
  for (let i = 0; i < pathArray.length; i++) {
    obj = obj[pathArray[i]];
  };
  return obj;
};

class AcapellaGroup {
  constructor({
    id,
    name,
    membership,
    college
  }) {
    this.id = id
    this.name = name
    this.membership = membership
    this.college = college
    allAcapellaGroups.push(this)
  }

  render() {
    return `<tr><td>${this.college.name}</td> <td>${this.name}</td> <td>${this.membership}</td> <td>${this.college.division}</td> <td><img src='./assets/trophy.png' class='winner' data-id='${this.id}'/></td><td><button class=delete data-id=${this.id}>Delete</button></td></tr>`
  }

  static sortRender(path) {
    return allAcapellaGroups.sort((a, b) => {
      if (findValue(a, path) > findValue(b, path)) {
        return 1;
      }
      if (findValue(a, path) < findValue(b, path)) {
        return -1;
      }
      return 0;
    })
  }
}
