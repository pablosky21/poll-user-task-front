import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeMusic } from 'src/app/models/typeMusic';
import { UserPoll } from 'src/app/models/userPoll';
import { UserPollServiceService } from 'src/app/services/user-poll-service.service';

@Component({
  selector: 'app-user-poll-add',
  templateUrl: './user-poll-add.component.html',
  styleUrls: ['./user-poll-add.component.css']
})
export class UserPollAddComponent implements OnInit {
  public typeMusicList: TypeMusic[]; 
  userPoll: UserPoll = new UserPoll();
  formNewPoll: FormGroup;
  constructor(private userPollServiceService: UserPollServiceService,private router: Router) {
    this.typeMusicList = [];
    this.formNewPoll = new FormGroup({
      typeMusic: new FormControl('',[Validators.required]),
      mail: new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
    this.userPollServiceService.getTypeMusic().subscribe(
      resp => {
        console.log(resp);
        this.typeMusicList = resp;
      }
    )
  }

  onSubmit() {
    console.log(this.formNewPoll);
    this.userPoll.typeMusicId = this.formNewPoll.get('typeMusic').value;
    this.userPoll.mail = this.formNewPoll.get('mail').value;
    return this.userPollServiceService.addUserPoll(this.userPoll).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/list'])
        return true;
      },
      error => {
        console.log(error);
      });
  }

}
