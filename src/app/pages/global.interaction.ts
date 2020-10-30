import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class GlobalInteraction {
    isLoading = false;
    constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController) { }

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
            duration: 10000,
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
}
