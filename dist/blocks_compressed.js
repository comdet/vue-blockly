
        module.exports = function(Blockly){
          var goog = Blockly.goog;
          Blockly.Blocks={};'use strict';


Blockly.Blocks.colour={};Blockly.Constants={};Blockly.Constants.Colour={};Blockly.Constants.Colour.HUE=20;
Blockly.defineBlocksWithJsonArray([{type:"colour_picker",message0:"%1",args0:[{type:"field_colour",name:"COLOUR",colour:"#ff0000"}],output:"Colour",colour:"%{BKY_COLOUR_HUE}",helpUrl:"%{BKY_COLOUR_PICKER_HELPURL}",tooltip:"%{BKY_COLOUR_PICKER_TOOLTIP}",extensions:["parent_tooltip_when_inline"]},{type:"colour_random",message0:"%{BKY_COLOUR_RANDOM_TITLE}",output:"Colour",colour:"%{BKY_COLOUR_HUE}",helpUrl:"%{BKY_COLOUR_RANDOM_HELPURL}",tooltip:"%{BKY_COLOUR_RANDOM_TOOLTIP}"},{type:"colour_rgb",message0:"%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
args0:[{type:"input_value",name:"RED",check:"Number",align:"RIGHT"},{type:"input_value",name:"GREEN",check:"Number",align:"RIGHT"},{type:"input_value",name:"BLUE",check:"Number",align:"RIGHT"}],output:"Colour",colour:"%{BKY_COLOUR_HUE}",helpUrl:"%{BKY_COLOUR_RGB_HELPURL}",tooltip:"%{BKY_COLOUR_RGB_TOOLTIP}"},{type:"colour_blend",message0:"%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",args0:[{type:"input_value",name:"COLOUR1",
check:"Colour",align:"RIGHT"},{type:"input_value",name:"COLOUR2",check:"Colour",align:"RIGHT"},{type:"input_value",name:"RATIO",check:"Number",align:"RIGHT"}],output:"Colour",colour:"%{BKY_COLOUR_HUE}",helpUrl:"%{BKY_COLOUR_BLEND_HELPURL}",tooltip:"%{BKY_COLOUR_BLEND_TOOLTIP}"}]);Blockly.Blocks.lists={};Blockly.Constants.Lists={};Blockly.Constants.Lists.HUE=260;
Blockly.defineBlocksWithJsonArray([{type:"lists_create_empty",message0:"%{BKY_LISTS_CREATE_EMPTY_TITLE}",output:"Array",colour:"%{BKY_LISTS_HUE}",tooltip:"%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",helpUrl:"%{BKY_LISTS_CREATE_EMPTY_HELPURL}"},{type:"lists_repeat",message0:"%{BKY_LISTS_REPEAT_TITLE}",args0:[{type:"input_value",name:"ITEM"},{type:"input_value",name:"NUM",check:"Number"}],output:"Array",colour:"%{BKY_LISTS_HUE}",tooltip:"%{BKY_LISTS_REPEAT_TOOLTIP}",helpUrl:"%{BKY_LISTS_REPEAT_HELPURL}"},{type:"lists_reverse",
message0:"%{BKY_LISTS_REVERSE_MESSAGE0}",args0:[{type:"input_value",name:"LIST",check:"Array"}],output:"Array",inputsInline:!0,colour:"%{BKY_LISTS_HUE}",tooltip:"%{BKY_LISTS_REVERSE_TOOLTIP}",helpUrl:"%{BKY_LISTS_REVERSE_HELPURL}"},{type:"lists_isEmpty",message0:"%{BKY_LISTS_ISEMPTY_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Boolean",colour:"%{BKY_LISTS_HUE}",tooltip:"%{BKY_LISTS_ISEMPTY_TOOLTIP}",helpUrl:"%{BKY_LISTS_ISEMPTY_HELPURL}"},{type:"lists_length",
message0:"%{BKY_LISTS_LENGTH_TITLE}",args0:[{type:"input_value",name:"VALUE",check:["String","Array"]}],output:"Number",colour:"%{BKY_LISTS_HUE}",tooltip:"%{BKY_LISTS_LENGTH_TOOLTIP}",helpUrl:"%{BKY_LISTS_LENGTH_HELPURL}"}]);
Blockly.Blocks.lists_create_with={init:function(){this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);this.setColour(Blockly.Msg.LISTS_HUE);this.itemCount_=3;this.updateShape_();this.setOutput(!0,"Array");this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("items",this.itemCount_);return a},domToMutation:function(a){this.itemCount_=parseInt(a.getAttribute("items"),
10);this.updateShape_()},decompose:function(a){var b=a.newBlock("lists_create_with_container");b.initSvg();for(var c=b.getInput("STACK").connection,d=0;d<this.itemCount_;d++){var e=a.newBlock("lists_create_with_item");e.initSvg();c.connect(e.previousConnection);c=e.nextConnection}return b},compose:function(a){var b=a.getInputTargetBlock("STACK");for(a=[];b;)a.push(b.valueConnection_),b=b.nextConnection&&b.nextConnection.targetBlock();for(b=0;b<this.itemCount_;b++){var c=this.getInput("ADD"+b).connection.targetConnection;
c&&-1==a.indexOf(c)&&c.disconnect()}this.itemCount_=a.length;this.updateShape_();for(b=0;b<this.itemCount_;b++)Blockly.Mutator.reconnect(a[b],this,"ADD"+b)},saveConnections:function(a){a=a.getInputTargetBlock("STACK");for(var b=0;a;){var c=this.getInput("ADD"+b);a.valueConnection_=c&&c.connection.targetConnection;b++;a=a.nextConnection&&a.nextConnection.targetBlock()}},updateShape_:function(){this.itemCount_&&this.getInput("EMPTY")?this.removeInput("EMPTY"):this.itemCount_||this.getInput("EMPTY")||
this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);for(var a=0;a<this.itemCount_;a++)if(!this.getInput("ADD"+a)){var b=this.appendValueInput("ADD"+a);0==a&&b.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH)}for(;this.getInput("ADD"+a);)this.removeInput("ADD"+a),a++}};
Blockly.Blocks.lists_create_with_container={init:function(){this.setColour(Blockly.Msg.LISTS_HUE);this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);this.appendStatementInput("STACK");this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.lists_create_with_item={init:function(){this.setColour(Blockly.Msg.LISTS_HUE);this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);this.contextMenu=!1}};
Blockly.Blocks.lists_indexOf={init:function(){var a=[[Blockly.Msg.LISTS_INDEX_OF_FIRST,"FIRST"],[Blockly.Msg.LISTS_INDEX_OF_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);this.setColour(Blockly.Msg.LISTS_HUE);this.setOutput(!0,"Number");this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);this.appendValueInput("FIND").appendField(new Blockly.FieldDropdown(a),"END");this.setInputsInline(!0);var b=this;this.setTooltip(function(){return Blockly.Msg.LISTS_INDEX_OF_TOOLTIP.replace("%1",
b.workspace.options.oneBasedIndex?"0":"-1")})}};
Blockly.Blocks.lists_getIndex={init:function(){var a=[[Blockly.Msg.LISTS_GET_INDEX_GET,"GET"],[Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE,"GET_REMOVE"],[Blockly.Msg.LISTS_GET_INDEX_REMOVE,"REMOVE"]];this.WHERE_OPTIONS=[[Blockly.Msg.LISTS_GET_INDEX_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_INDEX_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_INDEX_FIRST,"FIRST"],[Blockly.Msg.LISTS_GET_INDEX_LAST,"LAST"],[Blockly.Msg.LISTS_GET_INDEX_RANDOM,"RANDOM"]];this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);this.setColour(Blockly.Msg.LISTS_HUE);
a=new Blockly.FieldDropdown(a,function(a){this.sourceBlock_.updateStatement_("REMOVE"==a)});this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);this.appendDummyInput().appendField(a,"MODE").appendField("","SPACE");this.appendDummyInput("AT");Blockly.Msg.LISTS_GET_INDEX_TAIL&&this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);this.setInputsInline(!0);this.setOutput(!0);this.updateAt_(!0);var b=this;this.setTooltip(function(){var a=
b.getFieldValue("MODE"),d=b.getFieldValue("WHERE"),e="";switch(a+" "+d){case "GET FROM_START":case "GET FROM_END":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;break;case "GET FIRST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;break;case "GET LAST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;break;case "GET RANDOM":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;break;case "GET_REMOVE FROM_START":case "GET_REMOVE FROM_END":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;break;case "GET_REMOVE FIRST":e=
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;break;case "GET_REMOVE LAST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;break;case "GET_REMOVE RANDOM":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;break;case "REMOVE FROM_START":case "REMOVE FROM_END":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;break;case "REMOVE FIRST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;break;case "REMOVE LAST":e=Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;break;case "REMOVE RANDOM":e=
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM}if("FROM_START"==d||"FROM_END"==d)e+="  "+("FROM_START"==d?Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP:Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP).replace("%1",b.workspace.options.oneBasedIndex?"#1":"#0");return e})},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("statement",!this.outputConnection);var b=this.getInput("AT").type==Blockly.INPUT_VALUE;a.setAttribute("at",b);return a},domToMutation:function(a){var b="true"==
a.getAttribute("statement");this.updateStatement_(b);a="false"!=a.getAttribute("at");this.updateAt_(a)},updateStatement_:function(a){a!=!this.outputConnection&&(this.unplug(!0,!0),a?(this.setOutput(!1),this.setPreviousStatement(!0),this.setNextStatement(!0)):(this.setPreviousStatement(!1),this.setNextStatement(!1),this.setOutput(!0)))},updateAt_:function(a){this.removeInput("AT");this.removeInput("ORDINAL",!0);a?(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):
this.appendDummyInput("AT");var b=new Blockly.FieldDropdown(this.WHERE_OPTIONS,function(b){var c="FROM_START"==b||"FROM_END"==b;if(c!=a){var e=this.sourceBlock_;e.updateAt_(c);e.setFieldValue(b,"WHERE");return null}});this.getInput("AT").appendField(b,"WHERE");Blockly.Msg.LISTS_GET_INDEX_TAIL&&this.moveInputBefore("TAIL",null)}};
Blockly.Blocks.lists_setIndex={init:function(){var a=[[Blockly.Msg.LISTS_SET_INDEX_SET,"SET"],[Blockly.Msg.LISTS_SET_INDEX_INSERT,"INSERT"]];this.WHERE_OPTIONS=[[Blockly.Msg.LISTS_GET_INDEX_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_INDEX_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_INDEX_FIRST,"FIRST"],[Blockly.Msg.LISTS_GET_INDEX_LAST,"LAST"],[Blockly.Msg.LISTS_GET_INDEX_RANDOM,"RANDOM"]];this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);this.setColour(Blockly.Msg.LISTS_HUE);this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
this.appendDummyInput().appendField(new Blockly.FieldDropdown(a),"MODE").appendField("","SPACE");this.appendDummyInput("AT");this.appendValueInput("TO").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);this.setInputsInline(!0);this.setPreviousStatement(!0);this.setNextStatement(!0);this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);this.updateAt_(!0);var b=this;this.setTooltip(function(){var a=b.getFieldValue("MODE"),d=b.getFieldValue("WHERE"),e="";switch(a+" "+d){case "SET FROM_START":case "SET FROM_END":e=
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;break;case "SET FIRST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;break;case "SET LAST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;break;case "SET RANDOM":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;break;case "INSERT FROM_START":case "INSERT FROM_END":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;break;case "INSERT FIRST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;break;case "INSERT LAST":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
break;case "INSERT RANDOM":e=Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM}if("FROM_START"==d||"FROM_END"==d)e+="  "+Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1",b.workspace.options.oneBasedIndex?"#1":"#0");return e})},mutationToDom:function(){var a=document.createElement("mutation"),b=this.getInput("AT").type==Blockly.INPUT_VALUE;a.setAttribute("at",b);return a},domToMutation:function(a){a="false"!=a.getAttribute("at");this.updateAt_(a)},updateAt_:function(a){this.removeInput("AT");
this.removeInput("ORDINAL",!0);a?(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):this.appendDummyInput("AT");var b=new Blockly.FieldDropdown(this.WHERE_OPTIONS,function(b){var c="FROM_START"==b||"FROM_END"==b;if(c!=a){var e=this.sourceBlock_;e.updateAt_(c);e.setFieldValue(b,"WHERE");return null}});this.moveInputBefore("AT","TO");this.getInput("ORDINAL")&&this.moveInputBefore("ORDINAL",
"TO");this.getInput("AT").appendField(b,"WHERE")}};
Blockly.Blocks.lists_getSublist={init:function(){this.WHERE_OPTIONS_1=[[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST,"FIRST"]];this.WHERE_OPTIONS_2=[[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START,"FROM_START"],[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END,"FROM_END"],[Blockly.Msg.LISTS_GET_SUBLIST_END_LAST,"LAST"]];this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);this.setColour(Blockly.Msg.LISTS_HUE);
this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);this.appendDummyInput("AT1");this.appendDummyInput("AT2");Blockly.Msg.LISTS_GET_SUBLIST_TAIL&&this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL);this.setInputsInline(!0);this.setOutput(!0,"Array");this.updateAt_(1,!0);this.updateAt_(2,!0);this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)},mutationToDom:function(){var a=document.createElement("mutation"),b=this.getInput("AT1").type==
Blockly.INPUT_VALUE;a.setAttribute("at1",b);b=this.getInput("AT2").type==Blockly.INPUT_VALUE;a.setAttribute("at2",b);return a},domToMutation:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.updateAt_(1,b);this.updateAt_(2,a)},updateAt_:function(a,b){this.removeInput("AT"+a);this.removeInput("ORDINAL"+a,!0);b?(this.appendValueInput("AT"+a).setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL"+a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)):
this.appendDummyInput("AT"+a);var c=new Blockly.FieldDropdown(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var d=this.sourceBlock_;d.updateAt_(a,e);d.setFieldValue(c,"WHERE"+a);return null}});this.getInput("AT"+a).appendField(c,"WHERE"+a);1==a&&(this.moveInputBefore("AT1","AT2"),this.getInput("ORDINAL1")&&this.moveInputBefore("ORDINAL1","AT2"));Blockly.Msg.LISTS_GET_SUBLIST_TAIL&&this.moveInputBefore("TAIL",null)}};
Blockly.Blocks.lists_sort={init:function(){this.jsonInit({message0:Blockly.Msg.LISTS_SORT_TITLE,args0:[{type:"field_dropdown",name:"TYPE",options:[[Blockly.Msg.LISTS_SORT_TYPE_NUMERIC,"NUMERIC"],[Blockly.Msg.LISTS_SORT_TYPE_TEXT,"TEXT"],[Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE,"IGNORE_CASE"]]},{type:"field_dropdown",name:"DIRECTION",options:[[Blockly.Msg.LISTS_SORT_ORDER_ASCENDING,"1"],[Blockly.Msg.LISTS_SORT_ORDER_DESCENDING,"-1"]]},{type:"input_value",name:"LIST",check:"Array"}],output:"Array",colour:Blockly.Msg.LISTS_HUE,
tooltip:Blockly.Msg.LISTS_SORT_TOOLTIP,helpUrl:Blockly.Msg.LISTS_SORT_HELPURL})}};
Blockly.Blocks.lists_split={init:function(){var a=this,b=new Blockly.FieldDropdown([[Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT,"SPLIT"],[Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST,"JOIN"]],function(b){a.updateType_(b)});this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL);this.setColour(Blockly.Msg.LISTS_HUE);this.appendValueInput("INPUT").setCheck("String").appendField(b,"MODE");this.appendValueInput("DELIM").setCheck("String").appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER);this.setInputsInline(!0);this.setOutput(!0,
"Array");this.setTooltip(function(){var b=a.getFieldValue("MODE");if("SPLIT"==b)return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;if("JOIN"==b)return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;throw"Unknown mode: "+b;})},updateType_:function(a){"SPLIT"==a?(this.outputConnection.setCheck("Array"),this.getInput("INPUT").setCheck("String")):(this.outputConnection.setCheck("String"),this.getInput("INPUT").setCheck("Array"))},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("mode",
this.getFieldValue("MODE"));return a},domToMutation:function(a){this.updateType_(a.getAttribute("mode"))}};Blockly.Blocks.logic={};Blockly.Constants.Logic={};Blockly.Constants.Logic.HUE=210;
Blockly.defineBlocksWithJsonArray([{type:"logic_boolean",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["%{BKY_LOGIC_BOOLEAN_TRUE}","TRUE"],["%{BKY_LOGIC_BOOLEAN_FALSE}","FALSE"]]}],output:"Boolean",colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_LOGIC_BOOLEAN_TOOLTIP}",helpUrl:"%{BKY_LOGIC_BOOLEAN_HELPURL}"},{type:"controls_if",message0:"%{BKY_CONTROLS_IF_MSG_IF} %1",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"%{BKY_CONTROLS_IF_MSG_THEN} %1",args1:[{type:"input_statement",
name:"DO0"}],previousStatement:null,nextStatement:null,colour:"%{BKY_LOGIC_HUE}",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",mutator:"controls_if_mutator",extensions:["controls_if_tooltip"]},{type:"controls_ifelse",message0:"%{BKY_CONTROLS_IF_MSG_IF} %1",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"%{BKY_CONTROLS_IF_MSG_THEN} %1",args1:[{type:"input_statement",name:"DO0"}],message2:"%{BKY_CONTROLS_IF_MSG_ELSE} %1",args2:[{type:"input_statement",name:"ELSE"}],previousStatement:null,nextStatement:null,
colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKYCONTROLS_IF_TOOLTIP_2}",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",extensions:["controls_if_tooltip"]},{type:"logic_compare",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["=","EQ"],["\u2260","NEQ"],["\u200f<","LT"],["\u200f\u2264","LTE"],["\u200f>","GT"],["\u200f\u2265","GTE"]]},{type:"input_value",name:"B"}],inputsInline:!0,output:"Boolean",colour:"%{BKY_LOGIC_HUE}",helpUrl:"%{BKY_LOGIC_COMPARE_HELPURL}",extensions:["logic_compare",
"logic_op_tooltip"]},{type:"logic_operation",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",check:"Boolean"},{type:"field_dropdown",name:"OP",options:[["%{BKY_LOGIC_OPERATION_AND}","AND"],["%{BKY_LOGIC_OPERATION_OR}","OR"]]},{type:"input_value",name:"B",check:"Boolean"}],inputsInline:!0,output:"Boolean",colour:"%{BKY_LOGIC_HUE}",helpUrl:"%{BKY_LOGIC_OPERATION_HELPURL}",extensions:["logic_op_tooltip"]},{type:"logic_negate",message0:"%{BKY_LOGIC_NEGATE_TITLE}",args0:[{type:"input_value",name:"BOOL",
check:"Boolean"}],output:"Boolean",colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_LOGIC_NEGATE_TOOLTIP}",helpUrl:"%{BKY_LOGIC_NEGATE_HELPURL}"},{type:"logic_null",message0:"%{BKY_LOGIC_NULL}",output:null,colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_LOGIC_NULL_TOOLTIP}",helpUrl:"%{BKY_LOGIC_NULL_HELPURL}"},{type:"logic_ternary",message0:"%{BKY_LOGIC_TERNARY_CONDITION} %1",args0:[{type:"input_value",name:"IF",check:"Boolean"}],message1:"%{BKY_LOGIC_TERNARY_IF_TRUE} %1",args1:[{type:"input_value",name:"THEN"}],
message2:"%{BKY_LOGIC_TERNARY_IF_FALSE} %1",args2:[{type:"input_value",name:"ELSE"}],output:null,colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_LOGIC_TERNARY_TOOLTIP}",helpUrl:"%{BKY_LOGIC_TERNARY_HELPURL}",extensions:["logic_ternary"]}]);
Blockly.defineBlocksWithJsonArray([{type:"controls_if_if",message0:"%{BKY_CONTROLS_IF_IF_TITLE_IF}",nextStatement:null,enableContextMenu:!1,colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_CONTROLS_IF_IF_TOOLTIP}"},{type:"controls_if_elseif",message0:"%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",previousStatement:null,nextStatement:null,enableContextMenu:!1,colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"},{type:"controls_if_else",message0:"%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",previousStatement:null,
enableContextMenu:!1,colour:"%{BKY_LOGIC_HUE}",tooltip:"%{BKY_CONTROLS_IF_ELSE_TOOLTIP}"}]);Blockly.Constants.Logic.TOOLTIPS_BY_OP={EQ:"%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",NEQ:"%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",LT:"%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",LTE:"%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",GT:"%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",GTE:"%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",AND:"%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",OR:"%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"};
Blockly.Extensions.register("logic_op_tooltip",Blockly.Extensions.buildTooltipForDropdown("OP",Blockly.Constants.Logic.TOOLTIPS_BY_OP));
Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN={elseifCount_:0,elseCount_:0,mutationToDom:function(){if(!this.elseifCount_&&!this.elseCount_)return null;var a=document.createElement("mutation");this.elseifCount_&&a.setAttribute("elseif",this.elseifCount_);this.elseCount_&&a.setAttribute("else",1);return a},domToMutation:function(a){this.elseifCount_=parseInt(a.getAttribute("elseif"),10)||0;this.elseCount_=parseInt(a.getAttribute("else"),10)||0;this.updateShape_()},decompose:function(a){var b=a.newBlock("controls_if_if");
b.initSvg();for(var c=b.nextConnection,d=1;d<=this.elseifCount_;d++){var e=a.newBlock("controls_if_elseif");e.initSvg();c.connect(e.previousConnection);c=e.nextConnection}this.elseCount_&&(a=a.newBlock("controls_if_else"),a.initSvg(),c.connect(a.previousConnection));return b},compose:function(a){var b=a.nextConnection.targetBlock();this.elseCount_=this.elseifCount_=0;a=[null];for(var c=[null],d=null;b;){switch(b.type){case "controls_if_elseif":this.elseifCount_++;a.push(b.valueConnection_);c.push(b.statementConnection_);
break;case "controls_if_else":this.elseCount_++;d=b.statementConnection_;break;default:throw"Unknown block type.";}b=b.nextConnection&&b.nextConnection.targetBlock()}this.updateShape_();for(b=1;b<=this.elseifCount_;b++)Blockly.Mutator.reconnect(a[b],this,"IF"+b),Blockly.Mutator.reconnect(c[b],this,"DO"+b);Blockly.Mutator.reconnect(d,this,"ELSE")},saveConnections:function(a){a=a.nextConnection.targetBlock();for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=this.getInput("IF"+b),d=this.getInput("DO"+
b);a.valueConnection_=c&&c.connection.targetConnection;a.statementConnection_=d&&d.connection.targetConnection;b++;break;case "controls_if_else":d=this.getInput("ELSE");a.statementConnection_=d&&d.connection.targetConnection;break;default:throw"Unknown block type.";}a=a.nextConnection&&a.nextConnection.targetBlock()}},updateShape_:function(){this.getInput("ELSE")&&this.removeInput("ELSE");for(var a=1;this.getInput("IF"+a);)this.removeInput("IF"+a),this.removeInput("DO"+a),a++;for(a=1;a<=this.elseifCount_;a++)this.appendValueInput("IF"+
a).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),this.appendStatementInput("DO"+a).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);this.elseCount_&&this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)}};Blockly.Extensions.registerMutator("controls_if_mutator",Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN,null,["controls_if_elseif","controls_if_else"]);
Blockly.Constants.Logic.CONTROLS_IF_TOOLTIP_EXTENSION=function(){this.setTooltip(function(){if(this.elseifCount_||this.elseCount_){if(!this.elseifCount_&&this.elseCount_)return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;if(this.elseifCount_&&!this.elseCount_)return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;if(this.elseifCount_&&this.elseCount_)return Blockly.Msg.CONTROLS_IF_TOOLTIP_4}else return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;return""}.bind(this))};Blockly.Extensions.register("controls_if_tooltip",Blockly.Constants.Logic.CONTROLS_IF_TOOLTIP_EXTENSION);
Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN={onchange:function(a){this.prevBlocks_||(this.prevBlocks_=[null,null]);var b=this.getInputTargetBlock("A"),c=this.getInputTargetBlock("B");b&&c&&!b.outputConnection.checkType_(c.outputConnection)&&(Blockly.Events.setGroup(a.group),a=this.prevBlocks_[0],a!==b&&(b.unplug(),a&&!a.isShadow()&&this.getInput("A").connection.connect(a.outputConnection)),b=this.prevBlocks_[1],b!==c&&(c.unplug(),b&&!b.isShadow()&&this.getInput("B").connection.connect(b.outputConnection)),
this.bumpNeighbours_(),Blockly.Events.setGroup(!1));this.prevBlocks_[0]=this.getInputTargetBlock("A");this.prevBlocks_[1]=this.getInputTargetBlock("B")}};Blockly.Constants.Logic.LOGIC_COMPARE_EXTENSION=function(){this.mixin(Blockly.Constants.Logic.LOGIC_COMPARE_ONCHANGE_MIXIN)};Blockly.Extensions.register("logic_compare",Blockly.Constants.Logic.LOGIC_COMPARE_EXTENSION);
Blockly.Constants.Logic.LOGIC_TERNARY_ONCHANGE_MIXIN={prevParentConnection_:null,onchange:function(a){var b=this.getInputTargetBlock("THEN"),c=this.getInputTargetBlock("ELSE"),d=this.outputConnection.targetConnection;if((b||c)&&d)for(var e=0;2>e;e++){var f=1==e?b:c;f&&!f.outputConnection.checkType_(d)&&(Blockly.Events.setGroup(a.group),d===this.prevParentConnection_?(this.unplug(),d.getSourceBlock().bumpNeighbours_()):(f.unplug(),f.bumpNeighbours_()),Blockly.Events.setGroup(!1))}this.prevParentConnection_=
d}};Blockly.Extensions.registerMixin("logic_ternary",Blockly.Constants.Logic.LOGIC_TERNARY_ONCHANGE_MIXIN);Blockly.Blocks.loops={};Blockly.Constants.Loops={};Blockly.Constants.Loops.HUE=120;
Blockly.defineBlocksWithJsonArray([{type:"controls_repeat_ext",message0:"%{BKY_CONTROLS_REPEAT_TITLE}",args0:[{type:"input_value",name:"TIMES",check:"Number"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:"%{BKY_LOOPS_HUE}",tooltip:"%{BKY_CONTROLS_REPEAT_TOOLTIP}",helpUrl:"%{BKY_CONTROLS_REPEAT_HELPURL}"},{type:"controls_repeat",message0:"%{BKY_CONTROLS_REPEAT_TITLE}",args0:[{type:"field_number",name:"TIMES",
value:10,min:0,precision:1}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:"%{BKY_LOOPS_HUE}",tooltip:"%{BKY_CONTROLS_REPEAT_TOOLTIP}",helpUrl:"%{BKY_CONTROLS_REPEAT_HELPURL}"},{type:"controls_whileUntil",message0:"%1 %2",args0:[{type:"field_dropdown",name:"MODE",options:[["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}","WHILE"],["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}","UNTIL"]]},{type:"input_value",name:"BOOL",
check:"Boolean"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:"%{BKY_LOOPS_HUE}",helpUrl:"%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",extensions:["controls_whileUntil_tooltip"]},{type:"controls_for",message0:"%{BKY_CONTROLS_FOR_TITLE}",args0:[{type:"field_variable",name:"VAR",variable:null},{type:"input_value",name:"FROM",check:"Number",align:"RIGHT"},{type:"input_value",name:"TO",check:"Number",align:"RIGHT"},{type:"input_value",
name:"BY",check:"Number",align:"RIGHT"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:"%{BKY_LOOPS_HUE}",helpUrl:"%{BKY_CONTROLS_FOR_HELPURL}",extensions:["contextMenu_newGetVariableBlock","controls_for_tooltip"]},{type:"controls_forEach",message0:"%{BKY_CONTROLS_FOREACH_TITLE}",args0:[{type:"field_variable",name:"VAR",variable:null},{type:"input_value",name:"LIST",check:"Array"}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:"%{BKY_LOOPS_HUE}",helpUrl:"%{BKY_CONTROLS_FOREACH_HELPURL}",extensions:["contextMenu_newGetVariableBlock","controls_forEach_tooltip"]},{type:"controls_flow_statements",message0:"%1",args0:[{type:"field_dropdown",name:"FLOW",options:[["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}","BREAK"],["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}","CONTINUE"]]}],previousStatement:null,colour:"%{BKY_LOOPS_HUE}",
helpUrl:"%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",extensions:["controls_flow_tooltip","controls_flow_in_loop_check"]}]);Blockly.Constants.Loops.WHILE_UNTIL_TOOLTIPS={WHILE:"%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",UNTIL:"%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}"};Blockly.Extensions.register("controls_whileUntil_tooltip",Blockly.Extensions.buildTooltipForDropdown("MODE",Blockly.Constants.Loops.WHILE_UNTIL_TOOLTIPS));
Blockly.Constants.Loops.BREAK_CONTINUE_TOOLTIPS={BREAK:"%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",CONTINUE:"%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}"};Blockly.Extensions.register("controls_flow_tooltip",Blockly.Extensions.buildTooltipForDropdown("FLOW",Blockly.Constants.Loops.BREAK_CONTINUE_TOOLTIPS));
Blockly.Constants.Loops.CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN={customContextMenu:function(a){if(!this.isInFlyout){var b=this.getField("VAR").getVariable(),c=b.name;if(!this.isCollapsed()&&null!=c){var d={enabled:!0};d.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1",c);b=Blockly.Variables.generateVariableFieldDom(b);b=goog.dom.createDom("block",null,b);b.setAttribute("type","variables_get");d.callback=Blockly.ContextMenu.callbackFactory(this,b);a.push(d)}}}};
Blockly.Extensions.registerMixin("contextMenu_newGetVariableBlock",Blockly.Constants.Loops.CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN);Blockly.Extensions.register("controls_for_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_CONTROLS_FOR_TOOLTIP}","VAR"));Blockly.Extensions.register("controls_forEach_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_CONTROLS_FOREACH_TOOLTIP}","VAR"));
Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN={LOOP_TYPES:["controls_repeat","controls_repeat_ext","controls_forEach","controls_for","controls_whileUntil"],onchange:function(){if(this.workspace.isDragging&&!this.workspace.isDragging()){var a=!1,b=this;do{if(-1!=this.LOOP_TYPES.indexOf(b.type)){a=!0;break}b=b.getSurroundParent()}while(b);a?(this.setWarningText(null),this.isInFlyout||this.setDisabled(!1)):(this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING),this.isInFlyout||
this.getInheritedDisabled()||this.setDisabled(!0))}}};Blockly.Extensions.registerMixin("controls_flow_in_loop_check",Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN);Blockly.Blocks.math={};Blockly.Constants.Math={};Blockly.Constants.Math.HUE=230;
Blockly.defineBlocksWithJsonArray([{type:"math_number",message0:"%1",args0:[{type:"field_number",name:"NUM",value:0}],output:"Number",colour:"%{BKY_MATH_HUE}",helpUrl:"%{BKY_MATH_NUMBER_HELPURL}",tooltip:"%{BKY_MATH_NUMBER_TOOLTIP}",extensions:["parent_tooltip_when_inline"]},{type:"math_arithmetic",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A",check:"Number"},{type:"field_dropdown",name:"OP",options:[["%{BKY_MATH_ADDITION_SYMBOL}","ADD"],["%{BKY_MATH_SUBTRACTION_SYMBOL}","MINUS"],["%{BKY_MATH_MULTIPLICATION_SYMBOL}",
"MULTIPLY"],["%{BKY_MATH_DIVISION_SYMBOL}","DIVIDE"],["%{BKY_MATH_POWER_SYMBOL}","POWER"]]},{type:"input_value",name:"B",check:"Number"}],inputsInline:!0,output:"Number",colour:"%{BKY_MATH_HUE}",helpUrl:"%{BKY_MATH_ARITHMETIC_HELPURL}",extensions:["math_op_tooltip"]},{type:"math_single",message0:"%1 %2",args0:[{type:"field_dropdown",name:"OP",options:[["%{BKY_MATH_SINGLE_OP_ROOT}","ROOT"],["%{BKY_MATH_SINGLE_OP_ABSOLUTE}","ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]]},
{type:"input_value",name:"NUM",check:"Number"}],output:"Number",colour:"%{BKY_MATH_HUE}",helpUrl:"%{BKY_MATH_SINGLE_HELPURL}",extensions:["math_op_tooltip"]},{type:"math_trig",message0:"%1 %2",args0:[{type:"field_dropdown",name:"OP",options:[["%{BKY_MATH_TRIG_SIN}","SIN"],["%{BKY_MATH_TRIG_COS}","COS"],["%{BKY_MATH_TRIG_TAN}","TAN"],["%{BKY_MATH_TRIG_ASIN}","ASIN"],["%{BKY_MATH_TRIG_ACOS}","ACOS"],["%{BKY_MATH_TRIG_ATAN}","ATAN"]]},{type:"input_value",name:"NUM",check:"Number"}],output:"Number",colour:"%{BKY_MATH_HUE}",
helpUrl:"%{BKY_MATH_TRIG_HELPURL}",extensions:["math_op_tooltip"]},{type:"math_constant",message0:"%1",args0:[{type:"field_dropdown",name:"CONSTANT",options:[["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]}],output:"Number",colour:"%{BKY_MATH_HUE}",tooltip:"%{BKY_MATH_CONSTANT_TOOLTIP}",helpUrl:"%{BKY_MATH_CONSTANT_HELPURL}"},{type:"math_number_property",message0:"%1 %2",args0:[{type:"input_value",name:"NUMBER_TO_CHECK",check:"Number"},
{type:"field_dropdown",name:"PROPERTY",options:[["%{BKY_MATH_IS_EVEN}","EVEN"],["%{BKY_MATH_IS_ODD}","ODD"],["%{BKY_MATH_IS_PRIME}","PRIME"],["%{BKY_MATH_IS_WHOLE}","WHOLE"],["%{BKY_MATH_IS_POSITIVE}","POSITIVE"],["%{BKY_MATH_IS_NEGATIVE}","NEGATIVE"],["%{BKY_MATH_IS_DIVISIBLE_BY}","DIVISIBLE_BY"]]}],inputsInline:!0,output:"Boolean",colour:"%{BKY_MATH_HUE}",tooltip:"%{BKY_MATH_IS_TOOLTIP}",mutator:"math_is_divisibleby_mutator"},{type:"math_change",message0:"%{BKY_MATH_CHANGE_TITLE}",args0:[{type:"field_variable",
name:"VAR",variable:"%{BKY_MATH_CHANGE_TITLE_ITEM}"},{type:"input_value",name:"DELTA",check:"Number"}],previousStatement:null,nextStatement:null,colour:"%{BKY_VARIABLES_HUE}",helpUrl:"%{BKY_MATH_CHANGE_HELPURL}",extensions:["math_change_tooltip"]},{type:"math_round",message0:"%1 %2",args0:[{type:"field_dropdown",name:"OP",options:[["%{BKY_MATH_ROUND_OPERATOR_ROUND}","ROUND"],["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}","ROUNDUP"],["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}","ROUNDDOWN"]]},{type:"input_value",
name:"NUM",check:"Number"}],output:"Number",colour:"%{BKY_MATH_HUE}",helpUrl:"%{BKY_MATH_ROUND_HELPURL}",tooltip:"%{BKY_MATH_ROUND_TOOLTIP}"},{type:"math_on_list",message0:"%1 %2",args0:[{type:"field_dropdown",name:"OP",options:[["%{BKY_MATH_ONLIST_OPERATOR_SUM}","SUM"],["%{BKY_MATH_ONLIST_OPERATOR_MIN}","MIN"],["%{BKY_MATH_ONLIST_OPERATOR_MAX}","MAX"],["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}","AVERAGE"],["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}","MEDIAN"],["%{BKY_MATH_ONLIST_OPERATOR_MODE}","MODE"],["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}",
"STD_DEV"],["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}","RANDOM"]]},{type:"input_value",name:"LIST",check:"Array"}],output:"Number",colour:"%{BKY_MATH_HUE}",helpUrl:"%{BKY_MATH_ONLIST_HELPURL}",mutator:"math_modes_of_list_mutator",extensions:["math_op_tooltip"]},{type:"math_modulo",message0:"%{BKY_MATH_MODULO_TITLE}",args0:[{type:"input_value",name:"DIVIDEND",check:"Number"},{type:"input_value",name:"DIVISOR",check:"Number"}],inputsInline:!0,output:"Number",colour:"%{BKY_MATH_HUE}",tooltip:"%{BKY_MATH_MODULO_TOOLTIP}",
helpUrl:"%{BKY_MATH_MODULO_HELPURL}"},{type:"math_constrain",message0:"%{BKY_MATH_CONSTRAIN_TITLE}",args0:[{type:"input_value",name:"VALUE",check:"Number"},{type:"input_value",name:"LOW",check:"Number"},{type:"input_value",name:"HIGH",check:"Number"}],inputsInline:!0,output:"Number",colour:"%{BKY_MATH_HUE}",tooltip:"%{BKY_MATH_CONSTRAIN_TOOLTIP}",helpUrl:"%{BKY_MATH_CONSTRAIN_HELPURL}"},{type:"math_random_int",message0:"%{BKY_MATH_RANDOM_INT_TITLE}",args0:[{type:"input_value",name:"FROM",check:"Number"},
{type:"input_value",name:"TO",check:"Number"}],inputsInline:!0,output:"Number",colour:"%{BKY_MATH_HUE}",tooltip:"%{BKY_MATH_RANDOM_INT_TOOLTIP}",helpUrl:"%{BKY_MATH_RANDOM_INT_HELPURL}"},{type:"math_random_float",message0:"%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",output:"Number",colour:"%{BKY_MATH_HUE}",tooltip:"%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",helpUrl:"%{BKY_MATH_RANDOM_FLOAT_HELPURL}"}]);
Blockly.Constants.Math.TOOLTIPS_BY_OP={ADD:"%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",MINUS:"%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",MULTIPLY:"%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",DIVIDE:"%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",POWER:"%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",ROOT:"%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",ABS:"%{BKY_MATH_SINGLE_TOOLTIP_ABS}",NEG:"%{BKY_MATH_SINGLE_TOOLTIP_NEG}",LN:"%{BKY_MATH_SINGLE_TOOLTIP_LN}",LOG10:"%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",EXP:"%{BKY_MATH_SINGLE_TOOLTIP_EXP}",POW10:"%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
SIN:"%{BKY_MATH_TRIG_TOOLTIP_SIN}",COS:"%{BKY_MATH_TRIG_TOOLTIP_COS}",TAN:"%{BKY_MATH_TRIG_TOOLTIP_TAN}",ASIN:"%{BKY_MATH_TRIG_TOOLTIP_ASIN}",ACOS:"%{BKY_MATH_TRIG_TOOLTIP_ACOS}",ATAN:"%{BKY_MATH_TRIG_TOOLTIP_ATAN}",SUM:"%{BKY_MATH_ONLIST_TOOLTIP_SUM}",MIN:"%{BKY_MATH_ONLIST_TOOLTIP_MIN}",MAX:"%{BKY_MATH_ONLIST_TOOLTIP_MAX}",AVERAGE:"%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",MEDIAN:"%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",MODE:"%{BKY_MATH_ONLIST_TOOLTIP_MODE}",STD_DEV:"%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",RANDOM:"%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"};
Blockly.Extensions.register("math_op_tooltip",Blockly.Extensions.buildTooltipForDropdown("OP",Blockly.Constants.Math.TOOLTIPS_BY_OP));
Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN={mutationToDom:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==this.getFieldValue("PROPERTY");a.setAttribute("divisor_input",b);return a},domToMutation:function(a){a="true"==a.getAttribute("divisor_input");this.updateShape_(a)},updateShape_:function(a){var b=this.getInput("DIVISOR");a?b||this.appendValueInput("DIVISOR").setCheck("Number"):b&&this.removeInput("DIVISOR")}};
Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION=function(){this.getField("PROPERTY").setValidator(function(a){this.sourceBlock_.updateShape_("DIVISIBLE_BY"==a)})};Blockly.Extensions.registerMutator("math_is_divisibleby_mutator",Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN,Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION);Blockly.Extensions.register("math_change_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_MATH_CHANGE_TOOLTIP}","VAR"));
Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN={updateType_:function(a){"MODE"==a?this.outputConnection.setCheck("Array"):this.outputConnection.setCheck("Number")},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("op",this.getFieldValue("OP"));return a},domToMutation:function(a){this.updateType_(a.getAttribute("op"))}};Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION=function(){this.getField("OP").setValidator(function(a){this.updateType_(a)}.bind(this))};
Blockly.Extensions.registerMutator("math_modes_of_list_mutator",Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN,Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION);Blockly.Blocks.procedures={};


Blockly.Blocks.procedures_defnoreturn = {
    init: function() {
        var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
        a.setSpellcheck(!1);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
        this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
        (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT && this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.setStatements_(!0);
        this.statementConnection_ = null
    },
    setStatements_: function(a) {
        this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0),
            this.hasStatements_ = a)
    },
    updateParams_: function() {
        for (var a = !1, b = {}, c = 0; c < this.arguments_.length; c++) {
            if (b["arg_" + this.arguments_[c].toLowerCase()]) {
                a = !0;
                break
            }
            b["arg_" + this.arguments_[c].toLowerCase()] = !0
        }
        a ? this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING) : this.setWarningText(null);
        a = "";
        this.arguments_.length && (a = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", "));
        Blockly.Events.disable();
        try {
            this.setFieldValue(a, "PARAMS")
        } finally {
            Blockly.Events.enable()
        }
    },
    mutationToDom: function(a) {
        var b =
            document.createElement("mutation");
        a && b.setAttribute("name", this.getFieldValue("NAME"));
        for (var c = 0; c < this.argumentVarModels_.length; c++) {
            var d = document.createElement("arg"),
                e = this.argumentVarModels_[c];
            if(e){
            	d.setAttribute("name", e.name);
            	d.setAttribute("varId", e.getId());
            	a && this.paramIds_ && d.setAttribute("paramId", this.paramIds_[c]);
            	b.appendChild(d)
        	}
        }
        this.hasStatements_ || b.setAttribute("statements", "false");
        return b
    },
    domToMutation: function(a) {
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        for (var b = 0, c; c =
            a.childNodes[b]; b++)
            if ("arg" == c.nodeName.toLowerCase()) {
                var d = c.getAttribute("name");
                c = c.getAttribute("varId");
                this.arguments_.push(d);
                d = Blockly.Variables.getOrCreateVariablePackage(this.workspace, c, d, "");
                this.argumentVarModels_.push(d)
            } this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
        this.setStatements_("false" !== a.getAttribute("statements"))
    },
    decompose: function(a) {
        var b = a.newBlock("procedures_mutatorcontainer");
        b.initSvg();
        this.getInput("RETURN") ? b.setFieldValue(this.hasStatements_ ? "TRUE" :
            "FALSE", "STATEMENTS") : b.getInput("STATEMENT_INPUT").setVisible(!1);
        for (var c = b.getInput("STACK").connection, d = 0; d < this.arguments_.length; d++) {
            var e = a.newBlock("procedures_mutatorarg");
            e.initSvg();
            e.setFieldValue(this.arguments_[d], "NAME");
            e.oldLocation = d;
            c.connect(e.previousConnection);
            c = e.nextConnection
        }
        Blockly.Procedures.mutateCallers(this);
        return b
    },
    compose: function(a) {
        this.arguments_ = [];
        this.paramIds_ = [];
        this.argumentVarModels_ = [];
        for (var b = a.getInputTargetBlock("STACK"); b;) {
            var c = b.getFieldValue("NAME");
            this.arguments_.push(c);
            c = this.workspace.getVariable(c, "");
            this.argumentVarModels_.push(c);
            this.paramIds_.push(b.id);
            b = b.nextConnection && b.nextConnection.targetBlock()
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
        a = a.getFieldValue("STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.hasStatements_ != a))
            if (a) this.setStatements_(!0), Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK"), this.statementConnection_ = null;
            else {
                a = this.getInput("STACK").connection;
                if (this.statementConnection_ =
                    a.targetConnection) a = a.targetBlock(), a.unplug(), a.bumpNeighbours_();
                this.setStatements_(!1)
            }
    },
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !1]
    },
    getVars: function() {
        return this.arguments_
    },
    getVarModels: function() {
        return this.argumentVarModels_
    },
    renameVarById: function(a, b) {
        var c = this.workspace.getVariableById(a);
        if ("" == c.type) {
            c = c.name;
            for (var d = this.workspace.getVariableById(b), e = !1, f = 0; f < this.argumentVarModels_.length; f++) this.argumentVarModels_[f].getId() == a && (this.arguments_[f] =
                d.name, this.argumentVarModels_[f] = d, e = !0);
            e && this.displayRenamedVar_(c, d.name)
        }
    },
    updateVarName: function(a) {
        for (var b = a.name, c = !1, d = 0; d < this.argumentVarModels_.length; d++)
            if (this.argumentVarModels_[d].getId() == a.getId()) {
                var e = this.arguments_[d];
                this.arguments_[d] = b;
                c = !0
            } c && this.displayRenamedVar_(e, b)
    },
    displayRenamedVar_: function(a, b) {
        this.updateParams_();
        if (this.mutator.isVisible())
            for (var c = this.mutator.workspace_.getAllBlocks(), d = 0, e; e = c[d]; d++) "procedures_mutatorarg" == e.type && Blockly.Names.equals(a,
                e.getFieldValue("NAME")) && e.setFieldValue(b, "NAME")
    },
    customContextMenu: function(a) {
        if (!this.isInFlyout) {
            var b = {
                    enabled: !0
                },
                c = this.getFieldValue("NAME");
            b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", c);
            var d = goog.dom.createDom("mutation");
            d.setAttribute("name", c);
            for (var e = 0; e < this.arguments_.length; e++) c = goog.dom.createDom("arg"), c.setAttribute("name", this.arguments_[e]), d.appendChild(c);
            c = goog.dom.createDom("block", null, d);
            c.setAttribute("type", this.callType_);
            b.callback = Blockly.ContextMenu.callbackFactory(this,
                c);
            a.push(b);
            if (!this.isCollapsed())
                for (e = 0; e < this.argumentVarModels_.length; e++) b = {
                    enabled: !0
                }, d = this.argumentVarModels_[e], c = d.name, b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", c), c = Blockly.Variables.generateVariableFieldDom(d), c = goog.dom.createDom("block", null, c), c.setAttribute("type", "variables_get"), b.callback = Blockly.ContextMenu.callbackFactory(this, c), a.push(b)
        }
    },
    callType_: "procedures_callnoreturn"
};
Blockly.Blocks.procedures_defreturn = {
    init: function() {
        var a = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
        a.setSpellcheck(!1);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
        this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
        (this.workspace.options.comments || this.workspace.options.parentWorkspace &&
            this.workspace.options.parentWorkspace.options.comments) && Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT && this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.setStatements_(!0);
        this.statementConnection_ = null
    },
    setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !0]
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    getVarModels: Blockly.Blocks.procedures_defnoreturn.getVarModels,
    renameVarById: Blockly.Blocks.procedures_defnoreturn.renameVarById,
    updateVarName: Blockly.Blocks.procedures_defnoreturn.updateVarName,
    displayRenamedVar_: Blockly.Blocks.procedures_defnoreturn.displayRenamedVar_,
    customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
    callType_: "procedures_callreturn"
};
Blockly.Blocks.procedures_mutatorcontainer = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput("STACK");
        this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
Blockly.Blocks.procedures_mutatorarg = {
    init: function() {
        var a = new Blockly.FieldTextInput("x", this.validator_);
        a.oldShowEditorFn_ = a.showEditor_;
        a.showEditor_ = function() {
            this.createdVariables_ = [];
            this.oldShowEditorFn_()
        };
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(a, "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
        a.onFinishEditing_ =
            this.deleteIntermediateVars_;
        a.createdVariables_ = [];
        a.onFinishEditing_("x")
    },
    validator_: function(a) {
        var b = Blockly.Mutator.findParentWs(this.sourceBlock_.workspace);
        a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        if (!a) return null;
        var c = b.getVariable(a, "");
        c && c.name != a && b.renameVarById(c.getId(), a);
        c || (c = b.createVariable(a, "")) && this.createdVariables_ && this.createdVariables_.push(c);
        return a
    },
    deleteIntermediateVars_: function(a) {
        var b = Blockly.Mutator.findParentWs(this.sourceBlock_.workspace);
        if (b)
            for (var c =
                    0; c < this.createdVariables_.length; c++) {
                var d = this.createdVariables_[c];
                d.name != a && b.deleteVariableById(d.getId())
            }
    }
};
Blockly.Blocks.procedures_callnoreturn = {
    init: function() {
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
        this.arguments_ = [];
        this.argumentVarModels_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: function() {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function(a, b) {
        Blockly.Names.equals(a, this.getProcedureCall()) &&
            (this.setFieldValue(b, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b)))
    },
    setProcedureParameters_: function(a, b) {
        var c = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace),
            d = c && c.mutator && c.mutator.isVisible();
        d || (this.quarkConnections_ = {}, this.quarkIds_ = null);
        if (b)
            if (goog.array.equals(this.arguments_, a)) this.quarkIds_ = b;
            else {
                if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
                this.setCollapsed(!1);
                this.quarkIds_ || (this.quarkConnections_ = {}, a.join("\n") == this.arguments_.join("\n") ? this.quarkIds_ = b : this.quarkIds_ = []);
                c = this.rendered;
                this.rendered = !1;
                for (var e = 0; e < this.arguments_.length; e++) {
                    var f = this.getInput("ARG" + e);
                    f && (f = f.connection.targetConnection, this.quarkConnections_[this.quarkIds_[e]] = f, d && f && -1 == b.indexOf(this.quarkIds_[e]) && (f.disconnect(), f.getSourceBlock().bumpNeighbours_()))
                }
                this.arguments_ = [].concat(a);
                this.argumentVarModels_ = [];
                for (e = 0; e < this.arguments_.length; e++) d =
                    Blockly.Variables.getOrCreateVariablePackage(this.workspace, null, this.arguments_[e], ""), this.argumentVarModels_.push(d);
                this.updateShape_();
                if (this.quarkIds_ = b)
                    for (e = 0; e < this.arguments_.length; e++) d = this.quarkIds_[e], d in this.quarkConnections_ && (f = this.quarkConnections_[d], Blockly.Mutator.reconnect(f, this, "ARG" + e) || delete this.quarkConnections_[d]);
                (this.rendered = c) && this.render()
            }
    },
    updateShape_: function() {
        for (var a = 0; a < this.arguments_.length; a++) {
            var b = this.getField("ARGNAME" + a);
            if (b) {
                Blockly.Events.disable();
                try {
                    b.setValue(this.arguments_[a])
                } finally {
                    Blockly.Events.enable()
                }
            } else b = new Blockly.FieldLabel(this.arguments_[a]), this.appendValueInput("ARG" + a).setAlign(Blockly.ALIGN_RIGHT).appendField(b, "ARGNAME" + a).init()
        }
        for (; this.getInput("ARG" + a);) this.removeInput("ARG" + a), a++;
        if (a = this.getInput("TOPROW")) this.arguments_.length ? this.getField("WITH") || (a.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.init()) : this.getField("WITH") && a.removeField("WITH")
    },
    mutationToDom: function() {
        var a = document.createElement("mutation");
        a.setAttribute("name", this.getProcedureCall());
        for (var b = 0; b < this.arguments_.length; b++) {
            var c = document.createElement("arg");
            c.setAttribute("name", this.arguments_[b]);
            a.appendChild(c)
        }
        return a
    },
    domToMutation: function(a) {
        var b = a.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), b);
        b = [];
        for (var c = [], d = 0, e; e = a.childNodes[d]; d++) "arg" == e.nodeName.toLowerCase() && (b.push(e.getAttribute("name")), c.push(e.getAttribute("paramId")));
        this.setProcedureParameters_(b, c)
    },
    getVarModels: function() {
        return this.argumentVarModels_
    },
    onchange: function(a) {
        if (this.workspace && !this.workspace.isFlyout)
            if (a.type == Blockly.Events.BLOCK_CREATE && -1 != a.ids.indexOf(this.id)) {
                var b = this.getProcedureCall();
                b = Blockly.Procedures.getDefinition(b, this.workspace);
                !b || b.type == this.defType_ && JSON.stringify(b.arguments_) == JSON.stringify(this.arguments_) || (b = null);
                if (!b) {
                    Blockly.Events.setGroup(a.group);
                    a = goog.dom.createDom("xml");
                    b = goog.dom.createDom("block");
                    b.setAttribute("type", this.defType_);
                    var c = this.getRelativeToSurfaceXY(),
                        d = c.y + 2 * Blockly.SNAP_RADIUS;
                    b.setAttribute("x", c.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1));
                    b.setAttribute("y", d);
                    c = this.mutationToDom();
                    b.appendChild(c);
                    c = goog.dom.createDom("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(document.createTextNode(this.getProcedureCall()));
                    b.appendChild(c);
                    a.appendChild(b);
                    Blockly.Xml.domToWorkspace(a, this.workspace);
                    Blockly.Events.setGroup(!1)
                }
            } else a.type == Blockly.Events.BLOCK_DELETE && (b = this.getProcedureCall(), b = Blockly.Procedures.getDefinition(b, this.workspace), b || (Blockly.Events.setGroup(a.group),
                this.dispose(!0, !1), Blockly.Events.setGroup(!1)))
    },
    customContextMenu: function(a) {
        var b = {
            enabled: !0
        };
        b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.getProcedureCall(),
            d = this.workspace;
        b.callback = function() {
            var a = Blockly.Procedures.getDefinition(c, d);
            a && (d.centerOnBlock(a.id), a.select())
        };
        a.push(b)
    },
    defType_: "procedures_defnoreturn"
};
Blockly.Blocks.procedures_callreturn = {
    init: function() {
        this.appendDummyInput("TOPROW").appendField("", "NAME");
        this.setOutput(!0);
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters_: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,
    updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    getVarModels: Blockly.Blocks.procedures_callnoreturn.getVarModels,
    onchange: Blockly.Blocks.procedures_callnoreturn.onchange,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
    defType_: "procedures_defreturn"
};
Blockly.Blocks.procedures_ifreturn = {
    init: function() {
        this.appendValueInput("CONDITION").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(Blockly.Msg.PROCEDURES_HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
        this.hasReturnValue_ = !0
    },
    mutationToDom: function() {
        var a =
            document.createElement("mutation");
        a.setAttribute("value", Number(this.hasReturnValue_));
        return a
    },
    domToMutation: function(a) {
        this.hasReturnValue_ = 1 == a.getAttribute("value");
        this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        if (this.workspace.isDragging && !this.workspace.isDragging()) {
            var a = !1,
                b = this;
            do {
                if (-1 != this.FUNCTION_TYPES.indexOf(b.type)) {
                    a = !0;
                    break
                }
                b = b.getSurroundParent()
            } while (b);
            a ? ("procedures_defnoreturn" ==
                b.type && this.hasReturnValue_ ? (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : "procedures_defreturn" != b.type || this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null), this.isInFlyout || this.setDisabled(!1)) : (this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING), this.isInFlyout || this.getInheritedDisabled() ||
                this.setDisabled(!0))
        }
    },
    FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
};


/*
Blockly.utils.xml = {};
Blockly.utils.xml.NAME_SPACE = 'https://developers.google.com/blockly/xml';

Blockly.utils.xml.createElement = function(tagName) {
  // TODO (#2082): Support node.js.
  return document.createElementNS(Blockly.utils.xml.NAME_SPACE, tagName);
};

Blockly.utils.xml.createTextNode = function(text) {
  // TODO (#2082): Support node.js.
  return document.createTextNode(text);
};

Blockly.utils.xml.textToDomDocument = function(text) {
  var oParser = new DOMParser();
  return oParser.parseFromString(text, 'text/xml');
};

Blockly.utils.xml.domToText = function(dom) {
  // TODO (#2082): Support node.js.
  var oSerializer = new XMLSerializer();
  return oSerializer.serializeToString(dom);
};
Blockly.Blocks['procedures_defnoreturn'] = {
  init: function() {
    var nameField = new Blockly.FieldTextInput('',
        Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField(Blockly.Msg['PROCEDURES_DEFNORETURN_TITLE'])
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments)) &&
        Blockly.Msg['PROCEDURES_DEFNORETURN_COMMENT']) {
      this.setCommentText(Blockly.Msg['PROCEDURES_DEFNORETURN_COMMENT']);
    }
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    this.setTooltip(Blockly.Msg['PROCEDURES_DEFNORETURN_TOOLTIP']);
    this.setHelpUrl(Blockly.Msg['PROCEDURES_DEFNORETURN_HELPURL']);
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: function(hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput('STACK')
          .appendField(Blockly.Msg['PROCEDURES_DEFNORETURN_DO']);
      if (this.getInput('RETURN')) {
        this.moveInputBefore('STACK', 'RETURN');
      }
    } else {
      this.removeInput('STACK', true);
    }
    this.hasStatements_ = hasStatements;
  },
  updateParams_: function() {

    // Merge the arguments into a human-readable list.
    var paramString = '';
    if (this.arguments_.length) {
      paramString = Blockly.Msg['PROCEDURES_BEFORE_PARAMS'] +
          ' ' + this.arguments_.join(', ');
    }
    // The params field is deterministic based on the mutation,
    // no need to fire a change event.
    Blockly.Events.disable();
    try {
      this.setFieldValue(paramString, 'PARAMS');
    } finally {
      Blockly.Events.enable();
    }
  },
  mutationToDom: function(opt_paramIds) {
    var container = Blockly.utils.xml.createElement('mutation');
    if (opt_paramIds) {
      container.setAttribute('name', this.getFieldValue('NAME'));
    }
    for (var i = 0; i < this.argumentVarModels_.length; i++) {
      var parameter = Blockly.utils.xml.createElement('arg');
      var argModel = this.argumentVarModels_[i];
      if(argModel !== null){
      	parameter.setAttribute('name', argModel.name);
	    parameter.setAttribute('varid', argModel.getId());
	    if (opt_paramIds && this.paramIds_) {
	    	parameter.setAttribute('paramId', this.paramIds_[i]);
	    }
	    container.appendChild(parameter);
      }
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute('statements', 'false');
    }
    return container;
  },

  domToMutation: function(xmlElement) {
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        var varName = childNode.getAttribute('name');
        var varId = childNode.getAttribute('varid') || childNode.getAttribute('varId');
        this.arguments_.push(varName);
        var variable = Blockly.Variables.getOrCreateVariablePackage(
            this.workspace, varId, varName, '');
        if (variable != null) {
          this.argumentVarModels_.push(variable);
        } else {
          console.log('Failed to create a variable with name ' + varName + ', ignoring.');
        }
      }
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this);

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
  },

  decompose: function(workspace) {

    var containerBlockNode = Blockly.utils.xml.createElement('block');
    containerBlockNode.setAttribute('type', 'procedures_mutatorcontainer');
    var statementNode = Blockly.utils.xml.createElement('statement');
    statementNode.setAttribute('name', 'STACK');
    containerBlockNode.appendChild(statementNode);

    var node = statementNode;
    for (var i = 0; i < this.arguments_.length; i++) {
      var argBlockNode = Blockly.utils.xml.createElement('block');
      argBlockNode.setAttribute('type', 'procedures_mutatorarg');
      var fieldNode = Blockly.utils.xml.createElement('field');
      fieldNode.setAttribute('name', 'NAME');
      var argumentName = Blockly.utils.xml.createTextNode(this.arguments_[i]);
      fieldNode.appendChild(argumentName);
      argBlockNode.appendChild(fieldNode);
      var nextNode = Blockly.utils.xml.createElement('next');
      argBlockNode.appendChild(nextNode);

      node.appendChild(argBlockNode);
      node = nextNode;
    }

    var containerBlock = Blockly.Xml.domToBlock(containerBlockNode, workspace);

    if (this.type == 'procedures_defreturn') {
      containerBlock.setFieldValue(this.hasStatements_, 'STATEMENTS');
    } else {
      containerBlock.removeInput('STATEMENT_INPUT');
    }

    // Initialize procedure's callers with blank IDs.
    Blockly.Procedures.mutateCallers(this);
    return containerBlock;
  },

  compose: function(containerBlock) {
    // Parameter list.
    this.arguments_ = [];
    this.paramIds_ = [];
    this.argumentVarModels_ = [];
    var paramBlock = containerBlock.getInputTargetBlock('STACK');
    while (paramBlock) {
      var varName = paramBlock.getFieldValue('NAME');
      this.arguments_.push(varName);
      var variable = this.workspace.getVariable(varName, '');
      this.argumentVarModels_.push(variable);

      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this);

    // Show/hide the statement input.
    var hasStatements = containerBlock.getFieldValue('STATEMENTS');
    if (hasStatements !== null) {
      hasStatements = hasStatements == 'TRUE';
      if (this.hasStatements_ != hasStatements) {
        if (hasStatements) {
          this.setStatements_(true);
          // Restore the stack, if one was saved.
          Blockly.Mutator.reconnect(this.statementConnection_, this, 'STACK');
          this.statementConnection_ = null;
        } else {
          // Save the stack, then disconnect it.
          var stackConnection = this.getInput('STACK').connection;
          this.statementConnection_ = stackConnection.targetConnection;
          if (this.statementConnection_) {
            var stackBlock = stackConnection.targetBlock();
            stackBlock.unplug();
            stackBlock.bumpNeighbours_();
          }
          this.setStatements_(false);
        }
      }
    }
  },

  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, false];
  },

  getVars: function() {
    return this.arguments_;
  },

  getVarModels: function() {
    return this.argumentVarModels_;
  },

  renameVarById: function(oldId, newId) {
    var oldVariable = this.workspace.getVariableById(oldId);
    if (oldVariable.type != '') {
      // Procedure arguments always have the empty type.
      return;
    }
    var oldName = oldVariable.name;
    var newVar = this.workspace.getVariableById(newId);

    var change = false;
    for (var i = 0; i < this.argumentVarModels_.length; i++) {
      if (this.argumentVarModels_[i].getId() == oldId) {
        this.arguments_[i] = newVar.name;
        this.argumentVarModels_[i] = newVar;
        change = true;
      }
    }
    if (change) {
      this.displayRenamedVar_(oldName, newVar.name);
      Blockly.Procedures.mutateCallers(this);
    }
  },

  updateVarName: function(variable) {
    var newName = variable.name;
    var change = false;
    for (var i = 0; i < this.argumentVarModels_.length; i++) {
      if (this.argumentVarModels_[i].getId() == variable.getId()) {
        var oldName = this.arguments_[i];
        this.arguments_[i] = newName;
        change = true;
      }
    }
    if (change) {
      this.displayRenamedVar_(oldName, newName);
      Blockly.Procedures.mutateCallers(this);
    }
  },

  displayRenamedVar_: function(oldName, newName) {
    this.updateParams_();
    // Update the mutator's variables if the mutator is open.
    if (this.mutator.isVisible()) {
      var blocks = this.mutator.workspace_.getAllBlocks(false);
      for (var i = 0, block; block = blocks[i]; i++) {
        if (block.type == 'procedures_mutatorarg' &&
            Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
          block.setFieldValue(newName, 'NAME');
        }
      }
    }
  },

  customContextMenu: function(options) {
    if (this.isInFlyout) {
      return;
    }
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getFieldValue('NAME');
    option.text = Blockly.Msg['PROCEDURES_CREATE_DO'].replace('%1', name);
    var xmlMutation = Blockly.utils.xml.createElement('mutation');
    xmlMutation.setAttribute('name', name);
    for (var i = 0; i < this.arguments_.length; i++) {
      var xmlArg = Blockly.utils.xml.createElement('arg');
      xmlArg.setAttribute('name', this.arguments_[i]);
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = Blockly.utils.xml.createElement('block');
    xmlBlock.setAttribute('type', this.callType_);
    xmlBlock.appendChild(xmlMutation);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (var i = 0; i < this.argumentVarModels_.length; i++) {
        var argOption = {enabled: true};
        var argVar = this.argumentVarModels_[i];
        argOption.text = Blockly.Msg['VARIABLES_SET_CREATE_GET']
            .replace('%1', argVar.name);

        var argXmlField = Blockly.Variables.generateVariableFieldDom(argVar);
        var argXmlBlock = Blockly.utils.xml.createElement('block');
        argXmlBlock.setAttribute('type', 'variables_get');
        argXmlBlock.appendChild(argXmlField);
        argOption.callback =
            Blockly.ContextMenu.callbackFactory(this, argXmlBlock);
        options.push(argOption);
      }
    }
  },
  callType_: 'procedures_callnoreturn'
};

Blockly.Blocks['procedures_defreturn'] = {

  init: function() {
    var nameField = new Blockly.FieldTextInput('',
        Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField(Blockly.Msg['PROCEDURES_DEFRETURN_TITLE'])
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg['PROCEDURES_DEFRETURN_RETURN']);
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    if ((this.workspace.options.comments ||
         (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments)) &&
        Blockly.Msg['PROCEDURES_DEFRETURN_COMMENT']) {
      this.setCommentText(Blockly.Msg['PROCEDURES_DEFRETURN_COMMENT']);
    }
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    this.setTooltip(Blockly.Msg['PROCEDURES_DEFRETURN_TOOLTIP']);
    this.setHelpUrl(Blockly.Msg['PROCEDURES_DEFRETURN_HELPURL']);
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,

  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  getVarModels: Blockly.Blocks['procedures_defnoreturn'].getVarModels,
  renameVarById: Blockly.Blocks['procedures_defnoreturn'].renameVarById,
  updateVarName: Blockly.Blocks['procedures_defnoreturn'].updateVarName,
  displayRenamedVar_: Blockly.Blocks['procedures_defnoreturn'].displayRenamedVar_,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};

Blockly.Blocks['procedures_mutatorcontainer'] = {

  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg['PROCEDURES_MUTATORCONTAINER_TITLE']);
    this.appendStatementInput('STACK');
    this.appendDummyInput('STATEMENT_INPUT')
        .appendField(Blockly.Msg['PROCEDURES_ALLOW_STATEMENTS'])
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'STATEMENTS');
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    this.setTooltip(Blockly.Msg['PROCEDURES_MUTATORCONTAINER_TOOLTIP']);
    this.contextMenu = false;
  },

  onchange: function(event) {
    if (!this.workspace || this.workspace.isFlyout ||
        (event.type != Blockly.Events.BLOCK_DELETE && event.type != Blockly.Events.BLOCK_CREATE)) {
      return;
    }
    var blocks = this.workspace.getAllBlocks();
    var allVariables = this.workspace.getAllVariables();
    if (event.type == Blockly.Events.BLOCK_DELETE) {
      var variableNamesToKeep = [];
      for (var i = 0; i < blocks.length; i += 1) {
        if (blocks[i].getFieldValue('NAME')) {
          variableNamesToKeep.push(blocks[i].getFieldValue('NAME'));
        }
      }
      for (var k = 0; k < allVariables.length; k += 1) {
        if (variableNamesToKeep.indexOf(allVariables[k].name) == -1) {
          this.workspace.deleteVariableById(allVariables[k].getId());
        }
      }
      return;
    }

    if (event.type != Blockly.Events.BLOCK_CREATE) {
      return;
    }

    var block = this.workspace.getBlockById(event.blockId);
    // This is to handle the one none variable block
    // Happens when all the blocks are regenerated
    if (!block.getField('NAME')) {
      return;
    }
    var varName = block.getFieldValue('NAME');
    var variable = this.workspace.getVariable(varName);

    if (!variable) {
      // This means the parameter name is not in use and we can create the variable.
      variable = this.workspace.createVariable(varName);
    }
    // If the blocks are connected we don't have to check duplicate variables
    // This only happens if the dialog box is open
    if (block.previousConnection.isConnected() || block.nextConnection.isConnected()) {
      return;
    }

    for (var j = 0; j < blocks.length; j += 1) {
      // filter block that was created
      if (block.id != blocks[j].id && blocks[j].getFieldValue('NAME') == variable.name) {
        // generate new name and set name field
        varName = Blockly.Variables.generateUniqueName(this.workspace);
        variable = this.workspace.createVariable(varName);
        block.setFieldValue(variable.name, 'NAME');
        return;
      }
    }
  }
};

Blockly.Blocks['procedures_mutatorarg'] = {

  init: function() {
    var field = new Blockly.FieldTextInput('x', this.validator_);
    // Hack: override showEditor to do just a little bit more work.
    // We don't have a good place to hook into the start of a text edit.
    field.oldShowEditorFn_ = field.showEditor_;
    var newShowEditorFn = function() {
      this.createdVariables_ = [];
      this.oldShowEditorFn_();
    };
    field.showEditor_ = newShowEditorFn;

    this.appendDummyInput()
        .appendField(Blockly.Msg['PROCEDURES_MUTATORARG_TITLE'])
        .appendField(field, 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    this.setTooltip(Blockly.Msg['PROCEDURES_MUTATORARG_TOOLTIP']);
    this.contextMenu = false;

    // Create the default variable when we drag the block in from the flyout.
    // Have to do this after installing the field on the block.
    field.onFinishEditing_ = this.deleteIntermediateVars_;
    // Create an empty list so onFinishEditing_ has something to look at, even
    // though the editor was never opened.
    field.createdVariables_ = [];
    field.onFinishEditing_('x');
  },

  validator_: function(varName) {
    var outerWs = Blockly.Mutator.findParentWs(this.sourceBlock_.workspace);
    varName = varName.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
    if (!varName) {
      return null;
    }
    // Prevents duplicate parameter names in functions
    var blocks = this.sourceBlock_.workspace.getAllBlocks();
    for (var i = 0; i < blocks.length; i += 1) {
      if (blocks[i].id == this.sourceBlock_.id) {
        continue;
      }
      if (blocks[i].getFieldValue('NAME') == varName) {
        return null;
      }
    }
    var model = outerWs.getVariable(varName, '');
    if (model && model.name != varName) {
      // Rename the variable (case change)
      // TODO: This function doesn't exist on the workspace.
      outerWs.renameVarById(model.getId(), varName);
    }
    if (!model) {
      model = outerWs.createVariable(varName, '');
      if (model && this.createdVariables_) {
        this.createdVariables_.push(model);
      }
    }
    return varName;
  },

  deleteIntermediateVars_: function(newText) {
    var outerWs = Blockly.Mutator.findParentWs(this.sourceBlock_.workspace);
    if (!outerWs) {
      return;
    }
    for (var i = 0; i < this.createdVariables_.length; i++) {
      var model = this.createdVariables_[i];
      if (model.name != newText) {
        outerWs.deleteVariableById(model.getId());
      }
    }
  }
};

Blockly.Blocks['procedures_callnoreturn'] = {

  init: function() {
    this.appendDummyInput('TOPROW')
        .appendField(this.id, 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    // Tooltip is set in renameProcedure.
    this.setHelpUrl(Blockly.Msg['PROCEDURES_CALLNORETURN_HELPURL']);
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    this.quarkConnections_ = {};
    this.quarkIds_ = null;
    this.previousEnabledState_ = true;
  },

  getProcedureCall: function() {
    // The NAME field is guaranteed to exist, null will never be returned.
    return (this.getFieldValue('NAME'));
  },

  renameProcedure: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
      this.setFieldValue(newName, 'NAME');
      var baseMsg = this.outputConnection ?
          Blockly.Msg['PROCEDURES_CALLRETURN_TOOLTIP'] :
          Blockly.Msg['PROCEDURES_CALLNORETURN_TOOLTIP'];
      this.setTooltip(baseMsg.replace('%1', newName));
    }
  },

  setProcedureParameters_: function(paramNames, paramIds) {
    // Data structures:
    // this.arguments = ['x', 'y']
    //     Existing param names.
    // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
    //     Look-up of paramIds to connections plugged into the call block.
    // this.quarkIds_ = ['piua', 'f8b_']
    //     Existing param IDs.
    // Note that quarkConnections_ may include IDs that no longer exist, but
    // which might reappear if a param is reattached in the mutator.
    var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(),
        this.workspace);
    var mutatorOpen = defBlock && defBlock.mutator &&
        defBlock.mutator.isVisible();
    if (!mutatorOpen) {
      this.quarkConnections_ = {};
      this.quarkIds_ = null;
    }
    if (!paramIds) {
      // Reset the quarks (a mutator is about to open).
      return;
    }
    // Test arguments (arrays of strings) for changes. '\n' is not a valid
    // argument name character, so it is a valid delimiter here.
    if (paramNames.join('\n') == this.arguments_.join('\n')) {
      // No change.
      this.quarkIds_ = paramIds;
      return;
    }
    if (paramIds.length != paramNames.length) {
      throw RangeError('paramNames and paramIds must be the same length.');
    }
    this.setCollapsed(false);
    if (!this.quarkIds_) {
      // Initialize tracking for this block.
      this.quarkConnections_ = {};
      this.quarkIds_ = [];
    }
    // Switch off rendering while the block is rebuilt.
    var savedRendered = this.rendered;
    this.rendered = false;
    // Update the quarkConnections_ with existing connections.
    for (var i = 0; i < this.arguments_.length; i++) {
      var input = this.getInput('ARG' + i);
      if (input) {
        var connection = input.connection.targetConnection;
        this.quarkConnections_[this.quarkIds_[i]] = connection;
        if (mutatorOpen && connection &&
            paramIds.indexOf(this.quarkIds_[i]) == -1) {
          // This connection should no longer be attached to this block.
          connection.disconnect();
          connection.getSourceBlock().bumpNeighbours_();
        }
      }
    }
    // Rebuild the block's arguments.
    this.arguments_ = [].concat(paramNames);
    // And rebuild the argument model list.
    this.argumentVarModels_ = [];
    for (var i = 0; i < this.arguments_.length; i++) {
      var variable = Blockly.Variables.getOrCreateVariablePackage(
          this.workspace, null, this.arguments_[i], '');
      this.argumentVarModels_.push(variable);
    }

    this.updateShape_();
    this.quarkIds_ = paramIds;
    // Reconnect any child blocks.
    if (this.quarkIds_) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var quarkId = this.quarkIds_[i];
        if (quarkId in this.quarkConnections_) {
          var connection = this.quarkConnections_[quarkId];
          if (!Blockly.Mutator.reconnect(connection, this, 'ARG' + i)) {
            // Block no longer exists or has been attached elsewhere.
            delete this.quarkConnections_[quarkId];
          }
        }
      }
    }
    // Restore rendering and show the changes.
    this.rendered = savedRendered;
    if (this.rendered) {
      this.render();
    }
  },

  updateShape_: function() {
    for (var i = 0; i < this.arguments_.length; i++) {
      var field = this.getField('ARGNAME' + i);
      if (field) {
        // Ensure argument name is up to date.
        // The argument name field is deterministic based on the mutation,
        // no need to fire a change event.
        Blockly.Events.disable();
        try {
          field.setValue(this.arguments_[i]);
        } finally {
          Blockly.Events.enable();
        }
      } else {
        // Add new input.
        field = new Blockly.FieldLabel(this.arguments_[i]);
        var input = this.appendValueInput('ARG' + i)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(field, 'ARGNAME' + i);
        input.init();
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ARG' + i)) {
      this.removeInput('ARG' + i);
      i++;
    }
    // Add 'with:' if there are parameters, remove otherwise.
    var topRow = this.getInput('TOPROW');
    if (topRow) {
      if (this.arguments_.length) {
        if (!this.getField('WITH')) {
          topRow.appendField(Blockly.Msg['PROCEDURES_CALL_BEFORE_PARAMS'], 'WITH');
          topRow.init();
        }
      } else {
        if (this.getField('WITH')) {
          topRow.removeField('WITH');
        }
      }
    }
  },

  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('name', this.getProcedureCall());
    for (var i = 0; i < this.arguments_.length; i++) {
      var parameter = Blockly.utils.xml.createElement('arg');
      parameter.setAttribute('name', this.arguments_[i]);
      container.appendChild(parameter);
    }
    return container;
  },

  domToMutation: function(xmlElement) {
    var name = xmlElement.getAttribute('name');
    this.renameProcedure(this.getProcedureCall(), name);
    var args = [];
    var paramIds = [];
    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        args.push(childNode.getAttribute('name'));
        paramIds.push(childNode.getAttribute('paramId'));
      }
    }
    this.setProcedureParameters_(args, paramIds);
  },

  getVarModels: function() {
    return this.argumentVarModels_;
  },

  onchange: function(event) {
    if (!this.workspace || this.workspace.isFlyout) {
      // Block is deleted or is in a flyout.
      return;
    }
    if (!event.recordUndo) {
      // Events not generated by user. Skip handling.
      return;
    }
    if (event.type == Blockly.Events.BLOCK_CREATE &&
        event.ids.indexOf(this.id) != -1) {
      // Look for the case where a procedure call was created (usually through
      // paste) and there is no matching definition.  In this case, create
      // an empty definition block with the correct signature.
      var name = this.getProcedureCall();
      var def = Blockly.Procedures.getDefinition(name, this.workspace);
      if (def && (def.type != this.defType_ ||
          JSON.stringify(def.arguments_) != JSON.stringify(this.arguments_))) {
        // The signatures don't match.
        def = null;
      }
      if (!def) {
        Blockly.Events.setGroup(event.group);

        var xml = Blockly.utils.xml.createElement('xml');
        var block = Blockly.utils.xml.createElement('block');
        block.setAttribute('type', this.defType_);
        var xy = this.getRelativeToSurfaceXY();
        var x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
        var y = xy.y + Blockly.SNAP_RADIUS * 2;
        block.setAttribute('x', x);
        block.setAttribute('y', y);
        var mutation = this.mutationToDom();
        block.appendChild(mutation);
        var field = Blockly.utils.xml.createElement('field');
        field.setAttribute('name', 'NAME');
        field.appendChild(Blockly.utils.xml.createTextNode(
            this.getProcedureCall()));
        block.appendChild(field);
        xml.appendChild(block);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
        Blockly.Events.setGroup(false);
      }
    } else if (event.type == Blockly.Events.BLOCK_DELETE) {
      // Look for the case where a procedure definition has been deleted,
      // leaving this block (a procedure call) orphaned.  In this case, delete
      // the orphan.
      var name = this.getProcedureCall();
      var def = Blockly.Procedures.getDefinition(name, this.workspace);
      if (!def) {
        Blockly.Events.setGroup(event.group);
        this.dispose(true, false);
        Blockly.Events.setGroup(false);
      }
    } else if (event.type == Blockly.Events.CHANGE && event.element == 'disabled') {
      var name = this.getProcedureCall();
      var def = Blockly.Procedures.getDefinition(name, this.workspace);
      if (def && def.id == event.blockId) {
        // in most cases the old group should be ''
        var oldGroup = Blockly.Events.getGroup();
        if (oldGroup) {
          // This should only be possible programatically and may indicate a problem
          // with event grouping. If you see this message please investigate. If the
          // use ends up being valid we may need to reorder events in the undo stack.
          console.log('Saw an existing group while responding to a definition change');
        }
        Blockly.Events.setGroup(event.group);
        if (event.newValue) {
          this.previousEnabledState_ = this.isEnabled();
          this.setEnabled(false);
        } else {
          this.setEnabled(this.previousEnabledState_);
        }
        Blockly.Events.setGroup(oldGroup);
      }
    }
  },

  customContextMenu: function(options) {
    if (!this.workspace.isMovable()) {
      // If we center on the block and the workspace isn't movable we could
      // loose blocks at the edges of the workspace.
      return;
    }

    var option = {enabled: true};
    option.text = Blockly.Msg['PROCEDURES_HIGHLIGHT_DEF'];
    var name = this.getProcedureCall();
    var workspace = this.workspace;
    option.callback = function() {
      var def = Blockly.Procedures.getDefinition(name, workspace);
      if (def) {
        workspace.centerOnBlock(def.id);
        def.select();
      }
    };
    options.push(option);
  },
  defType_: 'procedures_defnoreturn'
};

Blockly.Blocks['procedures_callreturn'] = {

  init: function() {
    this.appendDummyInput('TOPROW')
        .appendField('', 'NAME');
    this.setOutput(true);
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    // Tooltip is set in domToMutation.
    this.setHelpUrl(Blockly.Msg['PROCEDURES_CALLRETURN_HELPURL']);
    this.arguments_ = [];
    this.quarkConnections_ = {};
    this.quarkIds_ = null;
    this.previousEnabledState_ = true;
  },

  getProcedureCall: Blockly.Blocks['procedures_callnoreturn'].getProcedureCall,
  renameProcedure: Blockly.Blocks['procedures_callnoreturn'].renameProcedure,
  setProcedureParameters_:
      Blockly.Blocks['procedures_callnoreturn'].setProcedureParameters_,
  updateShape_: Blockly.Blocks['procedures_callnoreturn'].updateShape_,
  mutationToDom: Blockly.Blocks['procedures_callnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_callnoreturn'].domToMutation,
  getVarModels: Blockly.Blocks['procedures_callnoreturn'].getVarModels,
  onchange: Blockly.Blocks['procedures_callnoreturn'].onchange,
  customContextMenu:
      Blockly.Blocks['procedures_callnoreturn'].customContextMenu,
  defType_: 'procedures_defreturn'
};

Blockly.Blocks['procedures_ifreturn'] = {

  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField(Blockly.Msg['CONTROLS_IF_MSG_IF']);
    this.appendValueInput('VALUE')
        .appendField(Blockly.Msg['PROCEDURES_DEFRETURN_RETURN']);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Msg.PROCEDURES_HUE);
    this.setTooltip(Blockly.Msg['PROCEDURES_IFRETURN_TOOLTIP']);
    this.setHelpUrl(Blockly.Msg['PROCEDURES_IFRETURN_HELPURL']);
    this.hasReturnValue_ = true;
  },

  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('value', Number(this.hasReturnValue_));
    return container;
  },

  domToMutation: function(xmlElement) {
    var value = xmlElement.getAttribute('value');
    this.hasReturnValue_ = (value == 1);
    if (!this.hasReturnValue_) {
      this.removeInput('VALUE');
      this.appendDummyInput('VALUE')
          .appendField(Blockly.Msg['PROCEDURES_DEFRETURN_RETURN']);
    }
  },

  onchange: function(_e) {
    if (!this.workspace.isDragging || this.workspace.isDragging()) {
      return;  // Don't change state at the start of a drag.
    }
    var legal = false;
    // Is the block nested in a procedure?
    var block = this;
    do {
      if (this.FUNCTION_TYPES.indexOf(block.type) != -1) {
        legal = true;
        break;
      }
      block = block.getSurroundParent();
    } while (block);
    if (legal) {
      // If needed, toggle whether this block has a return value.
      if (block.type == 'procedures_defnoreturn' && this.hasReturnValue_) {
        this.removeInput('VALUE');
        this.appendDummyInput('VALUE')
            .appendField(Blockly.Msg['PROCEDURES_DEFRETURN_RETURN']);
        this.hasReturnValue_ = false;
      } else if (block.type == 'procedures_defreturn' &&
                 !this.hasReturnValue_) {
        this.removeInput('VALUE');
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg['PROCEDURES_DEFRETURN_RETURN']);
        this.hasReturnValue_ = true;
      }
      this.setWarningText(null);
      if (!this.isInFlyout) {
        this.setEnabled(true);
      }
    } else {
      this.setWarningText(Blockly.Msg['PROCEDURES_IFRETURN_WARNING']);
      if (!this.isInFlyout && !this.getInheritedDisabled()) {
        this.setEnabled(false);
      }
    }
  },

  FUNCTION_TYPES: ['procedures_defnoreturn', 'procedures_defreturn']
};
*/

Blockly.Blocks.texts = {};
Blockly.Constants.Text = {};
Blockly.Constants.Text.HUE = 160;
Blockly.defineBlocksWithJsonArray([{
    type: "text",
    message0: "%1",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: ""
    }],
    output: "String",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
}, {
    type: "text_join",
    message0: "",
    output: "String",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator"
}, {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [{
        type: "input_dummy"
    }, {
        type: "input_statement",
        name: "STACK"
    }],
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1
}, {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1
}, {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [{
            type: "field_variable",
            name: "VAR",
            variable: "%{BKY_TEXT_APPEND_VARIABLE}"
        },
        {
            type: "input_value",
            name: "TEXT"
        }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "%{BKY_TEXTS_HUE}",
    extensions: ["text_append_tooltip"]
}, {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Number",
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}"
}, {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: ["String", "Array"]
    }],
    output: "Boolean",
    colour: "%{BKY_TEXTS_HUE}",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
}, {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "String"
    }, {
        type: "field_dropdown",
        name: "END",
        options: [
            ["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"],
            ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]
        ]
    }, {
        type: "input_value",
        name: "FIND",
        check: "String"
    }],
    output: "Number",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"]
}, {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "String"
    }, {
        type: "field_dropdown",
        name: "WHERE",
        options: [
            ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
            ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
            ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
            ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
            ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
        ]
    }],
    output: "String",
    colour: "%{BKY_TEXTS_HUE}",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator"
}]);
Blockly.Blocks.text_getSubstring = {
    init: function() {
        this.WHERE_OPTIONS_1 = [
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]
        ];
        this.WHERE_OPTIONS_2 = [
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
            [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);
        this.setColour(Blockly.Msg.TEXTS_HUE);
        this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        this.appendDummyInput("AT1");
        this.appendDummyInput("AT2");
        Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL);
        this.setInputsInline(!0);
        this.setOutput(!0, "String");
        this.updateAt_(1, !0);
        this.updateAt_(2, !0);
        this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)
    },
    mutationToDom: function() {
        var a = document.createElement("mutation"),
            b = this.getInput("AT1").type == Blockly.INPUT_VALUE;
        a.setAttribute("at1", b);
        b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
        a.setAttribute("at2", b);
        return a
    },
    domToMutation: function(a) {
        var b = "true" == a.getAttribute("at1");
        a = "true" == a.getAttribute("at2");
        this.updateAt_(1, b);
        this.updateAt_(2, a)
    },
    updateAt_: function(a, b) {
        this.removeInput("AT" + a);
        this.removeInput("ORDINAL" + a, !0);
        b ? (this.appendValueInput("AT" + a).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) :
            this.appendDummyInput("AT" + a);
        2 == a && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL));
        var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function(c) {
            var d = "FROM_START" == c || "FROM_END" == c;
            if (d != b) {
                var f = this.sourceBlock_;
                f.updateAt_(a, d);
                f.setFieldValue(c, "WHERE" + a);
                return null
            }
        });
        this.getInput("AT" + a).appendField(c, "WHERE" + a);
        1 == a && (this.moveInputBefore("AT1", "AT2"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1",
            "AT2"))
    }
};
Blockly.Blocks.text_changeCase = {
    init: function() {
        var a = [
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
            [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]
        ];
        this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
        this.setColour(Blockly.Msg.TEXTS_HUE);
        this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "CASE");
        this.setOutput(!0, "String");
        this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP)
    }
};
Blockly.Blocks.text_trim={init:function(){var a=[[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH,"BOTH"],[Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT,"LEFT"],[Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT,"RIGHT"]];this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);this.setColour(Blockly.Msg.TEXTS_HUE);this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a),"MODE");this.setOutput(!0,"String");this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP)}};
Blockly.Blocks.text_print={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_PRINT_TITLE,args0:[{type:"input_value",name:"TEXT"}],previousStatement:null,nextStatement:null,colour:Blockly.Msg.TEXTS_HUE,tooltip:Blockly.Msg.TEXT_PRINT_TOOLTIP,helpUrl:Blockly.Msg.TEXT_PRINT_HELPURL})}};
Blockly.Blocks.text_prompt_ext={init:function(){var a=[[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]];this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);this.setColour(Blockly.Msg.TEXTS_HUE);var b=this;a=new Blockly.FieldDropdown(a,function(a){b.updateType_(a)});this.appendValueInput("TEXT").appendField(a,"TYPE");this.setOutput(!0,"String");this.setTooltip(function(){return"TEXT"==b.getFieldValue("TYPE")?Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT:Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})},
updateType_:function(a){this.outputConnection.setCheck("NUMBER"==a?"Number":"String")},mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("type",this.getFieldValue("TYPE"));return a},domToMutation:function(a){this.updateType_(a.getAttribute("type"))}};
Blockly.Blocks.text_prompt={init:function(){this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);var a=[[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT,"TEXT"],[Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER,"NUMBER"]],b=this;this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);this.setColour(Blockly.Msg.TEXTS_HUE);a=new Blockly.FieldDropdown(a,function(a){b.updateType_(a)});this.appendDummyInput().appendField(a,"TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""),"TEXT").appendField(this.newQuote_(!1));
this.setOutput(!0,"String");this.setTooltip(function(){return"TEXT"==b.getFieldValue("TYPE")?Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT:Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER})},updateType_:Blockly.Blocks.text_prompt_ext.updateType_,mutationToDom:Blockly.Blocks.text_prompt_ext.mutationToDom,domToMutation:Blockly.Blocks.text_prompt_ext.domToMutation};
Blockly.Blocks.text_count={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_COUNT_MESSAGE0,args0:[{type:"input_value",name:"SUB",check:"String"},{type:"input_value",name:"TEXT",check:"String"}],output:"Number",inputsInline:!0,colour:Blockly.Msg.TEXTS_HUE,tooltip:Blockly.Msg.TEXT_COUNT_TOOLTIP,helpUrl:Blockly.Msg.TEXT_COUNT_HELPURL})}};
Blockly.Blocks.text_replace={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_REPLACE_MESSAGE0,args0:[{type:"input_value",name:"FROM",check:"String"},{type:"input_value",name:"TO",check:"String"},{type:"input_value",name:"TEXT",check:"String"}],output:"String",inputsInline:!0,colour:Blockly.Msg.TEXTS_HUE,tooltip:Blockly.Msg.TEXT_REPLACE_TOOLTIP,helpUrl:Blockly.Msg.TEXT_REPLACE_HELPURL})}};
Blockly.Blocks.text_reverse={init:function(){this.jsonInit({message0:Blockly.Msg.TEXT_REVERSE_MESSAGE0,args0:[{type:"input_value",name:"TEXT",check:"String"}],output:"String",inputsInline:!0,colour:Blockly.Msg.TEXTS_HUE,tooltip:Blockly.Msg.TEXT_REVERSE_TOOLTIP,helpUrl:Blockly.Msg.TEXT_REVERSE_HELPURL})}};
Blockly.Constants.Text.QUOTE_IMAGE_MIXIN={QUOTE_IMAGE_LEFT_DATAURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",QUOTE_IMAGE_RIGHT_DATAURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
QUOTE_IMAGE_WIDTH:12,QUOTE_IMAGE_HEIGHT:12,quoteField_:function(a){for(var b=0,c;c=this.inputList[b];b++)for(var d=0,e;e=c.fieldRow[d];d++)if(a==e.name){c.insertFieldAt(d,this.newQuote_(!0));c.insertFieldAt(d+2,this.newQuote_(!1));return}console.warn('field named "'+a+'" not found in '+this.toDevString())},newQuote_:function(a){a=this.RTL?!a:a;return new Blockly.FieldImage(a?this.QUOTE_IMAGE_LEFT_DATAURI:this.QUOTE_IMAGE_RIGHT_DATAURI,this.QUOTE_IMAGE_WIDTH,this.QUOTE_IMAGE_HEIGHT,a?"\u201c":"\u201d")}};
Blockly.Constants.Text.TEXT_QUOTES_EXTENSION=function(){this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);this.quoteField_("TEXT")};
Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN={mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("items",this.itemCount_);return a},domToMutation:function(a){this.itemCount_=parseInt(a.getAttribute("items"),10);this.updateShape_()},decompose:function(a){var b=a.newBlock("text_create_join_container");b.initSvg();for(var c=b.getInput("STACK").connection,d=0;d<this.itemCount_;d++){var e=a.newBlock("text_create_join_item");e.initSvg();c.connect(e.previousConnection);c=
e.nextConnection}return b},compose:function(a){var b=a.getInputTargetBlock("STACK");for(a=[];b;)a.push(b.valueConnection_),b=b.nextConnection&&b.nextConnection.targetBlock();for(b=0;b<this.itemCount_;b++){var c=this.getInput("ADD"+b).connection.targetConnection;c&&-1==a.indexOf(c)&&c.disconnect()}this.itemCount_=a.length;this.updateShape_();for(b=0;b<this.itemCount_;b++)Blockly.Mutator.reconnect(a[b],this,"ADD"+b)},saveConnections:function(a){a=a.getInputTargetBlock("STACK");for(var b=0;a;){var c=
this.getInput("ADD"+b);a.valueConnection_=c&&c.connection.targetConnection;b++;a=a.nextConnection&&a.nextConnection.targetBlock()}},updateShape_:function(){this.itemCount_&&this.getInput("EMPTY")?this.removeInput("EMPTY"):this.itemCount_||this.getInput("EMPTY")||this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));for(var a=0;a<this.itemCount_;a++)if(!this.getInput("ADD"+a)){var b=this.appendValueInput("ADD"+a);0==a&&b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)}for(;this.getInput("ADD"+
a);)this.removeInput("ADD"+a),a++}};Blockly.Constants.Text.TEXT_JOIN_EXTENSION=function(){this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);this.itemCount_=2;this.updateShape_();this.setMutator(new Blockly.Mutator(["text_create_join_item"]))};Blockly.Extensions.register("text_append_tooltip",Blockly.Extensions.buildTooltipWithFieldText("%{BKY_TEXT_APPEND_TOOLTIP}","VAR"));
Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION=function(){var a=this;this.setTooltip(function(){return Blockly.Msg.TEXT_INDEXOF_TOOLTIP.replace("%1",a.workspace.options.oneBasedIndex?"0":"-1")})};
Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN={mutationToDom:function(){var a=document.createElement("mutation");a.setAttribute("at",!!this.isAt_);return a},domToMutation:function(a){a="false"!=a.getAttribute("at");this.updateAt_(a)},updateAt_:function(a){this.removeInput("AT",!0);this.removeInput("ORDINAL",!0);a&&(this.appendValueInput("AT").setCheck("Number"),Blockly.Msg.ORDINAL_NUMBER_SUFFIX&&this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX));Blockly.Msg.TEXT_CHARAT_TAIL&&
(this.removeInput("TAIL",!0),this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));this.isAt_=a}};
Blockly.Constants.Text.TEXT_CHARAT_EXTENSION=function(){this.getField("WHERE").setValidator(function(a){var b="FROM_START"==a||"FROM_END"==a;if(b!=this.isAt_){var d=this.sourceBlock_;d.updateAt_(b);d.setFieldValue(a,"WHERE");return null}});this.updateAt_(!0);var a=this;this.setTooltip(function(){var b=a.getFieldValue("WHERE"),c=Blockly.Msg.TEXT_CHARAT_TOOLTIP;("FROM_START"==b||"FROM_END"==b)&&(b="FROM_START"==b?Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP:Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP)&&
(c+="  "+b.replace("%1",a.workspace.options.oneBasedIndex?"#1":"#0"));return c})};Blockly.Extensions.register("text_indexOf_tooltip",Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION);Blockly.Extensions.register("text_quotes",Blockly.Constants.Text.TEXT_QUOTES_EXTENSION);Blockly.Extensions.registerMutator("text_join_mutator",Blockly.Constants.Text.TEXT_JOIN_MUTATOR_MIXIN,Blockly.Constants.Text.TEXT_JOIN_EXTENSION);
Blockly.Extensions.registerMutator("text_charAt_mutator",Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN,Blockly.Constants.Text.TEXT_CHARAT_EXTENSION);Blockly.Blocks.variables={};Blockly.Constants.Variables={};Blockly.Constants.Variables.HUE=330;
Blockly.defineBlocksWithJsonArray([{type:"variables_get",message0:"%1",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"}],output:null,colour:"%{BKY_VARIABLES_HUE}",helpUrl:"%{BKY_VARIABLES_GET_HELPURL}",tooltip:"%{BKY_VARIABLES_GET_TOOLTIP}",extensions:["contextMenu_variableSetterGetter"]},{type:"variables_set",message0:"%{BKY_VARIABLES_SET}",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"},{type:"input_value",name:"VALUE"}],previousStatement:null,
nextStatement:null,colour:"%{BKY_VARIABLES_HUE}",tooltip:"%{BKY_VARIABLES_SET_TOOLTIP}",helpUrl:"%{BKY_VARIABLES_SET_HELPURL}",extensions:["contextMenu_variableSetterGetter"]}]);
Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN={customContextMenu:function(a){if(!this.isInFlyout){if("variables_get"==this.type)var b="variables_set",c=Blockly.Msg.VARIABLES_GET_CREATE_SET;else b="variables_get",c=Blockly.Msg.VARIABLES_SET_CREATE_GET;var d={enabled:0<this.workspace.remainingCapacity()},e=this.getField("VAR").getText();d.text=c.replace("%1",e);c=goog.dom.createDom("field",null,e);c.setAttribute("name","VAR");c=goog.dom.createDom("block",null,c);c.setAttribute("type",
b);d.callback=Blockly.ContextMenu.callbackFactory(this,c);a.push(d)}}};Blockly.Extensions.registerMixin("contextMenu_variableSetterGetter",Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
Blockly.Constants.VariablesDynamic={};Blockly.Constants.VariablesDynamic.HUE=310;
Blockly.defineBlocksWithJsonArray([{type:"variables_get_dynamic",message0:"%1",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"}],output:null,colour:"%{BKY_VARIABLES_DYNAMIC_HUE}",helpUrl:"%{BKY_VARIABLES_GET_HELPURL}",tooltip:"%{BKY_VARIABLES_GET_TOOLTIP}",extensions:["contextMenu_variableDynamicSetterGetter"]},{type:"variables_set_dynamic",message0:"%{BKY_VARIABLES_SET}",args0:[{type:"field_variable",name:"VAR",variable:"%{BKY_VARIABLES_DEFAULT_NAME}"},{type:"input_value",
name:"VALUE"}],previousStatement:null,nextStatement:null,colour:"%{BKY_VARIABLES_DYNAMIC_HUE}",tooltip:"%{BKY_VARIABLES_SET_TOOLTIP}",helpUrl:"%{BKY_VARIABLES_SET_HELPURL}",extensions:["contextMenu_variableDynamicSetterGetter"]}]);
Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN={customContextMenu:function(a){if(!this.isInFlyout){if("variables_get_dynamic"==this.type){var b="variables_set_dynamic";var c=Blockly.Msg.VARIABLES_GET_CREATE_SET}else b="variables_get_dynamic",c=Blockly.Msg.VARIABLES_SET_CREATE_GET;var d={enabled:0<this.workspace.remainingCapacity()},e=this.getField("VAR").getText();d.text=c.replace("%1",e);c=goog.dom.createDom("field",null,e);c.setAttribute("name","VAR");c=goog.dom.createDom("block",
null,c);c.setAttribute("type",b);d.callback=Blockly.ContextMenu.callbackFactory(this,c);a.push(d)}},onchange:function(){var a=this.getFieldValue("VAR");a=this.workspace.getVariableById(a);"variables_get_dynamic"==this.type?this.outputConnection.setCheck(a.type):this.getInput("VALUE").connection.setCheck(a.type)}};Blockly.Extensions.registerMixin("contextMenu_variableDynamicSetterGetter",Blockly.Constants.VariablesDynamic.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);return Blockly.Blocks;
        }