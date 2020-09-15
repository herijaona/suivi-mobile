export interface IPatient {
  id: Number;
  firstName: String;
  lastName: String;
}

export interface IRdvPatient {
  description: String;
  praticien: String;
  dateRdv: Date;
  typeRdv: Date;
  heureRdv: Date;
  id: Number;
}
