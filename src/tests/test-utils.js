import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import  configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore();

function renderWithProvider(ui, { mockState, ...renderOptions } ={}) {
    const store = mockStore(mockState)
    console.log(store.getState())
    
    return render(<Provider store={store}>{ui}</Provider>)

}

//re-export everything
export * from '@testing-library/react';

//override render method
export { renderWithProvider };