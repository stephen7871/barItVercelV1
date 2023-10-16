import React from "react";
import { connect } from "react-redux";



const AuthRoute = props => {
  

  
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);