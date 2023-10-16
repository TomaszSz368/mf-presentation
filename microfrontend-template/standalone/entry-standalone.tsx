/**
 * This is entry point for testing purposes only we should use it on dev and stg environments only.
 */
import 'systemjs/dist/system.min';

import React, * as ReactRest from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { mountRootParcel, ParcelConfig } from 'single-spa';
import Parcel from 'single-spa-react/parcel';

System.set('app:react', { default: React, __useDefault: true, ...ReactRest });
System.set('app:react-dom', { default: ReactDOM, __useDefault: true, ...ReactDOM });

function App() {
  return (
    <div>
      <Parcel
        config={System.import(`${window.location.origin}/microfrontend/entry-spa.js`) as unknown as ParcelConfig}
        mountParcel={mountRootParcel}
        wrapWith="div"
      />
    </div>
  );
}
createRoot(document.getElementById('root') as HTMLElement).render(<App />);
