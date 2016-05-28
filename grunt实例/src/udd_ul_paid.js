$(function(){
   var $tabname=$('.tab-name span'),
       $layer=$('#layer'),
       $close=$('.layerFloatRT10'),
       $input=$('.activationTableBox input'),
       $card=$('.Gift-card em.PayBlue'),
       $paid_zxyd=$('.paid_zxyd'),
       $tab_content=$('.tab-content');
   $tabname.click(function(){
       var nindex=$tabname.index(this);
       nindex==0 ? $paid_zxyd.hide() : $paid_zxyd.show();
       $(this).addClass('current').siblings().removeClass('current');
       $tab_content.removeClass('on').eq(nindex).addClass('on');

   });
    //新加
    $card.click(function(){
        $layer.css('left',0);
    });
    $close.click(function(){
        $layer.css('left',9999);
    });
    $input.focus(function(){
        var nIndex=$input.index($(this));
        $input.css('border-color','#bfbfbf').eq(nIndex).css('border-color','#7292f9')
    });
    //新加结束
   var $tab_contentInputRadio=$('.tab-contentInputRadio'),
        $tab_a=$('.Payment-method .tab-contentInputRadio a');
   $tab_contentInputRadio.on('click','a',function(){
       $tab_a.css('border-color','#fff');
       $(this).css('border-color','#ffa300');
       $(this).find('input').prop('checked',true)
   });
   var $Order_Details=$('.Order-Details'),
       $LineInfo=$('.LineInfo');
   $Order_Details.click(function(){
       //$LineInfo.stop().animate({height:0});
       $LineInfo.toggleClass('heighttoggle');
       $('.Order-Details s').toggleClass('arrowclass');
   });
});
