import React from 'react';

class Settings extends React.Component {
  render() {
    return (
      <div>
        Settings - {this.props.uri}
      </div>
    );
  }
}

export default Settings;