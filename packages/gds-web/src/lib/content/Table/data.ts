export type TeamData = {
  teamName: string;
  stadiumName: string;
  stadiumLocation: string;
};

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

export const people: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

export const teams: TeamData[] = [
  {
    teamName: "The Arsenal Football Club",
    stadiumName: "Emirates Stadium",
    stadiumLocation: "Highbury, London, England",
  },
  {
    teamName: "Chelsea Football Club",
    stadiumName: "Stamford Bridge",
    stadiumLocation: "Fulham, London, England",
  },
  {
    teamName: "Aston Villa Football Club",
    stadiumName: "Villa Park",
    stadiumLocation: "Aston, Birmingham, England",
  },
  {
    teamName: "Sheffield United Football Club",
    stadiumName: "Bramall Lanet",
    stadiumLocation: "Sheffield, Yorkshire, England",
  },
  {
    teamName: "Tottenham Hotspur Football Club",
    stadiumName: "Tottenham Hotspur Stadium",
    stadiumLocation: "Tottenham, London, England",
  },
  {
    teamName: "Liverpool Football Club",
    stadiumName: "Anfield",
    stadiumLocation: "Anfield, Liverpool, England",
  },
];
