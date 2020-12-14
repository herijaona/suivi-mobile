import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { DashboardService } from "src/app/services/dashboard.service";
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
  dataToShow1 : {
    patient, 
    vaccination, 
    "pending activity",
    consultation
  };
  ageRangeData : {listOfLabel, listOfAge};
  piePatient : {listOfLabel, listOfValue};
  constructor(private dashboardSrvc: DashboardService) { }

  ngOnInit() {
    setTimeout(() => {
      // console.log("DashboardPage -> barChart", this.barCharts);
      this.createBarChart();
    }, 1000);

    this.getPatientNumber();
    this.getAgePatient();
    this.getPiePatient();
  }

  getPatientNumber(){
    this.dashboardSrvc.getPatientNumber().subscribe( (data : {
      patient, 
      vaccination, 
      "pending activity",
      consultation
    }) => {
      console.log("LL: DashboardPage -> getPatientNumber -> data", data);
      this.dataToShow1 = data;
    });
  }

  getAgePatient(){
    this.dashboardSrvc.getAgePatient().subscribe((data : any) => {
    console.log("LL: DashboardPage -> getAgePatient -> data", data)
      let listLabel = [] ;
      let listAge = [];
      data.forEach(element => {
        listLabel.push(element.label);
        listAge.push(element.y);
      });
      this.ageRangeData = {listOfLabel: listLabel, listOfAge: listAge};
    })
  }

  getPiePatient(){
    this.dashboardSrvc.getPatient().subscribe((data : any) => {
    console.log("LL: DashboardPage -> getPiePatient -> data", data)

      let listLabel = [] ;
      let listValue = [];

      for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
        listLabel.push(key);
        listValue.push(value);
      }
    
      this.piePatient = {listOfLabel: listLabel, listOfValue: listValue};
    })
  }

  createBarChart() {
    console.log("LL: DashboardPage -> createBarChart -> this.ageRangeData.listOfLabel", this.ageRangeData)
    console.log("LL: DashboardPage -> createBarChart -> this.ageRangeData.listOfLabel", this.ageRangeData.listOfLabel)
    console.log("LL: DashboardPage -> createBarChart -> this.ageRangeData.listOfLabel", this.ageRangeData.listOfAge)

    this.bars = new Chart(this.barCharts.nativeElement, {
      type: "bar",
      data: {
        // labels: [
        //   "0-9",
        //   "10-19",
        //   "20-29",
        //   "30-39",
        //   "40-49",
        //   "50-59",
        //   "60-69",
        //   "70-79",
        // ],
        labels: this.ageRangeData.listOfLabel,
        datasets: [
          {
            label: "Nombre de patient",
            // data: [2.5, 3.8, 5, 17, 6.9, 7.5, 5, 3],
            data: this.ageRangeData.listOfAge,
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
        // labels: [
        //   "Vaccination",
        //   "Consultation",
        //   "20-29",
        //   "30-39",
        //   "Vaccination",
        //   "50-59",
        //   "60-69",
        //   "70-79",
        // ],
        labels: this.piePatient.listOfLabel,
        datasets: [
          {
            label: "Nombre de patient",
            // data: [2.5, 3.8, 5, 17, 6.9, 7.5, 5, 3],
            data: this.piePatient.listOfValue,
            backgroundColor: [
              "rgb(113, 235, 52)",
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

    // this.line = new Chart(this.lineChart.nativeElement, {
    //   type: "line",
    //   data: {
    //     labels: [
    //       "0-9",
    //       "10-19",
    //       "20-29",
    //       "30-39",
    //       "40-49",
    //       "50-59",
    //       "60-69",
    //       "70-79",
    //     ],
    //     datasets: [
    //       {
    //         label: "Nombre de patient",
    //         data: [2.5, 3.8, 5, 17, 6.9, 7.5, 5, 3],
    //         backgroundColor: "rgba(0,0,0,0)", // array should have same number of elements as number of dataset
    //         borderColor: "rgb(38, 194, 129)", // array should have same number of elements as number of dataset
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  }
}
