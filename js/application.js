$(document).ready(function () {
  let cartTotal = 0
  $('tbody tr').each(function (i, ele) {
    let cardQuantity = parseFloat($(ele).children('.quantity').text())
    let carAskingPrice = parseFloat($(ele).children('.asking-price').text())
    let totalAmountForCards = cardQuantity * carAskingPrice
    $(ele).children('.cards-total').html(totalAmountForCards)
    cartTotal += totalAmountForCards
  });

  $('#grand-total').append(cartTotal)
  $('.remove-btn').on('click', function() {
    $(this).closest('tr').remove();
  })
});