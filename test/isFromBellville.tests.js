describe('Test isFromBellville function' , function(){
    it('should return "true" when called with a number plate starting with "CY" eg "CY 123" ' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should return "false" when called with a number plate not starting with "CY" eg "CJ 123"' , function(){
        assert.equal(isFromBellville('CJ 123'), false);

    });

});