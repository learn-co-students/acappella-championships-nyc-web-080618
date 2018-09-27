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
      // debugger
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
      let targetGroup = ACappellaGroup.all().find(group => group.id == groupId);
      let detailRow = document.querySelector(`#detail-${groupId}`);
      detailRow.remove();
      Adapter.deleteGroup(groupId)
    }

  })


});
