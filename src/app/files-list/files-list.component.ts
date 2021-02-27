import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
})
export class FilesListComponent implements OnInit {
  @Input() files: File[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
