import React from 'react';

export default function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h3>
        go
        <a href="/" rel="noopener noreferrer">
          /
        </a>
      </h3>
    </div>
  );
}
