export interface IProposeRdv {
  description: String;
  patient: String;
  dateRdv: Date;
  heureRdv: Date;
  id: Number;
}

export interface IPropositionRdv {
  praticien: {
    firstName: String;
    lastName: String;
  };
  dateProposition: Date;
  descriptionProposition: String;
}
