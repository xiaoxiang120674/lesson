var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
            if(a=b) return true ;
    	    if(b=c) return true ;
    	    if(a=c) return true ;
    	    return false ;
    },
    isScalene : function(a,b,c) {
            if(a+b>c) return true ;
    	    if(b+c>a) return true ;
    	    if(a+c>b) return true ;
    	    return false ;
    },
};