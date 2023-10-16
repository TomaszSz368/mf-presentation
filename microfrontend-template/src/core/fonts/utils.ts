import { FontLoadConfig, FontLoadInitialConfig } from '~src/core/fonts/types';

export const FontsConfigs: FontLoadInitialConfig[] = [
  {
    name: 'Roboto-Regular',
    weight: '400',
    style: 'normal',
  },
  {
    name: 'Roboto-RegularItalic',
    weight: '400',
    style: 'italic',
  },
];
export async function loadFonts() {
  try {
    const fontLoadConfigs: FontLoadConfig[] = await Promise.all(
      FontsConfigs.map(fontConfig =>
        import(`./assets/${fontConfig.name}.woff2?url`).then(importResult => {
          if (import.meta.env.PROD) {
            const fontPath = `/microfrontend${importResult.default}`;

            return {
              ...fontConfig,
              url: new URL(fontPath, import.meta.url).toString(),
            };
          } else {
            return {
              ...fontConfig,
              url: importResult.default,
            };
          }
        }),
      ),
    );

    const fontFacesResults = await Promise.allSettled(
      fontLoadConfigs.map(fontLoadConfig => getFallbackFontPromise(fontLoadConfig)),
    );

    fontFacesResults.forEach(fontFaceResult => {
      if (fontFaceResult.status === 'fulfilled' && fontFaceResult.value instanceof FontFace) {
        document.fonts.add(fontFaceResult.value);
      }
    });
  } catch (e) {
    console.error('Problem with loading Microfront fonts!');
    console.error(e);
  }
}

function getFallbackFontPromise(fontLoadConfig: FontLoadConfig) {
  return new FontFace('Roboto', `local('${fontLoadConfig.name}')`, {
    weight: fontLoadConfig.weight,
    display: 'swap',
    style: fontLoadConfig.style,
  })
    .load()
    .catch(() =>
      new FontFace('Roboto', `local('${fontLoadConfig.name.replace('-', '')}')`, {
        weight: fontLoadConfig.weight,
        display: 'swap',
        style: fontLoadConfig.style,
      })
        .load()
        .catch(() =>
          new FontFace('Roboto', ` url('${fontLoadConfig.url}')`, {
            weight: fontLoadConfig.weight,
            display: 'swap',
            style: fontLoadConfig.style,
          })
            .load()
            .catch(() => {
              console.error(`DA: Problem with loading font ${fontLoadConfig.name}!`);
            }),
        ),
    );
}
