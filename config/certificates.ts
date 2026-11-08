export interface Certificate {
  title: string;
  issuer: string;
  file: string;
}

const certificateFile = (name: string) =>
  `/certificates/${encodeURIComponent(name)}`;

export const certificates: Certificate[] = [
  {
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    file: certificateFile(
      "CCNA-_Introduction_to_Networks_certificate_putritajudin-mail-ugm-ac-id_dd7cbbce-5de5-40fb-bfde-2b8f9fc7bddc.pdf"
    ),
  },
  {
    title: "Exploratory Data Analysis in Python",
    issuer: "DataCamp",
    file: certificateFile("certificate Datacamp Exploratory Data Analysis in Python.pdf"),
  },
  {
    title: "Introduction to Statistics in Python",
    issuer: "DataCamp",
    file: certificateFile("certificate Datacamp Introduction to Statistics in Python.pdf"),
  },
  {
    title: "Cleaning Data in Python",
    issuer: "DataCamp",
    file: certificateFile("certificate Datacamp Cleaning Data in Python.pdf"),
  },
  {
    title: "Dimensionality Reduction in Python",
    issuer: "DataCamp",
    file: certificateFile("certificate Datacamp Dimensionality Reduction in Python.pdf"),
  },
  {
    title: "Deep Learning in Python",
    issuer: "DataCamp",
    file: certificateFile("certificate Datacamp Deep Learning in Python.pdf"),
  },
];
