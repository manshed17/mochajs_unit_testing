describe('Test isWeekday Function' , function(){
    it('should return "false" if called with "Suturday" ' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should return "false" if called with "Sunday" ' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it('should return "true" if called with "Monday" ' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return "true" if called with "Tuesday" ' , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });
    it('should return "true" if called with "Wednesday" ' , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('should return "true" if called with "Thursday" ' , function(){
        assert.equal(isWeekday('Thursday'), true);
    });
    it('should return "true" if called with "Friday" ' , function(){
        assert.equal(isWeekday('Friday'), true);
    });

});




