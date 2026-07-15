/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Self-hosted variable font package; ships CSS only, no type declarations.
declare module '@fontsource-variable/inter'
