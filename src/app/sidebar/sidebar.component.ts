import { Component, OnInit, Input,OnChanges,AfterViewInit } from '@angular/core';
import { GetImageServiceService } from '../get-image-service.service';
import {SuggestionsComponent} from '../suggestions/suggestions.component';
declare var firebase: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [GetImageServiceService ]
})
export class SidebarComponent implements AfterViewInit{
//@Input() image;
@Input() clicked;
data = [];
movieData=[];
images=[];
Suggestions=[];
image=[];
theHtmlString = "";
yes='';
	isActive = false;
	showMenu: string = '';
	eventCalled() {
		this.isActive = !this.isActive;
	}
jsonObj:any= [];
jsonStringed: any;

  constructor(private getImageService: GetImageServiceService){
  }

  ngAfterViewInit() {
  firebase.database().ref('/Movies').on('child_added', (snapshot)=>{
    this.movieData.push(snapshot.val()),
    this.images.push(snapshot.val()['Poster'])
  });
  console.log(this.images);
  //this.hello();
  }

  hello(){
  this.yes=this.images[this.clicked];
  console.log(this.yes);
  console.log(this.images);
  this.theHtmlString = this.movieData[this.clicked]['Title'];
  this.theHtmlString = this.theHtmlString.concat(". &#10;&#13;genre:");
  this.theHtmlString = this.theHtmlString.concat(this.movieData[this.clicked]['Genre']);
  this.theHtmlString = this.theHtmlString.concat(". &#10;&#13;released:");
  this.theHtmlString = this.theHtmlString.concat(this.movieData[this.clicked]['Year']);
  this.theHtmlString = this.theHtmlString.concat(". &#10;&#13;Actors:");
  this.theHtmlString = this.theHtmlString.concat(this.movieData[this.clicked]['Actors']);
  this.theHtmlString = this.theHtmlString.concat(". &#10;&#13;IMDB Rating:");
  this.theHtmlString = this.theHtmlString.concat(this.movieData[this.clicked]['imdbRating']);
  this.theHtmlString = this.theHtmlString.concat(". &#10;&#13;plot:");
  this.theHtmlString = this.theHtmlString.concat(this.movieData[this.clicked]['Plot']);

  }




	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}


}
