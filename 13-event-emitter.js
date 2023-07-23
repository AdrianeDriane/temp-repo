const EventEmitter = require('events');
const customEmitter = new EventEmitter();

const eventName = 'response';

customEmitter.on(eventName, (name, age) => {
  console.log(`data received,\nuser name: ${name}, age: ${age}`);
});

customEmitter.on(eventName, () => {
  console.log(`data received`);
});

customEmitter.emit(eventName, 'Zydric', 18);
