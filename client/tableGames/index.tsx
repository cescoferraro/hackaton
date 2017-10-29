import * as React from "react";
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
 
  const tableData = [
    {
      name: 'John Smith',
      status: 'Employed',
    },
    {
      name: 'Randal White',
      status: 'Unemployed',
    },
    {
      name: 'Stephanie Sanders',
      status: 'Employed',
    },
    {
      name: 'Steve Brown',
      status: 'Employed',
    },
    {
      name: 'Joyce Whitten',
      status: 'Employed',
    },
    {
      name: 'Samuel Roberts',
      status: 'Employed',
    },
    {
      name: 'Adam Moore',
      status: 'Employed',
    },
  ];
  

export default class TableGameComponent extends React.Component {
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: true,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: "300px"
      };
    
      render() {
        return (
          <div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn
                    colSpan="2"
                    tooltip="Games"
                    style={{ textAlign: "center" }}
                  >
                    Games
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip="The Game">Game</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Company">Empresa</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
                <TableRow>
                  <TableRowColumn colSpan="2" style={{ textAlign: "center" }}>
                    Powered by RunDomic
                  </TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        );
      }
}
