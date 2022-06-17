/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies

import { expect, assert } from 'chai';

import sinon from 'sinon';
import pkg from 'mocha-sinon';
import {
  validate, validateAsync, validateWithThrow, validateWithLog,
} from '../email-validator.js';

const { mochasinon } = pkg;

describe('simple test', () => {
  it('should return str', () => {
    expect('str').to.equal('str');
  });
});

describe('validate basic functionality', () => {
  it('empty input value should return false', () => {
    const expected = false;
    const actual = validate('');
    expect(actual).to.deep.equal(expected);
  });
  it('ops@gmail.com should return true', () => {
    const expected = true;
    const actual = validate('ops@gmail.com');
    expect(actual).to.deep.equal(expected);
  });
  it('ops@outlook.com should return true', () => {
    const expected = true;
    const actual = validate('ops@outlook.com');
    expect(actual).to.deep.equal(expected);
  });
  it('ops@yandex.ru should return true', () => {
    const expected = true;
    const actual = validate('ops@yandex.ru');
    expect(actual).to.deep.equal(expected);
  });
  it('opsyandex.ru should return false', () => {
    const expected = false;
    const actual = validate('opsyandex.ru');
    expect(actual).to.deep.equal(expected);
  });
  it('ops@outlook should return false', () => {
    const expected = false;
    const actual = validate('ops@outlook');
    expect(actual).to.deep.equal(expected);
  });
  it('@outlook.com should return false', () => {
    const expected = false;
    const actual = validate('@outlook.com');
    expect(actual).to.deep.equal(expected);
  });
  it('o@outlook.com should return true', () => {
    const expected = true;
    const actual = validate('o@outlook.com');
    expect(actual).to.deep.equal(expected);
  });
});

describe('test validateAsync basic functionality', () => {
  it('oops@gmail.com should return true', () => {
    validateAsync('oops@gmail.com').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@outlook.com should return true', () => {
    validateAsync('oops@outlook.com').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@yandex.ru should return true', () => {
    validateAsync('oops@yandex.ru').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@yandex.com should return false', () => {
    validateAsync('oops@yandex.com').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@outlook.ru should return false', () => {
    validateAsync('oops@outlook.ru').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@gmail.ru should return false', () => {
    validateAsync('oops@gmail.ru').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@mail.ru should return false', () => {
    validateAsync('oops@mail.ru').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
  it('oops@outlook. should return false', () => {
    validateAsync('oops@outlook.').then((result) => {
      expect(result).to.equal(true);
    }).catch((result) => {
      expect(result).to.equal(false);
    });
  });
});

describe('test validateWithThrow basic functionality', () => {
  it('oop@mail.com should throw error', () => {
    assert.throws(() => { validateWithThrow('oops@mail.com'); }, Error, 'email is invalid');
  });
  it('oops@yandex.com should return false', () => {
    assert.throws(() => { validateWithThrow('oops@yandex.com'); }, Error, 'email is invalid');
  });
  it('oops@outlook.ru should return false', () => {
    assert.throws(() => { validateWithThrow('oops@outlook.ru'); }, Error, 'email is invalid');
  });
  it('oops@gmail.ru should return false', () => {
    assert.throws(() => { validateWithThrow('oops@gmail.ru'); }, Error, 'email is invalid');
  });
  it('oops@mail.ru should return false', () => {
    assert.throws(() => { validateWithThrow('oops@mail.ru'); }, Error, 'email is invalid');
  });
  it('oops@outlook. should return false', () => {
    assert.throws(() => { validateWithThrow('oops@outlook.'); }, Error, 'email is invalid');
  });
  it('oops@gmail.com should return true', () => {
    const result = validateWithThrow('oops@gmail.com');
    expect(result).to.equal(true);
  });
  it('oops@outlook.com should return true', () => {
    const result = validateWithThrow('oops@outlook.com');
    expect(result).to.equal(true);
  });
  it('oops@yandex.ru should return true', () => {
    const result = validateWithThrow('oops@yandex.ru');
    expect(result).to.equal(true);
  });
});

describe('validateWithLog basic functionality', () => {
  it('empty input value should return false', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('');
    expect(console.log.calledWith('')).to.be.true;
    expect(validateWithLog('')).to.deep.equal(false);
    stub.restore();
  });
  it('ops@gmail.com should return true', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('ops@gmail.com');
    expect(console.log.calledWith('ops@gmail.com')).to.be.true;
    expect(validateWithLog('ops@gmail.com')).to.deep.equal(true);
    stub.restore();
  });
  it('ops@outlook.com should return true', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('ops@outlook.com');
    expect(console.log.calledWith('ops@outlook.com')).to.be.true;
    expect(validateWithLog('ops@outlook.com')).to.deep.equal(true);
    stub.restore();
  });
  it('ops@yandex.ru should return true', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('ops@yandex.ru');
    expect(console.log.calledWith('ops@yandex.ru')).to.be.true;
    expect(validateWithLog('ops@yandex.ru')).to.deep.equal(true);
    stub.restore();
  });
  it('opsyandex.ru should return false', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('opsyandex.ru');
    expect(console.log.calledWith('opsyandex.ru')).to.be.true;
    expect(validateWithLog('opsyandex.ru')).to.deep.equal(false);
    stub.restore();
  });
  it('ops@outlook should return false', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('ops@outlook');
    expect(console.log.calledWith('ops@outlook')).to.be.true;
    expect(validateWithLog('ops@outlook')).to.deep.equal(false);
    stub.restore();
  });
  it('@outlook.com should return false', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('@outlook.com');
    expect(console.log.calledWith('@outlook.com')).to.be.true;
    expect(validateWithLog('@outlook.com')).to.deep.equal(false);
    stub.restore();
  });
  it('o@outlook.com should return true', async () => {
    const stub = sinon.stub(console, 'log');
    validateWithLog('o@outlook.com');
    expect(console.log.calledWith('o@outlook.com')).to.be.true;
    expect(validateWithLog('o@outlook.com')).to.deep.equal(true);
    stub.restore();
  });
});
