describe('Test totalPhoneBill Function' , function(){
    it('should return "R6.80" when called with "call, sms, call, sms" ' , function(){
        assert.equal('R6.80', totalPhoneBill('call, sms, call, sms'));
    });
    it('should return "RR3.40" when called with "call, sms" ' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('should return "R6.80" when called with "call, sms, call, sms, call, call" ' , function(){
        assert.equal('R12.30', totalPhoneBill('call, sms, call, sms, call, call'));
    });
})


