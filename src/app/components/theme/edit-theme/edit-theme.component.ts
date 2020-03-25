import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../models/theme/theme';
import {ActivatedRoute} from '@angular/router';
import {ThemeService} from '../../../service/theme/theme.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {
  theme:Theme
  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.findThemeById();
  }

  private findThemeById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.themeService.findThemeById(id)
      .subscribe(theme => this.theme = theme);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.themeService.updateThemeById(this.theme)
      .subscribe(() => this.goBack());
  }

}
