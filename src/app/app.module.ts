import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaListService } from './services/media-list.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [MediaListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
