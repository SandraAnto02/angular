import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',     //template:<h1>hiiii</h1> i can write html code directly
  styleUrls: ['./app.component.css']  
  // style:[]       
})
export class AppComponent {
  title = 'AngularDemo';   
  //myname:string='san';

  // setName()
  // {
  //   myname='mon'
  // }
  talign='center';
  color= this.getRandomColor();
  public getRandomColor()
  {
    var letter = '0123456789ABCDEF';
    var color='#';
    for(var i=0; i<6; i++)
    {
      color += letter[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color;
  }
 
 msg="This is editable"
  setColor()
  {
    this.color=this.getRandomColor();
  }
  

}
