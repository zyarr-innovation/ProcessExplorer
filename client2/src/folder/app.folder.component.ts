import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItemContent } from './app.component.model';
import { ProcessService } from './app.folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './app.folder.component.html',
  styleUrls: ['./app.folder.component.css']
})
export class FolderComponent implements OnInit {
  
  title = 'Library';
  processItemList: IItemContent [];

  constructor (
    private dataService: ProcessService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getData();
  }

  onClickHome () {
    this.getData();
  }
  
  onClick(processItem: IItemContent) {
    this.processItemList = processItem.children;
    console.log ("Process Item List: ", this.processItemList);
  }

  private getData() {
    this.dataService.getProcessList()
          .subscribe(data => {
              this.processItemList = data as IItemContent [];
              console.log ('load: ', this.processItemList);
          });
  }

}
