import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
declare var firebase: any;



@Injectable()
export class GetImageServiceService {

movieData = [];
constructor(private http: Http) { }
jsonObject : string;
jsonfile:JSON;


image(){
  this.fbGetData();

}

fbGetData(){
firebase.database().ref('/Movies/').on('child_added', (snapshot)=>{
  this.movieData.push(snapshot.val())

})

}
}
