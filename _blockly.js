const Blockly = require('./dist/blockly_compressed');
Blockly.Blocks = Object.assign(Blockly.Blocks, require('./dist/blocks_compressed')(Blockly));
Blockly.JavaScript = require('./dist/javascript_compressed')(Blockly);
module.exports = Blockly;