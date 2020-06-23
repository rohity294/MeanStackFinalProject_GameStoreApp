import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <p>
      
    </p>
  `,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() content: any;

    constructor() { }

    ngOnInit(): void {
    }
}

