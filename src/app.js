import './scss/app.scss';
import testComponent from './components/test-component';

console.log('JS LOADED!');

const testSection = document.getElementById('section');
testSection.innerHTML = testComponent;
