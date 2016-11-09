'use strict';

chrome.runtime.onInstalled.addListener(details => {
  chrome.tabs.create({url: "http://google.com/"}, function (tab) {
  });
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
