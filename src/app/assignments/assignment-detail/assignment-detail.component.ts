import { Component,EventEmitter, Input, Output} from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis?:Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();
  onAssignmentRendu() {
    if(this.assignmentTransmis)
      this.assignmentTransmis.rendu = true;
  }
  onDeleteAssignment() {
   
    this.deleteAssignment.emit(this.assignmentTransmis);

    this.assignmentTransmis = undefined;
  }



}
