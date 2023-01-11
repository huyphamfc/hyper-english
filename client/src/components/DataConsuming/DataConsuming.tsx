import React, { ElementType } from 'react';

import { AboutItemProps, MissionItemProps, ProductItemProps, LessonItemProps } from 'models';
import { Loading } from 'components';

type DataType = {
  data: AboutItemProps[] | MissionItemProps[] | ProductItemProps[] | LessonItemProps[];
};

type DataConsumingProps<T> = {
  Comp: ElementType;
  loading: boolean;
  error: string;
  payload?: T;
};

function DataConsuming(props: DataConsumingProps<DataType>) {
  const { Comp, loading, error, payload } = props;

  let content = <p>Data not found.</p>;
  if (loading) content = <Loading large />;
  if (error) content = <p>{error}</p>;
  if (payload) {
    const data = payload.data.map(({ _id, ...itemProps }) => <Comp key={_id} {...itemProps} />);
    content = <ul>{data}</ul>;
  }

  return content;
}

export default DataConsuming;
