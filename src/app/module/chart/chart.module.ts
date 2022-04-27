import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ChartsModule } from 'ng2-charts';
import { ChartRoutingModule } from './chart-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,

  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule
    
  ]
})
export class ChartModule { }
