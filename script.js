// Load JSON data
fetch('data/scanner_output.json')
  .then(response => response.json())
  .then(scannerOutputData => {
    fetch('data/servers_and_ids.json')
      .then(response => response.json())
      .then(serversAndIdsData => {
        const { uniqueUsers, uniqueServers } = getUniqueUsersAndServers(scannerOutputData, serversAndIdsData);
        displayStats(uniqueUsers.length, uniqueServers.length);
        displayUsersAndServers(scannerOutputData, serversAndIdsData);
        setupSearchBar(scannerOutputData, serversAndIdsData);
      })
      .catch(error => console.error('Error loading servers_and_ids.json:', error));
  })
  .catch(error => console.error('Error loading scanner_output.json:', error));

// Function to get unique users and servers
function getUniqueUsersAndServers(scannerOutputData, serversAndIdsData) {
  const uniqueUsers = new Set();
  const uniqueServers = new Set();

  scannerOutputData.forEach(user => {
    uniqueUsers.add(user.username);
    const userServers = serversAndIdsData[user.id] || [];
    userServers.forEach(server => {
      uniqueServers.add(server.server_name);
    });
  });

  return { uniqueUsers: Array.from(uniqueUsers), uniqueServers: Array.from(uniqueServers) };
}

// Function to display stats
function displayStats(numUsers, numServers) {
  const statsContainer = document.createElement('div');
  statsContainer.classList.add('stats-container');

  const numUsersSpan = document.createElement('span');
  numUsersSpan.textContent = `Number of unique bot accounts: ${numUsers}`;

  const numServersSpan = document.createElement('span');
  numServersSpan.textContent = `Number of unique servers: ${numServers}`;

  statsContainer.appendChild(numUsersSpan);
  statsContainer.appendChild(numServersSpan);

  const main = document.querySelector('main .container');
  main.insertBefore(statsContainer, main.firstChild);
}

// Function to display users and servers
function displayUsersAndServers(scannerOutputData, serversAndIdsData) {
  const userList = document.getElementById('user-list');
  let userHTML = '';

  scannerOutputData.forEach(user => {
    userHTML += `
      <div class="user-container" data-userid="${user.id}">
        <div class="user-info">
          <img class="avatar" src="${user.avatar}" alt="${user.username}" width="32" height="32"> ${user.username} (${user.id})
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="server-list">
    `;

    const userServers = serversAndIdsData[user.id] || [];
    userServers.forEach(server => {
      userHTML += `
        <div class="server-row">
          <i class="fas fa-server"></i> ${server.server_name} (${server.serverid})
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

// Function to setup sticky header
function setupStickyHeader() {
  const header = document.querySelector('header');
  let prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down, hide the header
      header.classList.add('hidden');
    } else {
      // Scrolling up, show the header
      header.classList.remove('hidden');
    }

    prevScrollPos = currentScrollPos;
  });
}

// Function to setup search bar
function setupSearchBar(scannerOutputData, serversAndIdsData) {
  const searchInput = document.getElementById('search-input');
  const userContainers = document.querySelectorAll('.user-container');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    userContainers.forEach(container => {
      const userId = container.dataset.userid;
      const userData = scannerOutputData.find(user => user.id === userId);
      const userServers = serversAndIdsData[userData?.id] || [];

      let matchFound = false;

      if (userData?.username.toLowerCase().includes(searchTerm) || userData?.id.toLowerCase().includes(searchTerm)) {
        matchFound = true;
      } else {
        for (const server of userServers) {
          const serverIdMatch = server.serverid.toLowerCase().includes(searchTerm);
          const serverNameMatch = server.server_name.toLowerCase().includes(searchTerm);

          if (serverIdMatch || serverNameMatch) {
            matchFound = true;
            break;
          }
        }
      }

      if (matchFound) {
        container.style.display = 'block';

        const serverRows = container.querySelectorAll('.server-row');
        serverRows.forEach(row => {
          row.classList.remove('highlight');
          const rowText = row.textContent.toLowerCase();
          if (rowText.includes(searchTerm)) {
            row.classList.add('highlight');
          }
        });

        if (userServers.some(server => server.server_name.toLowerCase().includes(searchTerm) || server.serverid.toLowerCase().includes(searchTerm))) {
          container.querySelector('.user-info').classList.add('open');
        } else {
          container.querySelector('.user-info').classList.remove('open');
        }
      } else {
        container.style.display = 'none';
        container.querySelector('.user-info').classList.remove('open');
      }
    });
  });
}