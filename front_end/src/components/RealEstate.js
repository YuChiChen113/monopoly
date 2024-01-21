import React from 'react';

function RealEstate({ dataJson }) {
  // Assuming dataJson has a property named 'asset_per_stop'
  let squad_num = dataJson ? dataJson.squad_num : null;
  let stop_num = dataJson ? dataJson.stop_num : null;
  let assetPerStop = dataJson ? dataJson.asset_per_stop : [];
  let cash_per_squad = dataJson ? dataJson.cash_per_squad : [];
  let bankrupt_time_per_squad = dataJson ? dataJson.bankrupt_time_per_squad : [];
  let toll_per_stop = dataJson ? dataJson.toll_per_stop : [];

  return (
    <div>
      {squad_num}小手上現金：{cash_per_squad[squad_num+1]}
      <br/>
      {squad_num}小破產次數：{bankrupt_time_per_squad[squad_num+1]}
      <br/>
      {squad_num}小在{stop_num}關的置產數量：{assetPerStop[squad_num*stop_num+1]}
      <br/>
      {squad_num}小在{stop_num}關被收的過路費：{toll_per_stop[squad_num*stop_num+1]}
    </div>
  );
}

export default RealEstate;