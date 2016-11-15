import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginFrom from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginFrom} title="Please Login" />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Router>
  );
};

export default RouterComponent;