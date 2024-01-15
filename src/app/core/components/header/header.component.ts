import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from 'src/app/features/auth/signin/signin.component';
import { SignupComponent } from 'src/app/features/auth/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  [x: string]: any;
  constructor(public dialog: MatDialog) {}

  public openDialog(userAction: string) {
    let dialogRef;

    if (userAction === 'login') {
      dialogRef = this.dialog.open(SigninComponent, {
        width: '510px',
        height: '637px',
        data: {},
      });
    } else if (userAction === 'signup') {
      dialogRef = this.dialog.open(SignupComponent, {
        width: '510px',
        height: '637px',
        data: {},
      });
    }

    if (dialogRef) {
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  }
}
