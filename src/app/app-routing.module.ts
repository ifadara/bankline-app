import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { movimentacoesNewComponent } from './components/movimentacoes-new/movimentacoes-new.component';
import { movimentacoesListComponent } from './components/movimentacoes-list/movimentacoes-list.component';
import { CorrentistaComponent } from './components/correntista/correntista.component';


const routes: Routes = [
  { path: 'movimentacoes-new', component: movimentacoesNewComponent },
  { path: 'movimentacoes', component: movimentacoesListComponent },
  { path: '', redirectTo: 'movimentacoes', pathMatch: 'full'},
  { path: 'correntistas', component: CorrentistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
