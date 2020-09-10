export interface IConsultation {
  id: Number;
  consultationObjet: String;
  consultationStatus: String;
  consultationDate: Date;
  type: String;
  patient: String;
}

export interface IVaccination {
  id: Number;
  status: String;
  date: Date;
  patient: String;
}

export interface IUserPraticien {
  id: String;
  role: [String];
  firstName: String;
  userName: String;
  lastName: String;
  fonction: String;
  phoneProfessional: String;
}

export interface IPraticienPropRdv {
  patient: {
    firstName: String;
    lastName: String;
  };
  dateProposition: Date;
  descriptionProposition: String;
}

export interface IIntervention {
  id: Number;
  date: Date;
  patient: String;
  status: String;
  type: String;
  vaccine: String;
}
