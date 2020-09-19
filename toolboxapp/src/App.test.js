import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import App from './App';
import SendMessage from './components/SendMessage';
import store from './store';
import { Provider } from "react-redux"
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';

configure({adapter: new Adapter()});

test('Checking that we are using boostrap', () => {
   const wrapper = mount(<Provider store={store}><App/></Provider>);
   const form = wrapper.find('.boostrap').exists();
   expect(form).toBeTruthy();
});

test('Checking that the form exits', () => {
  const handleSubmit = jest.fn();
   const wrapper = mount(<Provider store={store}><SendMessage form="test" handleSubmit={handleSubmit}   /></Provider>);
   const form = wrapper.find('.mainForm').exists();
   expect(form).toBeTruthy();
});

test('Checking that the textarea to enter a text exists', () => {
  const handleSubmit = jest.fn();
   const wrapper = mount(<Provider store={store}><SendMessage form="test" handleSubmit={handleSubmit}   /></Provider>);
   const form = wrapper.find('.inputMessage').exists();
   expect(form).toBeTruthy();
});


test('Checking that the textarea to receive the response exits', () => {
  const handleSubmit = jest.fn();
   const wrapper = mount(<Provider store={store}><SendMessage form="test" handleSubmit={handleSubmit}   /></Provider>);
   const form = wrapper.find('.responseMessage').exists();
   expect(form).toBeTruthy();
});



test('Testing submit the form to the API', () => {
     const handleSubmit = jest.fn();
      const wrapper = mount(<Provider store={store}><SendMessage form="test" handleSubmit={handleSubmit}   /></Provider>);
      wrapper.find('.mainForm').simulate('submit', {
        preventDefault: () => {
        },
        target: 
          {
            userMessage: {
              value:"message"
            },
          }
        ,
      });
      expect(handleSubmit).toBeCalledTimes(1);
  });


