/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { SectionCreator } from './join-us-section.js';
import { validator } from './src/email-validator.js';
import './styles/style.css';

const factory = new SectionCreator();
const standard = factory.create('standard');
// const adv = factory.create('advanced');
// factory.remove();
