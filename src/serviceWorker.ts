import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('service-worker.js');

  wb.addEventListener('installed', event => {
    console.log(`Service worker: event isUpdate ${event.isUpdate ? 'true' : 'false'}`);

    if (event.isUpdate) {
      // @ts-ignore
      if (window.confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    }
  });

  wb.register();
}
