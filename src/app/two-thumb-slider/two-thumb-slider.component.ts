import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-two-thumb-slider',
  templateUrl: './two-thumb-slider.component.svg',
  styleUrls: ['./two-thumb-slider.component.css'],
})
export class TwoThumbSliderComponent {
  @ViewChild('svgElement') svgElement: ElementRef;

  private _stepValue = 1;
  @Input()
  get step() {
    return this._stepValue;
  }
  set step(value: number) {
    if (value <= 0) {
      value = 1;
    }
    this._stepValue = value;
    this.value0 = this.getDefaultValue0();
    this.value1 = this.getDefaultValue1();
  }

  private _minValue = 0;
  @Input()
  get min() {
    return this._minValue;
  }
  set min(value: number) {
    if (value > this.max) {
      value = this.max;
    }
    this._minValue = value;
    this.value0 = this.getDefaultValue0();
    this.value1 = this.getDefaultValue1();
  }

  private _maxValue = 100;
  @Input()
  get max() {
    return this._maxValue;
  }
  set max(value: number) {
    if (value < this.min) {
      value = this.min;
    }
    this._maxValue = value;
    this.value0 = this.getDefaultValue0();
    this.value1 = this.getDefaultValue1();
  }

  private _value0Value = this.getDefaultValue0();
  @Input()
  get value0() {
    return this._value0Value;
  }
  set value0(value: number) {
    if (value < this.min) {
      value = this.min;
    }
    if (value > this.max) {
      value = this.max;
    }
    if (value > this.value1) {
      value = this.value1;
    }
    this._value0Value = Math.round(value / this.step) * this.step;
    this.change.emit({ value0: this.value0, value1: this.value1 });
  }

  private _value1Value = this.getDefaultValue1();
  @Input()
  get value1() {
    return this._value1Value;
  }
  set value1(value: number) {
    if (value < this.min) {
      value = this.min;
    }
    if (value > this.max) {
      value = this.max;
    }
    if (value < this.value0) {
      value = this.value0;
    }
    this._value1Value = Math.round(value / this.step) * this.step;
    this.change.emit({ value0: this.value0, value1: this.value1 });
  }

  @Output() change = new EventEmitter<{ value0: number; value1: number }>();

  private isBarDown = false;
  private isThumb0Down = false;
  private isThumb1Down = false;
  private rect: any;
  private width: number;
  private offset: number;

  private getDefaultValue0(): number {
    return (
      Math.round(
        this.max < this.min
          ? this.min
          : this.min + (this.max - this.min) / 3 / this.step
      ) * this.step
    );
  }

  private getDefaultValue1(): number {
    return (
      Math.round(
        this.max < this.min
          ? this.max
          : this.max - (this.max - this.min) / 3 / this.step
      ) * this.step
    );
  }

  value0StepDown() {
    this.value0 -= this.step;
  }

  value0StepUp() {
    this.value0 += this.step;
  }

  value1StepDown() {
    this.value1 -= this.step;
  }

  value1StepUp() {
    this.value1 += this.step;
  }

  @HostListener('document:pointermove', ['$event'])
  private onPointerMove(e: PointerEvent) {
    if (this.isBarDown) {
      const x = e.clientX + this.offset;
      // TO-DO: update value0 and value1
    }

    if (this.isThumb0Down) {
      const x = e.clientX + this.offset;
      this.value0 = (100 * x) / this.width;
    }

    if (this.isThumb1Down) {
      const x = e.clientX + this.offset;
      this.value1 = (100 * x) / this.width;
    }
  }

  @HostListener('document:pointerup')
  private onPointerUp() {
    this.isBarDown = false;
    this.isThumb0Down = false;
    this.isThumb1Down = false;
  }

  protected barPointerDown(e: PointerEvent) {
    this.rect = this.svgElement.nativeElement.getBoundingClientRect();
    this.width = this.rect.width - 20;
    this.offset = -(this.rect.left + 10);
    this.isBarDown = true;
  }

  protected thumb0PointerDown() {
    this.rect = this.svgElement.nativeElement.getBoundingClientRect();
    this.width = this.rect.width - 20;
    this.offset = -(this.rect.left + 10);
    this.isThumb0Down = true;
  }

  protected thumb1PointerDown() {
    this.rect = this.svgElement.nativeElement.getBoundingClientRect();
    this.width = this.rect.width - 20;
    this.offset = -(this.rect.left + 10);
    this.isThumb1Down = true;
  }

  protected getBarX(): string {
    return this.getThumb0X();
  }

  protected getBarWidth(): string {
    return `calc(${this.getThumb1X()} - ${this.getThumb0X()})`;
  }

  protected getThumb0X(): string {
    return `calc(${this.value0} * calc(100% - 20px) / ${
      this.max - this.min
    } + 10px)`;
  }

  protected getThumb1X(): string {
    return `calc(${this.value1} * calc(100% - 20px) / ${
      this.max - this.min
    } + 10px)`;
  }
}
