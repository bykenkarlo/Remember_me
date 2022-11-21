// remove multiple strings in a string || remove <span style="font-weight: 400;"> tag from copy pasting in word docs in ARTICLE Publishing
var find = ['<span style="font-weight: 400;">', '</span>'];
var replace = ["", ""];
content = content.replace(new RegExp("(" + find.map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")}).join("|") + ")", "g"), function(s){ return replace[find.indexOf(s)]});


// Select2 in Bootstrap modal
$(document).ready(function() {
  $('.select2').select2({
    dropdownParent: $('#modal_id .modal-content')
  });
});
