import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from "./books/components/book-list/book-list.component";
import { BookComponent } from "./books/components/book/book.component";
import { BookListResolver } from "./books/resolvers/book-list.resolver";
import {BookResolver} from "./books/resolvers/book.resolver";
import {BookEditComponent} from "./books/components/book-edit/book-edit.component";
import {ReviewResolver} from "./books/resolvers/review.resolver";
import {ReviewCreateComponent} from "./books/components/review-create/review-create.component";
import {ReviewListComponent} from "./books/components/review-list/review-list.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: BookListResolver
    }
  },
  {
    path: 'books/:id',
    component: BookComponent,
    resolve: {
      book: BookResolver,
      reviews: ReviewResolver
    }
  },
  {
    path: 'books/:id/reviews',
    component: ReviewListComponent,
    resolve: {
      reviews: ReviewResolver
    }
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent,
    resolve: {
      book: BookResolver
    }
  },
  {
    path: 'books/:id/reviews/new',
    component: ReviewCreateComponent,
    resolve: {
      book: BookResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
