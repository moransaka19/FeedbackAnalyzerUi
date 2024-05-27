import {Component, Inject} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatTable} from '@angular/material/table';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [
    MatButton,
    MatTable,
    AsyncPipe,
    RouterLink,
    NgForOf,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardActions
  ],
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products$!:Observable<any>;
  constructor(private httpClient: HttpClient, public dialog: MatDialog) {
  }

  ngOnInit():void{
    this.products$ = this.httpClient.get(`${environment.apiUrl}/product`);
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {id: id},
      height: '500px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './product-add-feedback/dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  text!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  setText(event: any){
    this.text = event.target.value;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSendClick() {
    let feedbackForm =  {
      productId: this.data.id,
      text: this.text,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'})};
    this.httpClient.post(`${environment.apiUrl}/feedback`, feedbackForm, httpOptions).subscribe(result => {console.log(result)});
    this.dialogRef.close();
    this.snackBar.open('Feedback successfully sent', 'OK');
  }
}
