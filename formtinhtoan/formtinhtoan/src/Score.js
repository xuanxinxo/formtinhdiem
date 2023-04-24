import React, { Component } from 'react'


class Score extends Component {
    constructor(props){
        super(props);
        this.state={
            hk1:0,
            hk2:0,
            avg:0,
            result:"",
            xl:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event)=>{
        let key = event.target.name;
        let val = event.target.value;

        this.setState({ [key]: val});
        this.setState((state) => ({
            avg: parseFloat((parseFloat(state.hk1)+ parseFloat(state.hk2))/2),

        }));
        this.setResult();
        this.setXL();
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        alert("Bạn là học sinh" + this.state.xl);
    };

    setResult = () =>{
        if (this.state.avg > 4.5) this.setState({ result:"Được lên lớp"});
        else this.setState({ result:"Chúc mừng bạn ở lại lớp"});
    };

    setXL = () => {
        if (this.state.avg <4.5) this.setState({ xl:"yếu"});
        if (this.state.avg <6.5) this.setState({ xl:"Trung  bình"});
        if (this.state.avg <8) this.setState({ xl:"Khá"});
        if (this.state.avg <9) this.setState({ xl:"Giỏi"});
        if (this.state.avg <10) this.setState({ xl:"Xuất sắc"});

    };





  render() {
    return (
      <div className="container">
        <h3 className="text-center">Kết Qủa Học Tập</h3>
        <form onSubmit={this.handleSubmit} className="was-validated">
            <div className="form-group">
                <label htmlFor="hk1"> Điểm Học Kì 1 :</label>
                <input type="number" className="form-control" id="hk1" name="hk1" max={10} min={0} defaultValue={0} required onChange={this.handleChange}></input>
                <div className="invalid-feedback">Điểm không hợp lệ</div>

            </div>
            <div className="form-group">
                <label htmlFor="hk2"> Điểm Học Kì 2 :</label>
                <input type="number" className="form-control" id="hk2" name="hk2" max={10} min={0} defaultValue={0} required onChange={this.handleChange}></input>
                <div className="invalid-feedback">Điểm không hợp lệ</div>
                
            </div>
            <div className="form-group">
                <label htmlFor="hk2">Điểm trung bình </label>
                <input type="numner" className="form-control" readOnly value={this.state.avg}></input>
            </div>

            <div className="form-group">
                <label htmlFor="hk2">Kết Qủa </label>
                <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.result}></input>
            </div>

            <div className="form-group">
                <label htmlFor="hk2">xếp loại</label>
                <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.xl}></input>
            </div>
            <button type="submit" value="submit" className="btn-btn-primary"> Xem kết quả</button>
        </form>
      </div>
    );
  }
}
export default Score;