// `*.toml` imports are transformed into a default-exported object at build time
// by the toml plugin in vite.config.ts. The typed, validated view lives in content.ts.
declare module '*.toml' {
  const content: unknown
  export default content
}
