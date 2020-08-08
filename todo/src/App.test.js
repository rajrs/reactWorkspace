import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function sum(x,y){
  return x+y
}
describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
 test('check component',()=>{ 
   expect(1).toBe(1)
 })
  test('false is falsy', () => {
    expect(false).toBe(false);
  });
  test('check sum function',()=>{
    expect(sum(2,3)).toBe(5)
  })
});