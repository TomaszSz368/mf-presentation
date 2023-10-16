/**
 * Entrypoint used in local development
 */

import { createRoot } from 'react-dom/client';

import { RootApp } from '~src/apps/RootApp';

createRoot(document.getElementById('root') as HTMLElement).render(<RootApp hostName='dev-test'/>);
