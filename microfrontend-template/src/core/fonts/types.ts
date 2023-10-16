export interface FontLoadInitialConfig {
  name: string;
  style: 'italic' | 'normal';
  weight: string;
}

export interface FontLoadConfig extends FontLoadInitialConfig {
  url: string;
}
