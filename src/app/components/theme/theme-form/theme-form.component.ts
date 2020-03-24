import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../models/theme/theme';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../service/theme/theme.service';

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.css']
})
export class ThemeFormComponent implements OnInit {

  @Input()
  theme: Theme;
  themes: Theme[];



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private themeService: ThemeService,

  ) { }

  ngOnInit(): void {
    this.getThemes();
  }

  getThemes(): void {
    this.themeService.findAllThemes().subscribe((themes => this.themes = themes),
      error => console.error('There are an error !', error));
  }

  save(theme: Theme) {
    this.themeService.updateThemeById(theme).subscribe();
  }


  deleteSubmit(theme: Theme) {
    this.themeService.deleteThemeById(theme.id).subscribe();
  }

  addSubmit(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.themeService.createTheme({name} as Theme)
      .subscribe(theme => {
        this.themes.push(theme);
      });
  }



}
