/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment } from 'react'
import CommonTextArea from './CommonTextArea'
import MainModal from '../components/MainModal'

import Add from '../assets/images/add.png'
import AddContact from '../components/AddContact'
const CorporateData = ({
  onBlurText,
  identityItem,
  onChangeTextarea,
  onClickEdit,
  btnContent,
  showModal,
  closeModal,
  openModal
}) => {
  return (
    <div className="corporate-identity-info">
      {identityItem.type === '1' ? (
        <div className="edit-holder">
          <div className="edit-title org-identity-title">
            {identityItem.name}
          </div>
          <div className="edit-btn tbl-data-text">
            <MainModal
              btnTitle={btnContent}
              img={Add}
              btnClass="add-contact-btn"
              open={showModal}
              onClose={closeModal}
              onOpen={openModal}
            >
              <AddContact />
            </MainModal>
          </div>
        </div>
      ) : identityItem.type === '2' ? (
        <div className="edit-holder">
          <div className="edit-title org-identity-title">
            {identityItem.name}
          </div>
          <div onClick={onClickEdit} className="edit-btn tbl-data-text">
            <img src={require('../assets/images/edit-pen.png')} alt="pen" />
            Edit
          </div>
        </div>
      ) : (
        <div className="edit-holder">
          <div onClick={onClickEdit} className="edit-btn tbl-data-text">
            <img src={require('../assets/images/edit-pen.png')} alt="pen" />
            Edit
          </div>
        </div>
      )}

      {identityItem.type === '1' ? (
        <Fragment>
          {identityItem.content.map((input, i) => {
            return (
              <div key={i} className="contact-person-holder">
                <div className="edit-holder">
                  <div onClick={onClickEdit} className="edit-btn tbl-data-text">
                    <img
                      src={require('../assets/images/edit-pen.png')}
                      alt="pen"
                    />
                    Edit
                  </div>
                </div>
                <div className="contact-person-name">
                  <CommonTextArea
                    onBlurText={onBlurText}
                    index={i}
                    data="name"
                    row="1"
                    corporateIdentityDetails={input.name}
                    onChangeTextarea={onChangeTextarea}
                    style="corporate-textarea org-identity-detail disabled"
                  />
                  <div className="separation">|</div>

                  <CommonTextArea
                    onBlurText={onBlurText}
                    index={i}
                    data="position"
                    row="1"
                    corporateIdentityDetails={input.position}
                    onChangeTextarea={onChangeTextarea}
                    style="corporate-textarea org-identity-detail  disabled"
                  />
                </div>
                <CommonTextArea
                  onBlurText={onBlurText}
                  index={i}
                  data="email"
                  row="1"
                  corporateIdentityDetails={input.email}
                  onChangeTextarea={onChangeTextarea}
                  style="corporate-textarea content-type  disabled"
                />
                <CommonTextArea
                  onBlurText={onBlurText}
                  index={i}
                  data="number"
                  row="1"
                  corporateIdentityDetails={input.number}
                  onChangeTextarea={onChangeTextarea}
                  style="corporate-textarea content-type  disabled"
                />
              </div>
            )
          })}
        </Fragment>
      ) : identityItem.type === '2' ? (
        <Fragment>
          {identityItem.content.map((input, i) => {
            return (
              <CommonTextArea
                onBlurText={onBlurText}
                key={i}
                index={i}
                row="2"
                corporateIdentityDetails={input.content}
                onChangeTextarea={onChangeTextarea}
                label={input.name}
                style="corporate-textarea org-identity-detail  disabled"
              />
            )
          })}
        </Fragment>
      ) : (
        <Fragment>
          {identityItem.map((input, i) => {
            return (
              <CommonTextArea
                onBlurText={onBlurText}
                key={i}
                index={i}
                row="2"
                corporateIdentityDetails={input.content}
                onChangeTextarea={onChangeTextarea}
                label={input.name}
                style="corporate-textarea org-identity-detail  disabled"
              />
            )
          })}
        </Fragment>
      )}
    </div>
  )
}

export default CorporateData
