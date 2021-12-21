const bcrypt = require("bcrypt");
const {
    config
} = require("../config");

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(Number(config.encrypt.salt));
    const encryptedPass = await bcrypt.hash(password, salt);
    return encryptedPass;
}

async function comparePassword(password1, password2) {
    const comparedPass = await bcrypt.compare(password1, password2);
    return comparedPass;
}

module.exports = {
    encryptPassword: encryptPassword,
    comparePassword: comparePassword,
};