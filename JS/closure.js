function z(){
    var b=2;
    function x(){
        var a=1;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();