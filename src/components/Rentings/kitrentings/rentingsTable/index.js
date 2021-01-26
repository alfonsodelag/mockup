import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  width: 300px;


  caption-side: bottom;
  empty-cell: show | hide;
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  tbody {
    vertical-align: top;
    width: 600px;
  }              
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
      background-color: lightgray;
    :hover {
      background-color: blue;
    }
  }
  thead > tr {
    background-color: black;
    text-align: center;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <colgroup>
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
    {/* <tfoot>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </tfoot> */}
  </StyledTable>
);
