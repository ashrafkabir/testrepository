const tagsToReplace = {
  'OFFER_1': 'Plus',
  'OFFER_2': 'Pro',
  'OFFER_3': 'Ultra'
};
module.exports = {
  /**
   * Returns watson answer before it's shown to the user.
   * The rules to replace tags are set in the static array tagsToReplace.
   * @param   {string}    text     watson answer
   * @return  {string}             modified text
   */
  replaceTags: function(text) {
    if (Object.keys(tagsToReplace).length !== 0) {
      for (tag in tagsToReplace) {
        while (text.indexOf(tag) !== -1) {
          text = text.replace(tag, tagsToReplace[tag])
        }
      }
    }
    return text;
  }
}
