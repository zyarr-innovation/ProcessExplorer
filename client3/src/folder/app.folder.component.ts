import { Component, OnInit, Input } from '@angular/core';
import { IItemContent } from '../app/app.component.model';
import { ProcessService } from '../app/app.component.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './app.folder.component.html',
  styleUrls: ['./app.folder.component.css']
})
export class AppFolderComponent {
  title = 'Library';
  @Input() processItemList: IItemContent [];

  constructor (
    private dataService: ProcessService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  // onClickHome () {
  //   this.getData();
  // }
  
}
