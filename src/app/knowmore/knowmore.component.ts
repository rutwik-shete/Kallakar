import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-knowmore',
  templateUrl: './knowmore.component.html',
  styleUrls: ['./knowmore.component.scss']
})
export class KnowmoreComponent implements OnInit {
  images: any;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.images = this.afStorage.ref('Charity/1.jpg');
  }

}
