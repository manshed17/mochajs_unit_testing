describe('Test transportFee Function' , function(){
    it('should return "R20" if called with "morning" shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should return "R100" if called with "afternoon" shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it('should return "free" if called with "nightshift"' , function(){
        assert.equal(transportFee('nightshift'), 'free');

});
})