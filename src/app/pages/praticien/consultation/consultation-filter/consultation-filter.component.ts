import { Component, OnInit } from "@angular/core";
import { Config, ModalController, NavParams } from "@ionic/angular";
import { PraticienService } from "src/app/services/praticien.service";

@Component({
  selector: "app-consultation-filter",
  templateUrl: "./consultation-filter.component.html",
  styleUrls: ["./consultation-filter.component.scss"],
})
export class ConsultationFilterComponent {
  ios: boolean;

  tracks: { name: string; icon: string; isChecked: boolean }[] = [];

  constructor(
    public pratitienSrvc: PraticienService, // TODO : data
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {}

  async ionViewWillEnter() {
    this.ios = this.config.get("mode") === `ios`;

    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get("excludedTracks");

    (await this.pratitienSrvc.getTypeTrackConsultation()).subscribe(
      (tracks: any[]) => {
        tracks.forEach((track) => {
          this.tracks.push({
            name: track.name,
            icon: track.icon,
            isChecked: excludedTrackNames.indexOf(track.name) === -1,
          });
        });
      }
    );
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tracks.forEach((track) => {
      track.isChecked = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks
      .filter((c) => !c.isChecked)
      .map((c) => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
