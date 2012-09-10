$(window).load(function() {
    /*
    $('.nivoSlider').nivoSlider({
    effect: 'fade'
    });
    */

    function runNivoSlider(id) {
        $('#'+id).parent().parent().children("img").prependTo('#'+id);
        $('#'+id).nivoSlider({
            effect: 'fade'
        });
    }

    for(i in NivoSlider.sliders) {
        var $slider= $('#'+i);
        NivoSlider.sliders[i].loaded=1;
        for(j=0; j<NivoSlider.sliders[i].length; j++) {
            var img = NivoSlider.sliders[i][j];
            $img = $slider.append(img).children().last();
            $img.load(function() {
                NivoSlider.sliders[i].loaded++; 
                //if(NivoSlider.sliders[i].loaded === NivoSlider.sliders[i].length) 
                runNivoSlider(i);
            });
        }
    }
});
