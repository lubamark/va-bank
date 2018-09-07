'use strict';

$(document).ready(function () {
    $('.j-schedule').each(function(){
        new Schedule(this);
    });
});

Schedule = function(container){
    this.container = $(container);
    this.tab = this.container.find('.j-schedule-tab');
    this.cell = this.container.find('.j-schedule-cell');
    this.empty = this.container.find('.j-schedule-empty');

    this.init();
};

Schedule.prototype.init = function(){
    var cmp = this;

    cmp.tab.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('_active')){
            cmp.tab.removeClass('_active');
            $this.addClass('_active');
            cmp.cell.hide();
            cmp.cell.filter('[data-day="'+$this.data('day')+'"]').fadeIn(300);
            if(cmp.cell.filter('[data-day="'+$this.data('day')+'"]').filter(':not(._empty)').length < 1){
                cmp.empty.fadeIn(300);
            }
            else{
                cmp.empty.hide();
            }
        }
    });

    cmp.tab.each(function(){
        var $this = $(this);
        if(cmp.cell.filter('[data-day="'+$this.data('day')+'"]').filter(':not(._empty)').length < 1){
            $this.parent().hide();
        }
        else{
            $this.parent().show();
        }
    });

    if(cmp.tab.filter('._active').length > 0){
        cmp.tab.each(function(){
            var $this = $(this);
            if($this.hasClass('_active')){
                cmp.tab.removeClass('_active');
                $this.addClass('_active');
                cmp.cell.hide();
                cmp.cell.filter('[data-day="'+$this.data('day')+'"]').show();
                if(cmp.cell.filter('[data-day="'+$this.data('day')+'"]').filter(':not(._empty)').length < 1){
                    cmp.empty.show();
                }
                else{
                    cmp.empty.hide();
                }
            }
        });
    }
    else{
        cmp.tab.removeClass('_active');
        $(cmp.tab[0]).addClass('_active');
        cmp.cell.hide();
        cmp.cell.filter('[data-day="'+$(cmp.tab[0]).data('day')+'"]').show();
        if(cmp.cell.filter('[data-day="'+$(cmp.tab[0]).data('day')+'"]').show().filter(':not(._empty)').length < 1){
            cmp.empty.show();
        }
        else{
            cmp.empty.hide();
        }
    }

    if(cmp.tab.filter('._active').is(':visible')){
        console.log('vis');
    }
    else{
        for(var i=0; i<cmp.tab.length; i++){
            if($(cmp.tab[i]).is(':visible')){
                $(cmp.tab[i]).click();
                break;
            }
        }
    }

    $(window).on('resize', function(){
        cmp.tab.each(function(){
            var $this = $(this);
            if($this.hasClass('_active')){
                cmp.tab.removeClass('_active');
                $this.addClass('_active');
                cmp.cell.hide();
                cmp.cell.filter('[data-day="'+$this.data('day')+'"]').show();
                if(cmp.cell.filter('[data-day="'+$this.data('day')+'"]').filter(':not(._empty)').length < 1){
                    cmp.empty.show();
                }
                else{
                    cmp.empty.hide();
                }
            }
        });
    });
};