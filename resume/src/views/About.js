import React from "react";

import mixpanel from "../helpers/mixpanel";

const About = () => {
  return (
    <div>
      <p>Placeholder for about page</p>
    </div>
  );
};

mixpanel.track("viewed about");

export default About