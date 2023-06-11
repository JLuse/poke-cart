let updatePokeCart = function (ele) {
  let cardQuantity = Number($(ele).find('.quantity input').val())
  let cardAskingPrice = Number($(ele).children('.asking-price').children('.dollar-price').text())
  let totalAmountForCards = cardQuantity * cardAskingPrice
  $(ele).children('.cards-total').html('$' + totalAmountForCards)
  return totalAmountForCards;
}

let getGrandTotal = function() {
  let pokecartCardValues = []
  $('tbody tr').each(function (i, ele) {
    let totalValueForIndividualCard = updatePokeCart(ele)
    pokecartCardValues.push(totalValueForIndividualCard)
  });
  let pokeCartTotal = pokecartCardValues.reduce((acc, currentVal) => {
    return acc + currentVal
  })
  $('#grand-total').html(pokeCartTotal)
}


$(document).ready(function () {
  getGrandTotal()

  $('.remove-btn').on('click', function() {
    $(this).closest('tr').remove();
    getGrandTotal()
  })

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      getGrandTotal()
    }, 200);
  });

  $('#addCard').on('submit', function(e) {
    e.preventDefault();
    let pokemon = $(this).children('[name=pokemon]').val()
    let cardType = $(this).children('[name=type]').val()
    let askingPrice = $(this).children('[name=asking-price]').val()
    let quantity = $(this).children('[name=quantity]').val()

  //   $('tbody').append('<tr>' +
  //   '<td class="pokemon-name">' + pokemon + '</td>' +
  //   '<td class="card-type">' + cardType + '</td>' +
  //   '<td class="asking-price">$<span class="dollar-price">' + askingPrice + '<span/></td>' +
  //   '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
  //   '<td class="marketValue"></td>' +
  //   '<td class="profit"></td>' +
  //   '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
  // '</tr>');
  $('tbody').append(
    `<tr>
      <td class="pokemon-name">${pokemon}</td>
      <td class="card-type">${cardType}</td>
      <td class="asking-price">$<span class="dollar-price">${askingPrice}</span></td>
      <td class="quantity"><input type="number" value="${!quantity ? 0 : quantity}"/></td>
      <td class="cards-total"></td>
      <td>
        <button class="btn btn-danger btn-sm remove-btn">Remove</button>
      </td>
    </tr>
  `)

  $(this).children('[name=pokemon]').val()
  $(this).children('[name=type]').val()
  $(this).children('[name=asking-price]').val()
  $(this).children('[name=quantity]').val()

  getGrandTotal()
  });

}); // end