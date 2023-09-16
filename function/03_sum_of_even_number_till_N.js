process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}

function add(N) {
    var x = N;
    var sum = 0;
    for(var i=0;i<=x;i++){
        if(i%2==0){
           sum += i;
          }
     }
     return sum;
}
function main() {
    let N = parseInt(readLine());
    let x = add(N);
    console.log(x);
}
