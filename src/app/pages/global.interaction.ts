import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class GlobalInteraction {
    isLoading = false;
    constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) { }

    async presentToast(msg) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 1800,
            position: "top",
        });
        toast.present();
    }

    async presentLoading() {
        this.isLoading = true;
        return await this.loadingCtrl.create({
            cssClass: "my-loading-class",
            spinner: "bubbles",
            translucent: true,
            duration: 100000,
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss();
                }
            });
        });
    }

    async dismissLoading() {
        if (this.isLoading) {
            this.isLoading = false;
            return await this.loadingCtrl.dismiss();
        }
        return null;
    }

    async alertDelete(
        id,
        parent,
        msg = "Tu veux vraiment supprimé cette element ? ",
        callback = this.defaultCallback,
        _header = "Suppression",
        array = []
    ) {
        const alert = await this.alertCtrl.create({
            cssClass: "my-custom-class",
            header: _header,
            message: msg,
            buttons: [
                {
                    text: "Annuler",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: () => {
                        // console.log("Confirm Cancel: blah");
                    },
                },
                {
                    text: "OK",
                    handler: () => {
                        // console.warn("data deleted " + id);
                        // this.remove(id, array, keyStatus, RefuseStatus);
                        callback(id, parent)
                    },
                },
            ],
        });
        await alert.present();
    }

    defaultCallback(id, parent) {
        this.presentToast(`this is a default callback ${id} `);
    }

    async pageRefresher(callback) {
        this.presentLoading();
        callback((data) => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>LL: GlobalInteraction -> pageRefresher -> data", data)
            this.dismissLoading();
        });
    }
}
