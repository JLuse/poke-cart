let updatePokeCart = function (ele) {
  let cardQuantity = parseFloat($(ele).find('.quantity input').val())
  console.log(cardQuantity)
  let cardAskingPrice = parseFloat($(ele).children('.asking-price').text())
  let totalAmountForCards = cardQuantity * cardAskingPrice
  $(ele).children('.cards-total').html(totalAmountForCards)
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
  // need to fix
  $('#grand-total').append(pokeCartTotal)
}


$(document).ready(function () {
  getGrandTotal()

  $('.remove-btn').on('click', function() {
    $(this).closest('tr').remove();
    getGrandTotal()
  })

  $('tr input').on('input', function () {
    getGrandTotal()
  });
});