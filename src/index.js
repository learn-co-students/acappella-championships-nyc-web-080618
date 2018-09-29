document.addEventListener("DOMContentLoaded", function() {

  const groupTableBody = document.querySelector("#table-body");
  const winnerTag = document.querySelector("#winner");
  const topPanel = document.querySelector("#top-panel");

  Adapter.getGroups().then(groupObjs => {
    groupTableBody.innerHTML = groupObjs.map(groupObj => {
      let newGroup = new ACappellaGroup(groupObj);
      return newGroup.render();
    }).join("")
  })


  document.addEventListener("click", event => {
    if (event.target.className === "trophy-img") {
      if (topPanel.style.display === "none") {
        topPanel.style.display = "block";
        let groupId = event.target.dataset.id;
        let targetGroup = ACappellaGroup.all().find(group => group.id == groupId);
        let detailRow = document.querySelector(`#detail-${groupId}`);
        detailRow.remove();
        // winnerTag.dataset.id = groupId;
        winnerTag.innerText = `Winner: ${targetGroup.college} ${targetGroup.name}`;
      } else {
        groupTableBody.innerHTML = ACappellaGroup.all().map(group => group.render()).join("")
        let groupId = event.target.dataset.id;
        let targetGroup = ACappellaGroup.all().find(group => group.id == groupId);
        let detailRow = document.querySelector(`#detail-${groupId}`);
        detailRow.remove();
        winnerTag.innerText = `Winner: ${targetGroup.college} ${targetGroup.name}`;
      }
    }

    if (event.target.className === "delete-btn") {
      let groupId = event.target.dataset.id;
      ACappellaGroup.all() = ACappellaGroup.all().filter(group => group.id != groupId)
      let targetGroup = ACappellaGroup.all().find(group => group.id == groupId);
      let detailRow = document.querySelector(`#detail-${groupId}`);
      detailRow.remove();
      Adapter.deleteGroup(groupId)
    }

    if (event.target.id === "college") {
      let sortedGroup = ACappellaGroup.all().sort((a, b) => {
        collegeA = a.college.toUpperCase();
        collegeB = b.college.toUpperCase();
        if (collegeA < collegeB) {
          return -1;
        }
        if (collegeA > collegeB) {
          return 1;
        }
        return 0;
      });
      groupTableBody.innerHTML = sortedGroup.map(group => group.render()).join("")
    }

    if (event.target.id === "group-name") {
      let sortedGroup = ACappellaGroup.all().sort((a, b) => {
        collegeA = a.name.toUpperCase();
        collegeB = b.name.toUpperCase();
        if (collegeA < collegeB) {
          return -1;
        }
        if (collegeA > collegeB) {
          return 1;
        }
        return 0;
      });
      groupTableBody.innerHTML = sortedGroup.map(group => group.render()).join("")
    }
  })
});
