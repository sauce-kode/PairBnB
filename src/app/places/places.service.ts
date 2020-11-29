import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      '1', 
      'Manhattan Mansion', 
      'In the heart of New York city', 
      'https://previews.123rf.com/images/mathiasberlin/mathiasberlin1711/mathiasberlin171101913/90855584-new-york-skyline-manhatten-cityscape-empire-state-building-from-top-of-the-rock-sunset.jpg', 
      149.99
    ),
    new Place(
      '2', 
      'L\'Amour Toujours', 
      'A romantic place in Paris', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpv9wfaWGSHeC_qEesVVl2VrnvDFW28J51w&usqp=CAU', 
      189.99
    ),
    new Place(
      '3', 
      'Foggy Palance', 
      'Not your average city trip', 
      'https://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg', 
      99.99
    )
  ];

  get places() {
    return [...this._places]
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)}
  }
}
