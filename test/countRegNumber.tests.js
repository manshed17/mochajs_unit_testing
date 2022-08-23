describe('Test countRegNumber Function' , function(){
    it('return the number of registration numbers in the string eg if string is "CA 182736,CY 523519,CJ 812328" should return 3' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3)
    });

    it('should return "1" when string is "CA 182736"' , function(){
        assert.equal(countRegNumber('CA 182736'), 1);

    });

});