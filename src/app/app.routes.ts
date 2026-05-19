import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { NewDocument } from './components/new-document/new-document';
import { ListDocument } from './components/list-document/list-document';
import { BestDocOwner } from './components/best-doc-owner/best-doc-owner';

export const routes: Routes = [
  {
    path: 'documents/owner',
    component: BestDocOwner
  },
  {
    path: 'documents/new',
    component: NewDocument
  },
  {
    path: 'documents',
    component: ListDocument
  },
  {
    path: '',
    component: Dashboard
  },
  {
    path: '**',
    component: Dashboard
  }
];
