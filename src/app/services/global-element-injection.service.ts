import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class GlobalElementInjectionService {
  constructor(private alertCtrl: AlertController) { }

  async alertAccept(
    id,
    array = [],
    keyStatus: String = "status",
    OkStatus: String = "Accepted"
  ) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Accept",
      message: "Do you really want to accept it ? ",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            // console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "OK",
          handler: () => {
            // console.log("data accepted " + id);
            this.accept(id, array, keyStatus, OkStatus);
          },
        },
      ],
    });
    await alert.present();
  }

  async alertRemove(
    id,
    array = [],
    keyStatus: String = "status",
    RefuseStatus: String = "Refused"
  ) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Refuse",
      message: "Do you really want to refuse it ? ",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            // console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "OK",
          handler: () => {
            // console.log("data refused " + id);
            this.remove(id, array, keyStatus, RefuseStatus);
          },
        },
      ],
    });
    await alert.present();
  }

  // TODO:change by id // actually it s his name
  accept(
    id,
    array = [],
    keyStatus: String = "status",
    OkStatus: String = "Accepted"
  ) {
    array.find((element) => element.id == id)[`${keyStatus}`] = OkStatus;
  }

  remove(
    id,
    array = [],
    keyStatus: String = "status",
    RefuseStatus: String = "Refused"
  ) {
    const el = (test) => test.id == id;
    array.find((element) => element.id == id)[`${keyStatus}`] = RefuseStatus;
    const index = array.findIndex(el);
    // console.log(el);
    array.slice(index);
  }
}
