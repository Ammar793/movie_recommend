import { Component, OnInit, Input,trigger,state,style,transition,animate } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
  animations: [
    trigger('imageMove', [
      state('center', style({transform: 'translateX(0)',opacity: '1'})),
      state('right', style({transform: 'translateX(100%)',opacity: '0'})),
      state('left', style({transform: 'translateX(-100%)',opacity: '0'})),
      state('up', style({transform: 'translateY(100%)',opacity: '0'})),
      state('down', style({transform: 'translateY(-100%)',opacity: '0'})),
      transition('center=>right', [ (animate('100ms ease-in')) ]),
      transition('right=>center', [ (animate('10ms ease-in')) ]),
      transition('left=>center', [ (animate('10ms ease-in')) ]),
      transition('up=>center', [ (animate('10ms ease-in')) ]),
      transition('down=>center', [ (animate('10ms ease-in')) ]),
      transition('center=>left', [  (animate('100ms ease-in')) ]),
      transition('center=>up', [ (animate('100ms ease-in')) ]),
      transition('center=>down', [ (animate('100ms ease-in')) ])
      ])
    ]

})
export class VotingComponent implements OnInit {
  //@Input() images;
  movieData= [];
  ali = [1,2,3];
  images = [];
  state= "center";
  constructor() { }

  ngOnInit() {
  console.log(this.state);
  firebase.database().ref('/Movies').on('child_added', (snapshot)=>{
    this.movieData.push(snapshot.val()),
    this.images.push(snapshot.val()['Poster']);
  })

  //this.images.push(this.movieData[i].Poster;
//console.log(this.images);



   // 1, "string", false

  }

  postData(){

  }
  imageNumber2=0;
  static imageNumber= 0;
  image = this.images[VotingComponent.imageNumber];

 private handleKeyDown(event: any){
 console.log(this.state);

    if(event.keyCode == 37  ){
      this.state = "left";
      var newPostKey = firebase.database().ref('/Ratings').child('user1').push().key;
      var updates= {};
      var updates2= {};
      updates['Ratings/User1/0'] = VotingComponent.imageNumber;
      updates2['Ratings/User1/1'] = 0;
      firebase.database().ref().update(updates);
      firebase.database().ref().update(updates2);
      VotingComponent.imageNumber = (VotingComponent.imageNumber+1 )%670;
      setTimeout(()=>{this.state="center"}, 200);
    }else if (event.keyCode == 38){
    this.state = "down";
    var newPostKey = firebase.database().ref('/Ratings').child('user1').push().key;
    var updates= {};
    var updates2= {};
    updates['Ratings/User1/0'] = VotingComponent.imageNumber;
    updates2['Ratings/User1/1'] = 1;
    firebase.database().ref().update(updates);
    firebase.database().ref().update(updates2);

    VotingComponent.imageNumber = (VotingComponent.imageNumber+1 )%670;

setTimeout(()=>{this.state="center"}, 200);
    }else if (event.keyCode == 39){
    this.state = "right";
    var newPostKey = firebase.database().ref('/Ratings').child('user1').push().key;
    var updates= {};
    var updates2= {};
    updates['Ratings/User1/0'] = VotingComponent.imageNumber;
    updates2['Ratings/User1/1'] = 2;
    firebase.database().ref().update(updates);
    firebase.database().ref().update(updates2);

    VotingComponent.imageNumber = (VotingComponent.imageNumber+1 )%670;
    console.log(event.keyCode);
    setTimeout(()=>{this.state="center"}, 200);
  }else if (event.keyCode == 40){
  this.state = "up";
  var newPostKey = firebase.database().ref('/Ratings').child('user1').push().key;
  var updates= {};
  var updates2= {};
  updates['Ratings/User1/0'] = VotingComponent.imageNumber;
  updates2['Ratings/User1/1'] = 3;
  firebase.database().ref().update(updates);
  firebase.database().ref().update(updates2);

  VotingComponent.imageNumber = (VotingComponent.imageNumber+1 )%670;
  console.log(event.keyCode);
  setTimeout(()=>{this.state="center"}, 200);


}
}

  getImg(){
  console.log(this.state);

    return this.images[VotingComponent.imageNumber];

  }

  mouseOver(el: any){
    console.log(el);
    el.srcElement.focus();
    console.log(el.srcElement.parentElement);
  }

  mouseLeave(el: any){
    console.log(el);
    el.srcElement.blur();
    console.log(el.srcElement.parentElement);
  }
}
