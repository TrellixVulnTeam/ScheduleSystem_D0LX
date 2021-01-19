// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import homeworkSample from './images/homeworkSample.jpeg';

const homework = [
    {
        homweworkID: 0,
        studentID: '00',
        subject: '数学',
        range: 'p,11-15',
        image: homeworkSample
    },
    {
        homweworkID: 1,
        studentID: '00',
        subject: '英語',
        range: 'p,11-15',
        image: homeworkSample
    }
];

function imageSubmit() {
    return (
        <p>
            <input type="file" name="datafile" />
            <input type="submit" value="送信する" />
        </p>)
}

class Homeworkedit extends Component {
    render() {
        return (
            <div className="Homeworkedit">
                <header className="App-header">
                    <BootstrapTable
                        version='4'
                        data={homework}
                        tableStyle={{ backgroundColor: '#FFFFFF' }}
                    >
                        <TableHeaderColumn dataField='subject' width="20%">科目</TableHeaderColumn>
                        <TableHeaderColumn dataField='range' width="20%">範囲</TableHeaderColumn>
                        <TableHeaderColumn dataField="image" dataFormat={imageSubmit} width="50%">提出物</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='homweworkID'
                            width="10%"
                            isKey={true}>
                            宿題ID
                        </TableHeaderColumn>
                    </BootstrapTable>
                    <br></br>
                    <Button buttonname={'TOPに戻る'} linkname={"/TopScreenStudent"} className="under_button" />
                </header>
            </div>
        );
    }
}

// エクスポート
export default Homeworkedit;