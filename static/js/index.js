//首页js
(function(){
    $('.nav').on('mouseover','li > .nav-dottle',function(){
        var self = $(this).parent();
        self.find('.nav-title').css('display','inline-block').removeClass('animated bounceOut').addClass('animated bounceIn');
        self.addClass('selected');
    }).on('mouseout','li > .nav-dottle',function(){
        var self = $(this).parent();
        self.find('.nav-title').css('display','none').removeClass('animated bounceIn').addClass('animated bounceOut');
        self.removeClass('selected');
    })

})();