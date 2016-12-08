app.factory('highlighter', [
  function() {
    function highlight(text, keys) {

      var textToHighlight = text;
      var highlightedText;

      for(var i=0; i<keys.length;i++) {
        var key = new RegExp(keys[i]['text'], 'g');
        highlightedText = textToHighlight.replace(key, "<span>$&</span>");
        textToHighlight = highlightedText;
      }
      return highlightedText;
    };

    return {
      highlight: highlight
    }
  }]
)