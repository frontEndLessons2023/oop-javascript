class Test4 extends Test2 {

    set testProp(a) {
        this._testProp = a*10;
    }
    getTestProp() {
        if(this._testProp > 100){
            return this._testProp;
        } else {
            return false;
        }
        
    }
    get testProp(){
        return this._testProp;
    }
}

