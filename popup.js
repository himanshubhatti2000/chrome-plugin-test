chrome.storage.local.get(['isActive'], function(result) {
    let isActive = result.isActive !== undefined ? result.isActive : true; // Default to active
    updateButton(isActive);
  });
  
  function updateButton(isActive) {
    let button = document.getElementById('toggleButton');
    button.textContent = isActive ? 'Make it inactive' : 'Make it active';
    button.onclick = function() {
      chrome.storage.local.set({'isActive': !isActive}, function() {
        updateButton(!isActive);
      });
    };
  }
  