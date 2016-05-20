import React from 'react';

export default class TodosListHeader extends React.Component {
  render ()  {
    return (
      <thead>
        <tr>
          <th><h3>Task</h3></th>
          <th><h3>Action</h3></th>
        </tr>
      </thead>
    );
  }
}
