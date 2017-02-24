'use strict';

const Model = {

  registerListener(callback) {
    console.log('registerListener');
  }

  unregisterListener(callback) {
    console.log('unregisterListener');
  }

  fireModelChangeEvent(event) {
    console.log('fireModelChangeEvent');
  }
}
