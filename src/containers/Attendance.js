import { connect } from 'react-redux';
import { getAllData, postData } from '../actions/asyncActions';
import Attendance from '../components/Attendance';

const mapStateToProps = state => ({
   columns: state.columns.items,
   rate: state.rate.items,
   schoolboy: state.schoolboy.items,
});

const mapDispatchToProps = dispatch => ({
   getAllData: () => dispatch(getAllData()),
   postData: (url, data) => dispatch(postData(url, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);