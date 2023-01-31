// load jquery menggunakan document ready
$(document).ready(function(){
    // get class open-image kemudian kasih even onclick untuk deteksi klik
    $('.open-image').on('click', function () {
        // get data imaga dari attr image
        let image = $(this).data('image')
        // ganti attr src image ke image yang baru
        $('#modal-image').attr('src', './assets/' + image)
        // add class open ke class modal untuk open pop up
        $('.modal._image').addClass('open')
        // untuk disable scroll waktu modal keluar
        $('html').css('overflow', 'hidden')  
    })
    $('.toggle-wa').on('click', function () {
        $('.wwa').toggleClass('hidden')
    })
    $('.open-link').on('click', function () {
        let tokopedia = $(this).data('tokopedia')
        let shopee = $(this).data('shopee')
        let lazada = $(this).data('lazada')

        $('#tokopedia').attr('href', tokopedia)
        $('#shopee').attr('href', shopee)
        $('#lazada').attr('href', lazada)

        // add class open ke class modal untuk open pop up
        $('.modal._link').addClass('open')
        // untuk disable scroll waktu modal keluar
        $('html').css('overflow', 'hidden')  
    })
    // get class overlay kemudian kasih even onclick untuk deteksi klik
    $('.overlay').on('click', function () {
        // get class modal dan menghapus class open yang berada di classlist modal
        $('.modal').removeClass('open')
        // get id modal-image kemudian mengosongkan attr src
        $('#modal-image').attr('src', "")
        // get id tokopedia kemudian mengosongkan attr href (link)
        $('#tokopedia').attr('href', "")
        // get id shopee kemudian mengosongkan attr href (link)
        $('#shopee').attr('href', "")
        // get id lazada kemudian mengosongkan attr href (link)
        $('#lazada').attr('href', "")
        // untuk disable scroll waktu modal keluar
        $('html').css('overflow', 'auto')
    })
    $('.close').on('click', function () {
        /// get class modal dan menghapus class open yang berada di classlist modal
        $('.modal').removeClass('open')
        // get id modal-image kemudian mengosongkan attr src
        $('#modal-image').attr('src', "")
        // get id tokopedia kemudian mengosongkan attr href (link)
        $('#tokopedia').attr('href', "")
        // get id shopee kemudian mengosongkan attr href (link)
        $('#shopee').attr('href', "")
        // get id lazada kemudian mengosongkan attr href (link)
        $('#lazada').attr('href', "")
        // untuk disable scroll waktu modal keluar
        $('html').css('overflow', 'auto')
    })

    // setting trigger & deteksi click pada elemen class nav-menu-item
    $('.nav-menu-item').on('click', function () {
        // get attr link pada elemen nav-menu-item yang nantinya digunakan untuk scroll ke section
        let attr = $(this).attr('href')
        // function untuk membuka dan menutup mobile navigation
        toggleNav()
        // jika link ditemukan maka fungsi bawah akan berjalan
        if (attr) {
            // jquery function pada tag html body
            $('html, body').animate({
                // set posisi dimana section
                scrollTop: ($(attr).offset().top - 110)
                // durasi animation scroll
            }, 500);
        }
    })

    // set detect klik pada class product digunakan untuk memunculkan
    // produk2 yang akan berada dibawahnya
    $('.product').on('click', function () {
        // set toggle class pada class product border-round agar background selalu berganti ketika di klik
        $('.product .border-round').toggleClass('bg-neutral-500')
        $('.service .border-round').removeClass('bg-neutral-500')
        // agar ketika klik produk menu service ketutup
        $('.service-list').removeClass('open')
        // function elemen pembungkus yang membuka list produk yang diset ke product list
        wrapOpen('.product-list')
        // untuk toggle class open agar list muncul dan sembunyi
        $('.product-list').toggleClass('open')
    })

    // sama saja klik product diatas tapi ini untuk service
    $('.service').on('click', function () {
        $('.product .border-round').removeClass('bg-neutral-500')
        $('.service .border-round').toggleClass('bg-neutral-500')
        $('.product-list').removeClass('open')
        wrapOpen('.service-list')
        $('.service-list').toggleClass('open')
    })

    // untuk deteksi click pada menu hamburger mobile untuk membuka tutup menu
    $('.toggle').on('click', function () {
        $('.nav-menu').toggleClass('open')
        $('.menu-open').toggleClass('hidden')
        $('.menu-close').toggleClass('hidden')
    })

    // function yang berguna untuk membuka dan menutup produk
    function wrapOpen(nameClass) {
        // check apakah elemen kebuka
        let hasTheClass =  $(nameClass).hasClass('open')
        // jika iya maka kita akan menutup elemen tersebut
        if (hasTheClass) {
            $('.wrapper').css({
                'height': 10
            })
        // jika tidak maka kita buka elemenya
        } else{
            $('.wrapper').css({
                'height': ($(nameClass).innerHeight() + 50)
            })
        }
    }

    // function toggle nav untuk membuka dan menutup menu nav mobile
    function toggleNav() {
        $('.nav-menu').toggleClass('open')
        $('.menu-open').toggleClass('hidden')
        $('.menu-close').toggleClass('hidden')
    }

})