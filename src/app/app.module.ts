import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';
import { HeaderComponent } from './includes/header/header.component';
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
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeAnddebounceuntilchangedComponent } from './observable/debouncetime-anddebounceuntilchanged/debouncetime-anddebounceuntilchanged.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { SubjectAndbehaviourSubjectComponent } from './observable/subject-andbehaviour-subject/subject-andbehaviour-subject.component';
import { Comp1Component } from './component/comp1/comp1.component';
import { Comp2Component } from './component/comp2/comp2.component';
import { Comp3Component } from './component/comp3/comp3.component';
import { ReplysubjectComponent } from './observable/replysubject/replysubject.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromeventComponent,
    IntervalComponent,
    OffromComponent,
    ToarrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeAnddebounceuntilchangedComponent,
    ConcatmapComponent,
    SubjectAndbehaviourSubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplysubjectComponent,
    AsyncsubjectComponent,
    SwitchmapComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
