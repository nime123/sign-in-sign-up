import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div className="Home">
        
<form class='sform'>
	<div class="form-group">
	  <label class='ta'>
	    First Name:	  </label>
	    <input type="text" class="form-control ta" name="name" />
  	</div> 

	<div class="form-group">
	  <label class='ta'>
	    Last Name:	  </label>
	    <input type="text" class="form-control ta" name="name" />
  	</div> 

	<div class="form-group">
	  <label class='ta'>
	    Phone Number:	  </label>
	    <input type="Number" class="form-control ta" name="name" />
  	</div> 

	<div class="form-group">
	  <label class='ta'>
	    E-mail:	  </label>
	    <input type="E-mail" class="form-control ta" name="name" />
  	</div> 

	<div class="form-group">
	  <label class='ta'>
	    Password:	  </label>
	    <input type="Password" class="form-control ta" name="name" />
  	</div> 

	<div class="form-group">
	  <label class='ta'>
	    Re-Enter Password:	  </label>
	    <input type="Password" class="form-control ta" name="name" />
  	</div> 

	<div class="form-group">
 		 <input type="submit" class='ta btn btn-primary' value="Submit" />
  	</div> 

</form>

      </div>

    );
  }
}

export default Signup;
