import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  searchTerm = '';

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
