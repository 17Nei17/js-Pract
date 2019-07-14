function drawRomb(n) {
    var line = ""
    for (i=0;i<n;i++){
        for (j=n;j>i;j--){line+=' '}
        line+="/"
        for (j=0;j<i;j++){line+='  '}
        line+='\\\n'
    }
    for (i=n;i>=1;i--){
        line+=" "
        for (j=n;j>i;j--){line+=' '}
        line+="\\"
        for (j=0;j<i-1;j++){line+='  '}
        line+='/\n'
    }
    return (console.log(line))
}