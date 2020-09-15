import { Component, OnInit } from "@angular/core";
import { Config, ModalController, NavParams } from "@ionic/angular";
import { PatientService } from "src/app/services/patient.service";

@Component({
  selector: "app-rendrez-vous-filter",
  templateUrl: "./rendrez-vous-filter.component.html",
  styleUrls: ["./rendrez-vous-filter.component.scss"],
})
export class RendrezVousFilterComponent {
  ios: boolean;

  trackStatsMock: { name: string; icon: string; isChecked: boolean }[] = [
    {
      name: "Accepted",
      icon: "",
      isChecked: true,
    },
    {
      name: "Refused",
      icon: "",
      isChecked: true,
    },
    {
      name: "Pending",
      icon: "",
      isChecked: true,
    },
  ];

  trackTypeMock: { name: string; icon: string; isChecked: boolean }[] = [
    {
      name: "Intervention",
      icon: "",
      isChecked: true,
    },
    {
      name: "Consultation",
      icon: "",
      isChecked: true,
    },
    {
      name: "Vaccination",
      icon: "",
      isChecked: true,
    },
  ];

  public tracksStates: {
    name: string;
    icon: string;
    isChecked: boolean;
  }[] = [];
  public tracksTypes: { name: string; icon: string; isChecked: boolean }[] = [];

  constructor(
    private patientSrvc: PatientService,
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.ios = this.config.get("mode") === `ios`;

    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackStates = this.navParams.get("excludeTracksStates");
    console.log(
      "RendrezVousFilterComponent -> ionViewWillEnter -> excludedTracksStates",
      excludedTrackStates
    );
    const excludedTrackTypes = this.navParams.get("excludeTracksTypes");
    console.log(
      "RendrezVousFilterComponent -> ionViewWillEnter -> excludedTracksTypes",
      excludedTrackTypes
    );

    this.trackStatsMock.forEach((track) => {
      this.tracksStates.push({
        name: track.name,
        icon: track.icon,
        isChecked:
          excludedTrackStates === undefined
            ? true
            : excludedTrackStates.indexOf(track.name.toLowerCase()) === -1,
      });
    });

    this.trackTypeMock.forEach((track) => {
      this.tracksTypes.push({
        name: track.name,
        icon: track.icon,
        isChecked:
          excludedTrackTypes === undefined
            ? true
            : excludedTrackTypes.indexOf(track.name.toLowerCase()) === -1,
      });
    });
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tracksStates.forEach((track) => {
      track.isChecked = check;
    });
    this.tracksTypes.forEach((track) => {
      track.isChecked = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackStatesNames = this.tracksStates
      .filter((c) => !c.isChecked)
      .map((c) => c.name.toLowerCase());

    const excludedTrackTypesNames = this.tracksTypes
      .filter((c) => !c.isChecked)
      .map((c) => c.name.toLowerCase());
    const res = excludedTrackStatesNames.concat(excludedTrackTypesNames);
    this.dismiss({
      states: excludedTrackStatesNames,
      types: excludedTrackTypesNames,
      fuseData: res,
    });
  }

  dismiss(data?: any) {
    console.log("RendrezVousFilterComponent -> dismiss -> data", data);
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
