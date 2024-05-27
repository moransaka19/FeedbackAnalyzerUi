import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products/products.component";
import {ProductFeedbackComponent} from "./product-feedback/product-feedback.component";
import {FeedbackTagComponent} from "./product-feedback/feedback-tag/feedback-tag.component";
import {TagSentenceComponent} from "./product-feedback/tag-sentence/tag-sentence.component";

export const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product-feedback/:id', component: ProductFeedbackComponent},
  {path: 'tag/:tagId', component: FeedbackTagComponent},
  {path: 'sentence/:sentiment/:tag', component: TagSentenceComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
