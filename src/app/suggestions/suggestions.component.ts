import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {GetImageServiceService} from '../get-image-service.service';
import {VotingComponent} from '../voting/voting.component';

declare var firebase: any;


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
})


export class SuggestionsComponent implements OnInit {
@Input() movieData;
@Input() Suggestions;
@Input() image;
@Output() onClickImg = new EventEmitter();
  data = [];
  //movieData=[];
  images=[];
  //Suggestions=[];
  //image=[];
  constructor(private getImageService: GetImageServiceService) { }


  ngOnInit() {}
  /*  firebase.database().ref('/Movies').on('child_added', (snapshot)=>{
      this.movieData.push(snapshot.val()),
      this.images.push(snapshot.val()['Poster'])
    });
    //console.log(this.images);

    firebase.database().ref('/Suggestions/User1').on('child_added', (snapshot)=>{
      this.state='yes',
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
      console.log(this.image);
    }
  }*/
  width=100;

fireClickedEvent(event){
  console.log(event);
  this.width=150;
  this.onClickImg.emit(event);
}

imageClicked(event: any){
  console.log(event);

}

changed(){
console.log("asdasd");
}


}
