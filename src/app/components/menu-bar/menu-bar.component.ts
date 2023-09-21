import { Component } from '@angular/core';

import {
  faHome,
  faArrowUpWideShort,
  faCompass,
  faShuffle
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  Home = faHome;
  Trending = faArrowUpWideShort;
  Compass = faCompass;
  Shuffle = faShuffle;

  Linkedin = faLinkedin;
  Github = faGithub;

}
