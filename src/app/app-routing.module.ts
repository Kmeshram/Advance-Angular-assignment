import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OffromComponent } from './observable/offrom/offrom.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { RetryComponent } from './observable/retry/retry.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { DebouncetimeAnddebounceuntilchangedComponent } from './observable/debouncetime-anddebounceuntilchanged/debouncetime-anddebounceuntilchanged.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { SubjectAndbehaviourSubjectComponent } from './observable/subject-andbehaviour-subject/subject-andbehaviour-subject.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { ReplysubjectComponent } from './observable/replysubject/replysubject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';


const routes: Routes = [
  { path: '**', redirectTo: 'PromiseComponent' },
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: AllComponent },
      { path: 'alllist', component: AllComponent },
      { path: 'fromevent', component: FromeventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'offfrom', component: OffromComponent },
      { path: 'toarray', component: ToarrayComponent },
      { path: 'customeobservable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce', component: DebouncetimeAnddebounceuntilchangedComponent },
      { path: 'concatmap', component: ConcatmapComponent },
      { path: 'subject', component: SubjectAndbehaviourSubjectComponent },
      { path: 'replaysubject', component: ReplysubjectComponent },
      { path: 'asyncsubject', component: AsyncsubjectComponent },
      { path: 'switchmap', component: SwitchmapComponent },
     { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergemap', component: MergemapComponent },

 ]
  },

  { path: 'test', component: TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
}
