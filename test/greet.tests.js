

describe('Test Greet Function' , function(){
    it('should return "Hello, shadrack" when called with "shadrack" ' , function(){
        assert.equal('Hello, shadrack', greet('shadrack'));

    });

    it('should return "Hello, Ndawonga" when called with "Ndawonga" ' , function(){
        assert.equal('Hello, Ndawonga', greet('Ndawonga'));

    });

});