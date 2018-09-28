document.addEventListener("DOMContentLoaded", () => {

//step 1, get all groups;
  const tableBody = document.getElementById('table-body');

  fetch('http://localhost:3000/a_cappella_groups')
  .then(r => r.json())
  .then(data => {
    tableBody.innerHTML = data.map(group => {
      let newGroup = new ACappellaGroup(group);
      return newGroup.renderInfo()
    }).join("")
  })

//step 2, set the winner;
  const winner = document.getElementById('winner')

  tableBody.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG"){
      tableBody.innerHTML = allGroups.map(group => group.renderInfo());
      let mirrorGroups = [...allGroups];
      let groupId = event.target.dataset.id;
      let targetGroup = allGroups.find(group => group.id == groupId);
      winner.innerText = `Winner: ${targetGroup.college.name} of ${targetGroup.name}`
      winner.dataset.id = `${groupId}`

      let position = mirrorGroups.indexOf(targetGroup);
      mirrorGroups.splice(position, 1);
      tableBody.innerHTML = mirrorGroups.map(group => group.renderInfo())
    }
  })

//step 3, delete;
  tableBody.addEventListener("click", (event) => {
    if (event.target.name === "delete"){
      let groupId = Number(event.target.dataset.id);
      let targetGroup = allGroups.find(group => group.id === groupId);
      allGroups.splice(allGroups.indexOf(targetGroup), 1);

      fetch(`http://localhost:3000/a_cappella_groups/${groupId}`, {
        method: 'DELETE'
      }).then(r => r.json())
      .then(group => document.getElementById(`tr-${groupId}`).remove())
    }
  })

//step 4, sorting;
  const tableHeader = document.getElementById("table-header");
  let isSortedCollege = false;
  let isSortedGroupName = false;
  let isSortedMembership = false;
  let isSortedDivision = false;

  tableHeader.addEventListener("click", (event) => {
    if (winner.dataset.id === undefined){
      if (event.target.id === "sort-college" && isSortedCollege === false){
        let sortedGroup = ACappellaGroup.sortCollege(allGroups); //user the class name to call call function;
        tableBody.innerHTML = sortedGroup.map(group => group.renderInfo());
        isSortedCollege = !isSortedCollege;
      } else if (event.target.id === "sort-college" && isSortedCollege === true) {
        tableBody.innerHTML = allGroups.map(group => group.renderInfo());
        isSortedCollege = !isSortedCollege;
      }
    } else if (winner.dataset.id !== undefined){
      let winnerGroup = allGroups.find(group => group.id == winner.dataset.id);
      let remainGroups = [...allGroups];
      remainGroups.splice(allGroups.indexOf(winnerGroup), 1);
      if (event.target.id === "sort-college" && isSortedCollege === false){
        sortedRemainGroups = ACappellaGroup.sortCollege(remainGroups)
        tableBody.innerHTML = sortedRemainGroups.map(group => group.renderInfo());
        isSortedCollege = !isSortedCollege;
      } else if (event.target.id === "sort-college" && isSortedCollege === true) {
        tableBody.innerHTML = remainGroups.map(group => group.renderInfo());
        isSortedCollege = !isSortedCollege;
      }
    }
  }) // section 1: college name completed;

  tableHeader.addEventListener("click", (event) => {
    if (winner.dataset.id === undefined){
      if (event.target.id === "sort-GroupName" && isSortedGroupName === false){
        let sortedGroupName = ACappellaGroup.sortGroupName(allGroups); //user the class name to call call function;
        tableBody.innerHTML = sortedGroupName.map(group => group.renderInfo());
        isSortedGroupName = !isSortedGroupName;
      } else if (event.target.id === "sort-GroupName" && isSortedGroupName === true) {
        tableBody.innerHTML = allGroups.map(group => group.renderInfo());
        isSortedGroupName = !isSortedGroupName;
      }
    } else if (winner.dataset.id !== undefined){
      let winnerGroup = allGroups.find(group => group.id == winner.dataset.id);
      let remainGroups = [...allGroups];
      remainGroups.splice(allGroups.indexOf(winnerGroup), 1);
      if (event.target.id === "sort-GroupName" && isSortedGroupName === false){
        sortedRemainGroups = ACappellaGroup.sortGroupName(remainGroups)
        tableBody.innerHTML = sortedRemainGroups.map(group => group.renderInfo());
        isSortedGroupName = !isSortedGroupName;
      } else if (event.target.id === "sort-GroupName" && isSortedGroupName === true) {
        tableBody.innerHTML = remainGroups.map(group => group.renderInfo());
        isSortedGroupName = !isSortedGroupName;
      }
    }
  }) // section 2: Group name completed;

  tableHeader.addEventListener("click", (event) => {
    if (winner.dataset.id === undefined){
      if (event.target.id === "sort-membership" && isSortedMembership === false){
        let sortedMembership = ACappellaGroup.sortMembership(allGroups); //user the class name to call call function;
        tableBody.innerHTML = sortedMembership.map(group => group.renderInfo());
        isSortedMembership = !isSortedMembership;
      } else if (event.target.id === "sort-membership" && isSortedMembership === true) {
        tableBody.innerHTML = allGroups.map(group => group.renderInfo());
        isSortedMembership = !isSortedMembership;
      }
    } else if (winner.dataset.id !== undefined){
      let winnerGroup = allGroups.find(group => group.id == winner.dataset.id);
      let remainGroups = [...allGroups];
      remainGroups.splice(allGroups.indexOf(winnerGroup), 1);
      if (event.target.id === "sort-membership" && isSortedMembership === false){
        sortedRemainGroups = ACappellaGroup.sortGroupName(remainGroups)
        tableBody.innerHTML = sortedRemainGroups.map(group => group.renderInfo());
        isSortedMembership = !isSortedMembership;
      } else if (event.target.id === "sort-membership" && isSortedMembership === true) {
        tableBody.innerHTML = remainGroups.map(group => group.renderInfo());
        isSortedMembership = !isSortedMembership;
      }
    }
  }) // section 3: Membership completed;

  tableHeader.addEventListener("click", (event) => {
    if (winner.dataset.id === undefined){
      if (event.target.id === "sort-division" && isSortedDivision === false){
        let sortedDivision = ACappellaGroup.sortDivision(allGroups); //user the class name to call call function;
        tableBody.innerHTML = sortedDivision.map(group => group.renderInfo());
        isSortedDivision = !isSortedDivision;
      } else if (event.target.id === "sort-division" && isSortedDivision === true) {
        tableBody.innerHTML = allGroups.map(group => group.renderInfo());
        isSortedDivision = !isSortedDivision;
      }
    } else if (winner.dataset.id !== undefined){
      let winnerGroup = allGroups.find(group => group.id == winner.dataset.id);
      let remainGroups = [...allGroups];
      remainGroups.splice(allGroups.indexOf(winnerGroup), 1);
      if (event.target.id === "sort-division" && isSortedDivision === false){
        sortedRemainGroups = ACappellaGroup.sortGroupName(remainGroups)
        tableBody.innerHTML = sortedRemainGroups.map(group => group.renderInfo());
        isSortedDivision = !isSortedDivision;
      } else if (event.target.id === "sort-division" && isSortedDivision === true) {
        tableBody.innerHTML = remainGroups.map(group => group.renderInfo());
        isSortedDivision = !isSortedDivision;
      }
    }
  }) // section 4: Division completed;
  
})
