import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-magic-text',
  templateUrl: './magic-text.component.html',
  styleUrls: ['./magic-text.component.scss']
})
export class MagicTextComponent implements AfterViewInit {
  @Input() username!: string;
  @ViewChildren("magicStar") magicStars!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    // console.log("magic stars count", this.magicStars.length);
    // this.magicStars.forEach(star => console.log("star"));
    this.animateStars();
  }

  private animateStars(): void {
    let index = 0;
    const interval = 1000;
    const rand = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (starElement: HTMLElement): void => {
      starElement.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      starElement.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      starElement.style.animation = "none";
      starElement.offsetHeight;
      starElement.style.animation = "";
    }

    this.magicStars.forEach(star => {
      setTimeout(() => {
        animate(star.nativeElement);
        setInterval(() => animate(star.nativeElement), interval);
      }, index++ * (interval / 3));
    });
  }
}
