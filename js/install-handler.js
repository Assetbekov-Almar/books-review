let deferredInstallPrompt = null;


window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    showDownloadPrompt();
});

document.addEventListener('click', downloadButtonClicked)

function downloadButtonClicked(event) {
  const element = event.target;
  if(element.classList.contains("downloadButton")) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice
        .then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              deferredInstallPrompt = null;
              const prompt = document.querySelector('.downloadPrompt')
              if (prompt) {
                prompt.style.display = 'none';
                localStorage.setItem('is-installed', 'true')
              }

            } else {
                console.log(choiceResult)
            }
        })
  }
}

function showDownloadPrompt() {
  const prompt = document.querySelector('.downloadPrompt')
  if (prompt) {
    prompt.style.display = 'grid';
  }
}

window.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    
    if (!isInStandaloneMode()) {
        alert('open in app');
    }
});

async function foo(){
    if ('getInstalledRelatedApps' in window.navigator) {
        const relatedApps = await navigator.getInstalledRelatedApps();
        relatedApps.forEach((app) => {
          //if your PWA exists in the array it is installed
          alert(app.platform, app.url);
        });
      }
}

foo();



const isInStandaloneMode = () =>(window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');



