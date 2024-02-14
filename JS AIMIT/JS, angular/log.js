var log ={
    info:function (info) {
        console.log("info:"+info);
    },
    error:function(e){
        console.log("error:"+e);
    },
    warning:function(w){
        console.log("warning:"+w);
    }
}

module.exports=log;   //where log is object