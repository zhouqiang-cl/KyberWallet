import React from "react";


export default class Credential extends React.Component {
  render() {
    var error = ""
    if (this.props.error && this.props.error != "") {
      error = (<div class="error">
        <i class="k-icon k-icon-error"></i>
        {this.props.error}
      </div>)
    }
    var classLabel = this.props.noLabel ?"hide":"" 
    return (
      <div>              
        <label for={this.props.passphraseID} className={classLabel}>Passphrase</label>
        <div class="input-space">                      
          <input onKeyPress={this.props.onKeyPress} name="password" id={this.props.passphraseID} type="password" placeholder="Type in your passphrase"/>          
        </div>
        {error}
      </div>
    )
  }
}
