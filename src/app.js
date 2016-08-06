"use strict";
import ReactDom from 'react-dom';
import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class MyTextCell extends React.Component {
    render() {
        const {rowIndex, field, data} = this.props;
        return (
            <Cell height={this.props.height}
                  width={this.props.width}>
                {data[rowIndex][field]}
            </Cell>
        );
    }
}

class MyLinkCell extends React.Component {
    render() {
        const {rowIndex, field, data} = this.props;
        const link = data[rowIndex][field];
        return (
            <Cell height={this.props.height}
                  width={this.props.width}>
                <a href={link}>{link}</a>
            </Cell>
        );
    }
}

class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myTableData: [
                {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
                {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
                {name: 'Estevan', email: 'Aimee7@hotmail.com'},
                {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
                {name: 'Tressa', email: 'Yadira1@hotmail.com'}
            ]
        };
    }

    render() {
        return (
            <Table
                rowsCount={this.state.myTableData.length}
                rowHeight={20}
                headerHeight={30}
                width={500}
                height={50}
                overflowX={'hidden'}
                overflowY={'auto'}>
                <Column
                    header={<Cell>Name</Cell>}
                    cell={
                        <MyTextCell
                          data={this.state.myTableData}
                          field="name"
                        />
                    }
                    width={200}
                />
                <Column
                    header={<Cell>Email</Cell>}
                    cell={
                        <MyLinkCell
                          data={this.state.myTableData}
                          field="email"
                        />
                    }
                    width={200}
                />
            </Table>
        );
    }
}

ReactDom.render(<MyTable></MyTable>, document.getElementById('container'));