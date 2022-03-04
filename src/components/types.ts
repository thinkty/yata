export enum ItemType {
  Project,
  Basic,
  Undefined,
};

export function toItemType(value: number): ItemType {
  switch (value) {
    case 0:
      return ItemType.Project;
  
    case 1:
      return ItemType.Basic;

    default:
      return ItemType.Undefined;
  }
}

export enum ItemStatus {
  New,
  Ongoing,
  Complete,
  OnHold,
  Cancelled,
  Undefined,
};

export function toItemStatus(value: number): ItemStatus {
  switch (value) {
    case 0:
      return ItemStatus.New;
  
    case 1:
      return ItemStatus.Ongoing;

    case 2:
      return ItemStatus.Complete;
  
    case 3:
      return ItemStatus.OnHold;

    case 4:
      return ItemStatus.Cancelled;

    default:
      return ItemStatus.Undefined;
  }
}

export type Item = {
  id: number;
  label: string;
  type: number;
  content: any;
  status: number;
};

export type Container = {
  label: string;
  items: Item[];
};

export type ContainerFetchResult = {
  items: Item[];
  labels: string[];
};
