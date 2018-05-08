import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Table extends Component {
  render() {
    return (
        <table className="c-table" { ...this.props }>
            <thead className="c-table__header">
                <tr>
                    {this.props.tableHeaderCells.map(function(tableHeaderCells) {
                        return (
                            <th>{ tableHeaderCells.th }</th>
                        );
                    })}
                </tr>

            </thead>
            <tbody className="c-table__body">
                {this.props.tableRows.map(function(tableRows) {
                    return (
                        <tr class="c-table__row">
                            <td class="c-table__cell">
                                { tableRows.firstname }
                            </td>
                            <td class="c-table__cell">
                                { tableRows.lastname }
                            </td>
                            <td class="c-table__cell">
                                { tableRows.height }
                            </td>
                            <td class="c-table__cell">
                                { tableRows.weight }
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
  }
}
