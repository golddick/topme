import React from 'react'
import './receivingOrg.scss'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { MdQueryStats, MdOutlineVolunteerActivism } from "react-icons/md";

function ReceivingOrganization() {
  return (
    <div className="ReceivingOrganization">
    <AiOutlineUsergroupAdd className="icon" />
    <div className="info">
      <div className="infoLeft">
        <span>receiving organization </span>
        <p>Kings collage, Lagos.</p>
      </div>
      <div className="infoRight">
        <div className="Rinfo">
          <MdQueryStats className="Icons" />
          <span>32 recent donations</span>
        </div>
        <div className="Rinfo">
          <MdOutlineVolunteerActivism className="Icons" />
          <span>32 recent donations</span>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ReceivingOrganization