import Script from 'next/script';
import React from 'react';

export const SystemJSImportMap = () => {
  return (
    <Script
      id="systemjs-importmap"
      type="systemjs-importmap"
      dangerouslySetInnerHTML={{
        __html: `
    {
      "imports": {
        "react": "app:react",
        "react-dom": "app:react-dom"
      }
    }
    `,
      }}
    />
  );
}

SystemJSImportMap.displayName = 'SystemJSImportMap';