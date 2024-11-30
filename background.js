const morningTab = "https://www.notion.so/d66094d537214d4fbf893087f70ac89c?v=ebf8969860394271a018e7074b815a16";
const defaultTab = "blank.html";

// Thanks ChatGPT!
chrome.tabs.onCreated.addListener((tab) => {
  const hour = new Date().getHours();
  let newTabPage;

  if (hour >= 6 && hour < 11) {
    newTabPage = morningTab;
    if (tab.pendingUrl === "chrome://newtab/") {
      chrome.tabs.update(tab.id, { url: newTabPage });
    }
    return;
  }
  
  newTabPage = defaultTab;
  if (tab.pendingUrl === "chrome://newtab/") {
    chrome.tabs.update(tab.id, { url: chrome.runtime.getURL(newTabPage) });
  }

});
