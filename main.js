$(function() {
  $('.resultSection').hide()
  window.onload = (event) => {
    $('#input-0').focus();
  };

  // Add Button
  let antalInputs = 0;
  let addOption = function() {      // hämta värdet från html-taggen med id #input-SIFFRA
    let inputValue = $('#input-' + antalInputs).val();

    // vi kollar längden på input värdet med en if-sats
    if (inputValue.length == 0) {
      return // avsluta funktion
    } else {
      // öka antalet inputs
      antalInputs += 1;
    }

    let inputID = ' id="input-' + antalInputs + '"'
    let inputHTML = '<input type="text" class="addedOption"'
    + inputID
    + ' placeholder="Something">';

    $('.inputs').append(inputHTML);
    $('.addedOption').focus();
  }

  let onInputEnter = function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      addOption();
    }
  }

  let options = []
  let onSubmit = function() {
    $('.inputSection').hide()
    $('.goButton').hide()
    $('.resultSection').css('display', 'flex')
    $('input').each(function() {
        options.push($(this).val())
    })
    let winner = options[Math.floor(Math.random() * options.length)]
    console.log(winner)
    $('.resultSection').text(winner)
    // ersätt innehållet i html-taggen med class div '.titel'
    $('.titel').replaceWith('<h1>The <span style="color:#8AB439"> cat</span>´s choice is... </h1>');
  }

  // alla events listeneres
  $('.addButton').click(addOption);
  $('.submit').click(onSubmit)
  $('.inputs').keypress(onInputEnter);

})
