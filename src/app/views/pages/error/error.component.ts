import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  type: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
  }

}
