import { trigger, transition, style, animate, state } from "@angular/animations";

export const animation = 
    trigger('opacityAnimation', [
        state('invisible', style({opacity: 0})),
        state('visible', style({opacity: 1})),
        transition('invisible => visible', animate('1s'))
    ])
