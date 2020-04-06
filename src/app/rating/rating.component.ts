import { Component, OnInit,forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
  }]
})

export class RatingComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  currentValue: number;

  onChange: any = ()=>{};
  onTouch: any = ()=>{};

  

  constructor() { }

  writeValue(obj: number): void {
    this.currentValue=obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectRate(item: number){
    this.currentValue = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }



}
