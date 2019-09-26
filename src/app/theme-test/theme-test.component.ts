import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-test',
  templateUrl: './theme-test.component.html',
  styleUrls: ['./theme-test.component.scss']
})

export class ThemeTestComponent implements OnInit {
  theme = false;

  constructor() { }

  ngOnInit() {
  }

  switchTheme() {
    this.theme = !this.theme;
  }
}
