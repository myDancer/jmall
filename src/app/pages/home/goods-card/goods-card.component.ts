import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css']
})
export class GoodsCardComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
