import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Hotel } from '../hotel';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss'],
})
export class AddHotelComponent implements OnInit {
  userId!: string;
  userName!: string;

  hotel = new Hotel('', '', '', '');

  constructor(private api: APIService) {}

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(async (user) => {
        this.userId = user.attributes.sub;
        this.userName = user.userName;
      })
      .catch((err) => console.log(err));
  }

  async createHotel() {
    const hotel = {
      name: this.hotel.name,
      address: this.hotel.address,
      image: this.hotel.image,
    };
    await this.api.CreateHotel(hotel);
  }
}
