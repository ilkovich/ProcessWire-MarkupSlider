ProcessWire-MarkupSlider
========================

Uses NivoSlider https://github.com/gilbitron/Nivo-Slider to generate an image slider in processwire. 

Usage
=====

//before anything is rendered, initialize the module to ensure
//css is loaded
    $slider = $modules->get('MarkupSlider');
    $slider->setWidth(925);
    $slider->setHeight(450);
    $slider->setImages($page->images);

Then... 

//render
    echo $slider->render()
