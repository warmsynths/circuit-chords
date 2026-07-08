declare module '*/human-engine.js' {
  export const HumanPanel: any;
  export type HumanState = any;
  export type SharedChord = any;
  export type SharedProgression = any;
  export const encodeProgression: (state: any) => string;
  export const decodeProgression: (encoded: string) => any;
}

declare module 'human-engine' {
  export const HumanPanel: any;
  export type HumanState = any;
  export type SharedChord = any;
  export type SharedProgression = any;
  export const encodeProgression: (state: any) => string;
  export const decodeProgression: (encoded: string) => any;
}

interface HTMLElementTagNameMap {
  'human-panel': any;
}

