import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController,
} from "@ionic/angular";
import * as moment from "moment";
import { CalendarComponent } from "ionic2-calendar";

@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss"],
})
export class AgendaComponent implements OnInit {
  event = {
    id: "",
    title: "",
    desc: "",
    startTime: "",
    endTime: "",
    allDay: false,
  };

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle: string;
  selectedDay: Date = new Date();

  calendar = {
    mode: "month",
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.resetEvent();
  }

  addEvent() {}

  resetEvent() {
    this.event = {
      id: "",
      title: "",
      desc: "",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false,
    };
  }

  onViewTitleChanged() {}

  onEventSelected() {}

  onTimeSelected() {}
}
