

var canvas = new fabric.Canvas('myCanvas')





var x= document.getElementById("myAudio");


var img = "BirthdayImage.jpg";




function carregarfundo() {

	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
foto=Img
foto.scaleToWidth(700)
foto.scaleToHeight(510)
foto.set({
	top:0,left:0,
})
canvas.add(foto)
	})
}









function t () {
x.play()


}

