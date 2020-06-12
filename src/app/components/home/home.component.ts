import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  goProduct() {
    this.router.navigate(['/products'], { queryParams: { order: 'popular' } });
  }
  goProducts() {
    this.router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });
  }
  goUser() {
    this.router.navigate(['/users'], { queryParamsHandling: 'preserve' });
  }
  goUsers() {
    this.router.navigate(['/users'], { queryParams: { filter: 'new'}, queryParamsHandling: 'merge' });
  }
}
