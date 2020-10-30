import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataTransformerService {
  constructor() { }

  allData(list, string_date = "date"): { data: any[]; dataByDate: { date: string; groups: any }[] } {
    let dataShow: any[] = [];
    list.forEach((element) => {
      const dataToPush = Object.assign(element, { show: true });
      dataShow.push(dataToPush);
    });
    const listByDate = this.regroupDataByDate([...dataShow], string_date);
    const res = {
      data: dataShow,
      dataByDate: listByDate,
    };
    return res;
  }
  // Regrouper les données en fonction de la date
  regroupDataByDate(data, string_date) {
    const groups = data.reduce((groups, eachData) => {
      console.log("regroupDataByDate -> eachData", eachData)
      // const date = eachData.date_prise.split("T")[0];
      const date = eachData[string_date].date;
      // const date = eachData.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(eachData);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        groups: groups[date],
      };
    });
    const sortedActivities = groupArrays.slice().sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return sortedActivities;
  }

  filterItems(
    query: any,
    keysOnFilter: any = [],
    keysStatus: string = "status",
    segment: String = "all",
    dataToFilter: any = [],
    subKeyParent = null,
    subkeysOnFilter?: any,
    OkStatus: string = "Accepted"
  ) {
    const newData = [...dataToFilter];
    newData.forEach((item) => {
      item.groups.forEach((res) => {
        let goOnSecondFilter = false;
        if (segment == "all") {
          if (subKeyParent != null) {
            for (let element of subkeysOnFilter) {
              if (
                res[`${subKeyParent}`][`${element}`]
                  .toLowerCase()
                  .includes(query)
              ) {
                console.log(
                  "regroupDataByDate -> subKeyParent true ==========> ",
                  res
                );
                res.show = true;
                goOnSecondFilter = true;
                break;
              } else {
                res.show = false;
              }
            }
          }
          if (goOnSecondFilter == false) {
            for (let element of keysOnFilter) {
              if (res[`${element}`].toLowerCase().includes(query)) {
                res.show = true;
                break;
              } else {
                res.show = false;
              }
            }
          }
        } else {
          if (res[`${keysStatus}`] === OkStatus) {
            if (subKeyParent) {
              for (let element of subkeysOnFilter) {
                if (
                  res[`${subKeyParent}`][`${element}`]
                    .toLowerCase()
                    .includes(query)
                ) {
                  res.show = true;
                  goOnSecondFilter = true;
                  break;
                } else {
                  res.show = false;
                }
              }
            }
          }
          if (goOnSecondFilter == false) {
            for (let element of keysOnFilter) {
              if (res[`${element}`].toLowerCase().includes(query)) {
                res.show = true;
                break;
              } else {
                res.show = false;
              }
            }
          }
        }
      });
    });
    console.log("newData", newData);
    return newData;
  }

  hideOnexclude(
    exculed: any[] = [],
    keysOnFilter: any = [],
    segment: String = "all",
    dataToFilter: any = [],
    keysStatus: String = "status"
  ) {
    const newData = [...dataToFilter];
    newData.forEach((item) => {
      item.groups.forEach((element) => {
        if (segment == "all") {
          for (let key of keysOnFilter) {
            console.log(
              "key",
              key,
              "exculeded",
              exculed,
              "//////////////////////////",
              element[`${key}`].toLowerCase()
            );
            if (exculed.includes(element[`${key}`].toLowerCase())) {
              element.show = false;
              console.log("element.show ---------------- ", element.show);
              break;
            } else {
              element.show = true;
            }
          }
        } else {
          if (element[`${keysStatus}`] === "Accepted") {
            for (let key of keysOnFilter) {
              if (exculed.includes(element[`${key}`].toLowerCase())) {
                element.show = false;
                break;
              } else {
                element.show = true;
              }
            }
          }
        }
      });
    });
    console.log("newData", newData);
    return newData;
  }

  onlyAccepted(
    dataToFilter: any = [],
    keysStatus,
    acceptedString = "Accepted",
    segment = "all"
  ) {
    const newData = [...dataToFilter];

    if (segment === "all") {
      newData.forEach((item) => {
        item.groups.forEach((res) => {
          res.show = true;
        });
      });
      return newData;
    }
    newData.forEach((item) => {
      item.groups.forEach((res) => {
        const status = res[`${keysStatus}`];
        if (status === acceptedString) {
          res.show = true;
        } else {
          res.show = false;
        }
      });
    });
    return newData;
  }
}
