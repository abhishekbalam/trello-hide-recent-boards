chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    console.log('State Changed');
    const timer = setInterval(() => {
        var test=chrome.tabs.executeScript(null,{code: 'var a=window.document.getElementsByClassName("boards-page-board-section")[1];if(a){try{a.parentNode.style.display="none";}catch(err){}}' }, _=>chrome.runtime.lastError);
        if(test){
            clearInterval(timer);
        }
    }, 150);
});