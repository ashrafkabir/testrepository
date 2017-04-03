const buttonText = {
  //"string that has to be included in Watson output text" : button array index in buttons defined below.
  "Offers": 0,
  "Yes or No": 1,
  "Would you like ": 1,
  "Would you like to": 1
}
const buttons = [
  ['Plus', 'Pro', 'Ultra'],
  ['Yes', 'No']
]
module.exports = {
  /**
   * Returns button array if necessary.
   * The rules to react are set in the static arrays buttonText and buttons.
   * @param   {string}               text    text from Watson
   * @return  {Object or boolean}            buttons or false if not needed
   */
  sendWithButtons: function(text) {
    if (Object.keys(buttonText).length !== 0) {
      for (button in buttonText) {
        if (text.indexOf(button) !== -1) return buttons[buttonText[button]];
      }
    }
    return false;
  }
}
