import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from '../src/pages/Login/Login';
import {connect} from 'react-redux';
import classes from './App.css';
import * as actions from './redux/actions/index';
import Statistics from '../src/pages/Statistics/Statistics';
import TrainingPrograms from '../src/pages/TrainingPrograms/TrainingPrograms';
import AddTrainingProgram from '../src/pages/AddTrainingProgram/AddTrainingProgram';
import TrainingProgramDocuments from '../src/pages/TrainingProgramDocuments/TrainingProgramDocuments';
import Courses from '../src/pages/Courses/Courses';
import AddCourse from '../src/pages/AddCourse/AddCourse';
import CourseDocuments from '../src/pages/CourseDocuments/CourseDocuments';
import LearningOutcomes from '../src/pages/LearningOutcomes/LearningOutcomes';
import AddLearningOutcomes from '../src/pages/AddLearningOutcomes/AddLearningOutcomes';
import LearningOutcomeDocuments from '../src/pages/LearningOutcomeDocuments/LearningOutcomeDocuments';
import Institutions from '../src/pages/Institutions/Institutions';
import AddInstitutions from '../src/pages/AddInstitutions/AddInstitutions';
import Accounts from '../src/pages/Accounts/Accounts';
import AddAccount from '../src/pages/AddAccount/AddAccount';
import Majors from '../src/pages/Majors/Majors';
import Texts from '../src/pages/Texts/Texts';
import Menu from './components/Menu/Menu';

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignUp();
    }
    render() {
        let app = (!this.props.isAuthenticated) ? <Switch>
                                                    <Route path='/login-page' component={Login} />
                                                    <Redirect to='/login-page' />
                                                  </Switch>
                                                : <div className={classes.container}>
                                                    <Menu />
                                                    <Switch>
                                                      <Route path='/login-page' component={Login} />
                                                      <Route path='/statistics' component={Statistics} />
                                                      <Route path='/training-programs' exact component={TrainingPrograms} />
                                                      <Route path='/training-program/add' component={AddTrainingProgram} />
                                                      <Route path='/training-program-documents' component={TrainingProgramDocuments} />
                                                      <Route path='/courses' exact component={Courses} />
                                                      <Route path='/courses/add' component={AddCourse} />
                                                      <Route path='/course-documents' component={CourseDocuments} />
                                                      <Route path='/learning-outcomes' exact component={LearningOutcomes} />
                                                      <Route path='/learning-outcomes/add' component={AddLearningOutcomes} />
                                                      <Route path='/learning-outcome-documents' component={LearningOutcomeDocuments} />
                                                      <Route path='/institutions' exact component={Institutions} />
                                                      <Route path='/institutions/add' component={AddInstitutions} />
                                                      <Route path='/accounts' exact component={Accounts} />
                                                      <Route path='/accounts/add' component={AddAccount} />
                                                      <Route path='/majors' component={Majors} />
                                                      <Route path='/texts' component={Texts} /> 
                                                    </Switch>
                                                  </div>
        return  <div>
                  {app}
                </div>
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);