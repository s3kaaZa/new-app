import {Component, Input, OnInit} from '@angular/core';
import {IUserViewModel} from "../models/user";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {
  @Input('name') Name!: string | undefined;
  @Input('surname') Surname!: string | undefined;
  @Input('country') Country!: string | undefined;
  @Input('option') Option!: string | undefined;
  @Input('email') Email!: string | undefined;
  @Input('zipCode') ZipCode!: number | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const user: IUserViewModel | null = this.dataService.GetData();
    this.Name = user?.Name;
    this.Surname = user?.Surname;
    this.Country = user?.Country;
    this.Option = user?.Option;
    this.Email = user?.Email;
    this.ZipCode = user?.ZipCode;
  }
}
