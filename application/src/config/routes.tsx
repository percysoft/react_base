import * as React from 'react';
import AppContainer from '@/App';
import TodoApp  from '@/features/TodoApp';

const NotFound:React.SFC<{}> = ()=><div>Not found</div>;

export const Routes:Object[] = [
  {
    component: AppContainer,
    routes: [
      {
        path: '/',
        component: TodoApp,
        exact: true,
      },
      {
        path: '*',
        component: NotFound
      },
      
    ]
  },
];

