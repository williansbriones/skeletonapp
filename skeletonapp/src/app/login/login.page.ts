import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ElementRef, ViewChild } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navctrl: NavController,
    private animationCtrl: AnimationController) { }

  @ViewChild('MyRef') element: ElementRef;

  private animation: Animation;
  
  email: string = "";
  contrasena: string = "";
  maxval: number = 0;

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.element.nativeElement)
      .duration(450)
      .keyframes([
        {offset: 0, transform: "rotate(8deg)"},
        {offset: 0.1},
        {offset: 0.2, transform: "rotate(-10deg)"},
        {offset: 0.4},
        {offset: 0.6 ,transform: "rotate(10deg)"},
        {offset: 0.7},
        {offset: 0.8, transform: "rotate(-8deg)"},
        {offset: 0.9},
        {offset:1, transform: "rotate(0deg)"}
      ]);
  }

  play() {
    this.animation.play();
  } 

RestCon(){
  this.navctrl.navigateRoot("rest-contrasena")
}

getconsultas(){
  let errorContraseña = document.getElementsByClassName("contraseña-incorrecta") as HTMLCollectionOf<HTMLElement>;
  var i = 0;
  if(this.email.length>=3 && this.email.length){
    if(this.contrasena.length==4){
    this.navctrl.navigateRoot("home")
    }
  }
  errorContraseña[0].style.display = "block"
  console.log(this.email);
  console.log(this.contrasena);
  this.play()
  return
}

  ngOnInit() {
  }

}
