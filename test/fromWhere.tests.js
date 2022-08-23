describe('Test fromWhere Function' , function(){
    it('should return "Bellville" when called with "CY" ' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return "Paarl" when called with "CJ" ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('should return "Cape Town" when called with "CA" ' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should return "Some other place!" when not called with "CY, CJ, CA" ' , function(){
        assert.equal(fromWhere('CP'), 'Some other place!');
    });

})

assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CC'), 'Some other place!');