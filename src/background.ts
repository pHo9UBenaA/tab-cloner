/// <reference types="npm:@types/chrome" />

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;

    const { id: targetTabId } = tabs[0];

    if (targetTabId !== undefined) {
      chrome.tabs.duplicate(targetTabId, (newTab) => {
        if (newTab) {
          chrome.windows.update(newTab.windowId, { focused: true });
        }
      });
    }
  });
});
