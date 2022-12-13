import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  title = 'Qual é a planta?';

  constructor(private router: Router) { }

  openTab(){
    this.router.navigateByUrl('tabs/tab2');
  }
  ngOnInit() {}

}

