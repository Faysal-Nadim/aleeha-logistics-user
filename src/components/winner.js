"use client";
import React from "react";
import { getCampaign } from "@app/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * @author
 * @function Winner
 **/

let winnerRawData = [
  {
    winner: {
      userName: "Muhammad Habib Chaudhry",
      ticketNumber: "WL-000001-Y",
      nationality: "Pakistan",
    },
    title: "USD 250",
  },
  {
    winner: {
      userName: "Adelina Paghubasan San Diego",
      ticketNumber: "WL-000002-Y",
      nationality: "Philippines",
    },
    title: "USD 250",
  },
  {
    winner: {
      userName: "Kumar Thapa",
      ticketNumber: "WL-000003-Y",
      nationality: "",
    },
    title: "USD 100",
  },
];

export const Winner = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampaign());
  }, []);

  let campaign = useSelector((state) => state.campaign);
  // campaigns = campaigns?.campaign?.allCampaigns;
  // console.log(campaign?.campaigns?.allCampaigns);

  let winnersData = getNonNullWinnersData(
    campaign?.campaigns?.allCampaigns || []
  );
  // console.log(winnersData);

  winnersData.push(...winnerRawData);
  return (
    <>
      {winnersData?.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table table-xs text-xs w-full">
            <thead className="">
              <tr>
                <th></th>
                <th>Prize</th>
                <th>Winner Name</th>
                <th>Ticket Number</th>
                {/* <th>nationality</th> */}
              </tr>
            </thead>
            <tbody>
              {winnersData?.map((x, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{x?.title}</td>
                    <td>{x?.winner?.userName}</td>
                    <td>{x?.winner?.ticketNumber}</td>
                  </tr>
                );
              })}
            </tbody>
            {/* <tfoot>
                <tr>
                  <th></th>
                  <th>Campaign Name</th>
                  <th>Winner Name</th>
                  <th>Ticket Number</th>
                </tr>
              </tfoot> */}
          </table>
        </div>
      ) : (
        <div>
          <p className="text-[14px] mt-2 text-center">
            No Winners Announced Yet
          </p>
        </div>
      )}
    </>
  );
};

function getNonNullWinnersData(dataArray) {
  console.log("data array", dataArray);
  const nonNullWinners = dataArray.filter(
    (item) =>
      item.winner.nationality !== null ||
      item.winner.ticketNumber !== null ||
      item.winner.userName !== null
  );

  const result = nonNullWinners.map((item) => {
    return {
      title: item.title,
      _id: item._id,
      winner: item.winner,
    };
  });

  return result;
}
