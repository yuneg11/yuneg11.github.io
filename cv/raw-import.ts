// The site loader reads data.toml through Vite's "?raw" import; teach Bun the same.
import { plugin } from 'bun'

plugin({
  name: 'raw-import',
  setup(build) {
    build.onResolve({ filter: /\?raw$/ }, (args) => ({
      path: Bun.resolveSync(args.path.slice(0, -'?raw'.length), args.importer.replace(/[^/]+$/, '')),
      namespace: 'raw',
    }))
    build.onLoad({ filter: /.*/, namespace: 'raw' }, async (args) => ({
      contents: `export default ${JSON.stringify(await Bun.file(args.path).text())}`,
      loader: 'js',
    }))
  },
})
