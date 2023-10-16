import React, * as ReactRest from "react";
import ReactDOM from "react-dom";

import "systemjs/dist/system.min.js";

export const setSystemReactImports = () => {
  System.set("app:react", { default: React, __useDefault: true, ...ReactRest });
  System.set("app:react-dom", { default: ReactDOM, __useDefault: true, ...ReactDOM });
};
