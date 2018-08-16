$(document).ready(function() {

    $('.j-modal').each(function () {
        new Popup(this);
    });
    $(document).on('click', '.j-modal-link', function (e) {
        e.preventDefault();
        var $this = $(this);
        $.event.trigger({type: 'show.popup', targetId: $this.attr('rel')});
    });

});

/* Popup */
function Popup(popupContainer){
    this.popupContainer = $(popupContainer);
    this.popup = this.popupContainer.find('.j-modal-block');
    this.closeLink = this.popupContainer.find('.j-modal-close');
    this.content = this.popupContainer.find('.j-modal-inner');

    this.body = $('body');
    this.paddedElem = $('.j-padded-element');
    this.fixedElem = $('.j-fixed-element');
    this.scrollBarWidth = getScrollBarWidth();

    this.scrollTopVal = 0;

    this.init();
}

//$.event.trigger({type: 'show.popup', targetId: 'messageSuccess'});
Popup.prototype.init = function(){
    var cmp = this;

    $(document).on('show.popup', function(e){
        var content = e.targetId;
        if(content == cmp.popupContainer.attr('id')){
          cmp.show();
        }

    });

    $(document).on('close.popup', function(e){
        cmp.hide();
    });

    cmp.closeLink.on("click", function(){
      console.log(123);
      cmp.hide();
        //return false;
    });

    cmp.popupContainer.on("click", function(e){
        var eTarget = $(e.target);
        if ( !eTarget.is('.j-modal') && eTarget.parents('.j-modal').length < 1)  {
            cmp.hide();
        }
    });
};

Popup.prototype.show = function (){
    var cmp = this;

    cmp.scrollTopVal = $(window).scrollTop();
    if($('html').hasClass('touchevents')){
        cmp.body.css({overflow: "hidden", paddingRight: getScrollBarWidth(), position: "fixed", left: 0, top: -cmp.scrollTopVal + 'px', right: 0, bottom: 0});
    }
    else{
        cmp.body.css({overflow: "hidden", paddingRight: getScrollBarWidth()});
    }

    cmp.paddedElem.css({right: this.scrollBarWidth});
    cmp.fixedElem.css({marginRight: this.scrollBarWidth});

    cmp.popupContainer.show();

    //cmp.content.html('');
    Overlay.show();
    cmp.popupContainer.addClass('_loading');

    setTimeout(function () {
        //cmp.content.append($('#'+content).html());
        $.event.trigger({type: 'popup.loaded'});

        cmp.popup.animate({
            opacity: 1
        }, 300, function () {
            cmp.popupContainer.removeClass('_loading');
            $.event.trigger({type: 'popup.shown'});
        });
    }, 1000);
};

Popup.prototype.hide = function (){
    var cmp = this;


    Overlay.hide();

    cmp.popup.animate({
        opacity: 0
    }, 300, function () {
        cmp.popupContainer.removeAttr('style');
        cmp.body.removeAttr('style');
        if($('html').hasClass('touchevents')){
            setTimeout(function(){
                $(window).scrollTop(cmp.scrollTopVal);
            }, 10);
        }
        else{

        }
        cmp.paddedElem.removeAttr('style');
        cmp.fixedElem.removeAttr('style');
        cmp.content.html('');
        $.event.trigger({type: 'popup.closed'});
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
/* /Popup */

/* Overlay */
Overlay = function (){};

Overlay.show = function ()
{
    $ ('body').append ('<div class="overlay j-overlay" style="opacity: 0"></div>');
    var overlay = $ ('.j-overlay');
    overlay.animate({
        opacity: 1
    }, 300);
};

Overlay.hide = function ()
{
    var overlay = $ ('.j-overlay');
    if (overlay.length > 0) {
        overlay.animate({
            opacity: 0
        }, 300, function () {
            overlay.remove ();
        });
    }
};
/* /Overlay */
