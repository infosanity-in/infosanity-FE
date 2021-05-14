import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { InfoSanityService } from './../../core/services/info-sanity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private subsriptions = new SubSink();

  constructor(private infoSanityService: InfoSanityService) {}

  // TODO: replace with actual API logic
  ngOnInit(): void {
    this.subsriptions.sink = this.infoSanityService
      .getContent()
      .subscribe((data) => {
        console.log('Successfully fetched!', data);
      });
  }

  ngOnDestroy() {
    this.subsriptions.unsubscribe();
  }
}
