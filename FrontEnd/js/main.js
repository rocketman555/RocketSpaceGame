var lang = navigator.language || navigator.userLanguage || 'en-US'
var network = 'bsc'

var lang_menu_opened = false
var network_menu_opened = false

function setLang_ru(){
    lang = 'ru'
    $('header .buttons>.lang>span').removeAttr('class').addClass('emoji ru')
    $('header .buttons>.lang>ul>.active').removeClass('active')
    $('header .buttons>.lang>ul>li>.ru').parent().addClass('active')
    return true
}

function setLang_en(){
    lang = 'en'
    $('header .buttons>.lang>span').removeAttr('class').addClass('emoji en')
    $('header .buttons>.lang>ul>.active').removeClass('active')
    $('header .buttons>.lang>ul>li>.en').parent().addClass('active')
    return true
}

function setNetwork_bsc(){
    network = 'bsc'
    $('header .buttons>.network>div>span:first-child').removeAttr('class').addClass('chain bsc')
    $('header .buttons>.network>div>span:last-child').text('BSC')
    $('header .buttons>.network>ul>.active').removeClass('active')
    $('header .buttons>.network>ul>li>.bsc').parent().addClass('active')
    return true
}

function setNetwork_matic(){
    network = 'matic'
    $('header .buttons>.network>div>span:first-child').removeAttr('class').addClass('chain matic')
    $('header .buttons>.network>div>span:last-child').text('Polygon')
    $('header .buttons>.network>ul>.active').removeClass('active')
    $('header .buttons>.network>ul>li>.matic').parent().addClass('active')
    return true
}

function setNetwork_avax(){
    network = 'avax'
    $('header .buttons>.network>div>span:first-child').removeAttr('class').addClass('chain avax')
    $('header .buttons>.network>div>span:last-child').text('Avalanche')
    $('header .buttons>.network>ul>.active').removeClass('active')
    $('header .buttons>.network>ul>li>.avax').parent().addClass('active')
    return true
}

function setNetwork_ftm(){
    network = 'ftm'
    $('header .buttons>.network>div>span:first-child').removeAttr('class').addClass('chain ftm')
    $('header .buttons>.network>div>span:last-child').text('Fantom')
    $('header .buttons>.network>ul>.active').removeClass('active')
    $('header .buttons>.network>ul>li>.ftm').parent().addClass('active')
    return true
}

function openMenu_lang(){
    if (!lang_menu_opened) {
        setTimeout(function() {
            if ($('header .buttons>.lang:hover').length > 0) {
                $('header .buttons>.lang>ul').css('animation', 'showMenu 500ms ease-in-out forwards')
                $('header .buttons>.lang>ul').css('display', 'block')
                setTimeout(function() { lang_menu_opened = true }, 250)
            }
        }, 300)
    }
}

function closeMenu_lang(){
    if (lang_menu_opened) {
        setTimeout(function() {
            if ($('header .buttons>.lang:hover').length == 0) {
                $('header .buttons>.lang>ul').css('animation', 'hideMenu 250ms ease-in-out forwards')
                $('header .buttons>.lang').css('border-color', '#38507c')
                setTimeout(function() {
                    $('header .buttons>.lang>ul').css('animation', '')
                    $('header .buttons>.lang>ul').css('display', '')
                    setTimeout(function() { lang_menu_opened = false }, 250)
                }, 250)
                setTimeout(function() { $('header .buttons>.lang').css('border-color', '') }, 500)
            }
        }, 300)
    }
}

function openMenu_network(){
    if (!network_menu_opened) {
        setTimeout(function() {
            if ($('header .buttons>.network:hover').length > 0) { 
                $('header .buttons>.network>ul').css('display', 'block')
                $('header .buttons>.network>ul').css('animation', 'showMenu 500ms ease-in-out forwards')
                setTimeout(function() { network_menu_opened = true }, 250)
            }
        }, 300)
    }
}

function closeMenu_network(){
    if (network_menu_opened) {
        setTimeout(function() {
            if ($('header .buttons>.network:hover').length == 0) {
                $('header .buttons>.network>ul').css('animation', 'hideMenu 250ms ease-in-out forwards')
                $('header .buttons>.network').css('border-color', '#38507c')
                setTimeout(function() {
                    $('header .buttons>.network>ul').css('animation', '')
                    $('header .buttons>.network>ul').css('display', '')
                    setTimeout(function() { network_menu_opened = false }, 250)
                }, 250)
                setTimeout(function() { $('header .buttons>.network').css('border-color', '') }, 500)
            }
        }, 300)
    }
}

function setLang() {
    if (lang.toLowerCase().includes('en')) {
        setLang_en()
    } else if (lang.toLowerCase().includes('ru')) {
        setLang_ru()
    }
}

function setNetwork() {
    if (network.toLowerCase().includes('bsc')) {
        setNetwork_bsc()
    } else if (network.toLowerCase().includes('matic')) {
        setLang_matic()
    } else if (network.toLowerCase().includes('avax')) {
        setLang_avax()
    } else if (network.toLowerCase().includes('ftm')) {
        setLang_ftm()
    }
}

async function connectBeacon() {
    setInterval(function () {
        $('header .buttons>.connect.disconnected').toggleClass("beacon")
    }, 1200)
}

async function launchBeacon() {
    setInterval(function () {
        $('header .buttons>.launch').toggleClass("beacon")
    }, 1200)
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToBottom() {
    window.scrollTo({
        top: 9999,
        behavior: 'smooth'
    })
}

function bodyMove() {
    $('body').css("top", "15px")
    $('body').css("top", "-15px")
    $('body').css("top", "0px")
}

$(document).ready(function() {
    connectBeacon()
    launchBeacon()

    setLang()
    setNetwork()
    
    bodyMove()
    setTimeout(function() { scrollToTop() }, 100)

    $('.contacts-link').on('click', scrollToBottom)

    $('header .buttons>.lang').mouseenter(function() {
        openMenu_lang()
    }).mouseleave(function() {
        closeMenu_lang()
    })

    $('header .buttons>.network').mouseenter(function() {
        openMenu_network()
    }).mouseleave(function() {
        closeMenu_network()
    })

    setInterval(function () {
        if ($('header .buttons>.lang:hover').length > 0) { openMenu_lang() } else { closeMenu_lang() }
        if ($('header .buttons>.network:hover').length > 0) { openMenu_network() } else { closeMenu_network() }
    }, 250)

    $('header .buttons>.lang>ul>li').on('click', function() {
        if ($(this).children('span').hasClass('ru')) { if (lang != 'ru') { setLang_ru() } }
        if ($(this).children('span').hasClass('en')) { if (lang != 'en') { setLang_en() } }
    })

    $('header .buttons>.network>ul>li').on('click', function() {
        if ($(this).children('span:first-child').hasClass('bsc')) { if (network != 'bsc') { setNetwork_bsc() } }
        if ($(this).children('span:first-child').hasClass('matic')) { if (network != 'matic') { setNetwork_matic() } }
        if ($(this).children('span:first-child').hasClass('avax')) { if (network != 'avax') { setNetwork_avax() } }
        if ($(this).children('span:first-child').hasClass('ftm')) { if (network != 'ftm') { setNetwork_ftm() } }
    })
})