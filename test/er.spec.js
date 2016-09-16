'use strict';

var should = require('should');

describe('ER Tests', function() {
    before(function() {
        this.app = require('../src/er');
    });

    after(function() {
        delete this.app;
    });

    it('deve disparar um objeto do tipo Boolean quando a ER estiver vazia', function(done) {
        var result = this.app('');

        result.should.be.instanceOf(Boolean).and.be.equal(false);

        done();
    });

    it('deve disparar um objeto do tipo Boolean quando o texto estiver vazio', function(done) {
        var result = this.app('foo');

        result.should.be.instanceOf(Boolean).and.be.equal(false);

        done();
    });

    it('deve disparar um objeto do tipo Boolean quando a ER e textos estiverem vazios', function(done) {
        var result = this.app('', '');

        result.should.be.instanceOf(Boolean).and.be.equal(false);

        done();
    });

    it('deve retornar o resultado esperado quando a ER for válida I', function(done) {
     var texto = 'foo bar bar.';
     var result = this.app(/.+/, texto);

     result.should.be.instanceOf(String).and.be.equal(texto);

     done();
    });

    it('deve retornar o resultado esperado quando a ER for válida II', function(done) {
     var texto = 'foo bar bar.';
     var result = this.app(/[a-z]+\./, texto);

     result.should.be.instanceOf(String).and.be.equal('bar.');

     done();
    });

    it('deve retornar false quando a ER não encontrar nada', function(done) {
     var texto = 'foo bar bar.';
     var result = this.app(/[0-9]\./, texto);

     result.should.be.instanceOf(Boolean).and.be.equal(false);

     done();
    });
});
