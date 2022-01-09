import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListarLivroDoisDataSource, ListarLivroDoisItem } from './listar-livro-dois-datasource';

@Component({
  selector: 'app-listar-livro-dois',
  templateUrl: './listar-livro-dois.component.html',
  styleUrls: ['./listar-livro-dois.component.css']
})
export class ListarLivroDoisComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListarLivroDoisItem>;
  dataSource: ListarLivroDoisDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ListarLivroDoisDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
