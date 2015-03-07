// the util package contains a collection of commonly used javascript tools
function Utils(){
}
String.prototype.removeSpace=function(){
	return this.replace(/\s/g, "");
}
Utils.swapElements=function(e1,e2, arr){
	var temp=arr[e1]
	arr[e1]=arr[e2]
	arr[e2]=temp
}
Utils.rand=function(f,l){
	return Math.floor(Math.random()*(l-f+1)+f);
}
Utils.D2R=function(num){
	return num/180*Math.PI
}
Utils.R2D=function(num){
	return num/Math.PI*180;
}