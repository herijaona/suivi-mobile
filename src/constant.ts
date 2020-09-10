import { NgModule } from "@angular/core";
import { IPatient } from "./app/Interfaces/patient.interface";
/** 
 * 
patient : 
login : jmanagnora980
mdp : admin

praticien : 
login : tpraticien911
mdp : praticien
 * 
 * **/
@NgModule({})
export class CONSTANT {
  static ROLE_PATIENT = "ROLE_PATIENT";
  static ROLE_PRATICIEN = "ROLE_PRATICIEN";
  static MOCK_DATA_JSON = "./assets/data/constant.data.json";
  /* static mockPatient: IPatient[] = [
    {
      id: 0,
      firstName: "nom ",
      lastName: "p1",
    },
    {
      id: 0,
      firstName: "nom ",
      lastName: "p2",
    },
    {
      id: 0,
      firstName: "nom ",
      lastName: "p3",
    },
  ]; */

  static showAllValue(data) {
    let res = {};
    Object.keys(data).forEach((res) => {
      var nkey = res;
      var nvalue = data[`${res}`];
      var json = {};

      json[nkey] = nvalue;

      console.log("key:" + res + " value: " + data[`${res}`] + json);
      Object.assign(res, json);
    });
    return res;
  }

  static stringifyParse(data) {
    return JSON.parse(JSON.stringify(data));
  }
}
