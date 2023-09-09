import React, {useEffect} from 'react'
import Styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {clearCartMessage,removeBagItem} from '../../Features'
import {AiFillWarning} from 'react-icons/ai'
import {FiThumbsUp} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
export default function AlertModal() {
  // dispatch
  const dispatch = useDispatch()
  // get the cart alert
  const {showAlert, bagDetails, alertText, alertType} = useSelector(store=> store.bag)

  useEffect(()=> {
    if(showAlert) {
      setTimeout(()=> {
        dispatch(clearCartMessage())
      },3000)
    }
  }, [showAlert])

  return (
    <AlertModalContainer className={showAlert?"active":alertType === 'danger' ? "active danger" : ''}>
       <div className='cross' onClick={()=> dispatch(clearCartMessage())}><RxCross2/></div>
            {alertType === 'danger'?<AiFillWarning/>:<FiThumbsUp/>}
            <h4><span className='deleteSpan'>{alertType === 'danger'?'Warning':'Success'}</span>
             {alertText}
            </h4>
    </AlertModalContainer>
  )
}

const AlertModalContainer = Styled.div`
       min-width:100px;
       position:fixed;
       bottom:40px;
       box-shadow:0 3px 6px rgba(0,0,0,.4);
       z-index:1300;
       background:var(--white);
        left:20px;
        padding:1.6rem;
        border-left:7px solid var(--green);
        border-radius:4px;
        color:var(--dark-1);
        display:flex;
        align-items:center;
        gap:2rem;
        transform:scale(.8);
        visibility:hidden;
        transition:all .3s;
    &.active {
      transform:scale(1);
      visibility:visible;
    }
    &.danger {
       border-left:5px solid var(--red);
       color:var(--red);
    }
        .cross {
        position:absolute;
        right:5px;
        top:5px;
        width:3rem;
        height:3rem;
        border-radius:50%;
        display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      &:hover {
        background:var(--grey-2);

      }
      }
        svg {
          font-size:2rem;
          color:inherit;
        }
        h4 {
          font-size:1.3rem;
          font-weight:600;
          .deleteSpan {
            font-weight:400;
            display:block;
            padding-bottom:1rem;
          }
        }
`
