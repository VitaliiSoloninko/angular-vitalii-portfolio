import { Component } from '@angular/core';

@Component({
    selector: 'app-social-links',
    imports: [],
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/VitaliiSoloninko',
      icon: 'assets/icons/github.svg',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vitalii-soloninko',
      icon: 'assets/icons/linkedin.svg',
    },
    {
      name: 'Xing',
      url: 'https://www.xing.com/profile/Vitalii_Soloninko',
      icon: 'assets/icons/xing.svg',
    },
  ];
}
