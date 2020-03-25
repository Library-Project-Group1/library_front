import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../models/theme/theme';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ThemeService} from '../../../service/theme/theme.service';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {

  @Input()
  theme: Theme;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.themeService
        .findThemeById(id)
        .subscribe((theme => {
            this.theme = theme;
          }),
          error => console.error('There are an error', error));
    });
  }

  goBack(): void {
    this.location.back();
  }

  saveTheme(): void{
    this.themeService.updateThemeById(this.theme)
      .subscribe(result => this.goBack());
  }

}
