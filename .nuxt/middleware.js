const middleware = {}

middleware['AuthService'] = require('../middleware/AuthService.js')
middleware['AuthService'] = middleware['AuthService'].default || middleware['AuthService']

middleware['UserService'] = require('../middleware/UserService.js')
middleware['UserService'] = middleware['UserService'].default || middleware['UserService']

export default middleware
