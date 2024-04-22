// Load JSON data
fetch('data/scanner_output.json')
  .then(response => response.json())
  .then(scannerOutputData => {
    fetch('data/servers_and_ids.json')
      .then(response => response.json())
      .then(serversAndIdsData => {
        displayUsersAndServers(scannerOutputData, serversAndIdsData);
        setupSearchBar(scannerOutputData, serversAndIdsData);
      })
      .catch(error => console.error('Error loading servers_and_ids.json:', error));
  })
  .catch(error => console.error('Error loading scanner_output.json:', error));

// Function to display users and servers
function displayUsersAndServers(scannerOutputData, serversAndIdsData) {
  const userList = document.getElementById('user-list');
  let userHTML = '';

  scannerOutputData.forEach(user => {
    userHTML += `
      <div class="user-container">
        <div class="user-info">
          <img class="avatar" src="${user.avatar}" alt="${user.username}" width="32" height="32"> ${user.username}#${user.discriminator}
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="server-list">
    `;

    const userServers = serversAndIdsData[user.id] || [];
    userServers.forEach(server => {
      userHTML += `
        <div class="server-row">
          <i class="fas fa-server"></i> ${server.server_name}
        </div>
      `;
    });

    userHTML += `
        </div>
      </div>
    `;
  });

  userList.innerHTML = userHTML;

  // Add click event listener to user info divs
  const userInfoDivs = document.querySelectorAll('.user-info');
  userInfoDivs.forEach(div => {
    div.addEventListener('click', () => {
      div.classList.toggle('open');
    });
  });
}

// Function to setup search bar
function setupSearchBar(scannerOutputData, serversAndIdsData) {
  const searchInput = document.getElementById('search-input');
  const userContainers = document.querySelectorAll('.user-container');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    userContainers.forEach(container => {
      const userInfo = container.querySelector('.user-info');
      const username = userInfo.textContent.split('#')[0].toLowerCase();
      const userData = scannerOutputData.find(user => user.username === username);
      const userId = userData?.id.toLowerCase();
      const userServers = serversAndIdsData[userData?.id] || [];

      let serverMatch = null;
      const matchingData = [
        username,
        userId,
        ...userServers.map(server => {
          const serverIdMatch = server.serverid.toLowerCase() === searchTerm;
          const serverNameMatch = server.server_name.toLowerCase().includes(searchTerm);

          if (serverIdMatch || serverNameMatch) {
            serverMatch = server;
          }

          return serverIdMatch || serverNameMatch;
        })
      ].some(data => data);

      if (matchingData) {
        container.style.display = 'block';

        const serverRows = container.querySelectorAll('.server-row');
        serverRows.forEach(row => {
          row.classList.remove('highlight');
          if (serverMatch && row.textContent.includes(serverMatch.server_name)) {
            row.classList.add('highlight');
          }
        });

        if (serverMatch) {
          userInfo.classList.add('open');
        } else {
          userInfo.classList.remove('open');
        }
      } else {
        container.style.display = 'none';
        userInfo.classList.remove('open');
      }
    });
  });
}