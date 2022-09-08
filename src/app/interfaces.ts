export interface Room {
  id?: string;
  title: string;
  daybooked: DayBooked[];
}

export interface DayBooked {
  id: string;
  in: Date;
  out: Date;
  content: string;
  person: Person;
}

export interface Person {
  id: string;
  name: string;
}
