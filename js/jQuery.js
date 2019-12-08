$('#navbar .benefit, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top + 40
            },
            800
        );
    }
});

$('#navbar .home').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});