import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItemContent } from './app.component.model';

@Injectable()
export class ProcessService {
    currentItem:IItemContent [];

    constructor (private httpClient: HttpClient) {
    }

    getProcessList() {
        return this.httpClient.get("../assets/processData.json");
    }
}