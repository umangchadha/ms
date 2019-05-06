import { UserDataService, UserData } from './../services/user-data.service';
import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { MatTableDataSource, Sort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.scss']
})

export class SampleTableComponent implements OnInit {
  displayedColumns: string[] = ['account', 'availableCash'];
  dataSource: MatTableDataSource<UserData>;
  pageSize: number = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _data: UserData[];

  constructor(private dataservice: UserDataService) { }

  ngOnInit() {
    this.dataservice.getUserData().subscribe((a: UserData[]) => {
      this._data = a;
      this.dataSource = new MatTableDataSource(this._data);

      this.dataSource.paginator = this.paginator;
    })
  }


  increaseCtr(ctr) {
    this.pageSize = ctr + 5
    this.dataSource = new MatTableDataSource(this._data);
  }


  sortData(sort: Sort): void {
    let sortedData = this._data.slice();

    sortedData.sort((a, b) => {

      a = _stringClearner(a, sort, sort.active);
      b = _stringClearner(b, sort, sort.active);

      if (sort.direction === 'asc' || sort.direction === '') {

        return a < b ? -1 : a > b ? 1 : 0;
      }
      else if (sort.direction === 'desc') {
        return a < b ? 1 : a > b ? -1 : 0;
      }
    });

    this.dataSource.data = sortedData;
  }
}


function _stringClearner(str, sort, type) {
  if (type === 'account') {
    return str[sort.active].replace(/[^0-9]/gi, '').trim();
  }
  else if (type === 'availableCash') {
    return str[sort.active].currValue;
  }
}