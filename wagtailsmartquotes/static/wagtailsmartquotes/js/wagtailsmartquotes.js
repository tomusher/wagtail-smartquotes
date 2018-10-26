
$(function() {
  var replacements = [
    [/'/g, "’"], // apostrophies
    [/(^|\W)"/, "$1“"], // double quote start
    [/"($|\W)/, "”$1"], // double quote end
  ]
  $('input[type="text"], textarea').on('input', function(event) {
    $this = $(this);

    //do nothing if input has a no-smartquotes class
    if ($this.hasClass("no-smartquotes")) {
      return;
    }

    var value = $(this).val();
    var newValue = value;

    // convert any apostrophies to UTF-8 chars
    for (var i in replacements) {
      replacement = replacements[i];
      newValue = newValue.replace(replacement[0], replacement[1]);
    }

    if(newValue !== value) {
      // Save selection state so that updating with .val() doesn't move the cursor
      var selectionStart = this.selectionStart;
      var selectionEnd = this.selectionEnd;

      $(this).val(newValue);

      this.selectionStart = selectionStart;
      this.selectionEnd = selectionEnd;
    }
  })
});
