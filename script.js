$('document').ready( function() {
    $('#lightMode').on('click', function() {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'light');
        $('body').addClass('lightMode');
        $('body').removeClass('darkMode');
    })

    $('#darkMode').on('click', function() {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'dark');
        $('body').addClass('darkMode');
        $('body').removeClass('lightMode');
    })

    $('#cookie').on('click', function() {
        document.cookie = "username=User; expires=Wed, 14 Jun 2022 18:00:00 UTC"
    })

    let theme = localStorage.getItem('theme')
    if (theme==='light'){
        console.log('miras')
        $('body').addClass('lightMode');
        $('body').removeClass('darkMode');
    }else{
        $('body').addClass('darkMode');
        $('body').removeClass('lightMode');
    }
})