require('./widget.scss')

var Wix = require('Wix')
var $ = require('jquery')

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
// You can get the style params programmatically, un-comment the following snippet to see how it works:
/*Wix.Styles.getStyleParams(style => {
 console.log(style);
 });*/

// You can also get the style every time it changes, try this:
/*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
 console.log(style);
 });*/

function onSettingsUpdate(update) {
    update = stringify(update);
    $('.sample-settings-title').show();
    $('.json').html(update);
    updateCompHeight();
}

function updateCompHeight(height) {
    const desiredHeight = height || document.documentElement.scrollHeight;
    Wix.setHeight(desiredHeight);
}

function stringify(input) {
    try {
        return JSON.stringify(input, null, 4);
    } catch (err) {
        return input;
    }
}


function inputCapture(element){
$(element).change(function() {
console.log($( this ).val())
let value = $( this ).val()
console.log("TT")
return value
})
}


$(document).ready(() => {
let fName = ""
let email = ""
let tel = ""
let product = ""

$("#fName").change(function() {
fName = $(this).val()
})

$('#email').change(function() {
email = $(this).val()
})

$("#tel").change(function() {
tel = $(this).val()
})

$(".product").change(function() {
product = $(this).val()
})

  $('.book').click(() => {
   if(!fName == "" && !email == "" && !tel == "" && !product == "") {
   window.location.href = "confirmation.html";
return false;
}

else {
alert("Please enter madandatory fields Name, Email and Telephone")
window.location.href = "404.html"
return false;
}

  });
});
