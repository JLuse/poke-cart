let updatePokeCart = function (ele) {
  // let cardTotal = 0
  let cardQuantity = parseFloat($(ele).children('.quantity').text())
  let carAskingPrice = parseFloat($(ele).children('.asking-price').text())
  let totalAmountForCards = cardQuantity * carAskingPrice

  $(ele).children('.cards-total').html(totalAmountForCards)

  // cartTotal += totalAmountForCards
  return totalAmountForCards;
}

let updateGrandTotal = function(totalForCards) {
  let cartTotal = 0
  cartTotal += totalForCards
  $('#grand-total').append(cartTotal)
}

$(document).ready(function () {
  // let cartTotal = 0
  // $('tbody tr').each(function (i, ele) {
  //   let cardQuantity = parseFloat($(ele).children('.quantity').text())
  //   let carAskingPrice = parseFloat($(ele).children('.asking-price').text())
  //   let totalAmountForCards = cardQuantity * carAskingPrice
  //   $(ele).children('.cards-total').html(totalAmountForCards)
  //   cartTotal += totalAmountForCards
  // });

  $('tbody tr').each(function (i, ele) {
    updatePokeCart(ele)
    updateGrandTotal(updatePokeCart(ele))
  });

  // $('#grand-total').append(cartTotal)
  // $('.remove-btn').on('click', function() {
  //   $(this).closest('tr').remove();
  // })
});