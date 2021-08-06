$(document).ready(function () {
    $("#runBtn").click(function () {
      runcode();
    });
    $("#resetBtn").click(function () {
      reset();
    });
  });
  
  
  /*Blockly.Blocks['string_length'] = {
    init: function() {
      this.appendValueInput('VALUE')
          .setCheck('String')
          .appendField('length of');
      this.setOutput(true, 'Number');
      this.setColour(160);
      this.setTooltip('Returns number of letters in the provided text.');
      this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
  };*/
  
  Blockly.Blocks['example_input_text'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Bot:")
      this.setNextStatement(true, null);
      this.setColour(250);
      this.setTooltip("");
      this.setHelpUrl("");
    }, 
  };
  
  Blockly.JavaScript["example_input_text"] 
  init = function (block) {
    var text_input = block.getFieldValue("input");
  
    var code = `
    var inputTextValue = "${text_input}";
    `;
    return code;
  };
  
  var workspace = Blockly.inject("blocklyDiv", {
    media: "media/",
    toolbox: document.getElementById("toolbox"),
  });
  
  function redrawUi() {
    if (typeof inputTextValue !== "undefined") {
      $("#inputBox").text(inputTextValue);
    } else {
      $("#inputBox").text("");
    }
  }
  
  
  Blockly.Blocks["example_input_text"] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Ask me a  question?")
          .appendField(new Blockly.FieldDropdown([[" What is the date today?","Item 1"], ["What is the time now?","Item 2"], [" How are you?","Item 3"], [" What is JavaScript?","Item 4"], ["What is your name?","Item 5"], ["Ask me a question ","Item 6"]]), "dropdown_text");
          this.setPreviousStatement(true, null);
          this.setColour(270);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };
  
  Blockly.JavaScript["example_input_text"] = function (block) {
  var text_input = block.getFieldValue("dropdown_text");
  
    var code = `
    var inputTextValue = "${text_input}";
    `;
    return code;
  };
  
  var workspace = Blockly.inject("blocklyDiv", {
    media: "media",
    toolbox: document.getElementById("toolbox"),
  });
  
  function redrawUi() {
    if (typeof inputTextValue !== "undefined") {
      $("#inputBox").text(inputTextValue);
    } else {
      $("#inputBox").text("");
    }
  }
  
  
  
  
  function runcode() {
    // Generate JavaScript code and run it.
    var geval = eval;
    try {
      geval(Blockly.JavaScript.workspaceToCode(workspace));
    } catch (e) {
      console.error(e);
    }
    redrawUi();
  }
  
  function reset() {
    delete inputTextValue;
    redrawUi();
    location.reload();
  }