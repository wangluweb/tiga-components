import React, { ReactNode, type FC } from 'react';

const Clickbtn: FC<{ title: string }> = (props): ReactNode => {
  return <button onClick={() => alert(props.title)}>点我试试</button>;
};

export default Clickbtn;
