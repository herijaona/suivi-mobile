export class CUSTOMSHOW {
  static showAllElementJSON(data: any) {
    Object.keys(data).forEach((element) => {
      console.log("   | keys :" + element + " values :" + data[`${element}`]);
    });
  }
}
