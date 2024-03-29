import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

/** Para los EsModules debo usar la siguiente funcion para leer archivos Json mientras liberan la opcion
 *  import movies from 'movies.json' with {type:json}
 */
export const readJson = (path) => require(path)
