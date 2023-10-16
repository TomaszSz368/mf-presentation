'use client'

import { mountRootParcel, ParcelConfig } from 'single-spa';
import { setSystemReactImports } from '@/src/helpers/system';

import Parcel from 'single-spa-react/parcel';

const ROOT_URL = 'http://localhost:8080';

setSystemReactImports();

export default function DriverAccount() {

    return (
      <Parcel
        config={
          System.import(
            `${ROOT_URL}/microfrontend/entry-spa.js`,
          ) as unknown as ParcelConfig
        }
        mountParcel={mountRootParcel}
        wrapWith="div"
        hostName={'microfrontend'}
        handleError={console.error}
      />
    );
}
