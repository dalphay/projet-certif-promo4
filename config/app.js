/**
 * THIS FILE SHOULD'NT BE VERSIONNED (GIT)
 * AS IT CONTAINS PASSWORDS
 */
const config = {
    token: {
        expiresIn: 4*60*60, // 4h
        secret: process.env.JWT_SECRET
    }
}
module.exports = config