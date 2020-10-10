import React from 'react';
import '../Css/LogIn.css';
const Login =()=>{
    return(<>
    <br/>
    <br/>
    <br/>
    <form>
        <div class="form-col">
            <div class="form-group col-md-9">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
            </div>
            <div class="form-group col-md-9">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
        </div>
        <div class="form-group col-md-9">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Address"></input>
        </div>
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" placeholder="City"></input>
            </div>
            <div class="form-group col-md-3">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
            </div>
            <div class="form-group col-ms-3">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" placeholder="Zip"></input>
            </div>
        </div>
        <div class="form-group col-md-4">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
            </div>
        </div>
        <div class="form-group col-md-4">
            <button type="submit" class="btn btn-primary">submit</button>
        </div>
    </form>

    </>);
}
export default Login;