document.querySelector("model-viewer").addEventListener("progress",(e=>{const t=e.target.querySelector(".progress-bar");e.target.querySelector(".update-bar").style.width=100*e.detail.totalProgress+"%",1===e.detail.totalProgress?t.classList.add("hide"):(t.classList.remove("hide"),0===e.detail.totalProgress&&e.target.querySelector(".center-pre-prompt").classList.add("hide"))}));
//# sourceMappingURL=index.ccb71794.js.map
