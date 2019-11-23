import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import {
  ContainerBody,
  ContainerContent,
} from './styled';
import './App.css';
interface IAppProps {
 
}
const App: React.FC<any> = (props) => {
  const { route } = props;
  return (
    <div className="App">
      <ContainerBody>
        <ContainerContent>
        { renderRoutes(route.routes && route.routes) }
        </ContainerContent>
      </ContainerBody>
    </div>
  );
}

export default App;