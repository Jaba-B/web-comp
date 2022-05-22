/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
import { assert } from 'chai';
import { validator, validate, validateAsync, validateWithThrow } from '../email-validator.js';

// describe('simple test', () => {
//   it('should return str', () => {
//     expect('str').to.equal('str');
//   });
// });

// describe('validate basic functionality', () => {
//   it('empty input value should return false', () => {
//     const expected = false;
//     const actual = validate('');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('ops@gmail.com should return true', () => {
//     const expected = true;
//     const actual = validate('ops@gmail.com');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('ops@outlook.com should return true', () => {
//     const expected = true;
//     const actual = validate('ops@outlook.com');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('ops@yandex.ru should return true', () => {
//     const expected = true;
//     const actual = validate('ops@yandex.ru');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('opsyandex.ru should return false', () => {
//     const expected = false;
//     const actual = validate('opsyandex.ru');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('ops@outlook should return false', () => {
//     const expected = false;
//     const actual = validate('ops@outlook');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('@outlook.com should return false', () => {
//     const expected = false;
//     const actual = validate('@outlook.com');
//     expect(actual).to.deep.equal(expected);
//   });
//   it('o@outlook.com should return false', () => {
//     const expected = false;
//     const actual = validate('o@outlook.com');
//     expect(actual).to.deep.equal(expected);
//   });
// });

// describe('test validateAsync basic functionality', () => {
//   it('oops@gmail.com should return true', function ()  {
//     validateAsync('oops@gmail.com').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@outlook.com should return true', function ()  {
//     validateAsync('oops@outlook.com').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@yandex.ru should return true', function ()  {
//     validateAsync('oops@yandex.ru').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@yandex.com should return false', function ()  {
//     validateAsync('oops@yandex.com').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@outlook.ru should return false', function ()  {
//     validateAsync('oops@outlook.ru').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@gmail.ru should return false', function ()  {
//     validateAsync('oops@gmail.ru').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@mail.ru should return false', function ()  {
//     validateAsync('oops@mail.ru').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
//   it('oops@outlook. should return false', function ()  {
//     validateAsync('oops@outlook.').then((result) => {
//       expect(result).to.equal(true)
//     }).catch((result) => {
//       expect(result).to.equal(false)
//     })
//   })
// });

// describe('test validateWithThrow basic functionality', () => {
//     it ('oop@mail.com should throw error', () => {
//         assert.throws(function() { validateWithThrow('oops@mail.com') }, Error, 'email is invalid');
//     })
//     it('oops@yandex.com should return false', function ()  {
//         assert.throws(function() { validateWithThrow('oops@yandex.com') }, Error, 'email is invalid');
//     })
//     it('oops@outlook.ru should return false', function ()  {
//         assert.throws(function() { validateWithThrow('oops@outlook.ru') }, Error, 'email is invalid');
//     })
//     it('oops@gmail.ru should return false', function ()  {
//         assert.throws(function() { validateWithThrow('oops@gmail.ru') }, Error, 'email is invalid');
//     })
//     it('oops@mail.ru should return false', function ()  {
//         assert.throws(function() { validateWithThrow('oops@mail.ru') }, Error, 'email is invalid');
//     })
//     it('oops@outlook. should return false', function ()  {
//         assert.throws(function() { validateWithThrow('oops@outlook.') }, Error, 'email is invalid');
//     })
//     it('oops@gmail.com should return true', function ()  {
//         const result = validateWithThrow('oops@gmail.com')
//         expect(result).to.equal(true)
//     })
//     it('oops@outlook.com should return true', function ()  {
//         const result = validateWithThrow('oops@outlook.com')
//         expect(result).to.equal(true)
//     })
//     it('oops@yandex.ru should return true', function ()  {
//         const result = validateWithThrow('oops@yandex.ru')
//         expect(result).to.equal(true)
//     })
// })

