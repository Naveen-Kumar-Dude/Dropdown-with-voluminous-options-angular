import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownScrollComponent } from './dropdown-scroll/dropdown-scroll.component';
import { DropdownAllComponent } from './dropdown-all/dropdown-all.component';
import { DropdownModule } from 'primeng/dropdown';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollerModule } from 'primeng/scroller';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownCodeDetailsComponent } from './dropdown-code-details/dropdown-code-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    DropdownScrollComponent,
    DropdownAllComponent,
    DropdownCodeDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    VirtualScrollerModule,
    DropdownModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectInfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
