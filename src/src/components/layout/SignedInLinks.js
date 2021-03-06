import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';

const SignedInLinks = (props) => {

  const initials = props.profile.initials ? props.profile.initials : "...";

  return (
    <div>
      <Button color="default" component={NavLink} to='/create'>New Project</Button>
      <Button onClick={props.signOut} href="/signin">Log Out</Button>
      <Button component={NavLink} to='/'>
        {initials}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
