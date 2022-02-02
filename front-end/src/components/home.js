import React from 'react';

import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return <div className='home'>
    <div className='homeintro'>
      Premium lottery system.<br/>Now Free For Everyone
    </div>
    <div className='homeintrosub'>
      Free To use Lottery system for fun event if you like this do share with others
    </div>
    <div className='homebutton'>
    <button type="button" className="btn btn-primary new-lottery-btn"><Link to="/create-lottery">New Lottery</Link></button>
    
<div className="input-group  join-lottery">
  <input type="text" className="form-control" placeholder="Lottery Code" aria-label="lottery-code" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-success " type="button">Join Lottery</button>
  </div></div>
</div>
<Outlet />
  </div>;
};

export default Home;
