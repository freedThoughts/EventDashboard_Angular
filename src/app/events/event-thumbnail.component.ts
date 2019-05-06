import { Component, Input } from "@angular/core";

@Component({
    selector : 'event-thumbnail',
    template : `
        <div [routerLink]="['/events', eve.id]" class = "well hoverwell thumbnail">

            <h2>{{eve?.name}}</h2>
            <div>Date : {{eve?.date}} </div>
            <div [ngClass]="{green : eve?.time === '8:00 am', bold: eve?.time === '8:00 am'}" [ngSwitch]>time : {{eve?.time}}
                <span *ngSwitchCase = "'8:00 am'"> Early Start </span>
                <span *ngSwitchCase = "'10:00 am'"> Late Start </span>
                <span *ngSwitchDefault> Normal Start </span>
            </div>
            <div>Price : {{eve?.price}} </div>
            <div *ngIf = "eve?.location">
                <span> Location : {{eve?.location?.address}} </span>
                <span class = "pad-left">{{eve?.location?.city}}, {{eve?.location?.country}} </span>
            </div>
            <div *ngIf = "eve?.onlineUrl">
                Online URL : {{eve?.onlineUrl}}
            </div>

        </div>
    `,
    styles : [`
        .green {color: #003300 !important;}
        .bold {font-weight: bold;}
        .thumbnail {min-height : 210px;}
        .pad-left {margin-left : 10px;}
        .well div {colour : #bbb;}
    `] 
})

export class EventThumbnailComponent {
    @Input("event") eve : any

}