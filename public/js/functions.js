function soloLetras(e)
{	//console.log("keycode="+e.keyCode+" charcode="+e.charCode);
	key=e.charCode;
	var v=0;
	if(key>=65&&key<=90)
		v=1;
	if(key>=97&&key<=122)
		v=1;
	if(key==225)
		v=1;
	if(key==233)
		v=1;
	if(v==0)	
		return false;
}
function soloNums(e)
{	//console.log("keycode="+e.keyCode+" charcode="+e.charCode);
	key=e.charCode;
	v=0;
	if(key>=48&&key<=57)
		v=1;
	if(v==0)	
		return false;
}