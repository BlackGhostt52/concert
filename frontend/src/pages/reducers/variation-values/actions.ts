import { VariationValueReducerType } from "./reducer";

export enum VariationValuesActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type VariationValuesActions = {
  type:
    | VariationValuesActionTypes.CREATE
    | VariationValuesActionTypes.DELETE
    | VariationValuesActionTypes.LIST
    | VariationValuesActionTypes.FIND
    | VariationValuesActionTypes.UPDATE,
  payload: {
    data: VariationValueReducerType;
  };
};

export function createVariationValuesAction(data: VariationValueReducerType) {
  return {
    type: VariationValuesActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateVariationValuesAction(data: VariationValueReducerType) {
  return {
    type: VariationValuesActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findVariationValuesAction(data: VariationValueReducerType) {
  return {
    type: VariationValuesActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listVariationValuesAction(data: VariationValueReducerType) {
  return {
    type: VariationValuesActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteVariationValuesAction(data: VariationValueReducerType) {
  return {
    type: VariationValuesActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
