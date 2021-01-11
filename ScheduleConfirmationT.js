// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/Calendar';


// ファイルの実質上の中身
class ScheduleConfirmationT extends Component {

    // イベントハンドラー
    onClickHandler = () => {

        let nextVersion = parseInt(this.state.version, 10) + 1

        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="">
                <Calendar></Calendar>
                <Button buttonname={'戻る'} linkname={"/TopScreenTeacher"} className="under_button"
                />
            </div>
        );
    }
}

// エクスポート
export default ScheduleConfirmationT;