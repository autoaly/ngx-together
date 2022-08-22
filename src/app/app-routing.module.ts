import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inputs',
    loadChildren: () => import('./demo/together-input-samples/together-input-samples.module').then(m => m.TogetherInputSamplesModule)
  },
  {
    path: 'translator',
    loadChildren: () => import('./demo/together-translation/together-translation.module').then(m => m.TogetherTranslationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
