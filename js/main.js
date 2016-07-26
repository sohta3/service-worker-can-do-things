if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);
   navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
     reg.pushManager.subscribe({
       userVisibleOnly: true
     }).then(function(sub) {
       console.log('endpoint:',  sub.endpoint);
     });
   });
 }).catch(function(err) {
   console.log(':^(', err);
 });
}
