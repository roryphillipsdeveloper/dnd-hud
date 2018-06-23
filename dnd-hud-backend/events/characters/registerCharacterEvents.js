const registerAddCharacter = require('./addCharacter');
const registerDamageCharacter = require('./damageCharacter');
const registerHealCharacter = require('./healCharacter');
const registerAddCharacterCondition = require('./addCondition');
const registerRemoveCharacterCondition = require ('./removeCondition');

module.exports = (socket, store) => {
    registerAddCharacter(socket, store || {});
    registerDamageCharacter(socket, store || {});
    registerHealCharacter(socket, store || {});
    registerAddCharacterCondition(socket, store || {});
    registerRemoveCharacterCondition(socket, store || {});
};