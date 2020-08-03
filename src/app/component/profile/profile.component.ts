import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  myId = null;
  sexe: any ;
  data: any;
  firstName: any;
  constructor(private activatedRoute: ActivatedRoute,
    public profile: ProfileService) {
      this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
     }

  ngOnInit() {
    this.profileDetails();
  }

  profileDetails(){
    this.profile.getDatas()
    .subscribe(data=>{
      this.data = data;
      for(let itt of this.data){
        if(itt.id == this.myId){
          this.sexe = itt.sexe;
          this.firstName = itt.firstName;
        }
      }
    },(err) => {
      console.log(err);
    });
  }

}
