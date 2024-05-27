import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-product-feedback',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    MatCard,
    MatCardContent,
    MatTabGroup,
    MatTab,
    MatList,
    MatDivider,
    MatListItem,
    MatGridList,
    MatGridTile,
    RouterLink,
    MatButton
  ],
  templateUrl: './product-feedback.component.html',
  styleUrl: './product-feedback.component.css'
})
export class ProductFeedbackComponent {
  allFeedbacks$!: Observable<any>;
  negativeFeedbacks$!: Observable<any>;
  positiveFeedbacks$!: Observable<any>;
  negativeTags$!: Observable<any>;
  productId!: number;
  positiveTags$!: Observable<any>;
  constructor(private httpClient: HttpClient,
  private activatedRoute: ActivatedRoute) {
  }

  ngOnInit():void{
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.allFeedbacks$ = this.httpClient.get(`${environment.apiUrl}/feedback/product-feedbacks/${this.productId}`);
    this.negativeFeedbacks$ = this.httpClient.get(`${environment.apiUrl}/feedback/product-feedbacks/${this.productId}/negative`);
    this.positiveFeedbacks$ = this.httpClient.get(`${environment.apiUrl}/feedback/product-feedbacks/${this.productId}/positive`);
    this.negativeTags$ = this.httpClient.get(`${environment.apiUrl}/feedback/tags/sentiment/NEGATIVE`);
    this.positiveTags$ = this.httpClient.get(`${environment.apiUrl}/feedback/tags/sentiment/POSITIVE`);
  }
}
