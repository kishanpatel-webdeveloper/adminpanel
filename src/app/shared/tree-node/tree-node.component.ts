import { Component, OnInit, Input } from '@angular/core';
import { Permission } from 'src/app/model/Permission';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  @Input() node: Array<Permission> = new Array<Permission>();

  constructor() { }

  ngOnInit() {
  }

}
