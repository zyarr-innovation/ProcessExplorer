import { Component, OnInit, Input } from '@angular/core';
import { IItemContent } from '../app/app.component.model';
import { ProcessService } from '../app/app.component.service';

@Component({
  selector: 'app-file',
  templateUrl: './app.file.component.html',
  styleUrls: ['./app.file.component.css']
})
export class AppFileComponent implements OnInit {
  @Input () processItem: IItemContent;
  title = 'Library';
  
  constructor () {
  }

  ngOnInit(): void {
    console.log ("Item Component:", this.processItem );
  }

  // onClick(processItem: IItemContent) {
  //   this.processItem = processItem.children;
  //   console.log ("Process Item List: ", this.processItemList);
  // }
}
