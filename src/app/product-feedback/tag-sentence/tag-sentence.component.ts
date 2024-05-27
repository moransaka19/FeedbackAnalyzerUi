import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-tag-sentence',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    MatButton,
    RouterLink
  ],
  templateUrl: './tag-sentence.component.html',
  styleUrl: './tag-sentence.component.css'
})
export class TagSentenceComponent {
  tags$!: Observable<any>;
  commonTag: any;

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit():void{
    this.commonTag = this.activatedRoute.snapshot.params['tag'];
    const sentiment = this.activatedRoute.snapshot.params['sentiment'];
    this.tags$ = this.httpClient.get(`${environment.apiUrl}/feedback/sentences/${sentiment}/${this.commonTag}`);
  }
}
