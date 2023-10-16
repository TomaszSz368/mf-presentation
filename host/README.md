This is example micro-frontend repository

# Microfront

To enable Microfront you need to do a few things:

- Put import map into HTML of page: `SystemJSImportMap.tsx`
- Map dependencies to bundled packages: `helpers/system.ts`
- Attach micro-frontend through single-spa parcel: `Microfront.tsx`

## Found limitations

- Single spa is not able to re-mount package with StrictMode re-rendering
- Import map must be a part of HTML when systemJS is loaded
