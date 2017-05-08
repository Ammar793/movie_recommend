import { Component, OnInit, OnChanges,trigger,state,style,transition,animate  } from '@angular/core';

declare var firebase: any;

@Component({
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
      trigger('imageMove', [
        state('yes', style({opacity: '1'})),
        state('no', style({opacity: '0'})),
        transition('yes=>no', [ (animate('100ms ease-in')) ])
        ])
      ]
})

export class HomeComponent implements OnInit{
state:string;
	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];
	/* END */
	/* Alert component */
  data = [];
  movieData=[];
  images=[];
  Suggestions=[];
  image=[];
  clicked=0;

  ngOnInit() {
    firebase.database().ref('/Movies').on('child_added', (snapshot)=>{
      this.movieData.push(snapshot.val()),
      this.images.push(snapshot.val()['Poster'])
    });
    console.log(this.images);

    firebase.database().ref('/Suggestions/User1').on('child_added', (snapshot)=>{
      this.state='yes';
      this.Suggestions.push(snapshot.val()),
      this.generateImgArray()
    });

    firebase.database().ref('/Suggestions/User1').on('child_changed', (snapshot)=>{
    this.state='no';
      
      this.Suggestions[snapshot.key-1]=snapshot.val(),
      this.generateImgArray()
    });

  }

  generateImgArray(){
    for(var i = 0;i<9;i++){
      this.image[i]= [this.Suggestions[i],this.images[this.Suggestions[i]]];
      //console.log(this.image);
    }
  }

  clickedImg(event){
    console.log(event);
    this.clicked = event.srcElement.id;
    console.log(this.clicked);
  }

	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }
	/* END*/

	constructor() {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */
}
