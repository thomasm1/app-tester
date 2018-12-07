
import React from 'react';
import { Footer   } from 'react-materialize';

import '../css/footer.css';

export default () => {
return  ( 
<Footer copyrights="&copy; 2018 All Rights Reserved."
  moreLinks={
    <a className="links greyText textLighten3 right" href="http://www.thomasmaestas.net" >thomasmaestas.net</a>
  }
  links={
    <ul> 
      <li><a className="links greyText textLighten3" href="http://www.thomasmaestas.net/profile.html#contactme">Contact Information</a></li>
      <li></li>
    </ul>
  }
  className='footerBlue'
> 
    <hr />
    <p className="greyText textLighten3"><a className="thomasat links greyText textLighten3" href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com </a></p>
</Footer>
)};