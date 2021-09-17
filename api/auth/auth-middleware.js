const { findBy } = require('../users/users-model')

const checkUsernameExists = async (req, res, next) => {
    try {
        const [user] = await findBy({ username: req.body.username})
        if (!user) {
            next({ status: 422, message: 'No user found'})
        } else {
            req.user = user
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkUsernameExists,
}
