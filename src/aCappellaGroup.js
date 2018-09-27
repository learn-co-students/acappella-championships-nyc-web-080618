class ACappellaGroup {
  static find(groupId){
    return ACappellaGroup.all.find( group => groupId == group.id)
  }

  static sortBy(metric){
    const splitMetric = metric.split('.')
    let metric1, metric2;
    let sortedGroups
    if(splitMetric.length > 1){
      metric1 = splitMetric[0]
      metric2 = splitMetric[1]
      sortedGroups = ACappellaGroup.all.sort((group1, group2) => {
        return group1[metric1][metric2] - group2[metric1][metric2]
      })
    } else {
      sortedGroups = ACappellaGroup.all.sort((group1, group2) => {
        return group1[splitMetric[0]] - group2[splitMetric[0]]
      })
    }
    return sortedGroups
  }

  constructor(aCappellaGroupObj){
    this.id = aCappellaGroupObj.id
    this.name = aCappellaGroupObj.name
    this.membership = aCappellaGroupObj.membership
    this.college = aCappellaGroupObj.college
    ACappellaGroup.all.push(this)
  }

  render(){
    return (
      `
        <tr id='row-${this.id}'>
          <td>${this.college.name}</td>
          <td>${this.name}</td>
          <td>${this.membership}</td>
          <td>${this.college.division}</td>
          <td><img src='./assets/trophy.png' data-id=${this.id}></td>
          <td><button id='delete-${this.id}'>Delete</button></td>
        </tr>
      `
    )
  }

}

ACappellaGroup.all = []
