import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false,
      };
   }

   componentDidCatch(err, info) {
      this.setState({ hasError: true });
   }

   render() {
      if (this.state.hasError) {
         return <h1 style={{ textAlign: "center" }}>Ooooops. There seems to be a problem with the app.</h1>;
      }
      return this.props.children;
   }
}