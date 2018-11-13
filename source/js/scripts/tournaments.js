'use strict';

$(document).ready(function () {
    $('.j-roundrobin').each(function(){
        new RoundRobin(this);
    });

    $('.j-ellimination').each(function(){
        new Ellimination(this);
    });

    $('.j-tabs').each(function(){
        new Tabs(this);
    });

    $('.j-group').each(function(){
        new Group(this);
    });
});

window.onload=function(){
    (function(d){
     var
     ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
     nm=true,sp={x:0,y:0},ep={x:0,y:0},
     touch={
      touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
      touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
      touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
      touchcancel:function(e){nm=false}
     };
     for(var a in touch){d.addEventListener(a,touch[a],false);}
    })(document);
}

RoundRobin = function(container){
    this.container = $(container);
    this.body = this.container.find('.j-roundrobin-body');
    this.head = this.container.find('.j-roundrobin-head');
    this.fake = this.container.find('.j-roundrobin-fake');
    this.num = parseInt(this.container.data('teams'),0);

    this.init();
};

RoundRobin.prototype.init = function(){
    var cmp = this;

    if(parseInt($(window).width(),0) < (768 - getScrollBarWidth())){
        cmp.head.removeAttr('style');
        cmp.fake.removeAttr('style');
        cmp.body.css({
            width: (cmp.num*50+178)+"px"
        });
    }
    else{
        if(parseInt($(window).width(),0) < (1024 - getScrollBarWidth())){
            cmp.body.removeAttr('style');
            cmp.head.css({
                width: "calc(100% - "+50*cmp.num+"px)"
            });
            cmp.fake.css({
                width: "calc(100% - "+50*cmp.num+"px)"
            });
        }
        else{
            if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
                cmp.body.removeAttr('style');
                cmp.head.css({
                    width: "calc(100% - "+65*cmp.num+"px)"
                });
                cmp.fake.css({
                    width: "calc(100% - "+65*cmp.num+"px)"
                });
            }
            else{
                cmp.body.removeAttr('style');
                cmp.head.css({
                    width: "calc(100% - "+(68*cmp.num+4)+"px)"
                });
                cmp.fake.css({
                    width: "calc(100% - "+(68*cmp.num+1)+"px)"
                });
            }
        }
    }

    $(window).on('resize', function(){
        if(parseInt($(window).width(),0) < (768 - getScrollBarWidth())){
            cmp.head.removeAttr('style');
            cmp.fake.removeAttr('style');
            cmp.body.css({
                width: (cmp.num*50+178)+"px"
            });
        }
        else{
            if(parseInt($(window).width(),0) < (1024 - getScrollBarWidth())){
                cmp.body.removeAttr('style');
                cmp.head.css({
                    width: "calc(100% - "+50*cmp.num+"px)"
                });
                cmp.fake.css({
                    width: "calc(100% - "+50*cmp.num+"px)"
                });
            }
            else{
                if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
                    cmp.body.removeAttr('style');
                    cmp.head.css({
                        width: "calc(100% - "+65*cmp.num+"px)"
                    });
                    cmp.fake.css({
                        width: "calc(100% - "+65*cmp.num+"px)"
                    });
                }
                else{
                    cmp.body.removeAttr('style');
                    cmp.head.css({
                        width: "calc(100% - "+(68*cmp.num+4)+"px)"
                    });
                    cmp.fake.css({
                        width: "calc(100% - "+(68*cmp.num+1)+"px)"
                    });
                }
            }
        }
    });
};

getScrollBarWidth = function() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    return (w1 - w2);
};

Ellimination = function(container){
    this.container = $(container);
    this.prev = this.container.find('.j-ellimination-prev');
    this.next = this.container.find('.j-ellimination-next');
    this.tab = this.container.find('.j-ellimination-tab');
    this.table = this.container.find('.j-ellimination-table');
    this.steps = this.container.find('.j-ellimination-steps');
    this.step = this.container.find('.j-ellimination-step');
    this.current = 1;

    this.init();
};

