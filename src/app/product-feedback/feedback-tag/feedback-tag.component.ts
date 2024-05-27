import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-feedback-tag',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './feedback-tag.component.html',
  styleUrl: './feedback-tag.component.css'
})
export class FeedbackTagComponent {
  tagId: any;
  feedbackTag$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.tagId = this.activatedRoute.snapshot.params['tagId'];

    this.feedbackTag$ = this.httpClient.get(`${environment.apiUrl}/feedback/tags/${this.tagId}`);
  }
}
