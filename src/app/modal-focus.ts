import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to close the account (<span class="text-primary">"{{accountId}}"</span>)?</strong></p>
    <p>The account will be closed and cannot be used anymore.
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  @Input() accountId: number;

  constructor(public modal: NgbActiveModal) { }
}

const MODALS = {
  focusFirst: NgbdModalConfirm,
};

@Component({
  selector: 'ngbd-modal-focus',
  templateUrl: './modal-focus.html'
})
export class NgbdModalFocus {

  @Input() accountId: number; 

  constructor(private _modalService: NgbModal) { }

  open(name: string) {
    let modal = this._modalService.open(MODALS[name]);
    modal.componentInstance.accountId = this.accountId;
    modal.result.then((x) => { console.log('When user closes : ' + x); }, () => { console.log('Backdrop click')})
    console.log('AccountId is ' + this.accountId);
  }
}