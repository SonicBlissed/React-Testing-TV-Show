import React from 'react';
import {render} from '@testing-library/react';
import Episodes from '../components/Episodes';


test('Renders with no errors', ()=>{
    render(<Episodes episodes={[]}/>)
})
