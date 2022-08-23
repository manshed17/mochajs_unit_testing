describe('Test countAllFromTown function' , function(){
    it('should return "3" (number of plates starting with CL) when called with a string("CL 124,CY 567,CL 345, CJ 456,CL 341","CL" )' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });

    it('should return "1" (number of plates starting with CF) when called with a string("CL 124,CY 567,CL 345, CJ 456,CL 341","CL" )' , function(){
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), 1);

    });

});