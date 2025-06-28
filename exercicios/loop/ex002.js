
//Serie de fibonacci f(0) = 1; f(1)=1; f(n)= f(n-1) + f(n-2)
const fibonacci = (x) => {
    if( x==1 || x==0 ){
        return 1;
    }
    let fm1 = 1, fm2=1, fm;
    for(const i= 2; i<=x; i++){
        fm= fm1 + fm2;
        fm2 = fm1
        fm1 = fm
    }
    return fm;
}