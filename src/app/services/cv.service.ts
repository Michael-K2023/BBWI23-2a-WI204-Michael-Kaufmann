import { Injectable } from '@angular/core';
 import { CV } from '../models/cv';
 @Injectable({
 providedIn: 'root'
 })
 export class CVService {
 constructor() { }
 getCVs(): CV[] {
 return [
 
 new CV('Avesco AG', 2010, 2021),
 new CV('SBB AG', 2021),
 ]
 }
 }