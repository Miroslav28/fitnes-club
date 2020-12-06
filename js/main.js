$(document).ready(() => {

    $('#trainers-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    let fl=0
    $('.slick-next').click(() => {
        fl+=1
        if (fl===1) {
            $('.slick-count').text('04 --------- 06')
        } else if (fl === 2) {
            $('.slick-count').text('07 --------- 09')
        } else if (fl===3) {
            fl=0
            $('.slick-count').text('01 --------- 03')
        }
    })
    $('.slick-prev').click(() => {
        if (fl===0) {
            fl=2
            $('.slick-count').text('07 --------- 09')
        } else if (fl===1) {
            fl=0
            $('.slick-count').text('01 --------- 03')
        } else if (fl===2) {
            fl=1
            $('.slick-count').text('03 --------- 06')
        }
    })

    $('#order-button-main').click(() => {
       let  name = $('#name')
       let  number = $('#number')

        if (!name.val()) {
            name.css('border-color', 'red')
        } else {
            name.css('border-color', 'white')
        }
        if (!number.val()) {
            number.css('border-color', 'red')
        } else {
            number.css('border-color', 'white')
        }
        if (number.val() && name.val()) {
            alert('Ваша заявка на рассмотрении')
        }
    })
})