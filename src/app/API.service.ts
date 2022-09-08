/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateHotel: OnCreateHotelSubscription;
  onUpdateHotel: OnUpdateHotelSubscription;
  onDeleteHotel: OnDeleteHotelSubscription;
  onCreateRoom: OnCreateRoomSubscription;
  onUpdateRoom: OnUpdateRoomSubscription;
  onDeleteRoom: OnDeleteRoomSubscription;
  onCreateDayBooked: OnCreateDayBookedSubscription;
  onUpdateDayBooked: OnUpdateDayBookedSubscription;
  onDeleteDayBooked: OnDeleteDayBookedSubscription;
  onCreatePerson: OnCreatePersonSubscription;
  onUpdatePerson: OnUpdatePersonSubscription;
  onDeletePerson: OnDeletePersonSubscription;
};

export type CreateHotelInput = {
  id?: string | null;
  name: string;
  address: string;
  image: string;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelHotelConditionInput | null> | null;
  or?: Array<ModelHotelConditionInput | null> | null;
  not?: ModelHotelConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Hotel = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: ModelRoomConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items: Array<Room | null>;
  nextToken?: string | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: Hotel | null;
  DayBooked?: ModelDayBookedConnection | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type ModelDayBookedConnection = {
  __typename: "ModelDayBookedConnection";
  items: Array<DayBooked | null>;
  nextToken?: string | null;
};

export type DayBooked = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: Room | null;
  content: string;
  Person?: Person | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type Person = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: DayBooked | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type UpdateHotelInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  image?: string | null;
};

export type DeleteHotelInput = {
  id: string;
};

export type CreateRoomInput = {
  id?: string | null;
  title: string;
  hotelRoomsId?: string | null;
};

export type ModelRoomConditionInput = {
  title?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
  hotelRoomsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateRoomInput = {
  id: string;
  title?: string | null;
  hotelRoomsId?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateDayBookedInput = {
  id?: string | null;
  in: string;
  out: string;
  content: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type ModelDayBookedConditionInput = {
  in?: ModelStringInput | null;
  out?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelDayBookedConditionInput | null> | null;
  or?: Array<ModelDayBookedConditionInput | null> | null;
  not?: ModelDayBookedConditionInput | null;
  roomDayBookedId?: ModelIDInput | null;
  dayBookedPersonId?: ModelIDInput | null;
};

export type UpdateDayBookedInput = {
  id: string;
  in?: string | null;
  out?: string | null;
  content?: string | null;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type DeleteDayBookedInput = {
  id: string;
};

export type CreatePersonInput = {
  id?: string | null;
  name: string;
  personDayBookedId?: string | null;
};

export type ModelPersonConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelPersonConditionInput | null> | null;
  or?: Array<ModelPersonConditionInput | null> | null;
  not?: ModelPersonConditionInput | null;
  personDayBookedId?: ModelIDInput | null;
};

export type UpdatePersonInput = {
  id: string;
  name?: string | null;
  personDayBookedId?: string | null;
};

export type DeletePersonInput = {
  id: string;
};

export type ModelHotelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelHotelFilterInput | null> | null;
  or?: Array<ModelHotelFilterInput | null> | null;
  not?: ModelHotelFilterInput | null;
};

export type ModelHotelConnection = {
  __typename: "ModelHotelConnection";
  items: Array<Hotel | null>;
  nextToken?: string | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
  hotelRoomsId?: ModelIDInput | null;
};

export type ModelDayBookedFilterInput = {
  id?: ModelIDInput | null;
  in?: ModelStringInput | null;
  out?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelDayBookedFilterInput | null> | null;
  or?: Array<ModelDayBookedFilterInput | null> | null;
  not?: ModelDayBookedFilterInput | null;
  roomDayBookedId?: ModelIDInput | null;
  dayBookedPersonId?: ModelIDInput | null;
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPersonFilterInput | null> | null;
  or?: Array<ModelPersonFilterInput | null> | null;
  not?: ModelPersonFilterInput | null;
  personDayBookedId?: ModelIDInput | null;
};

export type ModelPersonConnection = {
  __typename: "ModelPersonConnection";
  items: Array<Person | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionHotelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHotelFilterInput | null> | null;
  or?: Array<ModelSubscriptionHotelFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRoomFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoomFilterInput | null> | null;
};

export type ModelSubscriptionDayBookedFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  in?: ModelSubscriptionStringInput | null;
  out?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDayBookedFilterInput | null> | null;
  or?: Array<ModelSubscriptionDayBookedFilterInput | null> | null;
};

export type ModelSubscriptionPersonFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPersonFilterInput | null> | null;
  or?: Array<ModelSubscriptionPersonFilterInput | null> | null;
};

