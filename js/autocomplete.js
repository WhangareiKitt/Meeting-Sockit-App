keys = {
    ESC: 27,
    TAB: 9,
    RETURN: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
    AT: 50
};

function init() {

  $('input, textarea').wrap('<div class="autocomplete-wrap"></div>')


}


$('input, textarea').keypress(function(event) {
  if (event.which === 50) {
    global.watch == true
  } else if (event.which === 32) {
    global.watch = false;
    global.nameQuery = undefined;
  } else {
    if (global.nameQuery) {
      global.nameQuery += String.fromCharCode(event.which)
    } else global.nameQuery = String.fromCharCode(event.which)
    results = nameQuery(event, global.nameQuery)
    console.log results;
    createDropDown(results, event)

  }
});

function nameQuery (event, query) {
  var matches = ['no result found'];

  global.allNames.forEach(function(name) {
    if ( new RegExp(query, 'i').test(name) ) {
      matches.unshift(name);
    }
  });

  return matches

}

function createDropDown(results, event) {
  // check if drop down exists
  // create it if it does not
  // re-render list options if it does
  if ( $('.autocomplete-dropdown').length ) {
    $('.autocomplete-dropdown').show()
  } else {
    $(event.target).parent().append('<div class="autocomplete-dropdown"><ul class="autocomplete-options"></ul></div>')
  }
  for (var i = 0; i < results.length; i++) {
    results[i]
    $('.autocomplete-options')
  }
  return null;
}


function destroySuggestions (e) {
  $('.autocomplete-dropdown').hide()
}
