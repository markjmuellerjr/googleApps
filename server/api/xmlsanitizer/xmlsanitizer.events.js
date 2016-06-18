/**
 * Xmlsanitizer model events
 */

'use strict';

import {EventEmitter} from 'events';
import Xmlsanitizer from './xmlsanitizer.model';
var XmlsanitizerEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
XmlsanitizerEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Xmlsanitizer.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    XmlsanitizerEvents.emit(event + ':' + doc._id, doc);
    XmlsanitizerEvents.emit(event, doc);
  }
}

export default XmlsanitizerEvents;
