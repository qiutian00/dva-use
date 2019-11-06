import React from "react";
import { connect } from "dva";
import CountApp from "../components/CountApp";

function HomePage() {
  return (
    <div>
      <CountApp />
    </div>
  );
}

HomePage.propTypes = {};

export default connect()(HomePage);
