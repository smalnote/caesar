import {
  Component,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  Input,
  ViewChild
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() child: TemplateRef<ChildComponent>;
  @ViewChild('another', { read: ViewContainerRef })
  anotherContainer: ViewContainerRef;

  constructor(private vcRef: ViewContainerRef) {}

  ngOnInit() {
    this.vcRef.createEmbeddedView(this.child);
    this.vcRef.createEmbeddedView(this.child);
    this.vcRef.createEmbeddedView(this.child);
    this.anotherContainer.createEmbeddedView(this.child);
  }
}
