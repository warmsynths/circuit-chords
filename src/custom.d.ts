declare module '*/human-engine.js' {
  export const HumanPanel: any;
  export type HumanState = any;
}

declare module 'human-engine' {
  export const HumanPanel: any;
  export type HumanState = any;
}

declare global {
  interface HTMLElementTagNameMap {
    'human-panel': any;
  }
}

export {};
