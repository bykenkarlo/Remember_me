// remove all <span style="font-weight: 400;"> tag from copy pasting in word docs in ARTICLE Publishing
var find = ['<span style="font-weight: 400;">', '</span>'];
var replace = ["", ""];
content = content.replace(new RegExp("(" + find.map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")}).join("|") + ")", "g"), function(s){ return replace[find.indexOf(s)]});