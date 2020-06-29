import { RouterModule, Routes } from '@angular/router';
import { SearchBookComponent } from './search-book/search-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const appRoutes: Routes = [
    { path: '', component: SearchBookComponent},
    { path: 'search',  component: SearchBookComponent},
    { path: 'search/:id', component: BookDetailComponent }
]

export const AppRouting = RouterModule.forRoot(appRoutes);