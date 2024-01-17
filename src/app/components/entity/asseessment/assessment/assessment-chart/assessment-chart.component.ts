import {Component, Input} from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-assessment-chart',
  templateUrl: './assessment-chart.component.html',
  styleUrls: ['./assessment-chart.component.scss']
})
export class AssessmentChartComponent {
  @Input() data!: object[];

  viewSize: [number, number] = [1024, 600];
  colorScheme: string = 'natural';
  showXAxis: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Feeling';
  showYAxis: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Confidence';
  showLegend: boolean = true;
  useAutoScale: boolean = true;
  useGradient: boolean = true;
  showTimeline: boolean = true;
  curve: shape.CurveFactory= shape.curveMonotoneX;

  xAxisTickFormatting(value: number): string {
    let millis = value % 1000;
    let secs = Math.floor(value / 1000) % 60;
    let mins = Math.floor(value / (60 * 1000)) % 60;

    return '' + mins + ':' + secs + '.' + millis;
  }
}
