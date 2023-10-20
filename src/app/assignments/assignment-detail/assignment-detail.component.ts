import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input()  assignmentTransmis?:Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  onAssignmentRendu() {
    if(this.assignmentTransmis)
      this.assignmentTransmis.rendu = true;
  }

  onDeleteAssignment() {
    // ici on doit le supprimer de la liste des assignments
    // soucis : la liste n'est pas là mais dans le composant parent
    // on va donc envoyer un message au parent pour lui dire de supprimer
    // l'assignment de la liste. Cet assignment est égal à this.assignmentTransmis
    this.deleteAssignment.emit(this.assignmentTransmis);

    // pour cacher le détail de l'assignment dans la page
    this.assignmentTransmis = undefined;
  }
}
