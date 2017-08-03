'use strict';


import * as sub from '../../src/controller/sub.controller';

describe('Sub controller unit tests', () => {
  var ctrl, port;

  beforeEach(() => {
    port = {name: 'foo', postMessage(opt) { ctrl.handlePortMessage(opt); }};
    sinon.spy(port, 'postMessage');
    ctrl = new sub.SubController(port);
  });

  describe('Event handling via "on" and "emit"', () => {
    it('should be wired up correctly', done => {
      ctrl.on('ping', msg => {
        expect(msg.data).to.equal('pong');
        done();
      });

      ctrl.emit('ping', {data: 'pong'});
    });
  });

});
