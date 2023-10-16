# Microfrontend Template

This repository is template for creating microfrontends using SystemJS and Vite

### Single-SPA

`entry-spa.ts` and `vite.config.ts`

Preferred way of usage, utilizing single-spa library. Low configuration and good react support.
It support multiple microfrontends on one page.

## Utils

### LazyImage

`src/core/components/LazyImage.tsx`

Component for lazy loading images. It uses import.meta.url to load images from microfrontend domain.

### Fonts

`src/core/fonts`

Util for loading fonts from inside microfrontend. It uses import.meta.url to load fonts from microfrontend domain.
This way can be used to load other assets like images, videos, etc.
