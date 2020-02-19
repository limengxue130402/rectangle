$(function(){
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /**calc button click event */
    //get value
    $btnCal.click(function(){
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate    
        var p = 2 * FloatAdd(w , h) ,
            a = FloatMult(w,h);
        //output
        $perimeter.val(p);
        $area.val(a);
    })
    function FloatAdd(arg1,arg2){  
        var r1,r2,m; 
        try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0; }//参数1为整数};  //参数1小数点后的位数
        try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0; }//参数2为整数}; //参数2小数点后的位数
        m=Math.pow(10,Math.max(r1,r2));  //取其中较大的位数
        return (arg1*m+arg2*m)/m;   //先将arg1和arg2转换为整数进行计算，然后再转换回浮点数
   }  
   function FloatMult(arg1,arg2){  
        var m = 0 ,s1 = arg1.toString(), s2 = arg2.toString();
        try{m+=s1.split(".")[1].length}catch(e){}   
        try{m+=s2.split(".")[1].length}catch(e){}   
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)   
}  
})