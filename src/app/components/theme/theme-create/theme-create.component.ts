import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Theme} from '../../../models/theme/theme';
import {ThemeService} from '../../../service/theme/theme.service';

@Component({
  selector: 'app-theme-create',
  templateUrl: './theme-create.component.html',
  styleUrls: ['./theme-create.component.css']
})
export class ThemeCreateComponent implements OnInit {

  themes: Theme[];
  theme: Theme;
  angForm: FormGroup;

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  createTheme(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.themeService.createTheme({name} as Theme).subscribe(theme => {
      this.themes.push(theme);
      alert('Theme successfully created !');
      this.router.navigate(['products/createProduct']);
    });
  }
}
