import { Component, OnInit, Input } from '@angular/core';
import { IItemContent } from './app.component.model';
import { ProcessService } from './app.component.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Library';
  processItemList: IItemContent [];
  currentItem:IItemContent [];

  constructor (
    private dataService: ProcessService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.dataService.getProcessList()
          .subscribe(data => {
              this.processItemList = data as IItemContent [];
              this.currentItem = this.processItemList[0].children;
          });
  }

  onClick (selectedProcessItem: IItemContent) {
    console.log (selectedProcessItem);
    this.currentItem = [selectedProcessItem];
  }

}
