'use strict';

chrome.runtime.onInstalled.addListener(details => {
  chrome.tabs.create({url: "http://beta.qiosk.com/#/login"}, function (tab) {
  });
});



console.log('\'Allo \'Allo! Event Page for Browser Action');
