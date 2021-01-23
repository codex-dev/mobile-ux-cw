$(document).ready(function () {

    var item_data = ''
    // if (($("#cart_itemList li").length == 0)) {
    //     item_data += '<h4 class="emptyMessage">Cart is empty!</h4>';
    //     $('#cart_itemList').append(item_data);
    // }

    // // Remove item(s) from cart
    // $('.cart_itemList').on('click', '.delete', function () {
    //     // Getting the datakeyword of clicked item
    //     var tempt = $(this).closest('li').attr('data-keyword');

    //     $('.cart_itemList li[data-keyword=' + tempt + ']').remove()

    //     alert(tempt + ' is removed from cart.');

    //     //Display message when all items are removed
    //     var item_data = ''
    //     if (($("#cart_itemList li").length == 0)) {
    //         item_data += '<h4>Cart is empty!</h4>';
    //         $('#cart_itemList').append(item_data);
    //     }
    // })

    var imgSrc = window.localStorage.getItem("productImgSrc")
    var title= window.localStorage.getItem("productTitle")
    var price =        window.localStorage.getItem("productPrice")

    $('#imgSrc').attr('src',imgSrc);
    $('#title').html(title);
    $('#price').html(price);

    // Goto checkout when clicked checkout button
    $('.buttonCheck').on('click', function () {
        window.location.href = 'checkout.html';
    })

    // // Display a toast message when a item is removed from cart
    // $('#all_Items .itemList').on('click', '.delete', function () {
    //     displayToast('Success', 'Removed from Cart')
    // });

    // // Decide background color of toast message
    // function displayToast(messageType, message) {

    //     if (messageType == "success") {
    //         $('#all_Items #displayToast').css("background-color", "rgb(79, 196, 79)")
    //     } else if (messageType == "error") {
    //         $('#all_Items #displayToast').css("background-color", "rgb(204, 73, 73)")
    //     } else if (messageType == "warning") {
    //         $('#all_Items #displayToast').css("background-color", "rgb(219, 158, 45)")
    //     }

    //     $("#all_Items #displayToast").html('<p> ' + message + ' </p>');
    //     $("#all_Items #displayToast").popup();
    //     $("#all_Items #displayToast").popup("open");
    //     setTimeout(function () { $("#all_Items #displayToast").popup("close"); }, 1000);
    // }
});