const openBtn = document.querySelector('.btn button');
const modal = document.querySelector('.modal');
const content = document.querySelector('.container');
const closeBtn = document.querySelector('.container span');
const body = document.querySelector('body');


//button hover states
openBtn.addEventListener("mouseover", function(){

	this.style.transition = " all 1s ease-in-out " ;
	this.style.letterSpacing = " 2px " ;
	this.style.backgroundColor = " white " ;
	this.style.color = " black " ;

	body.style.transition = " all 1s ease-in-out " ;
	body.style.backgroundColor = " black " ;
})

const reseter = () =>{
	openBtn.style.transition = " all 1s ease-in-out " ;
	openBtn.style.backgroundColor = " orange " ;
	openBtn.style.color = " white " ;
	openBtn.style.letterSpacing = " 0.8px " ;

	body.style.transition = " all 1s ease-in-out " ;
	body.style.backgroundColor = " white " ;
}

openBtn.addEventListener("mouseout", reseter)

openBtn.addEventListener('click',()=>{
	modal.style.display = "flex " ;
	modal.style.opacity = " 0.2 " ;
	content.style.opacity = " 0.2 " ;
	openBtn.style.color = "white" ;
	setTimeout(()=>{
		modal.style.opacity = " 1 " ;
		content.style.opacity = " 1 " ;
	},600)

	openBtn.style.opacity = " 0.1" ;
});

closeBtn.addEventListener('click',closey);

function closey(){
	modal.style.display = "none " ;
	openBtn.style.opacity = " 1" ;

	if(modal.style.display == "flex"){
			body.addEventListener('click' , ()=>{
				closey();
			});
		}
};

window.addEventListener('click' , outsideClose);

function outsideClose(e){
	if(e.target === modal){
		closey();
	}
}
