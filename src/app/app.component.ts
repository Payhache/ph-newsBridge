import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IMediaList } from './model/IMediaList';
import { MediaListService } from './services/media-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly medialist$: Observable<IMediaList>;
  constructor(private mediaListService: MediaListService) {
    this.medialist$ = this.mediaListService.getMedias();
  }
}
