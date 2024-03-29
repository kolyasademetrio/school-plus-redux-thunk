import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import Preloader from './Preloader'
import { useEffect } from 'react';
import { rateURL, unrateURL } from '../hooks/useAllData';


const Attendance = ({columns, rate, schoolboy, getAllData, postData}) => {

   useEffect(() => {
      getAllData();
   }, []);

   const checkboxHandler = e => {
      const data = {
         SchoolboyId: +e.target.getAttribute('data-schoolboy-id'),
         ColumnId: +e.target.getAttribute('data-column-id'),
      };

      let url = unrateURL;

      if (e.target.checked) {
         url = rateURL;
         data.Title = 'Н';
      }

      postData(url, data);
   };

   if (columns.length === 0 || rate.length === 0 || schoolboy.length === 0) {
      return <Preloader />
   }

   return (
      <div className="attendance" style={{width: '80%'}}>
         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ height: '100vh' }}>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow>
                        <TableCell className="th">№</TableCell>
                        <TableCell className="th" align="left">Ученик</TableCell>
                        {
                           !!columns.length && columns.map(({Title, Id}) => (
                              <TableCell key={Id} className="th" align="center">{Title}</TableCell>
                           ))
                        }
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {
                        !!schoolboy.length && schoolboy.map((person, index) => {
                           const lastName = person.LastName || '';
                           const firstName = person.FirstName || '';
                           const secondName = person.SecondName || '';

                           return (
                              <TableRow key={person.Id}>
                                 <TableCell align="left">{index + 1}</TableCell>
                                 <TableCell align="left">{`${lastName} ${firstName} ${secondName}`}</TableCell>
                                 {
                                    !!columns.length && columns.map(({Id}) => {
                                       const targetRate = rate.find(rt => {
                                          return rt.ColumnId === Id && rt.SchoolboyId === person.Id
                                       });

                                       return (
                                          <TableCell key={Id} align="center">
                                             {targetRate?.Title}
                                             <div className="checkbox-wrap">
                                                <label>поставте галочку якщо був відсутній</label> 
                                                <div className="checkbox-inner">
                                                   <input data-schoolboy-id={person.Id} data-column-id={Id} type="checkbox" checked={!!targetRate?.Title} onChange={checkboxHandler}  />
                                                </div>
                                             </div>
                                          </TableCell>
                                       )})
                                 }
                              </TableRow>
                           )
                        })
                     }
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>
      </div>
   );
}

export default Attendance;
