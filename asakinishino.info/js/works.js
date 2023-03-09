const picArray = [
{src: './worksFile/SlideShows/001.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/002.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/003.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/004.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/005.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/006.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/007.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/008.jpeg', title: 'Spring'},
{src: './worksFile/SlideShows/009.png', title: 'Spring'},
];

let counter = 0;

function changePicture() {
  if (counter < picArray.length) {
    document.getElementById('slideshowing').src = picArray[counter].src;
    counter++;
  } else {
    document.getElementById('pics').src = picArray[0].src;
    document.getElementById('pic-title').innerHTML = picArray[0].title;
    counter = 1;
  } 
}



document.getElementById("menu-area").style.display ="none";

function clickBtn1(){
	const p1 = document.getElementById("p1");

	if(p1.style.display=="block"){
		// noneで非表示
		p1.style.display ="none";
	}else{
		// blockで表示
		p1.style.display ="block";
	}
}
</script>