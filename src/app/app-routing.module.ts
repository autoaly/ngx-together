import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inputs',
    loadChildren: () => import('./demo/together-input-samples/together-input-samples.module').then(m => m.TogetherInputSamplesModule),
    title: 'Inputs'
  },
  {
    path: 'translator',
    loadChildren: () => import('./demo/together-translation/together-translation.module').then(m => m.TogetherTranslationModule),
    title: 'translator'
  }
  ,
  {
    path: 'button',
    loadChildren: () => import('./demo/together-button-samples/together-button-samples.module').then(m => m.TogetherButtonSamplesModule),
    title: 'buttons'
  }
  ,
  {
    path: 'date',
    loadChildren: () => import('./demo/together-date-samples/together-date-samples.module').then(m => m.TogetherDateSamplesModule),
    title: 'date'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
