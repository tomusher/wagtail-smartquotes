
$(function() {
  /**
   * The actual text replacement. Taken from https://gist.github.com/karbassi/6216412.
   */
  function smarten(text) {
      return text
          /* opening singles */
          .replace(/(^|[-\u2014\s(\["])'/g, "$1\u2018")

          /* closing singles & apostrophes */
          .replace(/'/g, "\u2019")

          /* opening doubles */
          .replace(/(^|[-\u2014/\[(\u2018\s])"/g, "$1\u201c")

          /* closing doubles */
          .replace(/"/g, "\u201d")

          /* em-dashes */
          .replace(/--/g, "\u2014");
  };

  $('input[type="text"], textarea').on('input', function(event) {
    var $this = $(this);

    //do nothing if input has a no-smartquotes class
    if ($this.hasClass("no-smartquotes")) {
      return;
    }

    var value = $this.val();

    var newValue = smarten(value);

    if(newValue !== value) {
      // Save selection state so that updating with .val() doesn't move the cursor
      var selectionStart = this.selectionStart;
      var selectionEnd = this.selectionEnd;

      $this.val(newValue);

      this.selectionStart = selectionStart;
      this.selectionEnd = selectionEnd;
    }
  })
});
