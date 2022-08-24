describe('Test yearsAgo Function' , function(){
    it('should return "24" if called with "1998"' , function(){
        assert.equal((new Date().getFullYear() - 1998), yearsAgo(1998));
    });

    it('should return "30" if called with "1992"' , function(){
        assert.equal((new Date().getFullYear() - 1992), yearsAgo(1992))

    });

});