export type CreateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type CreateDayBookedMutation = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type UpdateDayBookedMutation = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type DeleteDayBookedMutation = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type CreatePersonMutation = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type UpdatePersonMutation = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type DeletePersonMutation = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type GetHotelQuery = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHotelsQuery = {
  __typename: "ModelHotelConnection";
  items: Array<{
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetDayBookedQuery = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type ListDayBookedsQuery = {
  __typename: "ModelDayBookedConnection";
  items: Array<{
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetPersonQuery = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type ListPeopleQuery = {
  __typename: "ModelPersonConnection";
  items: Array<{
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address: string;
  image: string;
  rooms?: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  title: string;
  Hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address: string;
    image: string;
    rooms?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  DayBooked?: {
    __typename: "ModelDayBookedConnection";
    items: Array<{
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  hotelRoomsId?: string | null;
};

export type OnCreateDayBookedSubscription = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type OnUpdateDayBookedSubscription = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type OnDeleteDayBookedSubscription = {
  __typename: "DayBooked";
  id: string;
  in: string;
  out: string;
  Room?: {
    __typename: "Room";
    id: string;
    title: string;
    Hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    DayBooked?: {
      __typename: "ModelDayBookedConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    hotelRoomsId?: string | null;
  } | null;
  content: string;
  Person?: {
    __typename: "Person";
    id: string;
    name: string;
    DayBooked?: {
      __typename: "DayBooked";
      id: string;
      in: string;
      out: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      roomDayBookedId?: string | null;
      dayBookedPersonId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    personDayBookedId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  roomDayBookedId?: string | null;
  dayBookedPersonId?: string | null;
};

export type OnCreatePersonSubscription = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type OnUpdatePersonSubscription = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

export type OnDeletePersonSubscription = {
  __typename: "Person";
  id: string;
  name: string;
  DayBooked?: {
    __typename: "DayBooked";
    id: string;
    in: string;
    out: string;
    Room?: {
      __typename: "Room";
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      hotelRoomsId?: string | null;
    } | null;
    content: string;
    Person?: {
      __typename: "Person";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      personDayBookedId?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    roomDayBookedId?: string | null;
    dayBookedPersonId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  personDayBookedId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHotel(
    input: CreateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<CreateHotelMutation> {
    const statement = `mutation CreateHotel($input: CreateHotelInput!, $condition: ModelHotelConditionInput) {
        createHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHotelMutation>response.data.createHotel;
  }
  async UpdateHotel(
    input: UpdateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<UpdateHotelMutation> {
    const statement = `mutation UpdateHotel($input: UpdateHotelInput!, $condition: ModelHotelConditionInput) {
        updateHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHotelMutation>response.data.updateHotel;
  }
  async DeleteHotel(
    input: DeleteHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<DeleteHotelMutation> {
    const statement = `mutation DeleteHotel($input: DeleteHotelInput!, $condition: ModelHotelConditionInput) {
        deleteHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHotelMutation>response.data.deleteHotel;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateDayBooked(
    input: CreateDayBookedInput,
    condition?: ModelDayBookedConditionInput
  ): Promise<CreateDayBookedMutation> {
    const statement = `mutation CreateDayBooked($input: CreateDayBookedInput!, $condition: ModelDayBookedConditionInput) {
        createDayBooked(input: $input, condition: $condition) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDayBookedMutation>response.data.createDayBooked;
  }
  async UpdateDayBooked(
    input: UpdateDayBookedInput,
    condition?: ModelDayBookedConditionInput
  ): Promise<UpdateDayBookedMutation> {
    const statement = `mutation UpdateDayBooked($input: UpdateDayBookedInput!, $condition: ModelDayBookedConditionInput) {
        updateDayBooked(input: $input, condition: $condition) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDayBookedMutation>response.data.updateDayBooked;
  }
  async DeleteDayBooked(
    input: DeleteDayBookedInput,
    condition?: ModelDayBookedConditionInput
  ): Promise<DeleteDayBookedMutation> {
    const statement = `mutation DeleteDayBooked($input: DeleteDayBookedInput!, $condition: ModelDayBookedConditionInput) {
        deleteDayBooked(input: $input, condition: $condition) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDayBookedMutation>response.data.deleteDayBooked;
  }
  async CreatePerson(
    input: CreatePersonInput,
    condition?: ModelPersonConditionInput
  ): Promise<CreatePersonMutation> {
    const statement = `mutation CreatePerson($input: CreatePersonInput!, $condition: ModelPersonConditionInput) {
        createPerson(input: $input, condition: $condition) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePersonMutation>response.data.createPerson;
  }
  async UpdatePerson(
    input: UpdatePersonInput,
    condition?: ModelPersonConditionInput
  ): Promise<UpdatePersonMutation> {
    const statement = `mutation UpdatePerson($input: UpdatePersonInput!, $condition: ModelPersonConditionInput) {
        updatePerson(input: $input, condition: $condition) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePersonMutation>response.data.updatePerson;
  }
  async DeletePerson(
    input: DeletePersonInput,
    condition?: ModelPersonConditionInput
  ): Promise<DeletePersonMutation> {
    const statement = `mutation DeletePerson($input: DeletePersonInput!, $condition: ModelPersonConditionInput) {
        deletePerson(input: $input, condition: $condition) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePersonMutation>response.data.deletePerson;
  }
  async GetHotel(id: string): Promise<GetHotelQuery> {
    const statement = `query GetHotel($id: ID!) {
        getHotel(id: $id) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHotelQuery>response.data.getHotel;
  }
  async ListHotels(
    filter?: ModelHotelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHotelsQuery> {
    const statement = `query ListHotels($filter: ModelHotelFilterInput, $limit: Int, $nextToken: String) {
        listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHotelsQuery>response.data.listHotels;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetDayBooked(id: string): Promise<GetDayBookedQuery> {
    const statement = `query GetDayBooked($id: ID!) {
        getDayBooked(id: $id) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDayBookedQuery>response.data.getDayBooked;
  }
  async ListDayBookeds(
    filter?: ModelDayBookedFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDayBookedsQuery> {
    const statement = `query ListDayBookeds($filter: ModelDayBookedFilterInput, $limit: Int, $nextToken: String) {
        listDayBookeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDayBookedsQuery>response.data.listDayBookeds;
  }
  async GetPerson(id: string): Promise<GetPersonQuery> {
    const statement = `query GetPerson($id: ID!) {
        getPerson(id: $id) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPersonQuery>response.data.getPerson;
  }
  async ListPeople(
    filter?: ModelPersonFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPeopleQuery> {
    const statement = `query ListPeople($filter: ModelPersonFilterInput, $limit: Int, $nextToken: String) {
        listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPeopleQuery>response.data.listPeople;
  }
  OnCreateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
  > {
    const statement = `subscription OnCreateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onCreateHotel(filter: $filter) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
    >;
  }

  OnUpdateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
  > {
    const statement = `subscription OnUpdateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onUpdateHotel(filter: $filter) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
    >;
  }

  OnDeleteHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
  > {
    const statement = `subscription OnDeleteHotel($filter: ModelSubscriptionHotelFilterInput) {
        onDeleteHotel(filter: $filter) {
          __typename
          id
          name
          address
          image
          rooms {
            __typename
            items {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
    >;
  }

  OnCreateRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  > {
    const statement = `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
        onCreateRoom(filter: $filter) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
    >;
  }

  OnUpdateRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  > {
    const statement = `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
        onUpdateRoom(filter: $filter) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
    >;
  }

  OnDeleteRoomListener(
    filter?: ModelSubscriptionRoomFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  > {
    const statement = `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
        onDeleteRoom(filter: $filter) {
          __typename
          id
          title
          Hotel {
            __typename
            id
            name
            address
            image
            rooms {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          DayBooked {
            __typename
            items {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            nextToken
          }
          createdAt
          updatedAt
          hotelRoomsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
    >;
  }

  OnCreateDayBookedListener(
    filter?: ModelSubscriptionDayBookedFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDayBooked">>
  > {
    const statement = `subscription OnCreateDayBooked($filter: ModelSubscriptionDayBookedFilterInput) {
        onCreateDayBooked(filter: $filter) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDayBooked">>
    >;
  }

  OnUpdateDayBookedListener(
    filter?: ModelSubscriptionDayBookedFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDayBooked">>
  > {
    const statement = `subscription OnUpdateDayBooked($filter: ModelSubscriptionDayBookedFilterInput) {
        onUpdateDayBooked(filter: $filter) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDayBooked">>
    >;
  }

  OnDeleteDayBookedListener(
    filter?: ModelSubscriptionDayBookedFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDayBooked">>
  > {
    const statement = `subscription OnDeleteDayBooked($filter: ModelSubscriptionDayBookedFilterInput) {
        onDeleteDayBooked(filter: $filter) {
          __typename
          id
          in
          out
          Room {
            __typename
            id
            title
            Hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            DayBooked {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            hotelRoomsId
          }
          content
          Person {
            __typename
            id
            name
            DayBooked {
              __typename
              id
              in
              out
              content
              createdAt
              updatedAt
              roomDayBookedId
              dayBookedPersonId
            }
            createdAt
            updatedAt
            personDayBookedId
          }
          createdAt
          updatedAt
          roomDayBookedId
          dayBookedPersonId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDayBooked">>
    >;
  }

  OnCreatePersonListener(
    filter?: ModelSubscriptionPersonFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePerson">>
  > {
    const statement = `subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
        onCreatePerson(filter: $filter) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePerson">>
    >;
  }

  OnUpdatePersonListener(
    filter?: ModelSubscriptionPersonFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePerson">>
  > {
    const statement = `subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
        onUpdatePerson(filter: $filter) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePerson">>
    >;
  }

  OnDeletePersonListener(
    filter?: ModelSubscriptionPersonFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePerson">>
  > {
    const statement = `subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
        onDeletePerson(filter: $filter) {
          __typename
          id
          name
          DayBooked {
            __typename
            id
            in
            out
            Room {
              __typename
              id
              title
              createdAt
              updatedAt
              hotelRoomsId
            }
            content
            Person {
              __typename
              id
              name
              createdAt
              updatedAt
              personDayBookedId
            }
            createdAt
            updatedAt
            roomDayBookedId
            dayBookedPersonId
          }
          createdAt
          updatedAt
          personDayBookedId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePerson">>
    >;
  }
}
