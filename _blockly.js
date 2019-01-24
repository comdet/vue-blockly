const Blockly = require('./blockly/blockly_compressed');

Blockly.Blocks = Object.assign(Blockly.Blocks, require('./blockly/blocks_compressed')(Blockly));
Blockly.JavaScript = require('./blockly/javascript_compressed')(Blockly);

module.exports = Blockly;