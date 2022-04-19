import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-custom-progress-bar',
    templateUrl: './custom-progress-bar.component.html',
    styleUrls: ['./custom-progress-bar.component.css']
})
export class CustomProgressBarComponent implements OnInit {

    @Input() bgColor: string = 'lightgray';
    @Input() barHeight: string = '5px';
    @Input() barColor: string = '#673ab7';
    @Input() barWidth: number = 0;
    @Input() strenghtNote: string = '';

    constructor() { }

    ngOnInit(): void {
    }



}
