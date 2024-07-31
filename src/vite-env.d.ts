/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_RPC_URL: string
  readonly VITE_TON_CONNECT_MANIFEST: string
  readonly VITE_IS_STUB_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
