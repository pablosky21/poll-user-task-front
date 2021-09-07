import { Component, OnInit } from '@angular/core';
import { UserPoll } from 'src/app/models/userPoll';
import { UserPollServiceService } from 'src/app/services/user-poll-service.service';

@Component({
  selector: 'app-user-poll-list',
  templateUrl: './user-poll-list.component.html',
  styleUrls: ['./user-poll-list.component.css']
})
export class UserPollListComponent implements OnInit {
  public userPollList: UserPoll[]; 

  constructor(private userPollServiceService: UserPollServiceService) { 
    this.userPollList = [];
  }

  ngOnInit(): void {

    this.userPollServiceService.getAllUserPoll().subscribe(
      resp => {
        console.log(resp);
        this.userPollList = resp;
      }
    )
  }

}
