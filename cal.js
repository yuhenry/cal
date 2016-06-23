var num=0,result=0,numshow="0";
var operate=0;//
var calcul=0;//运算符用switch判断1~5
var quit=0;

function command(num){
	var str=String(document.calculator.numScreen.value);
	if (str!="0"){
		if(operate==0){}else{str="";}
	}else{
		str="";
	}
	/*str=(str!="0")?((operate==0)?str:""):"";*/
	str=str+String(num);//字符串相加显示数字
	document.calculator.numScreen.value=str;
	operate=0;
	quit=0;
}

function dzero(){
	var str=String(document.calculator.numScreen.value);
	if (str!="0"){
		if (operate==0){str=str+"00";}else{str="0";}
	}else{
		str="0";  
	}
	document.calculator.numScreen.value=str;
	operate=0;
}

function dot(){
	var str=String(document.calculator.numScreen.value);
	if (str!="0"){
		if(operate==0){}else{str="0";}
	}else{
		str="0";
	}
	str=str+".";
	document.calculator.numScreen.value=str;
	operate=0;
}

function del(){
	var str=String(document.calculator.numScreen.value);
	if (str!="0"){}else{str=""}
	str=str.substr(0,str.length-1);//舍弃最后的字符
	if (str!=""){}else{str="0"};
	document.calculator.numScreen.value=str;
}

function clearscreen(){
	num=0;
	result=0;
	numshow="0";
	document.calculator.numScreen.value="0";
}

function plus(){
	calculate();
	operate=1;
	calcul=1;
}

function minus(){
	calculate();
	operate=1;
	calcul=2;
}

function times(){
	calculate();
	operate=1;
	calcul=3;
}

function divide(){
	calculate();
	operate=1;
	calcul=4;
}

function pesent(){
	calculate();
	operate=1;
	calcul=5;
}

function equal(){
	calculate();
	operate=1;
	num=0;
	result=0;
	numshow=0;
}

function calculate(){
	numshow=Number(document.calculator.numScreen.value);
	if (num!=0 && quit!=1){
		switch(calcul){
			case 1:result=num+numshow;break;
			case 2:result=num-numshow;break;
			case 3:result=num*numshow;break;
			case 4:if (numshow!=0){
				result=num/numshow;
			}else{
				document.getElementById("note").innerHTML="Dividend can not be 0!";
				setTimeout(clearnote,6000);
			}break;
			case 5:result=num%numshow;break;
		}
		quit=1;
	}else{
		result=numshow;
	}
	numshow=String(result);
	document.calculator.numScreen.value=numshow;
	num=result;
}

function clearnote(){
	document.getElementById("note").innerHTML="";
}