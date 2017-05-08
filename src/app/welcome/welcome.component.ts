import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  txt="";
  constructor() { }

  ngOnInit() {
    this.makeVisible();
    this.txt="Hi! You're here because you can't decide which show to watch. We bet we can help you find a good show in no time."
  }

  makeVisible(){

    setTimeout(()=> {this.txt="It's simple, you will see tv shows and using the arrow keys, you can tell us whether its a show you havent seen, didnt like, liked or LOVED!"}, 6000);
    setTimeout(()=> {this.txt="While you do this, we will continue to give you suggestions based on this on what shows we think you would like."}, 12000);
    setTimeout(()=> {this.txt="Simple right? press START to find your next addiction! "}, 18000);






  }


}
