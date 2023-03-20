/**
 * 
 */
let user = {
    "login": '',
    "password": '',
    "valedatePassword": function(){
        if(this.password.length > 6){
            return true;
        } else {
            return false;
        }
    }
};



