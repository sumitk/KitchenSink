var win = Titanium.UI.currentWindow;

var imageView = Titanium.UI.createImageView({
	url:'../images/cloud.png',
	width:261,
	height:178,
	top:20
});

win.add(imageView);

var l = Titanium.UI.createLabel({
	text:'Click Image',
	bottom:30,
	color:'#999',
	height:'auto',
	width:300,
	textAlign:'center'
});
win.add(l);

function clicker()
{
	Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
	l.text = "Try again. You shouldn't get alert and the image should be different";
	imageView.url = '../images/Kicking00.png';
	imageView.removeEventListener('click',clicker);
}

imageView.addEventListener('click', clicker);