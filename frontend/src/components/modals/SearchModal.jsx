import React, {useEffect, useState} from 'react'
import Styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {offSearchModal, getSearch, clearProductAlert} from '../../Features'
import {FiSearch} from 'react-icons/fi'
import {RxCross1} from 'react-icons/rx'
export default function SearchModal() {

  const [search, setSearch] = useState('')

  // dispatch
    const {SearchModal} = useSelector(store=> store.modal)

   const navigate = useNavigate()
  const dispatch = useDispatch()
  

  // navigate to search page

  
  const handleSearch = (e)=> {
    e.preventDefault()
    if (search === '') {
      navigate('/')
      dispatch(clearProductAlert())
      dispatch(offSearchModal())
    } else {
    dispatch(getSearch(search))
    dispatch(offSearchModal())
    setSearch('')
    return navigate('/search')
    }
  }


  return (
    <SearchModalContainer className={SearchModal? 'active':''}>
      <div className='searchWrapper'>
        <form className='searchForm' onSubmit={handleSearch}>
          <input 
          type='text'
          placeholder='Search For Car Title'
          className='searchInput'
          name='search'
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          placeholder='Search for Car product'
          />
          <span className='formSpan'></span>
        </form>
        <div className='cross' onClick={()=> dispatch(offSearchModal())}><RxCross1/></div>
      </div>
    </SearchModalContainer>
  )
}

const SearchModalContainer = Styled.div`
       width:100vw;
       position:fixed;
       height:90vh;
       bottom:0;
       left:0;
       z-index:1300;
       background:#ffff;
       display:flex;
       align-items: flex-start;
       padding-top: 2rem;
       bottom:-100vh;
       transition:all .4s;
       opacity:0;
       visibility:hidden;
       &.active {
        bottom:0;
        opacity:1;
        visibility:visible;
       }
       .searchWrapper {
        width:80%;
        display:flex;
        margin:0 auto;
        align-items:center;
        justify-content:space-between;
        .searchForm {
          flex:1;
          position:relative;
          padding:1rem;
          .formSpan {
            position:absolute;
            bottom:-10px;
            height:1.3px;
            width:100%;
            left:0;
            background:var(--grey-2);
            overflow-x:hidden;
            &::after {
              position:absolute;
              left:0;
              bottom:0;
              width:100%;
              height:100%;
              content:'';
              background:var(--red);
              opacity:0;
              transition:all .8s;
              left:-100%;
              visibility:hidden;
            }
          }
          .searchInput {
    border:none;
    outline:none;
    font-size:5rem;
    color:var(--grey-2);
    width:100%;
    font-weight:900;
    background:inherit;
    font-family:inherit;
    &::placeholder {
      font-size:5rem;
      color:var(--grey-2);
      font-weight:900;
    }
    @media (max-width:760px) {
       font-size:2rem;
        &::placeholder {
      font-size:2rem;
    }
    }
    &:focus + span::after {
      left:0;
      opacity:1;
      visibility:visible;
    }
  
          }
        }
        .cross {
        width:6rem;
        height:6rem;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        &:hover {
        background:var(--grey-3);

        }
         @media (max-width:760px) {
      width:4rem;
        height:4rem;
    }

        svg {
          width:70%;
          height:70%;
          color:#333;
        }
      }
    }
`
