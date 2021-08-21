'use strict';

class Context {
  constructor(request, response) {
    this.request = request;
    this.response = response;
    this.properties = {};
  }
  
  getRequest(){
    return this.request;
  }

  setProperty(key, property){
    this.properties[key] = property;
  }

  getProperty(key) {
    return this.properties[key];
  }
}

module.exports = Context;