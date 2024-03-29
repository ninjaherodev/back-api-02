import { readJson } from '../util.js'
const auths = readJson('./auth.json')
export class Auth {
  static getAll = async ({ nickname }) => {
    try {
      if (nickname) {
        return auths.filter((auth) =>
          auth.nickname.some((g) => g.toLowerCase() === nickname.toLowerCase())
        )
      }
      return auths
    } catch (error) {
      Promise.reject(error)
    }
  }
}
