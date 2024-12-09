import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
@Injectable({
providedIn: 'root'
})
export class AboutMeService {
constructor() { }
getAboutMe(): AboutMe {
return new AboutMe('Michael aus Solothurn', '/assets/Bild1.jpg');
}
}