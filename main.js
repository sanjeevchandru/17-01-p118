document.write("83.to find the longest string from a given array of strings"+"<br>");
function test83(arr){
    var x=arr[0].length;
    arr.map(function(e){
        x=Math.max(x,e.length);
    });
    var a=arr.filter(function(e){
        return x==e.length;
    })
    return a;
}
document.write('The array :["a","aa","aaa","aaaaa","aaaa"], ans :'+test83(["a","aa","aaa","aaaaa","aaaa"])+"<br><br>");