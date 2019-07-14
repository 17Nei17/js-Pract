function drawTriangle(n) {
    var line = ""
for (i=0;i<n-1;i++){
    for (j=n;j>i;j--){line+=' '}
        line+="/"
     for (j=0;j<i;j++){line+='  '}
        line+='\\\n'
}
// последняя строка
    line+=' /'
 for (i=0;i<n-1;i++){line+='__'}
      line+='\\'
 return (console.log(line))
}