Ellimination.prototype.init = function(){
    var cmp = this;

    $(cmp.tab[0]).addClass('_active');
    cmp.table.css({
        left: 0
    });

    cmp.tab.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('_active')){
            cmp.tab.removeClass('_active');
            $this.addClass('_active');
            cmp.current = parseInt($this.data('tab'),0);
            cmp.table.css({
                left: (-270*(parseInt($this.data('tab'),0)-1))+"px"
            });
        }
    });

    $(cmp.step[0]).addClass('_active');
    cmp.steps.css({
        left: 0
    });
    cmp.prev[0].disabled = true;
    cmp.next[0].disabled = false;

    if(cmp.current < 2){
        cmp.prev[0].disabled = true;
    }
    else{
        cmp.prev[0].disabled = false;
    }
    if(cmp.current > (cmp.step.length - (parseInt($(window).width(),0)<1440?2:3))){
        cmp.next[0].disabled = true;
    }
    else{
        cmp.next[0].disabled = false;
    }

    $(window).on('resize', function(){
        if(cmp.current < 2){
            cmp.prev[0].disabled = true;
        }
        else{
            cmp.prev[0].disabled = false;
        }
        if(cmp.current > (cmp.step.length - (parseInt($(window).width(),0)<1440?2:3))){
            cmp.next[0].disabled = true;
        }
        else{
            cmp.next[0].disabled = false;
        }
    });

    cmp.prev.on('click', function(e){
        e.preventDefault();
        cmp.current--;
        if(cmp.current < 2){
            cmp.prev[0].disabled = true;
        }
        else{
            cmp.prev[0].disabled = false;
        }
        if(cmp.current > (cmp.step.length - (parseInt($(window).width(),0)<1440?2:3))){
            cmp.next[0].disabled = true;
        }
        else{
            cmp.next[0].disabled = false;
        }
        cmp.step.removeClass('_active');
        $(cmp.step[cmp.current-1]).addClass('_active');
        if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
            cmp.table.css({
                left: (-350*(cmp.current-1))+"px"
            });
            cmp.steps.css({
                left: (-350*(cmp.current-1))+"px"
            });
        }
        else{
            cmp.table.css({
                left: (-371*(cmp.current-1))+"px"
            });
            cmp.steps.css({
                left: (-371*(cmp.current-1))+"px"
            });
        }
    });
    cmp.next.on('click', function(e){
        e.preventDefault();
        cmp.current++;
        if(cmp.current < 2){
            cmp.prev[0].disabled = true;
        }
        else{
            cmp.prev[0].disabled = false;
        }
        if(cmp.current > (cmp.step.length - (parseInt($(window).width(),0)<1440?2:3))){
            cmp.next[0].disabled = true;
        }
        else{
            cmp.next[0].disabled = false;
        }
        cmp.step.removeClass('_active');
        $(cmp.step[cmp.current-1]).addClass('_active');
        if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
            cmp.table.css({
                left: (-350*(cmp.current-1))+"px"
            });
            cmp.steps.css({
                left: (-350*(cmp.current-1))+"px"
            });
        }
        else{
            cmp.table.css({
                left: (-371*(cmp.current-1))+"px"
            });
            cmp.steps.css({
                left: (-371*(cmp.current-1))+"px"
            });
        }
    });

    cmp.container[0].addEventListener('swr',function(){
        if(!cmp.prev.is(':disabled')){
            cmp.current--;
            if(cmp.current < 2){
                cmp.prev[0].disabled = true;
            }
            else{
                cmp.prev[0].disabled = false;
            }
            if(cmp.current > (cmp.step.length - (parseInt($(window).width(),0)<1440?2:3))){
                cmp.next[0].disabled = true;
            }
            else{
                cmp.next[0].disabled = false;
            }
            cmp.step.removeClass('_active');
            $(cmp.step[cmp.current-1]).addClass('_active');
            if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
                cmp.table.css({
                    left: (-350*(cmp.current-1))+"px"
                });
                cmp.steps.css({
                    left: (-350*(cmp.current-1))+"px"
                });
            }
            else{
                cmp.table.css({
                    left: (-371*(cmp.current-1))+"px"
                });
                cmp.steps.css({
                    left: (-371*(cmp.current-1))+"px"
                });
            }
        }
    },false);
    cmp.container[0].addEventListener('swl',function(){
        if(!cmp.next.is(':disabled')){
            cmp.current++;
            if(cmp.current < 2){
                cmp.prev[0].disabled = true;
            }
            else{
                cmp.prev[0].disabled = false;
            }
            if(cmp.current > (cmp.step.length - (parseInt($(window).width(),0)<1440?2:3))){
                cmp.next[0].disabled = true;
            }
            else{
                cmp.next[0].disabled = false;
            }
            cmp.step.removeClass('_active');
            $(cmp.step[cmp.current-1]).addClass('_active');
            if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
                cmp.table.css({
                    left: (-350*(cmp.current-1))+"px"
                });
                cmp.steps.css({
                    left: (-350*(cmp.current-1))+"px"
                });
            }
            else{
                cmp.table.css({
                    left: (-371*(cmp.current-1))+"px"
                });
                cmp.steps.css({
                    left: (-371*(cmp.current-1))+"px"
                });
            }
        }
    },false);
};

