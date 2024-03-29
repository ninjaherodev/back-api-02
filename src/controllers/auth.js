import { Auth } from '../models/auth.js'

export class AuthController {
  static getAll = async (req, res) => {
    const { nickname } = req.query
    const auths = await Auth.getAll({ nickname })
    res.json(auths)
  }
}
