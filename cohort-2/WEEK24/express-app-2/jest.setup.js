// Jest setup file to handle Web Streams compatibility issues
const { TextEncoder, TextDecoder } = require('util');

// Polyfill for Web Streams if needed
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock problematic Web Stream constructors if they exist
if (typeof global.ReadableStreamBYOBReader !== 'undefined') {
  const originalReadableStreamBYOBReader = global.ReadableStreamBYOBReader;
  global.ReadableStreamBYOBReader = class extends originalReadableStreamBYOBReader {
    get closed() {
      try {
        return super.closed;
      } catch (e) {
        return Promise.resolve();
      }
    }
  };
}

if (typeof global.ReadableStreamDefaultReader !== 'undefined') {
  const originalReadableStreamDefaultReader = global.ReadableStreamDefaultReader;
  global.ReadableStreamDefaultReader = class extends originalReadableStreamDefaultReader {
    get closed() {
      try {
        return super.closed;
      } catch (e) {
        return Promise.resolve();
      }
    }
  };
}

if (typeof global.WritableStreamDefaultWriter !== 'undefined') {
  const originalWritableStreamDefaultWriter = global.WritableStreamDefaultWriter;
  global.WritableStreamDefaultWriter = class extends originalWritableStreamDefaultWriter {
    get closed() {
      try {
        return super.closed;
      } catch (e) {
        return Promise.resolve();
      }
    }
    
    get ready() {
      try {
        return super.ready;
      } catch (e) {
        return Promise.resolve();
      }
    }
  };
}