import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  but: any ;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  closeNav() {
    if ( window.innerWidth <= 995 ) {
      this.elRef.nativeElement.querySelector('.navbar-toggler').click();
    }
  }
}
