var React = require('react');


var Home= React.createClass({

    getInitialState: function () {
      return ({batchInfo:{},waveName:'',waveType:'',location:'',NumberOfParticipants:'',plannedStartDate:'',plannedEndDate:'',actualStartDate:'',actualEndDate:'',ParticipantsMovingOut:''});
     },

batchNameChange:function(e){
    this.setState({waveName: e.target.value});
},

batchTypeChange:function(e){
    this.setState({waveType: e.target.value});
},

locationChange:function(e){
    this.setState({location: e.target.value});
},

numberOfParticipantChange:function(e){
    this.setState({NumberOfParticipants: e.target.value});
},

plannedStartDateChange:function(e){
    this.setState({plannedStartDate: e.target.value});
},

plannedEndDateChange:function(e){
    this.setState({plannedEndDate: e.target.value});
},

plannedEndDateChange:function(e){
     this.setState({actualStartDate: e.target.value});
},

actualStartDateChange:function(e){
    this.setState({actualStartDate: e.target.value});
},

actualEndDateChange:function(e){
    this.setState({actualEndDate: e.target.value});
},

participantMovingOut:function(e){
    this.setState({ParticipantsMovingOut: e.target.value});
},

    saveBatch:function(e){
    e.preventDefault();
    this.state.batchInfo['waveName']=this.state.waveName;
    this.state.batchInfo['waveType']=this.state.waveType;
    this.state.batchInfo['location']=this.state.location;
    this.state.batchInfo['NumberOfParticipants']=this.state.NumberOfParticipants;
    this.state.batchInfo['plannedStartDate']=this.state.plannedStartDate;
    this.state.batchInfo['plannedEndDate']=this.state.plannedEndDate;
    this.state.batchInfo['actualStartDate']=this.state.actualStartDate;
    this.state.batchInfo['actualEndDate']=this.state.actualEndDate;
    this.state.batchInfo['ParticipantsMovingOut']=this.state.ParticipantsMovingOut;

            $.ajax({
              url:"http://localhost:8080/users",
              dataType: 'json',
              type: 'POST',
              cache:false,
              data:this.state.batchInfo,

              success: function(data) {
                         console.log('success');
                         console.log(JSON.stringify(data));
                     }
             })
    },

        render: function(){
            return (
                  <div>
                  <div id="form" className="container-fixed">
                      <form className="form-horizontal">
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="bName">Batch Name:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="bName" onChange={this.batchNameChange} placeholder="Enter Batch Name..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="bType">Batch Type:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="bType" onChange={this.batchTypeChange} placeholder="Enter Batch Type..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="loctn">Location:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="loctn" onChange={this.locationChange} placeholder="Enter  Location..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="numParticipant">Number of Participants:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="numParticipant" onChange={this.numberOfParticipantChange} placeholder="Enter Number of Participants ..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="psd">Planned Start Date:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="psd" onChange={this.plannedStartDateChange} placeholder="Enter Planned Start Date ..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="ped">Planned End Date:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="ped" onChange={this.plannedEndDateChange} placeholder="Enter Planned End Date ..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="asd">Actual Start Date:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="asd" onChange={this.actualStartDateChange} placeholder="Enter Actual Start Date ..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="aed">Actual End Date:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="aed" onChange={this.actualEndDateChange} placeholder="Enter Actual End Date ..."/>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="control-label col-sm-2" for="pmo">Participants Moving Out:</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="pmo" onChange={this.participantMovingOut} placeholder="Participants Moving Out ..."/>
                                </div>
                          </div>
                                 <button type="submit" className="btn btn-default" onClick={this.saveBatch}>Save Batch</button>
                      </form>
                  </div>
                </div>
             );
         }
});

module.exports=Home;
