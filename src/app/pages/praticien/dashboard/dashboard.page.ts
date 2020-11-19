import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  @ViewChild("barChart") barCharts: ElementRef; // access to #barchart in html
  @ViewChild("pieChart") pieChart: ElementRef; // access to #barchart in html
  @ViewChild("lineChart") lineChart: ElementRef; // access to #barchart in html
  bars: any;
  pie: any;
  line: any;
  colorArray: any;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      // console.log("DashboardPage -> barChart", this.barCharts);
      this.createBarChart();
    }, 1000);
  }

  createBarChart() {
    this.bars = new Chart(this.barCharts.nativeElement, {
      type: "bar",
      data: {
        labels: [
          "0-9",
          "10-19",
          "20-29",
          "30-39",
          "40-49",
          "50-59",
          "60-69",
          "70-79",
        ],
        datasets: [
          {
            label: "Nombre de patient",
            data: [2.5, 3.8, 5, 17, 6.9, 7.5, 5, 3],
            backgroundColor: "rgb(0, 187, 51)", // array should have same number of elements as number of dataset
            borderColor: "rgb(38, 194, 129)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    this.pie = new Chart(this.pieChart.nativeElement, {
      type: "pie",
      data: {
        labels: [
          "0-9",
          "10-19",
          "20-29",
          "30-39",
          "40-49",
          "50-59",
          "60-69",
          "70-79",
        ],
        datasets: [
          {
            label: "Nombre de patient",
            data: [2.5, 3.8, 5, 17, 6.9, 7.5, 5, 3],
            backgroundColor: [
              "rgb(52, 213, 235)",
              "rgb(235, 174, 52)",
              "rgb(235, 52, 52)",
              "rgb(235, 171, 52)",
              "rgb(113, 235, 52)",
              "rgb(143, 52, 235)",
              "rgb(52, 76, 235)",
              "rgb(235, 52, 153)",
            ],
            borderColor: "rgb(38, 194, 129)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    this.line = new Chart(this.lineChart.nativeElement, {
      type: "line",
      data: {
        labels: [
          "0-9",
          "10-19",
          "20-29",
          "30-39",
          "40-49",
          "50-59",
          "60-69",
          "70-79",
        ],
        datasets: [
          {
            label: "Nombre de patient",
            data: [2.5, 3.8, 5, 17, 6.9, 7.5, 5, 3],
            backgroundColor: "rgba(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(38, 194, 129)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
