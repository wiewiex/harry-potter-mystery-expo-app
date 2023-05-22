import { Dispatch, SetStateAction } from 'react';

export interface IMiniFig {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}

export interface IPart {
  name: string;
  part_img_url: string;
  part_num: string;
}

export interface IModal {
  show: boolean;
  url: undefined | string;
}

export interface ISliderItem {
  item: IMiniFig;
  index: number;
  setModal: Dispatch<SetStateAction<IModal>>;
  chosenMiniFig: IMiniFig | undefined;
  setChosenMiniFig: Dispatch<SetStateAction<IMiniFig | undefined>>;
}
