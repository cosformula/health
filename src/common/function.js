export function timegrade(gra,g95,g90,g80,g60,g10){
    var dv9590=g90-g95,dv9080=(g80-g90)/2,dv8060=(g60-g80)/10,dv6010=(g10-g60)/5;
    if(gra<=g90){
      return(90 + 5 *  Math.floor((g95-gra)/dv9590));
      //dv9590=0.1,gra=6.6,g95=6.7,
    }
    else if(gra>g90&&gra<=g80){
      return (80 + 5 *  Math.floor((g80-gra)/dv9080));
    }
    else if(gra>g80&&gra<=g60){
      return (60 + 2 *  Math.floor((g60-gra)/dv8060));
    }
    else{
      return (10 + 10  *  Math.floor((g10-gra)/dv6010));
    }
}