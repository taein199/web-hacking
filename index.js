const localImageUrl = chrome.runtime.getURL('face.jpg');

const replaceContent = () => {
  let imgs = document.querySelectorAll('img');
  imgs.forEach((a) => {
    if (!a.src.includes(localImageUrl)) {
      a.src = localImageUrl;
    }
  });

  let elements = document.querySelectorAll('body *:not(script):not(style):not(noscript)');
  elements.forEach((el) => {
    if (el.childNodes.length > 0) {
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
          if (!node.nodeValue.includes('taein')) {
            node.nodeValue = 'taein';
          }
        }
      });
    }
  });
};

setInterval(replaceContent, 1000);