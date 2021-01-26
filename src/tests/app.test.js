import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
// jest.mock('../api/fecthShow');

// import {fetchShow as mockFetchShow} from '../api/fetchShow';

test('Renders App without errors', ()=> {
    render(<App/>)
});


test('Fetches data correctly when button is clicked', async()=> {
 
 render(<App/>)

    const dropdown = await screen.findByText(/select a season/i);
    console.log(dropdown);
    userEvent.click(dropdown);
    expect(screen.getByText('Season 1')).toBeInTheDocument();
    const season2 = await screen.findByText(/Season 2/i);
    userEvent.click(season2)
    expect(screen.getByText('Season 2')).toBeInTheDocument();

    // fireEvent.change(dropdown, {
    //     target: {value: 'Season 1'},
    // });
    // expect(screen.getByText('Season 1')).toBeInTheDocument();

    // fireEvent.change(screen.getAllByTestId('dropdown'), {
    //     target: {value:'Season 2'}
    // });
    // expect(screen.getByText('Season 2')).toBeInTheDocument();
    // console.log('Testing')


});