Tabs = function(container){
    this.container = $(container);
    this.tab = this.container.find('.j-tab');
    this.tabBody = this.container.find('.j-tab-body');

    this.init();
};

Tabs.prototype.init = function(){
    var cmp = this;

    cmp.tab.each(function(){
        var $this = $(this);
        if($this.hasClass('_active')){
            cmp.tabBody.hide();
            $('#'+$this.data('id')).show();
        }
    });

    cmp.tab.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('_active')){
            cmp.tab.removeClass('_active');
            $this.addClass('_active');
            cmp.tabBody.hide();
            $('#'+$this.data('id')).fadeIn(300);
        }
    });
};

Group = function(container){
    this.container = $(container);
    this.body = this.container.find('.j-group-body');
    this.head = this.container.find('.j-group-head');
    this.fake = this.container.find('.j-group-fake');
    this.num = parseInt(this.container.data('teams'),0);

    this.init();
};

Group.prototype.init = function(){
    var cmp = this;

    if(parseInt($(window).width(),0) < (768 - getScrollBarWidth())){
        cmp.head.removeAttr('style');
        cmp.fake.removeAttr('style');
        cmp.body.css({
            width: (cmp.num*50+178+260)+"px"
        });
    }
    else{
        if(parseInt($(window).width(),0) < (1024 - getScrollBarWidth())){
            cmp.body.removeAttr('style');
            cmp.head.css({
                width: "calc(100% - "+(50*cmp.num+260)+"px)"
            });
            cmp.fake.css({
                width: "calc(100% - "+(50*cmp.num+260)+"px)"
            });
        }
        else{
            if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
                cmp.body.removeAttr('style');
                cmp.head.css({
                    width: "calc(100% - "+(65*cmp.num+436)+"px)"
                });
                cmp.fake.css({
                    width: "calc(100% - "+(65*cmp.num+436)+"px)"
                });
            }
            else{
                cmp.body.removeAttr('style');
                cmp.head.css({
                    width: "calc(100% - "+(68*cmp.num+555)+"px)"
                });
                cmp.fake.css({
                    width: "calc(100% - "+(68*cmp.num+552)+"px)"
                });
            }
        }
    }

    $(window).on('resize', function(){
        if(parseInt($(window).width(),0) < (768 - getScrollBarWidth())){
            cmp.head.removeAttr('style');
            cmp.fake.removeAttr('style');
            cmp.body.css({
                width: (cmp.num*50+178+260)+"px"
            });
        }
        else{
            if(parseInt($(window).width(),0) < (1024 - getScrollBarWidth())){
                cmp.body.removeAttr('style');
                cmp.head.css({
                    width: "calc(100% - "+(50*cmp.num+260)+"px)"
                });
                cmp.fake.css({
                    width: "calc(100% - "+(50*cmp.num+260)+"px)"
                });
            }
            else{
                if(parseInt($(window).width(),0) < (1440 - getScrollBarWidth())){
                    cmp.body.removeAttr('style');
                    cmp.head.css({
                        width: "calc(100% - "+(65*cmp.num+436)+"px)"
                    });
                    cmp.fake.css({
                        width: "calc(100% - "+(65*cmp.num+436)+"px)"
                    });
                }
                else{
                    cmp.body.removeAttr('style');
                    cmp.head.css({
                        width: "calc(100% - "+(68*cmp.num+555)+"px)"
                    });
                    cmp.fake.css({
                        width: "calc(100% - "+(68*cmp.num+552)+"px)"
                    });
                }
            }
        }
    });
};