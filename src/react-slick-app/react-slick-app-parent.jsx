import React from 'react';
import MultipleItems from './sliders/multiple-items';
import SimpleSlider from './sliders/simple-slider';

export default function ReactSlickAppParent() {
    return (
        <div style={{padding: '50px'}}>
            <SimpleSlider/>
            <MultipleItems/>
        </div>
    )
}
