import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { user } from '../../models/user.model';


@Component({
  selector: 'sravanitable',
  templateUrl: './sravanitable.component.html',
  styleUrls: ['./sravanitable.component.css']
})
export class SravanitableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private userService: UserService) { }
  
  ngOnInit() { 

  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<user[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
