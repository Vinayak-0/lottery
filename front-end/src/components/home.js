import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return <div className='home'>
    <div class='homeintro'>
      Premium lottery system.<br/>Now Free For Everyone
    </div>
    <div class='homeintrosub'>
      Free To use Lottery system for fun event if you like this do share with others
    </div>
    <div className='homebutton'>
    <button type="button" class="btn btn-primary new-lottery-btn"><Link to="/create-lottery">New Lottery</Link></button>
    
<div class="input-group  join-lottery">
  <input type="text" class="form-control" placeholder="Lottery Code" aria-label="lottery-code" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-success " type="button">Join Lottery</button>
  </div></div>
</div>
<Outlet />
  </div>;
};

export default Home;
