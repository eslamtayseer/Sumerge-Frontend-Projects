import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name =''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.name =this.authService.authenticatedUserName
  }

}
