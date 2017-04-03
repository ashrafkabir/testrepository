const tagsToReplace = {
  'Plus': 'OFFER_1',
  'Pro': 'OFFER_2',
  'Ultra': 'OFFER_3'
};
module.exports = {
  /**
   * Returns user input before it's sent to Watson Conversation API.
   * The rules to replace tags are set in the static array tagsToReplace.
   * @param   {string}      text       user input
   * @return  {string}                 modified text
   */
  replaceTagsUserInput: function(text) {
    if (Object.keys(tagsToReplace).length !== 0) {
      for (tag in tagsToReplace) {
        var regex = new RegExp('\\b' + tag + '\\b', 'i')
        while (text.search(regex) !== -1) {
          text = text.replace(regex, tagsToReplace[tag])
        }
      }
    }
    return text;
  }
}
