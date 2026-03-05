interface ContactData {
  cvUrl: string;
  email: string;
  linkedinUrl: string;
}

export interface ContactStore {
  data: ContactData;
  updateContact: (data: ContactData) => void;
}
