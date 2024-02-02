import React from 'react'

const tableexam = () => {
  return (
    <div>
        <center>
      <table className='table' style={{width:'90%'}}>
  <tr>
    <th>Exam name</th>
    <th>Fee amount</th>
    <th>Last date</th>
    <th>payment</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><input type="submit" value="paynow" className='coursesubmit ' name='paynow'/> </td>
  </tr>

</table>
</center>
    </div>
  )
}

export default tableexam
